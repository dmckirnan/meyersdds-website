import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home.jsx';
// import Doctor from '../components/Doctor.jsx';
// import Staff from '../components/Staff.jsx';
// import Services from '../components/Services.jsx';
// import Smile from '../components/Smile.jsx';
// import Payment from '../components/Payment.jsx';
// import Hours from '../components//Hours.jsx';
// import Contact from '../components/Contact.jsx';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </main>
);

export default Main;

// <Route path="/doctor" component={Doctor} />
// <Route path="/staff" component={Staff} />
// <Route path="/services" component={Services} />
// <Route path="/smile" component={Smile} />
// <Route path="/payment" component={Payment} />
// <Route path="/hours" component={Hours} />
// <Route path="/contact" component={Contact} />
