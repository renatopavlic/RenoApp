import React from "react";
import { Ingredient, Instruction } from "../types";

const Receipt = (props: any) => {
  const {
    title,
    image,
    readyInMinutes,
    instructions,
    summary,
    analyzedInstructions,
    cuisines,
    extendedIngredients,
  } = props.receipt;
  console.log("props: ", { title, image });
  const defaultImage =
    "https://www.automobili.ba/wp-content/uploads/2020/10/reno.jpg";

  return (
    <div>
      {title && <h2>{title}</h2>}
      {image && (
        <img
          src={image ? image : defaultImage}
          alt="recipt"
          style={{ height: 200, width: 200 }}
        />
      )}
      <p>Ready in minutes: {readyInMinutes}</p>
      <p>Instructions: {instructions}</p>
      <p>Summary: {summary}</p>
      {analyzedInstructions &&
        analyzedInstructions.map((i: Instruction, index: number) => (
          <div key={index}>
            <p>step: {i.number}</p>
            <p>description: {i.description}</p>
          </div>
        ))}
      {cuisines && cuisines.map((c: string) => <p>{c}</p>)}
      {extendedIngredients &&
        extendedIngredients.map((i: Ingredient, index: number) => (
          <div key={index}>
            <p>name: {i.name}</p>
            <p>amount: {i.amount}</p>
            <p>measure: {i.measure}</p>
            <img src={i.image || ""} alt="ingredient" />
          </div>
        ))}
    </div>
  );
};

export default Receipt;
