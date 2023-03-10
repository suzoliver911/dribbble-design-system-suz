import React from "react";
import styled from "styled-components";

const BrowseButton = styled.button`
  background-color: #111827;
  font-size: 20px;
  font-weight: 500;
  color: #c5c8cd;
  padding: 1.125rem 1.5rem;
  border: none;
  border-bottom: 2px solid #35373a;
  &:hover {
    background-color: #182032;
    cursor: pointer;
  }
`;
const UnderlineButton = (props) => {
  return <BrowseButton>{props.label}</BrowseButton>;
};

export default UnderlineButton;
