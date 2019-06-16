import React from "react";
import './App.css';
// import {HashRouter as Router, Route, Switch, Link} from "react-router-dom";
import Home from "./components/Home";
import FD from "react-fretboard-diagram";
import Demo1 from "./components/Demo1";

const App: React.FC = () => (
    <div>
        <FD.Ping />
        <Demo1 />
    </div>
);

/*
const App: React.FC = () => (
    <Router>
        <div>
            <h1>react-fretboard-diagram sample app</h1>
            <Link className="header-link" to="/">Home</Link>&nbsp;
            <Link className="header-link" to="/grid-examples">Grid Examples</Link>&nbsp;
            <Link className="header-link" to="/grid-big">Grid Big</Link>&nbsp;
            <Link className="header-link" to="/multiple-shapes">Multiple shapes</Link>&nbsp;
            <Link className="header-link" to="/examples">Examples</Link>&nbsp;
            <Link className="header-link" to="/mouse-support">Mouse</Link>&nbsp;
            <Link className="header-link" to="/fretboard-api">Fretboard API</Link>&nbsp;
            <Link className="header-link" to="/configurator">Configurator</Link>
            <div id={"container"}>
                <Switch>
                    <Route exact={true} path="/" component={Home}/>
                    <Route path="/grid-examples" component={GridExamples}/>
                    <Route path="/grid-big" component={GridBig}/>
                    <Route path="/multiple-shapes" component={MultipleShapes}/>
                    <Route path="/examples" component={Examples}/>
                    <Route path="/mouse-support" component={MouseSupport}/>
                    <Route path="/fretboard-api" component={FretboardApi}/>
                    <Route path="/configurator" component={Configurator}/>
                </Switch>
            </div>
        </div>
    </Router>
);
*/

/*
const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

export default App;
