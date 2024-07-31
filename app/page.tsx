
"use client"

import { useState, useEffect } from "react"
import Link from 'next/link';

export default function Home() {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const submitData = {name,age}

    try {
      const res = await fetch('api/hello',{
        method: 'POST',
        body: JSON.stringify(submitData),
        headers: {
          'content-type': 'application/json'
        }
      })
      console.log(res)
      if(res.ok){
        console.log("Yeai!")
      }else{
        console.log("Oops! Something is wrong.")
      }
    } catch (error) {
        console.log(error)
    }
    setName('')
    setAge('')
  }

  

  return (
    <div className=" flex flex-col justify-center items-center w-full p-8 ">
      <h1 className=" w-full text-center m-4 font-semibold text-lg ">GET & POST Request in NextJS Stable App Router</h1>
      <form onSubmit={handleSubmit} className=" flex w-full flex-col justify-center items-center ">
        <div className=" flex w-1/2 justify-center items-center gap-4 ">
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Enter the name"
            onChange={e => setName(e.target.value)}
            className=" border p-2 px-4 rounded outline-none "
          />
          <input
            type="number"
            name="age"
            value={age}
            placeholder="Enter the age"
            onChange={e => setAge(e.target.value)}
            className=" border p-2 px-4 rounded outline-none "
          />
          <button 
          type="submit" 
          className=" border-blue-500 bg-blue-500 text-white p-2 px-4 rounded-md " 
          >Submit</button>
        </div>
      </form>

      <br />

      <div>
        <h1>Link to tutorial Page  
          <Link 
          href='/pages/tutorial'
          className=" text-blue-500 border-blue-500 "
          >
            Click here</Link>
        </h1>
      </div>

      <br />

      <div>
        <h1>Link to game Page  
          <Link 
          href='/pages/game'
          className=" text-blue-500 border-blue-500 "
          >
            Click here</Link>
        </h1>
      </div>

    </div>
  )
}
