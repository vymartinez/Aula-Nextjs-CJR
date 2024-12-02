"use client"

import Header from '@/components/Header';
import Teacher from '@/components/Teacher';
import React, { useEffect, useState } from 'react'

const Home = () => {

  const teachers = ["Joana", "Pedro", "Ana", "Carlos"];

  const [user, setUser] = useState("");

  const getUser = async () => {
    const user = "joao";
    setUser(user);
    try {

    }catch(err) {

    }
  }

  useEffect(() => {
    console.log("user:", user);
  }, [user]);

  return (
    <>
      <div>usuário: {user}</div>
      <Header/>
      <div className=' flex-col items-center gap-10'>
      </div>
      <button onClick={getUser}>Trocar usuario</button>
    </>
  )
}

export default Home;