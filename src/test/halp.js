import React,{ useContext } from "react";
import Hellow from "./testContext";

function Halp() {
  const pain = useContext(Hellow);
  console.log(pain);
  return <div>hi</div>
}

export default Halp;