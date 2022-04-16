import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Tabs from "./components/Tabs";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Tabs
    onChange={(key, title) => {
      console.log({ key, title });
    }}
    fallback="no data"
    defaultKey="2"
    tabPosition="top"
  >
    <Tabs.TabPane key={1} title={"Tab 1"}>
      Content of tab 1
    </Tabs.TabPane>
    <Tabs.TabPane key={2} title={"Tab 2"}>
      Content of tab 2
    </Tabs.TabPane>
    <Tabs.TabPane key={3} title={"Tab 3"}>
      Content of tab 3
    </Tabs.TabPane>
  </Tabs>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
