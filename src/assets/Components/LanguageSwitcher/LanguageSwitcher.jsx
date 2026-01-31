import React, { useState } from "react";
import { useLanguage } from "../../../context/LanguageContext";
import "./LanguageSwitcher.css";

const LanguageSwitcher = () => {
    const { language, setLanguage } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);

    const languages = [
        { code: "uz", label: "O'zbek", flag: "🇺🇿" },
        { code: "en", label: "English", flag: "🇺🇸" },
        { code: "ru", label: "Русский", flag: "🇷🇺" },
    ];

    const currentLang = languages.find((l) => l.code === language);

    return (
        <div className="language-switcher">
            <button className="lang-btn" onClick={() => setIsOpen(!isOpen)}>
                <span className="lang-flag">{currentLang.flag}</span>
                <span className="lang-label">{currentLang.label}</span>
                <span className={`lang-arrow ${isOpen ? "open" : ""}`}>▾</span>
            </button>

            {isOpen && (
                <div className="lang-dropdown">
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            className={`lang-option ${lang.code === language ? "active" : ""}`}
                            onClick={() => {
                                setLanguage(lang.code);
                                setIsOpen(false);
                            }}
                        >
                            <span className="lang-flag">{lang.flag}</span>
                            <span className="lang-label">{lang.label}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LanguageSwitcher;
