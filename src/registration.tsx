import React, { FormEvent, useState } from 'react';
import LabelDiv from './components/_atoms/checkBox';

import { Container , LeftContent , Facebookh, RightContent , LoginBox , Input , LoginButton,
  ForgotPass , Line , CreateNewAccButton , LoginContainer , LoginModal , SignUpTitle  ,RowDiv
   , BirthdaySpan  , ButtonDiv , SignUpButton , Span , SignUpInput , SignUpSpan ,SignUpInputFull} from './style';


function Registration() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '', firstname: '', lastname: '' });
  const [userInput, setUserInput] = useState('');
  const [userInputPassword, setUserInputPass] = useState('');
  const value = localStorage.getItem("contactData")


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (formData.password.length < 8 || formData.password.length > 20) {
      alert('Password must be between 8 and 20 characters.');
    } else {
      localStorage.setItem('contactData', JSON.stringify(formData));
      alert('Your information has been saved.');
      setFormData({ ...formData, password: '', email: '', firstname: '', lastname: '' });
    }
  }
  function handleSubmitLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  
    if (typeof value === 'string') {
      const parse = JSON.parse(value)
      const userEmail = parse.email
      const userPassword = parse.password
       if(userEmail === userInput && userPassword === userInputPassword )
       alert('success')
       window.location.href = '/about';
      } else {
        alert('Login failed. Email or password is incorrect.');
      }
    }
console.log(userInput)
  return (
    <Container>
      <LeftContent>
        <Facebookh>facebook</Facebookh>
        <Span>Connect with friends and the world around you on Facebook.</Span>
      </LeftContent>
      <RightContent>
        <LoginBox onSubmit={handleSubmitLogin} >
          <Input name='email' value={userInput} onChange={(e) => setUserInput(e.target.value)} placeholder="Email or Phone Number" required />
          <Input name='password' value={userInputPassword} onChange={(e) => setUserInputPass(e.target.value)} placeholder="Password" type="password" required />
          <LoginButton type="submit">Login</LoginButton>
          <ForgotPass href="#">Forget password?</ForgotPass>
          <Line />
          <CreateNewAccButton onClick={() => setIsVisible(!isVisible)}>Create new account</CreateNewAccButton>
        </LoginBox>
      </RightContent>
      <LoginContainer style={{ visibility: isVisible ? "visible" : "hidden" }}>
        <LoginModal onSubmit={handleSubmit}>
          <SignUpTitle>Sign up <div onClick={() => setIsVisible(!isVisible)}>x</div> </SignUpTitle>
          <SignUpSpan>It’s quick and easy.</SignUpSpan>
          <Line />
          <RowDiv>
            <SignUpInput type='text' name = 'firstname' value={formData.firstname} onChange={handleChange} placeholder='First name' />
            <SignUpInput type='text' name='lastname' value={formData.lastname} onChange={handleChange} placeholder='Last name' />
          </RowDiv>
          <SignUpInputFull type="email" name="email" value={formData.email} onChange={handleChange} placeholder='Mobile number or email' />
          <SignUpInputFull type = "password" name="password" value={formData.password} onChange={handleChange} placeholder='New password' />
          <BirthdaySpan>Birthday ?</BirthdaySpan>
          <SignUpInputFull type="date" />
          <BirthdaySpan>Gender</BirthdaySpan>
          <LabelDiv/>
          <span>People who use our service may have uploaded your contact information to Facebook. Learn more.</span>
          <ButtonDiv>
            <SignUpButton type='submit' >Sign Up</SignUpButton>
          </ButtonDiv>
        </LoginModal>
      </LoginContainer>
    </Container>
  );
  }


export default Registration;
