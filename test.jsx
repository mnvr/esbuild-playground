import * as React from 'react'
import * as Server from 'react-dom/server'

const Greet = () => <h3>Hello, world</h3>
console.log(Server.renderToString(<Greet />))
