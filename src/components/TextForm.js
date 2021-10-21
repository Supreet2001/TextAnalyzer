import PropTypes from "prop-types";
import React, { useState } from "react";
export default function TextForm(props) {
  const [text, setText] = useState("Your Text goes here...");
  const upperEvent = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Your text has been converted to Uppercase.", "success");
  };
  const lowerEvent = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Your text has been converted to Lowercase.", "success");
  };
  const clearEvent = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Your text has been cleared.", "success");
  };
  const copyEvent = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Your text has been copied to clipboard.", "success");
  };
  const extraSpaceEvent = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces has been removed from your text", "success");
  };
  const textChange = (event) => {
    setText(event.target.value);
  };
  const displayCount = (event) => {
    let myText = event.target.value;

    document.getElementById("display").value = text.split(myText).length - 1;
    if (event.target.value.length === 0) {
      document.getElementById("display").value = 0;
    }
  };
  return (
    <>
      <div
        className="container"
        style={props.mode === "dark" ? { color: "white" } : { color: "black" }}
      >
        <h1 className="text-center">{props.heading}</h1>
        <br />
        <div className="mb-2">
          <textarea
            className="form-control"
            value={text}
            id="myBox"
            rows="8"
            onChange={textChange}
            style={
              props.mode === "dark"
                ? { backgroundColor: "#404040", color: "white" }
                : {
                    backgroundColor: props.areaColor(props.colorName),
                    color: "black",
                  }
            }
          ></textarea>
        </div>
        <button
          className="btn btn-primary mx-1 my-2"
          onClick={upperEvent}
          disabled={text.length === 0}
        >
          Convert to Uppercase
        </button>
        <button
          className="btn btn-primary mx-1 my-2"
          onClick={lowerEvent}
          disabled={text.length === 0}
        >
          Convert to Lowercase
        </button>
        <button
          className="btn btn-primary mx-1 my-2"
          onClick={extraSpaceEvent}
          disabled={text.length === 0}
        >
          Remove Extra Spaces
        </button>
        <button
          className="btn btn-secondary mx-1 my-2"
          onClick={copyEvent}
          disabled={text.length === 0}
        >
          Copy Text
        </button>
        <button
          className="btn btn-secondary mx-1 my-2"
          onClick={clearEvent}
          disabled={text.length === 0}
        >
          Clear Text
        </button>
        <br />
      </div>
      <br />
      <div className="container my-1 displayF">
        <div
          style={
            props.mode === "dark" ? { color: "white" } : { color: "black" }
          }
        >
          <h2>Your Text Summary</h2>
          <p>
            {text.split(/\s+/).filter((element) => element.length !== 0).length}{" "}
            words and {text.length} characters
          </p>
          <p>
            It takes an average of{" "}
            {0.008 *
              text.split(/\s+/).filter((element) => element.length !== 0)
                .length}{" "}
            minutes to read your text
          </p>
        </div>
        <div
          style={
            props.mode === "dark" ? { color: "white" } : { color: "black" }
          }
        >
          <h2>Count specific character/word</h2>
          <input
            type="text"
            name=""
            id=""
            placeholder="Search for characters"
            onChange={displayCount}
          />
          <input type="text" name="" id="display" disabled style={props.mode === "dark" ? { color: "white" } : { color: "black" }}/>
        </div>
      </div>
      <div
        className="container"
        style={props.mode === "dark" ? { color: "white" } : { color: "black" }}
      >
        <h2>Preview</h2>
        <p>
          {text.length === 0
            ? "Enter something in text-area to preview !"
            : text}
        </p>
      </div>
    </>
  );
}

TextForm.propTypes = {
  textAreaTitle: PropTypes.string,
  heading: PropTypes.string.isRequired,
};

TextForm.defaultProps = {
  textAreaTitle: "Text-Area Title",
};
