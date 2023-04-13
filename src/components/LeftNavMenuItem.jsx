import React from 'react'

const LeftNavMenuItem = ({text, icon, className, action}) => {
  return (
    <div className={'text-[#030303] text-sm cursor-pointer h-10 flex items-center px-2 mb-[1px] rounded-lg hover:bg-[#e9e9e9]' + className }
    onClick={action}>
      <span className='text-base mr-3'>{icon}</span>
      {text}
    </div>
  )
}

export default LeftNavMenuItem