import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Home Page Component
function HomePage() {
  return (
    <div>
      <h1>Welcome to Our Website</h1>
      <p>This is the home page of our website. You can explore our content and services here.</p>
    </div>
  );
}

// App Component
function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/" component={HomePage}/>
        {/* Add more routes here for other pages if needed */}
      </Switch>
    </Router>
  );
}

export default App;
