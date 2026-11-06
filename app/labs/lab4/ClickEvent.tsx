"use client";

const hello = () => {
  alert("Hello World!");
};

const bearHello = () => {
    alert("BEAR WAS HERE");
};

const goodbye = () => {
  alert("Goodbye World!");
};

export default function ClickEvent() {
  return (
    <div id="wd-click-event">
      <h2>Click Event</h2>
      <button
        type="button"
        onClick={hello}
        id="wd-onclick-hello"
        className="rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Click Hello
      </button>
      <button
        type="button"
        onClick={bearHello}
        id="wd-onclick-hello-2"
        className="rounded bg-white px-3 py-1.5 text-sm font-medium text-black"
      >
        Hello from someone...
      </button>
      <button
        type="button"
        onClick={goodbye}
        id="wd-onclick-goodbye"
        className="rounded bg-white px-3 py-1.5 text-sm font-medium text-black"
      >
        Click Goodbye
      </button>
      <hr />
    </div>
  );
}
