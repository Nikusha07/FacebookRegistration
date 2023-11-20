import React, { useState } from "react";
import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';

const Interface: React.FC = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState<string[]>([]); // Store tasks in an array
  const contactDataJSON = localStorage.getItem('contactData');

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      setTasks([...tasks, task]); // Add the entered task to the tasks array
      setTask(''); // Clear the input field
    }
  };

  if (contactDataJSON) {
    const contactData = JSON.parse(contactDataJSON);

    if (contactData.hasOwnProperty('firstname')) {
      const firstname = contactData.firstname;
      console.log('Firstname:', firstname);

      const PlaceholderText = `${firstname}, ხომ არ გაგვიზიარებდით საკუთარ აზრს`;

      return (
        <Container>
          <GlobalStyle />
          <MainBox>
            <UserBox>
              <UserImgDiv>
                <Img src="" alt="user" />
              </UserImgDiv>
              <InputDiv>
                <Input
                  value={task}
                  onChange={(e) => setTask(e.target.value)}
                  onKeyPress={handleKeyPress}
                  type="text"
                  placeholder={PlaceholderText}
                />
              </InputDiv>
            </UserBox>
            <Line />
            <BottomBox>
              <div>
                <A href="#">Live Video</A>
              </div>
              <div>
                <A href="#">Photo/Video</A>
              </div>
              <div>
                <A href="#">Feeling/activity</A>
              </div>
            </BottomBox>
          </MainBox>
          <TaskList>
                
                {tasks.map((task, index) => (
                  <PostDiv> <PostH>post</PostH><Li key={index}>{task} </Li> </PostDiv>
                  
                ))}
            </TaskList>
        </Container>
      );
    }
  }
  return null;
};

export default Interface;

const PostH = styled.h1`
  color: white;
  font-size: 30px;
`

const Li = styled.li`
  width: 650px;
  list-style: none;
  font-size: 20px;
  color: red;
`

const TaskList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  flex-direction: column;
`
const PostDiv = styled.div`
    overflow-y: auto;
    width: 50%;
    padding: 30px 10px 10px 10px;
    height: 200px;
    background-color: #373b41 ;
    padding: 10;
    border-radius: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
`

const A = styled.a`
  color: aliceblue;
  text-decoration: none;

`

const BottomBox = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
`

const Line = styled.div`
  width: 100%;
  height: 1px;
  margin-top: 20px;
  background-color: #FFFFFF;
  opacity: 20%;
`

const InputDiv = styled.div`
  width: 92%;
`

const Input = styled.input`
  width: 100%;
  font-size: 20px;
  height: 30px;
  background-color: #69707a ;
  border: none;
  border-radius: 10px;
  &&::placeholder{
    color: white;
  }
  &&:active{
    border: none;
    outline: none;
  }
`

const Img = styled.img`
    width: 100%;
    border-radius: 50%;
    height: 100%;
`

const UserImgDiv = styled.div`
    width: 30px;
    border-radius: 50%;
    height: 30px;
`

const UserBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
`

const MainBox = styled.div`
    width: 50%;
    height: 200px;
    background-color: #373b41 ;
    padding: 30px 10px 10px 10px;
    border-radius: 10px;
`

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #1c1e21;
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;

const Container = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex-direction: column;
    gap: 100px;
    margin-top: 20px;

`