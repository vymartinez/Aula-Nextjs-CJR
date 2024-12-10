"use client"

import { User } from '@/types/User';
import { getOneUser } from '@/utils/api';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const Page = () => {

    const [user, setUser] = useState<User | null>(null)

    const { id } = useParams()
    const router = useRouter()

    const getUser = async () => {
        try {
            const user = await getOneUser(Number(id));
            setUser(user)
        } catch (error) {
            return router.push('/')
        }
    }

    useEffect(() => {
        getUser()
    }, [])

    if (isNaN(Number(id))) return router.push('/')

  return (
    <div className='w-full flex flex-col justify-center h-screen items-center text-2xl font-bold'>
        <p>id do usuário: {id}</p>
        {user && <p>nome do usuário: {user.name}</p>}
        {user && <p>nome do usuário: {user.email}</p>}
    </div>
  )
}

export default Page;