import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/DocContent.scss';

const DocContent = () => (
  <div className="doc-content-container">
    <div className="doc-content">
      <div className="doc-image">
        <img
          src="http://fullertonsmiles.net/images/picDoc_21.jpg"
          alt="Dr.Meyers"
        />
      </div>
      <div className="doc-description">
        <h2>Steven A. Myers DDS, FAGD</h2>
        <p>
          Steven A. Myers DDS specializes in beautifying smiles and helping you
          improve your overall appearance. Our experienced and friendly staff
          takes great pride in keeping your smile beautiful. Our promise to you
          is that the crowns, bridges and veneers we create will look as good as
          or better than the teeth nature gave you. And to make sure we keep
          that promise, the products we recommend and use are the highest
          quality and incredibly durable. You can trust your smile with us.
        </p>
        <button type="button" className="doc-button"><Link to="/doctor">Find Out More</Link></button>
      </div>
    </div>
  </div>
);

export default DocContent;
