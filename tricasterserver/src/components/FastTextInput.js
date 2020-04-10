import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';


const Input = styled.input`
  background-color: white;
  border: 1px solid lightgrey;
  border-radius: 4px;
  height: 100%;
  width: 100%;
  color: var(--textColor);
  outline: none;
  &:focus {
    background-color: lightgrey;
    border: 1px solid grey;
  }
`
const Label = styled.label`
  color: dark grey;
  font-size: 1em;
`

function FastTextInput (props) {
  const handleChange = (event) => props.setText(event.target.value)   
  return (
    <Input type="text" value={props.text} onChange={handleChange} />        
  )
}



export default FastTextInput
