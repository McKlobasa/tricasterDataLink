import React, { useState, useEffect } from 'react'
  import TextInput from './components/FastTextInput.js'
  import Panel from './components/Panel.js'
  import newTek from './newTek.js'
  import styled from 'styled-components'


  const Container = styled.div`
    display: flex;
    flex-direction: row;
  `

  function App() {
    const [text, setText] = useState('burekJem')

    const [IP, setIP] = useState('localhost')
    return (
      <div>
        <TextInput text={IP} setText={setIP} />
        <Container>
          <Panel 
            IP={IP}
          />
        </Container>
      </div>
    );
  }

  export default App
