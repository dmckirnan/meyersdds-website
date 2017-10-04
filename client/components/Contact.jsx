import React from "react";
import "./../styles/Contact.scss";

const Contact = () => (
  <table className="contact-table">
    <tr>
      <td>
        <ul className="contact-list">
          <li>714-870-1051 (Office Phone)</li>
          <li>714-870-1096 (Office Fax)</li>
          <li>714-333-6544 (Emergency)</li>
        </ul>
        <form id="contact-form">
          <input placeholder="name" />
          <input placeholder="email" />
          <input placeholder="subject" />
          <textarea placeholder="message here" />
        </form>
      </td>
      <td>
        <img src="http://fullertonsmiles.net/images/contact_photo.jpg" alt="Dr. Meyers and Son" />
      </td>
    </tr>
  </table>
);

export default Contact;
