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
  .tabs-list{
    border-bottom:1px solid #ccc
  }
  .selected-tab-content {
    padding: 10px;
    border
  }
`;
function Tabs({ children, onChange, defaultKey = null, fallback }) {
  const [value, setValue] = useState(
    defaultKey ? defaultKey : children.find((el) => el.key).key
  );
  const customTabs = React.Children.map(children, (child, index) =>
    React.cloneElement(
      child,
      {
        hover: "#007bff",
        color: child.key == value && "#007bff",
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
      <div className="tabs-list">{customTabs}</div>
      <div className="selected-tab-content">
        {children.find((el) => el.key == value)?.props?.children || fallback}
      </div>
    </TabWraper>
  );
}

export default Tabs;
