import React from 'react';

import './../styles/Payment.scss';

const Payment = () => (
  <table className="payments-table">
    <tr>
      <td className="payments-col1">
        <p>
          <h3>Financial Terms and Insurance Information</h3>
          <p>
            We are committed to providing you with high quality dentistry and
            our fees reflect our professional commitment to excellence. For the
            convenience of our patients, we offer a wide variety of financial
            options to our patients.
          </p>
          <h3>
            Personal Checks, Cash, and Bankcards -- We accept Visa, Mastercard,
            American Express, Discover and all debit cards.
          </h3>
          <p>
            Insurance - Co-payments will be estimated and due at the time of
            service. As a courtesy to our patients, we will submit all necessary
            information and bill your insurance company. You are responsible for
            your bill regardless of the insurance coverage. Please take time to
            understand your insurance policy.
          </p>
          <p>
            Emergencies - First time patients will be seen on a cash basis,
            unless insurance coverage can be verified.
          </p>
          <p>NSF Checks - There is a $45.00 fee for all returned checks.</p>
          <p>
            Service Charges - Accounts over 60 days are subject are subject to
            an interest fee per month. It is recommended that you follow-up with
            your insurance to expedite the payment process.
          </p>
          <p>
            Cancellations - We reserve the right to charge a $40.00 fee for
            failure to contact our office, at least 24 hours in advance of your
            scheduled appointment time. Failure to contact us or to arrive for
            scheduled appointment will result in the loss of the privilege to
            pre-schedule appointments in the future.
          </p>
        </p>
      </td>
      <td>
        <img src="http://fullertonsmiles.net/images/payment_21.jpg" alt="Smiling Girl" />
      </td>
    </tr>
  </table>
);

export default Payment;
