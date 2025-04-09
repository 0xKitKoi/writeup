import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import ProjectA from '@/Projects/MicroController/Microcontroller';
 // import ProjectB from './projects/ProjectB/ProjectB';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/projectA">Project A</Link></li>
            <li><Link to="/projectB">Project B</Link></li>
          </ul>
        </nav>

        <Switch>
          <Route path="/projectA">
            <ProjectA />
          </Route>
          <Route path="/projectA">
            <ProjectA />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
