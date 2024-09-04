"use client"
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector'

import * as en from './locales/en/translation.json'
import * as es from './locales/es/translation.json'

const resources = {
	en: {
		translation: en
	},
	es: {
		translation: es
	}
};

i18n
	.use(initReactI18next)
	.use(LanguageDetector)
	.init({
		resources,
		lng: 'en', // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
		// you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
		// if you're using a language detector, do not define the lng option

		interpolation: {
			escapeValue: false
		}
	});

export default i18n;