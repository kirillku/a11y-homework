import * as React from "react";
import Button from "./components/Button";
import SkipLink from "./components/SkipLink";
import Nav from "./Nav";

const App = () => (
  <>
    <SkipLink href="#main">Перейти к основному контенту</SkipLink>
    <Nav />
    <main id="main" role="main">
      <h1 className="visually-hidden">
        Государственный музей изобразительных искусств имени А.С. Пушкина
      </h1>

      <a href="#about">Музей</a>
      <a href="#visitors">Посетителям</a>
      <a href="#events">Выставки и события</a>

      <section aria-labelledby="highlights">
        <h2 id="highlights" className="visually-hidden">
          Что нового
        </h2>
        <Button variant="primary">Купить билет</Button>
        <Button variant="primary">Стать другом</Button>
        <Button variant="primary">Онлайн-магазин</Button>
      </section>

      <section aria-labelledby="events">
        <h2 id="events">Выставки и события</h2>
      </section>
      <section aria-labelledby="about">
        <h2 id="about">Музей</h2>
      </section>
      <section aria-labelledby="videos">
        <h2 id="videos">Онлайн-трансляции</h2>
      </section>
      <section aria-labelledby="online-events">
        <h2 id="online-events">Экскурсии и лекции в прямом эфире</h2>
        <p>
          Вы можете присоединиться к нашим виртуальным мероприятиям — экскурсиям
          и лекциям для взрослых и детей, оплатив участие на сайте. Встречи
          будут проходить в прямом эфире на платформе Zoom; предусмотрен формат
          живого общения с возможностью задавать вопросы экскурсоводу (лектору).
          <a href="#404">Подробнее</a>.
        </p>
        <p>
          Мы будем благодарны за любое <a href="#404">пожертвование</a>. Все
          поступившие средства будут направлены на организацию онлайн-проектов
          для наших посетителей.
        </p>
      </section>
    </main>
    <footer>
      <section>
        <a href="#404">Посетителям с ограниченными возможностями</a>
        <a href="#404">Билеты и льготы</a>
        <a href="#404">Противодействие коррупции</a>
        Соц. сети
        <a href="mailto:support@arts-museum.ru">Почта</a>
        <a href="https://t.me/theartsmuseum">Телеграм</a>
        <a href="https://www.facebook.com/theartsmuseum/">Фейсбук</a>
      </section>
      <section>Подписка на новости</section>
    </footer>
  </>
);

export default App;
