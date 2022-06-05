import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import webCourseImg from '../assets/webCourseImg.jpg'
import CourseFooter from '../SubComponents/CourseFooter'

const Section = styled.div`
width: 100vw;
min-height: 100vh;
background-color: cornflowerblue;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
z-index: 10;
`

const CourseContainer = styled.div`
width: 75%;
/* height: auto; */
margin: 2rem auto;

display: flex;
justify-content: space-around;
align-items: center;
flex-wrap: wrap;
`

const Course = styled.div`
border: 2px solid black;
margin: 2rem 1rem;
border-radius: 20px;
padding: 1rem;
background-color: #EEEDDE;

z-index: 5;
backdrop-filter: blur(4px);
`

const ImageContainer = styled.div`
width: auto;
height: 10rem;
/* margin: 1rem 1rem; */
cursor: pointer;
border: 1px solid black;
/* border-radius: 20px; */

img{
  width: 100%;
  height: 10rem;
  transform: scale(1);
  transition: all 0.2s linear;


  &:hover{
    transform: translateY(-10%) scale(1.2);
}
}
`

const Title = styled.h1`
font-size: 1em;
display: flex;
justify-content: center;
align-items: center;
margin-top: 0.5rem;
font-weight: 600;
text-transform: uppercase;
`

const Author = styled.h3`
font-size: 1.25em;
display: flex;
/* justify-content: center; */
/* align-items: center; */
margin-top: 0.2rem;
color: rgba(32,32,32,0.6);
`

const CourseContent = ({ img, title=" ", author=" "}) => {

    return(
      <Course>
      <ImageContainer>
      <img src={img} alt="course-img" />
      </ImageContainer>
      <Title>
      {title}
      </Title>
      <Author>
      {author}
      </Author>
      </Course>
    )
}

const Courses = () => {
  return (
    <Section>
    <CourseFooter />
      <CourseContainer>
      <CourseContent img={webCourseImg} title="Web Development Course" author="-Andrew Ng" />
      <CourseContent img={webCourseImg} title="Web Development Course" author="-Andrew Ng"/>
      <CourseContent img={webCourseImg} title="Web Development Course" author="-Andrew Ng"/>
      <CourseContent img={webCourseImg} title="Web Development Course" author="-Andrew Ng"/>
      <CourseContent img={webCourseImg} title="Web Development Course" author="-Andrew Ng"/>
      <CourseContent img={webCourseImg} title="Web Development Course" author="-Andrew Ng"/>
      <CourseContent img={webCourseImg} title="Web Development Course" author="-Andrew Ng"/>
      <CourseContent img={webCourseImg} title="Web Development Course" author="-Andrew Ng"/>
      <CourseContent img={webCourseImg} title="Web Development Course" author="-Andrew Ng"/>
      <CourseContent img={webCourseImg} title="Web Development Course" author="-Andrew Ng"/>
      <CourseContent img={webCourseImg} title="Web Development Course" author="-Andrew Ng"/>
      <CourseContent img={webCourseImg} title="Web Development Course" author="-Andrew Ng"/>
      <CourseContent img={webCourseImg} title="Web Development Course" author="-Andrew Ng"/>
      <CourseContent img={webCourseImg} title="Web Development Course" author="-Andrew Ng"/>
      <CourseContent img={webCourseImg} title="Web Development Course" author="-Andrew Ng"/>
      </CourseContainer>
    </Section>
  )
}

export default Courses