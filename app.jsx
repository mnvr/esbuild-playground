// import React from 'react'
// import * as Server from 'react-dom/server'
import { createRoot } from "react-dom/client";

const Greet = () => <h3>Hello, world</h3>;
createRoot(document.getElementById("root")).render(<Greet />);
// console.log(Server.renderToString(<Greet />))
