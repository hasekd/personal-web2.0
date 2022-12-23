import React from "react";
import Header from "../components/Header/Header";
import Navbar from "../components/Header/Navbar";
import Metadata from "../components/Layout/Metadata";

const HomePage = () => {
  return (
    <>
      <Metadata
        title="Daniel Hasek | Frontend Developer & Designer"
        description="Frontend developer that loves to code and make clean, simple and beautiful design patterns"
      />
      <Header />
    </>
  );
};

export default HomePage;
