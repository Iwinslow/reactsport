import React from "react";
import ReactDOM from "react-dom";
import App from "./App"
import {Provider} from "react-redux"
import {BrowserRouter} from 'react-router-dom'
import store from "./state/store"
import { ChakraProvider } from '@chakra-ui/react'
// import * as serviceWorker from "./serviceWorker"


ReactDOM.render(<ChakraProvider><BrowserRouter><App/></BrowserRouter></ChakraProvider>, document.getElementById("root"))