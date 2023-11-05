import styled from 'styled-components';

export const ButtonDiv = styled.div`
  margin-top: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
` 

export const SignUpButton = styled.button`
  background-color: #0bb60b;
  border-radius: 5px;
  border: none;
  width: 45%;
  height: 35px;
  color: white;
  font-size: 18px;
  cursor: pointer;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const CheckBoxDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  border-radius: 3px;
  border: solid 0.5px black;
  padding: 10px;
` 

export const BirthdaySpan = styled.span`
  margin-top: 10px;
` 

export const SignUpInput = styled.input`
  height: 30px;
  margin-top: 15px;
  font-size: 15px;
  padding: 5px;
` 

export const SignUpSpanStyle = styled.span`
  margin-bottom: 20px;
  font-size: 16px;
` 

export const RowDiv = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  flex-direction: row;
`


export const SignUpTitle = styled.h3`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 35px;
  position: relative;
  margin: 0px;
` 

export const LoginContainer = styled.div`
  position: absolute;
  background-color: rgba(223, 223, 223, 0.8);
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
` 

export const LoginModal = styled.form`
  width: 400px;
  height: auto;
  opacity: 1;
  border-radius: 5px;
  z-index: 2;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 15px;
  padding-bottom: 30px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 5px 15px;
` 

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 100vh;
  gap: 100px;
` 

export const LeftContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 400px;
` 

export const RightContent = styled.div`
  display: flex;
  justify-content: center;
` 

export const Facebookh = styled.h3`
  font-size: 40px;
  color: #1877F2;
  margin-bottom: 10px;
` 

export const SpanStyle = styled.span`
  font-size: 25px;
  font-weight: 500;
` 

export const LoginBox = styled.form`
  display: flex;
  align-items: center;
  padding: 15px;
  flex-direction: column;
  background-color: white;
  width: 400px;
  height: 400px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #c5c4c4;
  opacity: 0.8;
` 

export const Input = styled.input`
  width: 100%;
  height: 50px;
  font-size: 20px;
  padding: 5px;
  margin-bottom: 20px;
  border: solid 1px;
  border-radius: 5px;
  &:focus {
    border-color: red;
  }
`

export const LoginButton = styled.button`
  width: 100%;
  height: 50px;
  border: solid 1px;
  border-radius: 5px;
  background-color: #1877F2;
  color: white;
  cursor: pointer;
` 

export const ForgotPass = styled.a`
  color: #207bf1;
  font-size: 14px;
  margin-top: 20px;
  margin-bottom: 20px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`

export const CreateNewAccButton = styled.button`
  width: 50%;
  background-color: #0bc90b;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  font-weight: 500;
  color: white;
  height: 50px;
  padding: 10px;
  margin-top: 40px;
  cursor: pointer;
` 
export const SignUpSpan = styled.span`
  
`
export const SignUpInputFull = styled.input`
  width: 100%;
  height: 30px;
  margin-top: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
  font-size: 15px;
`


export const Span = styled.span`
  font-size: 25px;
  font-weight: 500;
`;
