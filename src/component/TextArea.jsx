import React from "react";

const TextArea = () => {
  return (
    <div className="textarea">
      <h2>Add any content</h2>
      <div placeholder="Text area" contenteditable="true">
        ...
      </div>
    </div>
  );
};

export default TextArea;
