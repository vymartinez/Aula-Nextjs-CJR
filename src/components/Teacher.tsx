import React from 'react'

type Props = {
    teacher: string;
}

const Teacher = ({ teacher }: Props) => {
  return (
    <div className='h-[300px] w-40 rounded-lg border border-black'>
        <h1 className='text-2xl font-bold'>{teacher}</h1>
    </div>

  )
}

export default Teacher