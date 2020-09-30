import React from 'react'

const Header = ({ ...props }) => {
  
  const {
    background
  } = props;
  
  const style = {
    backgroundColor: background,
    color: background && 'white'
  }
  
  return (
    <div style={style}>
      header
    </div>
  )
}

export default Header