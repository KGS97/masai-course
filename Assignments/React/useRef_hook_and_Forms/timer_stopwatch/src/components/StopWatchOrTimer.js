import StopWatch from "./StopWatch";
import Timer from "./Timer";
export default function StopWatchOrTimer(state) {
  if (state === "timer") return <Timer />;
  else return <StopWatch />;
}
