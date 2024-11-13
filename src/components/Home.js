import React, { useState } from "react";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import MovieModal from "./MovieDetail/MovieModal";
import { useDispatch, useSelector } from "react-redux";
import { openModal, closeModal } from "../util/appSlice";
import SelectedMovie from "./MovieDetail/SelectedMovie";

const Home = () => {
  const isModalOpen = useSelector((store) => store.app.movieModalOpen);
  const dispatch = useDispatch();

  const openmodal = () => dispatch(openModal());
  const closemodal = () => dispatch(closeModal());
  return (
    <div>
      <MainContainer />
      <SecondaryContainer />

      <MovieModal isOpen={isModalOpen} onClose={closemodal}>
        <SelectedMovie />
      </MovieModal>
    </div>
  );
};

export default Home;
