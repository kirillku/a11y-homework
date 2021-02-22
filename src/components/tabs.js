import {
  Tabs as ReachTabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@reach/tabs";
import "@reach/tabs/styles.css";
import styled from "styled-components";
import { buttonStyles } from "./Button";

export const Tabs = styled(ReachTabs)`
  [data-reach-tab-list] {
    background: none;
    margin-bottom: 50px;
  }

  [data-reach-tab] {
    text-decoration: underline;
    margin-right: 1em;
    padding: 0.5em calc(2em + 2px);
    font-size: 1.5em;
  }

  [data-reach-tab][data-selected] {
    border-bottom-color: unset;
    ${buttonStyles}
    padding: 0.5em 2em;
  }
`;

export { TabList, Tab, TabPanels, TabPanel };
