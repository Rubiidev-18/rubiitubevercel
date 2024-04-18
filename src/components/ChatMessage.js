import React from 'react'

const ChatMessage = ({name,message}) => {
  return (
    <div className='flex shadow-md p-2 mt-1'>
      <img
          className="h-6"
          alt="user"
          src="https://cdn-icons-png.freepik.com/256/1077/1077114.png"
        />
        <span className='px-2 font-bold'>{name}</span>
        <span>{message}</span>
    </div>
  )
}

export default ChatMessage
