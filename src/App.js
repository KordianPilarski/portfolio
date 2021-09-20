import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import About from "./pages/about/About";
import PostIt from "./pages/postIt/PostIt";
import Home from "./pages/home/Home";

function App() {
  
  return (
    <Router>
      
      
      {/* <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/post-it">Popst It</Link>
          </li>
        </ul> */}
      <Switch>
          <Route exact path="/">
          < Home />
          </Route>
          <Route path="/post-it">
            <PostIt />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
