import { ApolloClient, InMemoryCache } from "@apollo/client";

const endpoint = "http://localhost:8080/graphql";
const client = new ApolloClient({
  uri: endpoint,
  cache: new InMemoryCache(),
});

export default client;
