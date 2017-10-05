import React from 'react';
import './../styles/Hours.scss';

const Hours = () => (
  <table className="hours-table">
    <tr>
      <td className="hours-col1">
        <h2>Our office address is 529 N. Harbor Blvd, Fullerton CA. 92835.</h2>
        <h4>
          Our office is open Monday through Friday, with hours that can
          accommodate most any schedule. We know that your time is important,
          and we work to ensure that your visit happens as professionally and
          quickly as possible.
        </h4>
        <p>
          <ul className="hours-list">
            <li>Monday 12:00pm – 7:00pm</li>
            <li>Tuesday 8:00am – 5:00pm </li>
            <li>Wednesday 8:00am – 5:00pm </li>
            <li>Thursday 8:00am – 4:00pm (We work through lunch)</li>
            <li>Friday 8:00am – 1:00pm</li>
            <li>Saturday Closed</li>
            <li>Sunday Closed</li>
          </ul>
        </p>
        <h4>
          Emergency and After Office Hours:
          <p>
            Dental emergencies are never convenient or timely. At Steven A.
            Myers Dental we are committed to your dental health no matter what
            time of the day or night it is. If you have a dental emergency after
            regular office hours, please call us at (714) 333.6544.
          </p>
        </h4>
      </td>
      <td>
        <img
          src="http://fullertonsmiles.net/images/map_21.jpg"
          alt="Google Maps Visual of Address Location"
        />
      </td>
    </tr>
  </table>
);

export default Hours;
