// Write all the code here
//create a popoup with the click of the send button
import React from 'react';
import Popup from 'reactjs-popup';


const SendButton = () => <button type="button">Send Request</button>;
  <div style={{color:"red",position: 'absolute', top: '50%', right: '100%', transform: 'translateY(-50%)', backgroundColor: '#fff', padding: '10px', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)'}}>
  Contact Sent
  </div>

const Contact = () => (
  <div>
    <h1>Contact us</h1>
    <form>
          <div>
            <label>Name : </label>
            <input type="text" textcontact="Your name" />
          </div>
          <div>
            <label>Contact details : </label>
            <input type="text" textemail="email@xyz.com" />
          </div>
          <div>
            <label>Feedback :  </label>
            <input type="text" textcontact="Please write your message" />
          </div>
    </form>
    <Popup trigger={<SendButton />}>
      <div>
        Popup content here!! </div>
    </Popup>
  </div>
);

export default Contact;
