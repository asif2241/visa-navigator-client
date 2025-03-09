import React from "react";
import { useLoaderData } from "react-router-dom";

const MyAddedVisa = () => {
  const data = useLoaderData();
  console.log(data);
  return <div>MyAddedVisa Component</div>;
};

export default MyAddedVisa;
