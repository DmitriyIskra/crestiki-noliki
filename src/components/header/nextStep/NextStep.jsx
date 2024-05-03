import React from 'react'

export default function NextStep({isWinner, currentSymbol}) {
  return (
    <div
        className={
          !isWinner ? (
              `current-symbol ${currentSymbol && `current-symbol-${currentSymbol}`}`
          ) : (
              `current-symbol current-symbol-${`${isWinner}`}`
          )
        }
    >
        {isWinner || currentSymbol}
    </div>
  )
}
