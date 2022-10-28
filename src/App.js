import React, { useState } from "react";
import "./App.scss";

function App() {
  const [theme, setTheme] = useState("dark");

  const handleSelectTheme = (theme) => {
    setTheme(theme);
  };

  return (
    <>
      <button
        className=""
        onClick={() => {
          handleSelectTheme("dark");
        }}
      >
        Dark
      </button>
      <button
        className=""
        onClick={() => {
          handleSelectTheme("light");
        }}
      >
        Light
      </button>
      <button
        className=""
        onClick={() => {
          handleSelectTheme("contrast");
        }}
      >
        Contrast
      </button>
      <div className={"theme-" + theme}>
        <input type="text" className="primary" placeholder="primary"></input>
        <input
          type="text"
          className="secondary"
          placeholder="secondary"
        ></input>
        <input type="checkbox" className="primary"></input> 
        <label for="html" className="primary">
          checkbox
        </label>
        <br />
        <input type="radio" className="secondary"></input> {" "}
        <label for="html" className="secondary">
          Radio
        </label>
        <br />
        <h2 className="primary">Heading tag primary</h2>
        <h2 className="secondary">Heading tag secondary</h2>
        <table className="tbl primary">
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Contact</th>
          </tr>
          <tr>
            <td>1</td>
            <td>sonali</td>
            <td>09776548</td>
          </tr>
        </table>
      </div>
    </>
  );
}
export default App;
