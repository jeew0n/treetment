import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>
        //Home Page
        <Route exact path="/">
          <h1>Home page</h1>
            <div className="App">
              <header className="App-header">
              <p>
              Test writing - Jeewon
              </p>
              </header>
            </div>
        </Route>

        //Patient Page
        <Route path="/about">
          <h1>About page</h1>
        </Route>

        
        <Route path="/contact">
          <h1>Contact page</h1>
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
