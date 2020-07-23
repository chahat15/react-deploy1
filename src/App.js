import React from 'react';
import SignUp from './components/SignUp.js';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact.js';
import Home from './components/Home.js';
import { Route, BrowserRouter } from 'react-router-dom'

function App() {

  return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About} />
          <Route path='/signup' component={SignUp} />
          <Route path='/contact' component={Contact} />
        </div>
      </BrowserRouter>
  );
}

export default App;
