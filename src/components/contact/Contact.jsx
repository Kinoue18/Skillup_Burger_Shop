// Write all the code here
//create a popoup with the click of the send button
import React from 'react';
import Popup from 'reactjs-popup';

<h1>CONTACT US</h1>
const SendButton = () => <button type="button">Send</button>;

const Contact = () => (
  <Popup trigger={<SendButton />}>
    <div>

      Popup content here!! </div>
  </Popup>
);

export default Contact;
