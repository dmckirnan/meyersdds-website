import React from "react";
import "./../styles/Staff.scss";

const Staff = () => (
  <div>
    <div className="banner">Meet the Staff</div>
    <table className="staff-table">
      <tr>
        <td className="col1">
          <img
            src="http://fullertonsmiles.net/images/sandy_23.jpg"
            alt="Sandy Dental Hygenist"
          />
        </td>
        <td className="col2">
          <h2>Sandy</h2>
          <p>
            Sandy has been a Registered Dental Hygienist since 1998. She
            received her clinical training from UCLA School of Dentistry and her
            Dental Hygiene degree from Cerritos College. Sandy has been working
            at our office since 1999. Sandy really enjoys providing patients
            with the knowledge and tools necessary to make their dental health a
            priority. Outside of work Sandy enjoys time at the gym, going to the
            beach and spending time with her husband, son and her dog Lily, a
            Boston terrier.
          </p>
        </td>
      </tr>
      <tr>
        <td className="col1">
          <img
            src="http://fullertonsmiles.net/images/suzi_23.jpg"
            alt="Suzi Office Manager"
          />
        </td>
        <td className="col2">
          <h2>Suzi</h2>
          <p>
            Suzi has been a part of our team since 1995. Prior to working in the
            dental field she was in management for American Airlines and
            Disneyland. Suzi grew up in Anaheim and loves the Angels baseball
            team. Outside of work and raising three boys she enjoys going to the
            gym, baseball games and trips to Disneyland with her family.
          </p>
        </td>
      </tr>
    </table>
  </div>
);

export default Staff;
