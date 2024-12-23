import React from 'react'
import { useAuth } from '../context/AuthContext'

const ChatDashboard = () => {
  const {authUser} = useAuth()
  return (
    <div>
      Chat Here {authUser.username}
      <img src={authUser.avatar} alt="" srcset="" />
    </div>
  )
}

export default ChatDashboard
