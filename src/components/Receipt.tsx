import React from "react";

const Receipt = (props: any) => {
  const { title, image } = props.receipt;
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
    </div>
  );
};

export default Receipt;
