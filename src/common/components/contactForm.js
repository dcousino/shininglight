import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  width: 300px;
  height: 35px;
  border: 1px solid #ccc;
  background-color: #fff;
  margin: 7px 0;
  ::placeholder {
    font-family: 'Sacramento', sans-serif;
    padding: 5px;
  }
`;

const Button = styled.button`
  width: 300px;
  height: 35px;
  background-color: #5995ef;
  color: #fff;
  border-radius: 3px;
`;

const Title = styled.h1`
  font-family: 'Sacramento', sans-serif;
  font-weight: 600;
  color: #4d4d4d;
  font-size: 2.2em;
`;

const TextArea = styled.textarea`
  width: 300px;
  height: 150px;
  border: 1px solid #ccc;
  background-color: #fff;
  margin: 10px 0;
  ::placeholder {
    font-family: 'Sacramento', sans-serif;
    padding: 5px;
  }
`;

export default () => (
  <div>
    <Title>Contact Me</Title>
    <Form
      method="post"
      action="#"
      data-netlify="true"
      data-netlify-recaptcha="true"
      data-netlify-honeypot="bot-field"
      name="contact-form"
    >
      <input type="hidden" name="contact-form" value="contact" />
      <Input type="text" name="name" placeholder="Name" />
      <Input type="email" name="email" placeholder="Email" />
      <TextArea placeholder="Message" name="message" cols="30" rows="10" />
      <div data-netlify-recaptcha="true" />
      <Button type="submit">Submit</Button>
    </Form>
  </div>
);
