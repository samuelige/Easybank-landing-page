// import logo from './logo.svg';
import { Switch, Route } from "react-router-dom"
import './App.css';
import Header from './Header/Header';
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
