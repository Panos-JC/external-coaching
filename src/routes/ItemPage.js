import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import withWidth from "../withWidth";

function ItemPage({ width }) {
  return (
    <div>
      <h1>Page one</h1>
      <p>Current width: {width}</p>
      {width < 500 ? "Mobile" : "Desktop"}
    </div>
  );
}

export default withWidth(ItemPage);
