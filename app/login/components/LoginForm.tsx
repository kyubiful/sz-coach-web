'use client'

import { FormEvent } from 'react'

export function LoginForm () {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const target = e.target as HTMLFormElement
    const formData = Object.fromEntries(new FormData(target))
    console.log(formData)
  }
  return (
    <form style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignSelf: 'center', width: '25%', margin: 'auto', gap: 8 }} onSubmit={onSubmit}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <label>Nombre</label>
        <input type='text' name='user' placeholder='Usuario' />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <label>Contraseña</label>
        <input type='password' name='password' placeholder='Contraseña' />
      </div>
      <button>Submit</button>
    </form>
  )
}
