import React from 'react'

export default function TextWinner({isWinner}) {
  return (
    <div className='winner-title'>{isWinner === 'Ничья' ? '' : `${isWinner ? 'Победил' : ''}`}</div>
  )
}
