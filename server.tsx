import { Greet } from "./src/App";
import { renderToString } from "react-dom/server";
import React from "react";

const html = renderToString(
    <React.StrictMode>
        <Greet />
    </React.StrictMode>
);

console.log(html);
