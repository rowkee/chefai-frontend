import React from "react";
import { marked } from "marked";

const IngredientsList = ({ ingredients }) => {
  const markdownContent = ingredients || "";
  const htmlContent = marked(markdownContent);

  return (
    <>
      {/* Render the HTML content safely */}
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </>
  );
};

export default IngredientsList;
