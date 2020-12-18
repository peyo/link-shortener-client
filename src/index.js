import React from "react";
import { render } from "react-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import "./styles.css";

import App from "./components/App";

// Pass your endpoint to uri
const client = new ApolloClient({
  // Need to edit
  uri: "https://link-shortener-server.herokuapp.com",
  cache: new InMemoryCache()
});

function Index() {
  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </BrowserRouter>
  );
}

render(<Index />, document.getElementById("root"));
