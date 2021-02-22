import * as React from "react";
import styled from "styled-components";

import { Tabs, TabList, Tab, TabPanels, TabPanel } from "./components/tabs";

const EventsSection = () => (
  <section aria-labelledby="events">
    <h2 id="events">Выставки и события</h2>

    <Tabs>
      <TabList>
        <Tab>Все</Tab>
        <Tab>Сегодня</Tab>
        <Tab>Завтра</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <p>one!</p>
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
        <TabPanel>
          <p>three!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  </section>
);

export default EventsSection;
