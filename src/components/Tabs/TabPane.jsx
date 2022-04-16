import styled from "styled-components";
import React, { useEffect, useState } from "react";
const positionBorder = () =>
  ({
    top: "bottom",
    left: "right",
    right: "left",
    bottom: "top",
  } || "bottom");
const StyledButton = styled.button`
  overflow: hidden;
  all: unset;
  border-${(props) => positionBorder()[props.tabPosition]}: 2px solid ${(
  props
) => props.color || "transparent"};
  color: ${(props) => props.color || "#000"};
  padding: 9px;
  transition: border, color;
  transition-duration: 0.5s;
  transition-timing-function: ease;

  cursor: pointer;
  &:hover {
    color: ${(props) => props.hover};
  }
`;

function TabPane(props) {
  return <StyledButton {...props}>{props.children}</StyledButton>;
}

export default TabPane;
