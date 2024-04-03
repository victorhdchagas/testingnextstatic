import { cookies } from 'next/headers'
import React from 'react'
async function getCookies() {
  const cookieData = cookies().getAll()
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(cookieData)
    }, 1000),
  )
}
export default async function Cookied() {
  const data = await getCookies()
  return <div>{JSON.stringify(data)}</div>
}
