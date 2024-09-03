import React from 'react'
import Profile from './Profile'

function Content({responses, userData}) {
  console.log(responses, userData)
  return (
    <div className='flex-1 p-8'>
      <Profile userData={userData}/>
    </div>
  )
}

export default Content