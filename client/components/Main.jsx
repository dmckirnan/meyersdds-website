import React from 'react';
import { Switch, Route } from 'react-router-dom';

import App from './App.jsx';
import Doctor from './Doctor.jsx';
import Staff from './Staff.jsx';
import Services from './Services.jsx';
import Smile from './Smile.jsx';
import Payment from './Payment.jsx';
import Hours from './Hours.jsx';
import Contact from './Contact.jsx';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={App}/>
      <Route path='/doctor' component={Doctor}/>
      <Route path='/staff' component={Staff}/>
      <Route path='/services' component={Services}/>
      <Route path='/smile' component={Smile}/>
      <Route path='/payment' component={Payment}/>
      <Route path='/hours' component={Hours}/>
      <Route path='/contact' component={Contact}/>
    </Switch>
  </main>
);

export default Main;
