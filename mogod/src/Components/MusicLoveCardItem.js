import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
 flex:1; 
 margin:3px;
 height:70vh;
 
 `
const Image = styled.img`
 border-radius:5px ;
 width:90% ;
 height:50% ;
 object-fit:cover ;

`
const Info = styled.div`

/* top: 0;
left:0;
width:90% ;
height:100%;
display:flex ;
align-items:center ;
justify-content:center ; */
/* background-color:red ; */
`
const Title = styled.h1`

font-size:15px ;
`
const ArtistName = styled.p`
font-size:15px ;
font-weight:bold ;
`
const Date = styled.p`
font-size:15px ;
font-weight:bold ;
`
const MusicLoveCardItem= ({item}) => {
  return (
    <Container>
        <Image src={item.img}/>
        <Info>
            <Title>{item. musicTitle}</Title>
            <ArtistName>{item.artistName}</ArtistName>
            <Date>{item.releasedDate}</Date>
        </Info>
        
        
    </Container>
  )
}

export default MusicLoveCardItem