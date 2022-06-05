import React from "react";
import styled from "styled-components";
import DrawSvg from "../SubComponents/DrawSvg";

const Section = styled.div`
  min-height: 100vh;
  width: 100vw;
  position: relative;
`;

const Title = styled.div`
  font-size: 2rem;
  text-transform: capitalize;
  width: 80%;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  border-bottom: 4px solid;
  width: fit-content;
`;

const Container = styled.div`
  width: 70%;
  height: 200vh;
  /* background-color: lightblue; */
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const SvgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Items = styled.ul`
  list-style: none;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: lightblue; */

  &>*:nth-of-type(2n + 1){
      justify-content: start;

      div{
          border-radius: 50px 0 50px 0;
          text-align: right;
      }
      p{
        border-radius: 40px 0 40px 0;
      }
  }

  &>*:nth-of-type(2n){
      justify-content: end;

      div{
          border-radius: 0 50px 0 50px;
          text-align: left;
      }
      p{
        border-radius: 0 40px 0 40px;
      }
  }
`;

const Item = styled.li`
  width: 100%;
  height: 100%;
  display: flex;
`;

const ItemContainer = styled.div`
  width: 40%;
  height: fit-content;
  padding: 1rem;
  border: 3px solid black;
`;

const Box = styled.p`
  height: fit-content;
  background-color: grey;
  padding: 1rem;
  position: relative;
  border: 1px solid black;
`;

const SubTitle = styled.span`
display: block;
font-size: 2em;
text-transform: capitalize;
color: black;
`;

const Text = styled.h3`
display: block;
font-size: 0.875em;
text-transform: capitalize;
color: black;

font-weight: 400;
margin: 0.5rem 0;
`;

const RoadMapItem = ({ title, subtext }) => {
  return (
    <Item>
      <ItemContainer>
        <Box>
          <SubTitle>{title}</SubTitle>
          <Text>{subtext}</Text>
        </Box>
      </ItemContainer>
    </Item>
  );
};

const About = () => {
  return (
    <Section>
      <Title>About</Title>
      <Container>
        <SvgContainer>
          <DrawSvg />
        </SvgContainer>
        <Items>
        <Item>&nbsp;</Item>
          <RoadMapItem title="StudUp" subtext="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy" />
          <RoadMapItem title="Schedule" subtext="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy" />
          <RoadMapItem title="Courses" subtext="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy" />
          <RoadMapItem title="Notes" subtext="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy" />
          <RoadMapItem title="Chat" subtext="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy" />
        </Items>
      </Container>
    </Section>
  );
};

export default About;
