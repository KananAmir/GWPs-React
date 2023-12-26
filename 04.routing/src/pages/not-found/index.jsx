import React from "react";
import "./index.scss";
import { useNavigate } from "react-router-dom";
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div id="oopss">
      <div id="error-text">
        <img
          src="https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg"
          alt={404}
        />
        <span>404 PAGE</span>
        <p className="p-a">
          . The page you were looking for could not be found
        </p>
        <p className="p-b">Back to home page</p>
        <button
          onClick={() => {
            // navigate(-1)
            navigate("/");
          }}
          className="back"
        >
          Back to home page
        </button>
      </div>
    </div>
  );
};

export default NotFound;
