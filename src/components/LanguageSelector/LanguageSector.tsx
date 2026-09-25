import React, { useEffect, useRef, useState } from "react";
import { Check, ChevronDown, Globe2, Search, X } from "lucide-react";

import { languages } from "../../locales/languages";
import { useLanguage } from "../../context/Languagecontext";

import "./LanguageSelector.css";

const LanguageSelector: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();

  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const selectorRef = useRef<HTMLDivElement>(null);

  const currentLanguage =
    languages.find((item) => item.code === language) || languages[0];

  const filteredLanguages = languages.filter((item) => {
    const value = `${item.name} ${item.nativeName}`.toLowerCase();

    return value.includes(search.toLowerCase());
  });

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        selectorRef.current &&
        !selectorRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const handleLanguageChange = (code: string) => {
    setLanguage(code);
    setOpen(false);
    setSearch("");
  };

  return (
    <div className="tw-language" ref={selectorRef}>
      <button
        className={`tw-language-trigger ${
          open ? "tw-language-trigger-active" : ""
        }`}
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-haspopup="dialog"
      >
        <Globe2 size={17} strokeWidth={1.8} />

        <span className="tw-language-code">
          {currentLanguage.code.toUpperCase()}
        </span>

        <ChevronDown
          size={15}
          className={`tw-language-chevron ${
            open ? "tw-language-chevron-open" : ""
          }`}
        />
      </button>

      {open && (
        <div className="tw-language-panel">
          <div className="tw-language-panel-header">
            <div className="tw-language-title-wrapper">
              <div className="tw-language-icon">
                <Globe2 size={18} />
              </div>

              <div>
                <h3>{t.language.title}</h3>
                <p>{t.language.subtitle}</p>
              </div>
            </div>

            <button
              className="tw-language-close"
              onClick={() => setOpen(false)}
              aria-label="Close language selector"
            >
              <X size={17} />
            </button>
          </div>

          <div className="tw-language-search">
            <Search size={17} />

            <input
              type="text"
              placeholder={t.language.search}
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              autoFocus
            />
          </div>

          <div className="tw-language-list">
            {filteredLanguages.map((item) => {
              const active = item.code === language;

              return (
                <button
                  key={item.code}
                  className={`tw-language-option ${
                    active ? "tw-language-option-active" : ""
                  }`}
                  onClick={() => handleLanguageChange(item.code)}
                >
                  <span className="tw-language-flag">
                    {item.flag}
                  </span>

                  <span className="tw-language-name">
                    <strong>{item.nativeName}</strong>
                    <small>{item.name}</small>
                  </span>

                  {active && (
                    <span className="tw-language-check">
                      <Check size={15} strokeWidth={2.5} />
                    </span>
                  )}
                </button>
              );
            })}

            {filteredLanguages.length === 0 && (
              <div className="tw-language-empty">
                <Globe2 size={25} />
                <span>No language found</span>
              </div>
            )}
          </div>

          <div className="tw-language-footer">
            <span>
              {languages.length} languages available
            </span>

            <span className="tw-language-status">
              ● {currentLanguage.nativeName}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;