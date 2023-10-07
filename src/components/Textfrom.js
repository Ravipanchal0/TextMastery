import React, { useState } from "react";

export default function Textfrom(props) {
  const [text, setText] = useState("");
  const [msg, setMsg] = useState("");
  const [display, setDisplay] = useState("none");

  function displayOut() {
    if (text.length > 0) {
      setDisplay("block");
      setTimeout(() => {
        setDisplay("none");
      }, 2000);
    }
  }
  function handleOnChange(event) {
    setText(event.target.value);
  }

  function handleUpCase() {
    setText(text.toUpperCase());
    setMsg("Convert to UPPERCASE");
    displayOut();
  }

  function handleLwCase() {
    setText(text.toLowerCase());
    setMsg("Convert to lowecase");
    displayOut();
  }

  function titleFormate() {
    setText(
      text
        .split(/\s+/)
        .map((element) => {
          return element.charAt(0).toUpperCase() + element.substring(1).toLowerCase();
        })
        .join(" ")
    );
    setMsg("Convert to Title Formate");
    displayOut();
  }
  function sentenceFormate() {
    setText(text.charAt(0).toUpperCase() + text.substring(1).toLowerCase());
    setMsg("Convert to Sentence formate");
    displayOut();
  }
  function clearText() {
    setText("");
    setMsg("Clear text");
    displayOut();
  }

  function copyText() {
    let copyText = document.getElementById("myTextarea");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    setMsg("Copy to clipboard");
    displayOut();
  }

  function removeExtraSpaces() {
    let newText = text.replace(/\s+/g, " ");
    setText(newText);
    setMsg("Remove extra spaces");
    displayOut();
  }

  return (
    <>
      <div className="alert-box">
        <div className={`alert alert-primary d-${display}`} role="alert" style={{ height: "60px" }}>
          <strong>
            <i class="bi bi-check-circle"></i> Success !{" "}
          </strong>
          {msg}
        </div>
      </div>
      <div className="container">
        <label htmlFor="myTextarea" className="form-label h3 ">
          {props.heading}
        </label>
        <textarea
          className={`form-control bg-${props.mode} text-${props.mode === "light" ? "dark" : "light"}`}
          id="myTextarea"
          rows="10"
          value={text}
          onChange={handleOnChange}
        ></textarea>
      </div>

      <div className="container">
        <button type="button" onClick={handleUpCase} className="btn btn-outline-primary mx-1 my-3">
          UPPERCASE
        </button>
        <button type="button" onClick={handleLwCase} className="btn btn-outline-primary mx-1 my-2">
          lowercase
        </button>
        <button type="button" onClick={titleFormate} className="btn btn-outline-primary mx-1 my-2">
          Title Formate
        </button>
        <button type="button" onClick={sentenceFormate} className="btn btn-outline-primary mx-1 my-2">
          Sentence formate
        </button>
        <button type="button" onClick={clearText} className="btn btn-outline-primary mx-1 my-2">
          Clear Text
        </button>
        <button type="button" onClick={copyText} className="btn btn-outline-primary mx-1 my-2">
          Copy Text
        </button>
        <button type="button" onClick={removeExtraSpaces} className="btn btn-outline-primary mx-1 my-2">
          Remove Extra Spaces
        </button>
      </div>
      <div className="container">
        <h4>Text Analysis</h4>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          Words and{" "}
          {
            text.split("").filter((element) => {
              return element !== "\n";
            }).length
          }{" "}
          Characters
        </p>
        <p>
          {text.split(/\s+/).filter((element) => {
            return element.length !== 0;
          }).length * 0.008}{" "}
          min for reading
        </p>
        <h4>Preview</h4>
        <p>{text.length > 0 ? text : "Nothing to preview"}</p>
      </div>
    </>
  );
}
