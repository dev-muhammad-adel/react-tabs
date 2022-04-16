import "./tabs.css";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const TabWraper = styled.div`
  border-color: #eee0 #eee0 ${(props) => props.color} #eee0;
  overflow: hidden;
  padding: 8px 20px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
function Tabs({ children, onChange, defaultKey = null }) {
  const [value, setValue] = useState(
    defaultKey ? defaultKey : children.find((el) => el.key).key
  );
  const content = React.Children.map(children, (child, index) =>
    React.cloneElement(
      child,
      {
        hover: "#26c5ff8c",
        color: child.key == value && "#26c5ff8c",
        disabled: !child.key,
        onClick: () => {
          onChange(child.key, child.props.title);
          setValue(child.key);
        },
      },
      child.props.title
    )
  );

  return (
    <TabWraper>
      <div>{content}</div>
      <div>
        {value ? children.find((el) => el.key == value).props.children : "no"}
      </div>
    </TabWraper>
  );
}

export default Tabs;
