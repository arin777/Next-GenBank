import React from 'react'
import styles from '../style'
const Button = ({styles}) => {
  return (
    <div>
      <button type='button' className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text
      -[18px] text-primary outline-none rounded-[10px] ${styles}`}>
        Get Started

      </button>
    </div>
  )
}

export default Button
