import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import ContentBox from './ContentBox.js'
import newTek from '../newTek.js'
import TextInput from './FastTextInput.js'

const Container = styled.div`
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction:column;
  color: grey;
  font-size: 1em;
  padding: 20px;
  border: 1px solid lightgrey;
  border-radius: 5px;
`

function Panel (props) {
  const TCP1 = new newTek(props.IP)

  const [delay, setDelay] = useState(1000)

  const [title0, setTitle0] = useState('')
  const [title1, setTitle1] = useState('')
  const [title2, setTitle2] = useState('')
  const [title3, setTitle3] = useState('')
  const [title4, setTitle4] = useState('')

  const [content0, setContent0] = useState('')
  const [content1, setContent1] = useState('')
  const [content2, setContent2] = useState('')
  const [content3, setContent3] = useState('')
  const [content4, setContent4] = useState('')


  const [iteration, setIteration] = useState(0)

  const contents = useState()

  const updateGFX = () => {
    const titles = [title0, title1, title2, title3, title4]
    const contents = [content0, content1, content2, content3, content4]

    TCP1.triggerMacro(`beforeMacro${iteration}`)
    TCP1.setDataLink(`naslov${iteration}`, titles[iteration])
    TCP1.setDataLink(`vsebina${iteration}`, contents[iteration])
    TCP1.triggerMacro(`afterMacro${iteration}`)

    if (iteration < 4) setIteration(iteration + 1)
    else setIteration(0)
  }

  useEffect(() => {   
    const interval = setInterval(updateGFX, delay)   
    return () => clearInterval(interval)   
  })

  
  return(
    <Container>
      <TextInput text={delay} setText={setDelay} />
      <ContentBox 
        titleDataLink={'naslov0'}
        contentDataLink={'vsebina0'}
        title={title0}
        setTitle={setTitle0}
        content={content0}
        setContent={setContent0}
      />
      <ContentBox 
        titleDataLink={'naslov1'}
        contentDataLink={'vsebina1'}
        title={title1}
        setTitle={setTitle1}
        content={content1}
        setContent={setContent1}
      />
      <ContentBox 
        titleDataLink={'naslov2'}
        contentDataLink={'vsebina2'}
        title={title2}
        setTitle={setTitle2}
        content={content2}
        setContent={setContent2}
      />
      <ContentBox 
        titleDataLink={'naslov3'}
        contentDataLink={'vsebina3'}
        title={title3}
        setTitle={setTitle3}
        content={content3}
        setContent={setContent3}
      />
      <ContentBox 
        titleDataLink={'naslov4'}
        contentDataLink={'vsebina4'}
        title={title4}
        setTitle={setTitle4}
        content={content4}
        setContent={setContent4}
      />
    </Container>

  )
}

export default Panel
