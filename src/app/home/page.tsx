"use client"

import { User } from '@/types/User'
import { createUser, deleteUserReq, getUsers, patchUserReq } from '@/utils/api'
import React, { useState } from 'react'

const Page = () => {

  const [showNames, setShowNames] = useState(false)
  const [users, setUsers] = useState<User[]>([])
  const [input, setInput] = useState({email: "", name: ""})

  const getAllUsers = async () => {
    try {
      const users = await getUsers();
      console.log(users)
      setUsers(users)
    } catch (error) {
      
    }
  }

  const showUsers = () => {
    setShowNames(!showNames)
  }

  const patchUser = async () => {
    try {
      await patchUserReq(input, 7)
    } catch (error) {
      
    }
  }

  const createUserm = async () => {
    try {
      await createUser(input)
    } catch (error) {
      
    }
  }

  const deleteUser = async () => {
    try {
      await deleteUserReq(7)
    } catch (error) {
      
    }
  }

  return (
    <div className='flex flex-col items-center w-full pt-10'>
      <h1 className='text-2xl font-bold'>Home</h1>
    <div className='flex w-full h-full'>
      <div className='w-full flex justify-center items-center mt-24 gap-5'>
        <div className='flex flex-col justify-center gap-5'>
          <h2 className='text-xl mt-10'>Usuários:</h2>
          {showNames && users.map((user) => (
            <div key={user.id} className='flex flex-col items-center gap-2'>
              <p>nome: {user.name}</p>
              <p>email: {user.email}</p>
            </div>
          ))}
        </div>
          <button onClick={getAllUsers} className='bg-sky-300 rounded-lg px-5 py-3'>{users.length > 0 ? "Pegou os" : "Pegar"} usuários</button>
          <button onClick={showUsers} className='bg-sky-300 rounded-lg px-5 py-3'>{showNames ? "Esconder" : "Mostrar"} usuários</button>
      </div>
      <div className='w-full flex justify-center flex-col items-center mt-24 gap-10'>
          <input type="text" className='rounded-lg w-1/2 border border-black p-2' placeholder='email'  onChange={(e) => setInput({...input, email: e.target.value})}/>
          <input type="text" className='rounded-lg w-1/2 border border-black p-2' placeholder='nome' onChange={(e) => setInput({...input, name: e.target.value})}/>
          <button onClick={createUserm} className='bg-sky-300 rounded-lg px-5 py-3'>Criar usuário</button>
          <button onClick={patchUser} className='bg-sky-300 rounded-lg px-5 py-3'>Atualizar usuário</button>
          <button onClick={deleteUser} className='bg-sky-300 rounded-lg px-5 py-3'>Apagar usuário</button>
      </div>
    </div>
  </div>
  )
}

export default Page;