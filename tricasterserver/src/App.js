import React, { useState } from 'react'
import './App.css'
import TextInput from './components/FastTextInput.js'

function App() {
  const [text, setText] = useState('tuki je en text')
  const IP = '192.168.1.2'
  const dataLinkName = 'datalinkime'
  return (
    <div className="App">
      <TextInput 
        setText={setText}
      /> 
      <button
        onClick={() => {
          const url = `http://${IP}/v1/datalink?key=${datalinkime}&value=${text}`

          fetch(url)
            .then((response) => {
              return response.json();
            })
            .then((data) => {
              console.log(data);
            });
        }}
      />
    </div>
  );
}

export default App
