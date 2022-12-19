export default function Buttons(updateStateHandler) {
  console.log(updateStateHandler);
  return (
    <>
      <button onClick={() => updateStateHandler("timer")}>Timer</button>
      <button onClick={() => updateStateHandler("stopwatch")}>Stopwatch</button>
    </>
  );
}
