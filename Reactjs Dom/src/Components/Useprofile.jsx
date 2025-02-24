import React from "react";
import { useParams } from "react-router-dom";

function Useprofile() {
  const { userId } = useParams();
  return <h2>user profile={userId}</h2>;
}

export default Useprofile;
