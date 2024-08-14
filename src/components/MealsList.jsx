import React from "react";
import { marked } from "marked";

const Meals = ({ meals }) => {
  const markdownContent = meals || "";
  const htmlContent = marked(markdownContent);

  return (
    <>
      {/* Render the HTML content safely */}
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </>
  );
};

export default Meals;
