import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  overflow: hidden;
  background-color: #192230;
  padding: 24px 16px;
  width: 280px;'
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
`;

const CardTitle = styled.h1`
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
  align-items: center;
  justify-content: center;
  padding: 1rem;
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

const CourseCardVertical = (props) => {
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

export default CourseCardVertical;
