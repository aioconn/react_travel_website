import Navbar from "./components/Navbar";
import './App.css';
import { BrowserRouter as Router, HashRouter, Switch, Route } from "react-router-dom";
import Home from './components/pages/Home';
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import SignUp from "./components/pages/SignUp";

function App() {
  return (
    <>
    <HashRouter>
        <Navbar/>
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/services' component={Services}/>
            <Route path='/products' component={Products}/>
            <Route path='/sign_up' component={SignUp}/>

        </Switch>
    </HashRouter>
    </>
  );
}

export default App;
