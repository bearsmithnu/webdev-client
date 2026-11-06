export default function PassingFunctions({
  message,
  theFunction,
  secondFunc,
  theOtherFunction,
}: {
  message: string;
  theFunction: (message: string) => void;
  secondFunc: () => void;
  theOtherFunction: () => void;
}) {
  return (
    <div id="wd-passing-functions">
      <h2>Passing Functions</h2>
      <button
        type="button"
        onClick={() => theFunction(`From parent: ${message}`)}
        id="wd-pass-functions-click"
        className="me-2 rounded bg-green-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Invoke the Function
      </button>
      <button
        type="button"
        onClick={secondFunc}
        id="wd-pass-functions-click-2"
        className="me-2 rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        What&apos;s my name?
      </button>

      <button
        type="button"
        onClick={theOtherFunction}
        id="wd-pass-functions-other-click"
        className="me-2 rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Invoke without parameters
      </button>
      <hr />
    </div>
  );
}
