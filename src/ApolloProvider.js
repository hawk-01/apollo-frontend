import React from "react";
import App from "./App";

import { createHttpLink } from "apollo-link-http";
import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "@apollo/react-hooks";

const link = createHttpLink({
  uri: "https://trwyz.sse.codesandbox.io/"
});

const client = new ApolloClient({ link, cache: new InMemoryCache() });

export default (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

