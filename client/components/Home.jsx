import React from 'react';
import Header from './Header.jsx';
import DocContent from './DocContent.jsx';
import ServicesContent from './ServicesContent.jsx';
import ContactContent from './ContactContent.jsx';

const Home = () =>
  (
    <div id="home-container">
      <Header />
      <DocContent />
      <ServicesContent />
      <ContactContent />
    </div>
  );

export default Home;
