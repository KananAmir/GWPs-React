import React from "react";
import Spinner from "react-bootstrap/Spinner";
const Loading = () => {
  return (
    <>
      <Spinner animation="border" variant="primary" />
      <Spinner animation="border" variant="secondary" />
      <Spinner animation="border" variant="success" />
    </>
  );
};

export default Loading;
