import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { tabsData } from "../../constant";
 
export function UnderlineTabs() {
  const [activeTab, setActiveTab] = React.useState("html");

  return (
    <Tabs value={activeTab}>
      <TabsHeader
        className="rounded-none w-[60%]  bg-transparent p-0"
        indicatorProps={{
          className:
            "bg-transparent border-b-2 shadow-none rounded-none text-primary",
        }}
      >
        {tabsData.map(({ label, value }) => (
          <Tab
            key={value}
            value={value}
            onClick={() => setActiveTab(value)}
            className={activeTab === value ? "text-gray-900" : ""}
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {tabsData.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}