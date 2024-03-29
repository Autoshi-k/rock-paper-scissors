import React, { useContext } from "react";
import Halp from "./halp";
import Hellow from "./testContext";


function Test() {

  // const pain = [1, 2, 3];
  const pain = useContext(Hellow);
  console.log(pain);
  return (
    <Hellow.Provider value={ pain }>
      <div>
        { console.log(pain) }
        <Halp />
      </div>
    </Hellow.Provider>);
}

export default Test;