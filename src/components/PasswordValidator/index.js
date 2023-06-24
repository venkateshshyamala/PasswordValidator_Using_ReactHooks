// Write your code here
import {useState} from 'react'

import {
  MainContainer,
  PasswordContainer,
  Heading,
  SubHeading,
  Input,
  Error,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')

  const onChangePassword = event => setPassword(event.target.value)

  return (
    <MainContainer>
      <PasswordContainer>
        <Heading>Password Validator</Heading>
        <SubHeading>Check how strong and secure is your password</SubHeading>
        <Input type="password" value={password} onChange={onChangePassword} />
        {password.length >= 8 ? (
          ''
        ) : (
          <Error>Your password must be at least 8 characters</Error>
        )}
      </PasswordContainer>
    </MainContainer>
  )
}
export default PasswordValidator
