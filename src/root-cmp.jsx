import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import routes from './routes.js'

function App() {
  return (
    <Router>
    {/* <AppHeader/> */}
      <div className="app">
        <main>
          <Routes>
          {routes.map(route => <Route key={route.path} element={route.component} path={route.path} />)}
          </Routes>
        </main>
      </div>
    </Router>

  );
}

export default App;
