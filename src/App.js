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
            <Route path={process.env.PUBLIC_URL + '/'} exact component={Home}/>
            <Route path={process.env.PUBLIC_URL + '/services'} component={Services}/>
            <Route path={process.env.PUBLIC_URL + '/products'} component={Products}/>
            <Route path={process.env.PUBLIC_URL + '/sign_up'} component={SignUp}/>

        </Switch>
    </Router>
    </>
  );
}

export default App;
