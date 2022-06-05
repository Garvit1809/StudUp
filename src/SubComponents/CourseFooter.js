import React from 'react'
import styled from 'styled-components'
import Button from './Button'

const Section = styled.div`
width: 100vw;
height: 40vh;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
position: relative;
`

const Title = styled.h1`
/* margin: 0 auto; */
margin-top: 4rem;
margin-left: 4rem;
border-bottom: 6px solid black;
width: fit-content;
align-self: flex-start;
font-size: 4rem;
color: white;
`

const Buttons = styled.div`
/* margin-right: 5rem; */
position: absolute;
top: 14rem;
right: 5rem;
/* border: 2px solid green; */
width: 50%;
height: auto;
display: flex;
justify-content: space-between;
align-items: flex-end;

`

const CourseFooter = () => {
  return (
      <>
      <Section>
      <Title>
      Courses for u...
      </Title>
      <Buttons>
      <Button text="Web"/>
      <Button text="Ml"/>
      <Button text="Web3"/>
      <Button text="Data"/>
      <Button text="Management"/>
      </Buttons>
      </Section>
      </>
  )
}

export default CourseFooter