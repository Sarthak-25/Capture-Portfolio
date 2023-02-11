import React from "react";

//Global Style
import GlobalStyle from "./components/GlobalStyle";
import AboutUs from "./pages/AboutUs";
import Nav from "./components/Nav";
//React router dom is used in react as we are using dynamic js and whenever a link is being accessed it refreshes the page in normal cases
//But in this case it is not so, therefore we need to wrap our app in router which can be done in index.js
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";
import MovieDetails from "./pages/MovieDetails";
//exit still doesn't work so we need to add another package , allows component to fade out when removed from the react tree
import { AnimatePresence } from "framer-motion";
//Router
import { Switch, Route , Routes} from "react-router-dom";
//install packages npm install react-router-dom framer-motion react-intersection-observer styled-components
function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Nav/>
        <AnimatePresence>
          <Routes>
            <Route path = "/" exact element = {<AboutUs/>}></Route>

            <Route path = "/work" exact element = {<OurWork/>}></Route>
            <Route path = "/work/:id" element = {<MovieDetails/>}></Route>

            <Route path = "/contact" exact element = {<ContactUs/>}></Route>
            
          </Routes>
        </AnimatePresence>
        
      
    </div>
  );
}

export default App;
