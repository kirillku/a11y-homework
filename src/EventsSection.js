import * as React from "react";
import {
  Cards,
  Card,
  CardImg,
  CardTitle,
  CardDescription,
} from "./components/cards";
import Link from "./components/Link";

import { Tabs, TabList, Tab, TabPanels, TabPanel } from "./components/tabs";
import { getCurrentLocale } from "./LanguageSwitch";

const getRandomImg = () => `https://picsum.photos/200/100?${Math.random()}`;

const today = new Date();
const tomorrow = new Date().setDate(today.getDate() + 1);

const DATE_FORMAT_OPTIONS = {
  month: "long",
  day: "numeric",
};

const EVENTS = [
  {
    title: "Святослав Рихтер в кругу друзей. Москва — Коктебель",
    img: getRandomImg(),
    description:
      "Текст о музее текст Текст о музее текст Текст о музее текст Текст о музее текст",
    until: today.toISOString().substring(0, 10),
    link: "#404",
  },
  {
    title: "Тату",
    img: getRandomImg(),
    description:
      "Текст о музее текст Текст о музее текст Текст о музее текст Текст о музее текст",
    until: "2021-10-26",
    link: "#404",
  },
  {
    title:
      "От Дюрера до Матисса. Избранные рисунки из собрания ГМИИ им. А.С. Пушкина",
    img: getRandomImg(),
    description:
      "Текст о музее текст Текст о музее текст Текст о музее текст Текст о музее текст",
    until: "2021-04-12",
    link: "#404",
  },
];

const EventCards = ({ events }) => (
  <Cards>
    {events.map((event) => (
      <Card key={event.title}>
        <CardImg src={event.img} alt={event.title} />
        <CardTitle>{event.title}</CardTitle>
        <CardDescription>
          Выставка до{" "}
          <time dateTime={new Date(event.until).toISOString()}>
            {new Date(event.until).toLocaleDateString(
              getCurrentLocale(),
              DATE_FORMAT_OPTIONS
            )}
          </time>
        </CardDescription>
        <CardDescription>{event.description}</CardDescription>
        <CardDescription>
          <Link href={event.link}>Купить билет</Link>
        </CardDescription>
      </Card>
    ))}
  </Cards>
);

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
          <EventCards events={EVENTS} />
        </TabPanel>
        <TabPanel>
          <EventCards
            events={EVENTS.filter(
              (event) => new Date(event.until) - today >= 0
            )}
          />
        </TabPanel>
        <TabPanel>
          <EventCards
            events={EVENTS.filter(
              (event) => new Date(event.until) - tomorrow >= 0
            )}
          />
        </TabPanel>
      </TabPanels>
    </Tabs>
  </section>
);

export default EventsSection;
