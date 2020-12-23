import { Switch, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/navbar";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Projects from "./components/project/Projects";
import Services from "./components/service/Services";

import "./app.scss";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/services" component={Services} />

        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
