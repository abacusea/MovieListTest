import React from "react";
import "./Home.scss";
import Genre from '../Genre'



const Home = () => {

  return (
    <>
      <Genre name={"Drama"}  />
      <Genre name={"Crime"}  />
      <Genre name={"Thriller"}  />
      <Genre name={"Action"} />
    </>
  );
};

export default Home;
