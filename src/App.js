import "./styles.css";
import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { introReducer } from "./reducer/introReducer";

export default function App() {
  // Execute reducer example when component mounts
  React.useEffect(() => {
    // Run the example code that shows reducer functionality
    introReducer.execute();
  }, []);

  // Render simple UI showing where to find results
  return (
    <div className="App">
      <h1>Intro Reducer Example</h1>
      <p>Check the console for reducer output</p>
    </div>
  );
}
