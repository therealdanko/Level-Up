import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';

export const Email = ({user, selectedUser}) => {
  const form = useRef();
    const navigate = useNavigate()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_t8rw9j8","template_y2203me", form.current, '-l_Y7prim8_OHscwj')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      
      navigate('/searchPage')
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
        <label>To Name</label>
      <input type="text" name="to_name" />
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <label>Email</label>
      <input type="email" name="selected_email" value={selectedUser.email_address}/>
      
      <input type="submit" value="Send" />
    </form>
  );
};
