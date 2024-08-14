import React, { useState } from "react";
import MealsList from "./MealsList";
import IngredientsList from "./IngredientsList";

const backendUrl = process.env.REACT_APP_BACKEND_URL;

const Form = () => {
  const [formData, setFormData] = useState("Tell us about yourself.....Rick");
  const [ingredientsData, setIngredientsData] = useState(
    "Your ingredients will appear here."
  );

  const handleChange = (event) => {
    const message = event.target.value;
    setFormData(message);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await fetch(`${backendUrl}/meals`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ input: formData }),
      });
      const data = await res.json();
      setIngredientsData(data);
    } catch (error) {
      console.log("Fetch error:", error);
    }
  };

  return (
    <>
      <h1>Hello</h1>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label>
            <textarea
              type="text"
              value={formData}
              onChange={handleChange}
            ></textarea>
          </label>
          <br />
          <input type="submit" value="Submit"></input>
        </form>
        <div>
          <MealsList meals={ingredientsData.meals} />
        </div>
        <div>
          <IngredientsList ingredients={ingredientsData.ingredients} />
        </div>
      </div>
    </>
  );

  // create function that calls the backend, with req.body as the text value
  // same as above, but for the ingredients
};

export default Form;
