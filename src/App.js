import Navbar from "./components/Navbar";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/pages/Home';
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import SignUp from "./components/pages/SignUp";

function App() {
  return (
    <>
    <Router>
        <Navbar/>
        <Switch>
            <Route path='aioconn.github.io/react_travel_website/' exact component={Home}/>
            <Route path='aioconn.github.io/react_travel_website/services' component={Services}/>
            <Route path='aioconn.github.io/react_travel_website/products' component={Products}/>
            <Route path='aioconn.github.io/react_travel_website/sign_up' component={SignUp}/>

        </Switch>
    </Router>
    </>
  );
}

export default App;
