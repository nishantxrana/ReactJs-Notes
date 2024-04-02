import React from "react";
import { useParams } from "react-router-dom";
function User() {
  let { id } = useParams();
  return (
    <>
      <h1 className=" bg-violet-400 text-center text-3xl">User : {id} </h1>
    </>
  );
}

export default User;
