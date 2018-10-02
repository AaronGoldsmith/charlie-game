import React from "react";

export const Row = ({ fluid, children }) => (
  <div className={`py-3 row${fluid ? "-fluid" : ""}`}>
    {children}
  </div>
);
