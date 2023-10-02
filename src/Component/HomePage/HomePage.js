import React from "react";
// import City from "./City/City";
// import Hotels from "./Hotels/Hotels";
// import TypeHotels from "./TypeHotels/TypeHotels";
import City from "./City/City";
import Hotels from "./Hotels/Hotels";
import TypeHotels from "./TypeHotels/TypeHotels";

const HomePage = (props) => {
  return (
    <>
      <City />
      <TypeHotels />
      <Hotels />
    </>
  );
};

export default HomePage;
