import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import Input from "./components/Input.js"
import SubmitButton from "./components/SubmitButton.js"

const Login = () => {
  const [userData, setUserData] = useState({})
  useEffect(() => {
    fetch('localhost:30/login').then(
      response => response.json()
    ).then(
      data => {
        setUserData(data)
      }
    )
  }, [])

  const [validity, setValidity] = useState(false)
  const [nameLogAs, setNameLogAs] = useState('')
  const [errorLogIn, setErrorLogIn] = useState(false)

  const submit = (e, email, password) => {
    const profils = userData.users
    for (let i = 0; i < profils.length; i++) {
      if (profils[i].email === email && profils[i].password === password) {
        setErrorLogIn(false)
        setNameLogAs(profils[i].name)
        return setValidity(true)
      }
    }

    if (validity !== true) setErrorLogIn(true)
  }

  const [userValidity, setUserValidity] = useState(null)
  return (
    <div className="w-screen bg-zinc-200 dark:bg-zinc-700 h-screen flex justify-center items-center">
      <div className="regBox bg-zinc-100 dark:bg-zinc-600 border-t dark:border-zinc-600 shadow-2xl rounded-xl p-10 lg:w-auto 2xl:w-1/4">
        <div className="flex flex-col">
          <h1 className="text-black dark:text-white text-center text-5xl mb-10">Log In</h1>
          <form className="flex flex-col" autoComplete="off">
            <Input type="email" placeholder="your@email.domain" required={true} />
            <Input type="password" placeholder="password" required={true} />
            <p className='bg-red-500' hidden={userValidity === false ? false : true}>L'email ou le mot de passe est invalide !</p>
            <SubmitButton value="Log In" />
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
