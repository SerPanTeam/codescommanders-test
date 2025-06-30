import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        home: {
          title: "Home",
          welcome: "Welcome, ",
        },
        login: {
          signIn: "Sign In",
          usernamePlaceholder: "Username",
          send: "Send",
          userNotFound: "User not found!",
          enterUsername: "Enter username",
        },
        nav: {
          logOut: "Log Out",
        },
        post: {
          comments: "Comments",
          back: "Back",
          notFound: "Post not found",
          loadingComments: "Loading comments...",
        },
        global: {
          loading: "Loading...",
          error: "Error!",
        },
      },
    },
    ru: {
      translation: {
        home: {
          title: "Главная",
          welcome: "Добро пожаловать, ",
        },
        login: {
          signIn: "Войти",
          usernamePlaceholder: "Имя пользователя",
          send: "Отправить",
          userNotFound: "Пользователь не найден!",
          enterUsername: "Введите имя пользователя",
        },
        nav: {
          logOut: "Выйти",
        },
        post: {
          comments: "Комментарии",
          back: "Назад",
          notFound: "Пост не найден",
          loadingComments: "Загрузка комментариев...",
        },
        global: {
          loading: "Загрузка...",
          error: "Ошибка!",
        },
      },
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
