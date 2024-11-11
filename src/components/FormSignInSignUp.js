import React, { useState } from "react";
import { ReactComponent as EyeOff } from "../assets/eyeoff.svg";
import { ReactComponent as EyeOn } from "../assets/eyeon.svg";
import { ReactComponent as Xcricle } from "../assets/Remove.svg";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../util/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../util/userSlice";
import { langauges } from "../util/LagaugeConstants";

const signUpValidationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/\d/, "Password must contain at least one number")
    .matches(
      /[@$!%*?&]/,
      "Password must contain at least one special character"
    )
    .required("Password is required"),
});

const signInValidationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/\d/, "Password must contain at least one number")
    .matches(
      /[@$!%*?&]/,
      "Password must contain at least one special character"
    )
    .required("Password is required"),
});

const FormSignInSignUp = () => {
  const [SignIN, setSignIN] = useState(true);
  const [ErrorMessge, setErrorMessage] = useState("");
  const [texthide, setTextHide] = useState(false);
  const [FieldType, setFieldType] = useState("password");
  const [Eyeoff, setEyeOff] = useState(true);
  const appLang = useSelector((store) => store.app.lang);
  const dispatch = useDispatch();

  const initialValues = SignIN
    ? { email: "", password: "" }
    : { name: "null", email: "", password: "" };

  const validationSchema = SignIN
    ? signInValidationSchema
    : signUpValidationSchema;

  const formikform = useFormik({
    initialValues,
    validationSchema,

    onSubmit: async (values) => {
      try {
        const submissionValues = { ...values };
        if (SignIN) {
          delete submissionValues.name;
          const resp = await signInWithEmailAndPassword(
            auth,
            values.email,
            values.password
          );
        } else {
          // Sign - Up
          const response = await createUserWithEmailAndPassword(
            auth,
            values.email,
            values.password
          );

          updateProfile(auth.currentUser, {
            displayName: values.name,
          });
          const { uid, email, displayName } = auth.currentUser;
          dispatch(
            addUser({ uid: uid, email: email, displayName: displayName })
          );
        }
      } catch ({ message, code }) {
        setErrorMessage(message + "-" + code);
        setTimeout(() => {
          setErrorMessage(null);
        }, 5000);
      }
    },
  });

  const toggerEyePasswor = () => {
    if (FieldType === "password") {
      setEyeOff(true);
      setFieldType("text");
    } else {
      setEyeOff(false);
      setFieldType("password");
    }
  };

  return (
    <form
      onSubmit={formikform.handleSubmit}
      className="w-full h-auto py-5 px-4 sm:px-14 md:14 "
    >
      <h1 className="text-white py-2 font-bold text-[20px] md:text-[24px]">
        {SignIN ? "SIGN IN" : "SIGN UP"}
      </h1>
      <p className="text-red-500 m-0">{ErrorMessge}</p>

      {!SignIN && (
        <>
          <div className="relative w-full bg-gray-600 ">
            <input
              type="text"
              id="floating_outlined"
              name="name"
              onChange={formikform.handleChange}
              value={formikform.values.name}
              onBlur={formikform.handleBlur}
              className="block px-2 pb-4 pt-4 w-full text-sm text-white bg-transparent rounded-md border-[1px] border-neutral-400  appearance-none  border-neutral-400 focus:border-[2px] focus:border-white  focus:outline-none focus:ring-0  peer"
              placeholder=" "
            />
            <label
              for="floating_outlined"
              className="absolute text-sm text-white duration-300 transform -translate-y-1 scale-75 top-2 z-10 origin-[0] dark:bg-neutral-950 px-2 peer-focus:px-3 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-50 peer-focus:-translate-y-2 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
              {langauges[appLang].name_placeholder}
            </label>
          </div>
          {formikform.errors.name && (
            <div className="text-red-500">{formikform.errors.name}</div>
          )}
        </>
      )}

      <div
        className={`relative w-full  bg-gray-600 ${
          formikform.errors.email ? "my-1" : "my-8"
        }`}
      >
        <input
          type="email"
          name="email"
          id="floating_outlined"
          onChange={formikform.handleChange}
          value={formikform.values.email}
          onBlur={formikform.handleBlur}
          className="block px-2 pb-4 pt-4 w-full text-sm text-white bg-transparent rounded-md border-[1px] border-neutral-400  appearance-none  border-neutral-400 focus:border-[2px] focus:border-white  focus:outline-none focus:ring-0  peer"
          placeholder=" "
        />
        <label
          for="floating_outlined"
          className="absolute text-sm text-white duration-300 transform -translate-y-1 scale-75 top-2 z-10 origin-[0] dark:bg-neutral-950 px-2 peer-focus:px-3 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-50 peer-focus:-translate-y-2 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
        >
          {langauges[appLang].email_placeholder}
        </label>
      </div>
      {formikform.errors.email && (
        <div className="text-red-500">{formikform.errors.email}</div>
      )}
      <div
        className={`relative w-full  bg-gray-600 ${
          formikform.errors.password ? "my-1" : "my-8"
        }`}
      >
        <input
          type={FieldType}
          id="floating_outlined"
          name="password"
          onChange={formikform.handleChange}
          value={formikform.values.password}
          onBlur={formikform.handleBlur}
          className="block px-2 pb-4 pt-4 w-full text-sm text-white bg-transparent rounded-md border-[1px] appearance-noneborder-neutral-400  appearance-none  border-neutral-400 focus:border-[2px] focus:border-white focus:outline-none focus:ring-0  peer"
          placeholder=" "
        />

        <span
          onClick={toggerEyePasswor}
          className="absolute  text-white translate-x-72 -translate-y-9 cursor-pointer p-[2px] hover:bg-neutral-500 rounded-full"
        >
          {Eyeoff ? (
            <EyeOn className="h-5 w-5" />
          ) : (
            <EyeOff className="h-5 w-5" />
          )}
        </span>
        <label
          for="floating_outlined"
          className="absolute text-sm text-white duration-300 transform -translate-y-1 scale-75 top-2 z-10 origin-[0] dark:bg-neutral-950 px-2 peer-focus:px-3 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-50 peer-focus:-translate-y-2 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
        >
          {langauges[appLang].password_placeholder}
        </label>
      </div>
      {formikform.errors.password && (
        <div className="text-red-500">{formikform.errors.password}</div>
      )}

      <button
        className="w-full px-3 py-2 text-white rounded-md border-none bg-red-700 opacity-100"
        type="submit"
      >
        {SignIN
          ? langauges[appLang].signinbutton
          : langauges[appLang].signupbutton}
      </button>
      <div className="flex w-full justify-center mx-0 my-2">
        <p className="text-white text-center font-semibold text-sm">
          {langauges[appLang].or}
        </p>
      </div>
      <button className="w-full px-3 py-2 text-white text-md rounded-md border-none  bg-[rgba(121,119,119,0.7)]">
        {langauges[appLang].use_a_sign_code}
      </button>
      {SignIN && (
        <div className="flex w-full justify-center my-1">
          <a className="text-white text-center font-bold text-md opacity-100 ">
            {langauges[appLang].forgot_password}?
          </a>
        </div>
      )}
      <div className="w-full my-2 mx-0 flex justify-start">
        <input type="checkbox" className="text-md mx-1 bg-transparent" />{" "}
        <label className="text-white text-md mx-2 ">
          {langauges[appLang].remember_me}
        </label>
      </div>
      <span className="text-md text-neutral-300">
        {langauges[appLang].new_to_netflix}?{" "}
        <span
          className="text-white border-b cursor-pointer"
          onClick={() => {
            setSignIN(!SignIN);
          }}
        >
          {SignIN
            ? langauges[appLang].signinbutton
            : langauges[appLang].signupbutton}
        </span>
      </span>
      <p className="text-neutral-400 text-sm my-2">
        This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
        {!texthide && (
          <span
            className="text-blue-400 cursor-pointer"
            onClick={() => setTextHide(true)}
          >
            Learn more
          </span>
        )}
      </p>
      {texthide && (
        <p className="text-neutral-400 text-sm">
          The information collected by Google reCAPTCHA is subject to the Google
          Privacy Policy and Terms of Service, and is used for providing,
          maintaining, and improving the reCAPTCHA service and for general
          security purposes (it is not used for personalised advertising by
          Google).
        </p>
      )}
    </form>
  );
};

export default FormSignInSignUp;
