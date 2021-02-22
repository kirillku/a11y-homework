import * as React from "react";
import styled from "styled-components";
import Button from "./components/Button";

const Wrapper = styled.div`
  margin: 0 1em;
`;

const LanguageButton = styled(Button)`
  margin: 0 0.25em;
  padding: 0 0.75em;
  height: 100%;
  display: inline-flex;
  align-items: center;
  text-transform: uppercase;

  :not(:disabled) {
    text-decoration: underline;
  }
`;

const LOCALES = [
  { value: "ru", label: "Русский", href: "/" },
  { value: "en", label: "English", href: "/en" },
];

const LanguageSwith = () => {
  const currentLocale = window.location.pathname.includes("/en") ? "en" : "ru";
  return (
    <Wrapper>
      {LOCALES.map((locale) => {
        const props =
          locale.value === currentLocale
            ? { disabled: true }
            : { as: "a", href: locale.href, hreflang: locale.value };

        return (
          <LanguageButton
            key={locale.value}
            aria-label={locale.label}
            {...props}
          >
            {locale.value}
          </LanguageButton>
        );
      })}
    </Wrapper>
  );
};

export default LanguageSwith;
