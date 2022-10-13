import React, { useState } from 'react'

const Input = ({ type, placeholder, minChar, maxChar, required = false }) => {
  return (
    <input className="py-2 px-4 h-12 my-5 bg-zinc-50 dark:bg-zinc-500 text-black dark:text-white rounded-md border border-zinc-300 dark:border-zinc-800  outline-0" type={type} placeholder={placeholder ? placeholder : null} minLength={minChar} maxLength={maxChar} required={required === true ? "required" : null
    } />
  )
}

export default Input