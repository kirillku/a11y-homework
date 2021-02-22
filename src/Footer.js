import * as React from "react";
import styled from "styled-components";
import EmailIcon from "./components/EmailIcon";
import FacebookIcon from "./components/FacebookIcon";
import IconButton from "./components/IconButton";
import TelegramIcon from "./components/TelegramIcon";
import NewsletterForm from "./NewsletterForm";
import theme from "./theme";

const StyledFooter = styled.footer`
  background: #f1f1f1;
  height: 400px;
  padding: 80px 0;

  h1,
  h2 {
    font-size: 1.5em;
  }
`;

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1000px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 40px;
  grid-template-areas:
    "extra-links newsletter"
    "social-links newsletter";

  .newsletter {
    grid-area: newsletter;
  }

  h2 {
    margin-top: 0;
  }
`;

const ExtraLinksSection = styled.section`
  grid-area: extra-links;

  a {
    display: block;
    text-decoration: none;
    color: black;
    margin-bottom: 1em;

    :hover {
      text-decoration: underline;
      color: ${theme.primary};
    }
  }
`;

const SocialLinksSection = styled.section`
  grid-area: social-links;

  a {
    margin-right: 1em;
    color: black;

    :hover {
      color: ${theme.primary};
    }
  }
`;

const NewsletterSection = styled.section`
  grid-area: newsletter;

  form {
    display: flex;
  }
`;

const Footer = () => (
  <StyledFooter>
    <Wrapper>
      <ExtraLinksSection aria-labelledby="extra-links">
        <h2 id="extra-links" className="visually-hidden">
          Дополнительные ссылки
        </h2>
        <a href="#404">Посетителям с ограниченными возможностями</a>
        <a href="#404">Билеты и льготы</a>
        <a href="#404">Противодействие коррупции</a>
      </ExtraLinksSection>
      <SocialLinksSection aria-labelledby="social-links">
        <h2 id="social-links" aria-label="Социальные сети">
          Соц. сети
        </h2>
        <IconButton as="a" href="mailto:support@arts-museum.ru">
          <EmailIcon aria-label="E-mail" />
        </IconButton>
        <IconButton as="a" href="https://t.me/theartsmuseum">
          <TelegramIcon aria-label="Telegram" />
        </IconButton>
        <IconButton as="a" href="https://www.facebook.com/theartsmuseum/">
          <FacebookIcon aria-label="Facebook" />
        </IconButton>
      </SocialLinksSection>
      <NewsletterSection aria-labelledby="newsletter">
        <h2 id="newsletter">Подписка на новости</h2>
        <NewsletterForm />
      </NewsletterSection>
    </Wrapper>
  </StyledFooter>
);

export default Footer;
