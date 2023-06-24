// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  background-color: #24263c;
  align-items: center;
`

export const PasswordContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background-color: #434451;
  padding: 20px;
  width: 40%;
  height: 350px;
`

export const Heading = styled.h1`
  color: #f8fafc;
  font-size: 32px;
  font-family: 'Roboto';
  font-weight: bold;
`
export const SubHeading = styled.p`
  color: #f8fafc;
  font-family: 'Roboto';
  margin-bottom: 10px;
  font-size: 12px;
`
export const Input = styled.input`
  font-family: 'Roboto';
  background-color: #edeeff;
  width: 300px;
  padding: 10px;
  border-radius: 6px
  margin-bottom: 5px;
  margin-top: 25px;
  border: none;
  outline: none;
`

export const Error = styled.p`
  color: #ef4444;
  font-family: 'Roboto';
  font-size: 12px;
`
