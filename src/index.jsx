import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Module from "./module";

const root = createRoot(document.querySelector("#root"));

root.render(<Module />);
