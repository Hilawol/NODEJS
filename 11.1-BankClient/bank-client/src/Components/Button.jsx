import React from 'react'

function Button(props) {
  return (
    <button className={`btn ${props.className}`} type={props.type} onClick={props.onClick}>{props.action}</button>
  )
}

export default Button
