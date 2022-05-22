import React from 'react'
import { AllCatgories } from '../Data'
import styled from 'styled-components'
import CategoryItem from './CategoryItem'
const Container = styled.div`
  display:flex;
  padding:20px 20px 0px 20px;
  justify-content:space-between;
`
const Tetxt = styled.h3`
padding:20px 20px 0px 20px ;

`
const Categories = () => {
  return (
      <>
      <Tetxt>All Categories</Tetxt>
      <Container>
        {
          
            AllCatgories.map(item=>(
           <CategoryItem item={item}/>
            ))
        }
    </Container>
      </>
    
  )
}

export default Categories