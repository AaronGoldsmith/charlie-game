import React from "react";
import "./Container.css"

export const Container = ({ fluid, children }) => (
  <div className={`wrapper container${fluid ? "-fluid" : ""}`}>
    {children}
  </div>
);
