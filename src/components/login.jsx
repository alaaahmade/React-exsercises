const { useState } = require('react');

const Login = () => {
  const [error, setError] = useState('')
  const [users, setUser] = useState([])
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const validateAdd = () => {
    setError('')
    if (email.trim().length < 1){
      setError('Email must be At least 1 character!')
    }else if ( password !== confirmPassword || !password.trim().length || !confirmPassword.trim().length) {
      setError('password must be equal confirm Password and must be At least 1 character!!')
    }else {
      setUser((prev => [...prev, {
        email, 
        password,
        id: users.length+1,
      }]))
    }

  }
  return <>
    <div className="form">
      <h1>LogIn</h1>
      <label>Email</label>
      <input type="text" className="email" onChange={(e) => setEmail(e.target.value)}/>
      <label>Password</label>
      <input type="text" className="password" onChange={(e) => setPassword(e.target.value)} />
      <label>Confirm password</label>
      <input type="text" className="confirmPassword" onChange={(e) => setConfirmPassword(e.target.value)} />
      <button onClick={validateAdd}>Add</button>
      {users.length ? users.map((user) => {
      return <div key={user.id} id={user.id}>
        <p>Email: {user.email}</p>
        <p>Password: {user.password}</p>
        <button id={user.id} onClick={(e) => {
          setUser(users.filter((user) => +user.id !== +e.target.id ))}}>delete</button>
        <hr/>
      </div>
      }): null }</div>
      <p>{error}</p>
  </>
}

export default Login;