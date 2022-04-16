import styled from "styled-components";
import React, { useEffect, useState } from "react";

const StyledButton = styled.button`
  border-color: #eee0 #eee0 ${(props) => props.color || "transparent"} #eee0;
  overflow: hidden;
  color: ${(props) => props.color || "#000"};
  padding: 8px 20px;
  transition: border 0.4s;
  &:hover {
    color: ${(props) => props.hover};
  }
`;

function TabPane(props) {
  return <StyledButton {...props}>{props.children}</StyledButton>;
}

export default TabPane;
