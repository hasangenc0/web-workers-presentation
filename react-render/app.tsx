import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import { runForMs } from "./runFor";

const App = () => {
  // runForMs(2000);
  // setTimeout(() => runForMs(3000), 0);
  // timeout is not guaranteed to run first before render
  // queueMicrotask(() => {runForMs(2000);})
  useEffect(() => {
    console.log("App mounted");
  }, []);

  return <div>Hello World</div>;
};

createRoot(document.getElementById("root")!).render(<App />);
