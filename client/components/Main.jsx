import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home.jsx';
import Doctor from './routes/Doctor.jsx';
import Staff from './routes/Staff.jsx';
import Services from './routes/Services.jsx';
import Contact from './routes/Contact.jsx';

const Main = () => (
  <main className="main">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/staff" component={Staff} />
      <Route path="/services" component={Services} />
      <Route path="/contact" component={Contact} />
      <Route path="/doctor" component={Doctor} />
    </Switch>
  </main>
);

export default Main;
