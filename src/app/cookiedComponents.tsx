import { cookies } from 'next/headers'
import React from 'react'

async function setCookiesAction(formData: FormData) {
  'use server'
  const name = formData.get('name')
  if (typeof name === 'string') cookies().set(name, name, { secure: true })
}
export default function CookiedComponents() {
  return (
    <form action={setCookiesAction}>
      <input type="text" name="name" />
      <button type="submit">Submit</button>
    </form>
  )
}
