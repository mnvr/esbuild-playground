import { Greet } from "./App";
import { createRoot, hydrateRoot } from "react-dom/client";
import React from "react";

hydrateRoot(
    document.getElementById("root"),
    <React.StrictMode>
        <Greet />
    </React.StrictMode>
);
