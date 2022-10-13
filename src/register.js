import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "./components/Input.js"
import SubmitButton from "./components/SubmitButton.js"

const Register = () => {
  const [usernameStatus, setUsernameStatus] = useState(null)
  const [emailStatus, setEmailStatus] = useState(true)
  const [passwordStatus, setPasswordStatus] = useState(null)

  return (
    <>
      <div className="w-screen bg-zinc-200 dark:bg-zinc-700 h-screen flex justify-center items-center">
        <div className="regBox bg-zinc-100 dark:bg-zinc-600 border-t dark:border-zinc-600 shadow-2xl rounded-xl p-10 lg:w-auto 2xl:w-1/4">
          <div className="flex flex-col">
            <h1 className="text-black dark:text-white text-center text-5xl mb-10">Register</h1>
            <form className="flex flex-col" autoComplete="off">
              <Input type="text" minChar="2" maxChar="20" placeholder="username" required={true} />
              <p className="text-red-500" hidden={usernameStatus === false ? false : true}>Veuillez entrer une Email Valide</p>
              <Input type="email" placeholder="your@email.domain" required={true} />
              <p className="text-red-500" hidden={emailStatus === false ? false : true}>Veuillez entrer une Email Valide</p>
              <Input type="password" minChar="8" placeholder="password" required={true} />
              <p className="text-red-500" hidden={passwordStatus === false ? false : true}>Vottre mot de passe doit faire plus de 8 caractères.</p>
              <SubmitButton value="Register" />
              <div className="h-px my-5 bg-zinc-300 dark:bg-zinc-500" />
              <p className="flex flex-row gap-1 justify-center">
                <p className="text-black dark:text-white">Allready have an account ?</p>
                <Link to="/login" className="text-blue-600 dark:text-yellow-400 hover:underline underline-offset-auto">Login !</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register;
