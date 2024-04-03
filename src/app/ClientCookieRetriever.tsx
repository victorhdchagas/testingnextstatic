'use client'
import React from 'react'

function getCookie(cname: string) {
  let name = cname + '='
  let decodedCookie = decodeURIComponent(document.cookie)
  let ca = decodedCookie.split(';')
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) == ' ') {
      c = c.substring(1)
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length)
    }
  }
  return ''
}
export default function ClientCookieRetriever() {
  function print() {
    const cookies = document.cookie
    console.log(getCookie('Wutachi'), cookies)
  }
  return <div onClick={print}>ClientCookieRetriever</div>
}
