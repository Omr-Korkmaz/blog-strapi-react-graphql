import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Category from "./pages/Category";
import SiteHeader from "./components/SiteHeader";

//apollo connection which is taken from official website apollo
const client = new ApolloClient({
  uri: "http://localhost:1337/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router className="App">
        <SiteHeader />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/details/:id" element={<Details />} />
          <Route exact path="/category/:id" element={<Category />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
