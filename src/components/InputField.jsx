import React from 'react'
import checkImage from '../images/icon-check.svg'

function InputField({completeState,handleKeyEnter}) {
  // console.log(completeState)
  return (
    <div className='item__wrapper'>
      <div className={!completeState ? 'complete check__complete' : 'check__complete'}>
       <img src={checkImage} alt="check complete icon" />
      </div>
      <input type="text" placeholder='Create a new todo...' onKeyDown={handleKeyEnter}/>
    </div>
  )
}

export default InputField