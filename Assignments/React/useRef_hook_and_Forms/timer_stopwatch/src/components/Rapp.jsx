import { useState } from "react";
import StopWatchOrTimer from "./StopWatchOrTimer";
import Buttons from "./Buttons/Buttons";
export default function Rapp() {
  let [comp, changeComp] = useState();
  let updateStateHandler = (returnVal) => {
    changeComp(returnVal);
  };

  return (
    <>
      <p>Hello World</p>
      {Buttons(updateStateHandler)}
      {StopWatchOrTimer(comp)}
    </>
  );
}
