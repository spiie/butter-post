import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Input from "../components/Input.js"
import SubmitButton from "../components/SubmitButton.js"

const Login = () => {
  const [userValidity, setUserValidity] = useState(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitLogin = async (e) => {
    e.preventDefault()
    const login = await fetch('/api/login/', {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
    const loginStatus = login.status
    if (loginStatus === 200) {
      // const res = await login.json()
    } else {
      setUserValidity(false)
    }

  }

  return (
    <div className="w-screen bg-zinc-200 dark:bg-zinc-700 h-screen flex justify-center items-center">
      <div className="regBox bg-zinc-100 dark:bg-zinc-600 border-t dark:border-zinc-600 shadow-2xl rounded-xl p-10 lg:w-auto 2xl:w-1/4">
        <div className="flex flex-col">
          <h1 className="text-black dark:text-white text-center text-5xl mb-10">Log In</h1>
          <form className="flex flex-col" autoComplete="off" onSubmit={(e) => submitLogin(e)} >
            <Input type="email" placeholder="your@email.domain" required={true} onChange={(e) => setEmail(e.target.value)} />
            <Input type="password" placeholder="password" required={true} onChange={(e) => setPassword(e.target.value)} />
            <p className='text-red-500' hidden={userValidity === false ? false : true}>L'email ou le mot de passe est invalide !</p>
            <SubmitButton value="Continue" />
            <div className="h-px my-5 bg-zinc-300 dark:bg-zinc-500" />
            <p className="flex flex-row gap-1 justify-center">
              <p className="text-black dark:text-white">Don't have an account ?</p>
              <Link to="/register" className="text-blue-600 dark:text-yellow-400 hover:underline underline-offset-auto">Register !</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login;
