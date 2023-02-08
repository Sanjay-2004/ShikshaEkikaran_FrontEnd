import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Inter from "./components/Forms/Inter";
import Polytech from "./components/Forms/Polytech";
import Undergrad from "./components/Forms/Undergrad";
import Postgrad from "./components/Forms/Postgrad";
import Phd from "./components/Forms/Phd";
import Home from "./components/Home";
import Navhome from "./components/Navhome";
import Register from "./components/Register";
import Schools from "./components/Forms/Schools";
import Basic from "./components/Forms/Basic";
import Govt from "./components/Govt";
import Schooling from "./components/Officials/Schooling";
import Intermediate from "./components/Officials/Intermediate";
import Polytechnic from "./components/Officials/Polytechnic";
import Undergraduation from "./components/Officials/Undergraduation";
import Postgraduation from "./components/Officials/Postgraduation";
import Mphil from "./components/Officials/Mphil";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navhome />}>
            <Route index element={<Home />} />
            <Route exact path="/body" element={<Body />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
          </Route>
          <Route path="/register" element={<Register />}>
            <Route path="/register" element={<Basic />} />
            <Route path="schools" element={<Schools />} />
            <Route path="intermediate" element={<Inter />} />
            <Route path="polytech" element={<Polytech />} />
            <Route path="undergrad" element={<Undergrad />} />
            <Route path="postgrad" element={<Postgrad />} />
            <Route path="phd" element={<Phd />} />
          </Route>
        <Route path="/official" element={<Govt/>}>
          <Route path="schools" element={<Schooling/>}/>
          <Route path="intermediate" element={<Intermediate/>}/>
          <Route path="polytechnic" element={<Polytechnic/>}/>
          <Route path="undergraduate" element={<Undergraduation/>}/>
          <Route path="postgraduate" element={<Postgraduation/>}/>
          <Route path="phd" element={<Mphil/>}/>
        </Route>
        </Routes>
      </BrowserRouter>
      {/* <Govt/> */}
    </>
  );
}

export default App;
