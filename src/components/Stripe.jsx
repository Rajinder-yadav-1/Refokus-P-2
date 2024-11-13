import React from 'react'

function Stripe({val}) {
  return (
    <div className='w-[16.66%] px-10 py-5  border border-zinc-600  flex justify-between '>
        <img src={val.url} alt=""  className="filter invert"/>
        <span className='font-semibold '>{val.number}</span>
    </div>
  )
}

export default Stripe