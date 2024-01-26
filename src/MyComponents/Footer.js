import React from 'react'

export const Footer = () => {
  let footerStyle ={
      position:"relative",
      top:'20vh',
      width:'100%'
  }
  return (
    <div className='bg-dark text-light text-center py-3' style={footerStyle}>
      Copyright &copy; My Work list
    </div>
  )
}
