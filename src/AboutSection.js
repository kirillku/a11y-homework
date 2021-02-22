import * as React from "react";
import {
  Card,
  CardDescription,
  CardImg,
  Cards,
  CardTitle,
} from "./components/cards";
import Link from "./components/Link";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "./components/tabs";

const getRandomImg = () =>
  `https://placeimg.com/200/100/arch/grayscale?${Math.random()}`;

const BUILDINGS = [
  {
    title: "Мемориальная Квартира С.Т. Рихтера",
    img: getRandomImg(),
    address: "ул. Большая Бронная, 2/6, 16 этаж, кв. 58",
    link: "#404",
  },
  {
    title: "ЦЭВ «Мусейон»",
    img: getRandomImg(),
    address: "Колымажный пер., 6/2, 3 (вход с Малого Знаменского переулка)",
    link: "#404",
  },
  {
    title: "Усадьба Лопухиных",
    img: getRandomImg(),
    address: "Малый Знаменский пер., 3/5с4",
    link: "#404",
  },
  {
    title: "Учебный Музей",
    img: getRandomImg(),
    address: "ул. Чаянова, 15",
    link: "#404",
  },
  {
    title: "Отдел Личных Коллекций",
    img: getRandomImg(),
    address: "ул. Волхонка, 10",
    link: "#404",
  },
  {
    title: "Галерея",
    img: getRandomImg(),
    address: "ул. Волхонка, 14",
    link: "#404",
  },
];

const AboutSection = () => (
  <section aria-labelledby="about">
    <h2 id="about">Музей</h2>

    <Tabs>
      <TabList>
        <Tab>Здания</Tab>
        <Tab>История</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Cards>
            {BUILDINGS.map((building) => (
              <Card key={building.title}>
                <CardImg src={building.img} alt={building.title} />
                <CardTitle uppercase>{building.title}</CardTitle>
                <CardDescription>{building.address}</CardDescription>
                <CardDescription>
                  <Link href={building.link}>Подробнее</Link>
                </CardDescription>
              </Card>
            ))}
          </Cards>
        </TabPanel>
        <TabPanel>
          <p>
            Государственный музей изобразительных искусств имени А.С. Пушкина –
            одно из крупнейших в России художественных собраний зарубежного
            искусства с древнейших времен до наших дней.
          </p>

          <p>
            В современной экспозиции представлены обширная учебная коллекция
            тонированных гипсовых слепков с произведений Античности, Средних
            веков и эпохи Возрождения, а также собрание подлинных произведений
            живописи, скульптуры, графики и декоративно-прикладного искусства.
          </p>
          <p>
            В залах первого этажа Главного здания представлены: произведения
            искусства Древнего Египта, Античности, собрание европейской живописи
            VIII–XVIII веков; два зала – Итальянский и Греческий дворики –
            занимают слепки. На втором этаже Главного здания в залах размещены
            слепки произведений искусства Древней Греции, Рима, Средних веков и
            Возрождения.
          </p>
          <p>
            В начале 2017 года музей определил новое направление своей
            деятельности – Пушкинский XXI, – ориентированное на современное
            российское и западное искусство во всех аспектах – выставочном,
            образовательном и исследовательском. Таким образом, ГМИИ им. А.С.
            Пушкина представляет собой открытую, интерактивную сцену,
            демонстрирующую развитие мировой культуры с древности до наших дней,
            живое, знакомое с детства пространство для получения знаний и
            общения.
          </p>
          <p>
            <a href="#404">Читать далее</a>
          </p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  </section>
);

export default AboutSection;
