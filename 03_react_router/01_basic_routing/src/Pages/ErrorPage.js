import React from "react";
import MainNavigation from "../Components/MainNavigation";

const ErrorPage = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <h1>An error occurred</h1>
        <p>Can't find this page!</p>
      </main>
    </>
  );
};

export default ErrorPage;
