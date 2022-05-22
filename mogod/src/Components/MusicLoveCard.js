import React from 'react'
import { LoveMusic} from '../Data'
import styled from 'styled-components'
import MusicLoveCardItem from './MusicLoveCardItem'
const Container = styled.div`
  display:flex;
  padding:0px 20px 20px 20px;
  justify-content:space-between;
`
const Tetxt = styled.h3`
padding:20px 20px 20px 20px ;

`
const MusicLoveCard = () => {
  return (
      <>
      <Tetxt>Music you'll love</Tetxt>
      <Container>
        {
            LoveMusic.map(item=>(
           <MusicLoveCardItem item={item}/>
            ))
        }
    </Container>
      </>
    
  )
}

export default MusicLoveCard