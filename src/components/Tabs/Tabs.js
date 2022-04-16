import "./tabs.css";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const positionList =
  {
    top: "row",
    left: "column",
    right: "column",
    bottom: "row",
  } || "column";
const positionContainer =
  {
    top: "column",
    left: "row",
    right: "row-reverse",
    bottom: "column-reverse",
  } || "column";
console.log(positionContainer["dsfsdf"]);

const positionBorder =
  {
    top: "bottom",
    left: "right",
    right: "left",
    bottom: "top",
  } || "bottom";
const TabWraper = styled.div`
  border-color: #eee0 #eee0 ${(props) => props.color} #eee0;
  padding: 8px 20px;
  display: flex;
  flex-direction: ${(props) => positionContainer[props.tabPosition]};
  gap: 5px;
  .tabs-list {
    border-${(props) => positionBorder[props.tabPosition]}: 1px solid #ccc;
    display: flex;
    gap: 5px;
    flex-direction: ${(props) => positionList[props.tabPosition]};
    padding: 0;
  }
  .selected-tab-content {
    padding: 10px;
  }
`;
function Tabs({
  children,
  onChange,
  defaultKey = null,
  fallback,
  tabPosition,
}) {
  const [value, setValue] = useState(
    defaultKey ? defaultKey : children.find((el) => el.key).key
  );
  const customTabs = React.Children.map(children, (child, index) =>
    React.cloneElement(
      child,
      {
        tabPosition,
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
    <TabWraper tabPosition={tabPosition}>
      <div className="tabs-list">{customTabs}</div>
      <div className="selected-tab-content">
        {children.find((el) => el.key == value)?.props?.children || fallback}
      </div>
    </TabWraper>
  );
}

export default Tabs;
