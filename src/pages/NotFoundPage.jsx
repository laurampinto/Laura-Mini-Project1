import React from "react";
import notFoundImage from "../assets/not-found.png";

export const NotFoundPage = () => {
  return (
    <div>
      <h1>Page Not Found</h1>
      <br />
      <br />
      <img src={notFoundImage} alt="Not Found" style={{ width: "50%" }}></img>
      <br />
      <br />
      <br />
    </div>
  );
};
