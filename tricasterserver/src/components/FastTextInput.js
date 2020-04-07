import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';


const Container = styled.div`
  flex: 1;
  flex-direction:row;
  flex-wrap: nowrap;
  position:relative;
  height: 100%;
  width: 100%;
  align-items: stretch;
`
const Input = styled.input`
  background-color: white;
  border: 1px solid lightgrey;
  border-radius: 4px;
  height: 25px;
  margin: 5px;
  padding: 3px;
  color: var(--textColor);
  outline: none;
  &:focus {
    background-color: lightgrey;
    border: 1px solid grey;
  }
`

function FastTextInput (props) {
  const [tempText, setTempText] = useState(props.text)
  
  return (
    <Container>
      <Input 
        onChange={(event) => setTempText(event.target.value)}
        onBlur={(event) => props.setText(tempText)}
      />
    </Container>
  )
}



export default FastTextInput
