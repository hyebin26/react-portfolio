import "./app.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from "./component/nav/nav";
import Home from "./component/home/home";
import Skills from "./component/skills/skills";
import Projects from "./component/projects/projects";
import Contact from "./component/contact/contact";

function App() {
  return (
    <BrowserRouter basename="/react-portfolio">
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/skills">
          <Skills />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
