import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  display: flex;
  text-align: start;
  overflow: hidden;
  background-color: #192230;
  padding: 16px 16px;
  width: 450px;'
  border-radius: 8px;
  &:hover {
    background-color: #242C3C;
    cursor: pointer;
  }
`;

const CardImage = styled.img`
  height: 72px;
  width: 151px;
  padding: 1rem;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const CardTitle = styled.div`
  color: #f3f4f6;
  font-weight: 500;
  font-size: 18px;
`;

const CardKicker = styled.span`
  color: #a1abca;
  font-size: 12px;
  font-weight: 500;
`;

const CardPerson = styled.div`
  display: flex;
  padding: 1rem 0;
`;

const CardAvatar = styled.div`
  height: 28px;
  width: 28px;
  border: 1px solid #fff;
  border-radius: 50%;
  background-color: #c0c0c0;
  margin-right: 1rem;
`;

const CardAuthor = styled.span`
  color: #c9d3ef;
  font-size: 1rem;
`;

const CourseCardHorizontal = (props) => {
  return (
    <CardWrapper>
      <CardImage src={props.image} />
      <CardContent>
        <CardKicker>{props.kicker}</CardKicker>
        <CardTitle>{props.title}</CardTitle>
        <CardPerson>
          <CardAvatar />
          <CardAuthor>{props.name}</CardAuthor>
        </CardPerson>
      </CardContent>
    </CardWrapper>
  );
};

export default CourseCardHorizontal;
