export const validationPasswordEmail = (pass, email) => {
  let emailValidate =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      email
    );
  let passValidate = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    pass
  );

  if (!emailValidate) return "Invalid Email!";
  if (!passValidate) return "Invalid Password";
};
