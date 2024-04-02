'use client'
import React, { useState } from 'react';
import { Tab } from '@headlessui/react';

type TabItem = {
  id: number;
  title: string;
  content: string;
};

const tabsData: TabItem[] = [
  { id: 1, title: 'Item One', content: 'Item One Content' },
  { id: 2, title: 'Item Two', content: 'Item Two Content' },
  { id: 3, title: 'Item Three', content: 'Item Three Content' },
];

const TabsComponent: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<number>(tabsData[0].id);

  return (
    <div className="p-4">
      <Tab.Group selectedIndex={selectedTab - 1} onChange={(index: string | number) => setSelectedTab(tabsData[index].id)}>
        <Tab.List className="flex p-1 space-x-1 bg-blue-900/20 rounded-xl">
          {tabsData.map((tab) => (
            <Tab
              key={tab.id}
              className={({ selected }) =>
                `w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg
                ${selected ? 'bg-white shadow' : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'}`
              }
            >
              {tab.title}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {tabsData.map((tab) => (
            <Tab.Panel
              key={tab.id}
              className={`rounded-xl bg-gray-300 text-black p-3 ${selectedTab === tab.id ? 'block' : 'hidden'}`}
            >
              {tab.content}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default TabsComponent;
