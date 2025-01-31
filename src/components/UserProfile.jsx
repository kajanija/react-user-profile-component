import React from 'react'

function UserProfile({image="/vite.svg",firstName="Name",LastName="Last"}) {
  return (
    <div className='grid h-screen w-screen items-center justify-center'>
        <div className='grid justify-center p-4 items-start grid-rows-[repeat(3,max-content)] gap-5 w-130 h-80 bg-blue-300 rounded-xl shadow-2xl'>
            <img className='p-2 rounded-full bg-white border-2 border-blue-500 w-30 h-30 object-cover' src={image} />
            <p className='text-lg text-white font-bold uppercase text-center'>{firstName}</p>
            <p className='text-lg text-white font-bold uppercase text-center'>{LastName}</p>
        </div>
    </div>
  )
}

export default UserProfile