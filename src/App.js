import * as React from "react";
import Button from "./components/Button";
import SkipLink from "./components/SkipLink";
import Footer from "./Footer";
import Header from "./Header";

const App = () => (
  <>
    <SkipLink href="#main">Перейти к основному контенту</SkipLink>
    <Header />
    <main id="main" role="main" aria-labelledby="main-header">
      <h1 id="main-header" className="visually-hidden">
        Государственный музей изобразительных искусств имени А.С. Пушкина
      </h1>

      <section aria-labelledby="highlights">
        <h2 id="highlights" className="visually-hidden">
          Что нового
        </h2>
        <div
          style={{
            width: "100%",
            height: 600,
            border: "1px solid orange",
            background: "wheat",
          }}
        >
          CARUSEL
        </div>
        <Button variant="primary" size="small">
          Купить билет
        </Button>
        <Button variant="primary" size="small">
          Стать другом
        </Button>
        <Button variant="primary" size="small">
          Онлайн-магазин
        </Button>
      </section>

      <section aria-labelledby="events">
        <h2 id="events">Выставки и события</h2>
      </section>
      <section aria-labelledby="about">
        <h2 id="about">Музей</h2>
      </section>
      <section aria-labelledby="videos">
        <h2 id="videos">Онлайн-трансляции</h2>
        <iframe
          width={1000}
          height={1000 / (16 / 9)}
          src="https://www.youtube.com/embed/5qRR-5H1XgU"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Ай Вейвей: движение к общечеловеческому"
          aria-label="Ай Вейвей: движение к общечеловеческому"
        />
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
    <Footer />
  </>
);

export default App;
