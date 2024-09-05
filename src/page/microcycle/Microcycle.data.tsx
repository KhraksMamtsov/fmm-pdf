import { MicrocyclePageProps } from "./Microcycle.page";

export const MicrocyclePageDataTest: MicrocyclePageProps = {
  page: {
    orientation: "horizontal",
    header: {
      main: {
        left: "Прогрессивный контроль для построения, развития и завершения атаки",
      },
    },
    // footer: {
    //   main: {
    //     left: "Противодействие продвижению атаки",
    //     right: "Cоздано на ffm.kz",
    //   },
    //   sub: {
    //     left: "31 авг 2024 09:00—10:00",
    //     right: "1/1",
    //   },
    // },
  },
  training: {
    header: [
      { text: "2004" },
      { text: "30 авг ПТ" },
      { text: "31 авг СБ" },
      { text: "1 сен ВС" },
      { text: "2 сен ПН" },
      { text: "3 сен ВТ" },
    ],
    body: [
      [
        { text: "Напр." },
        { text: "Восстановление", bold: true, theme: "green" },
        { text: "Выносливость", bold: true, theme: "red" },
        { text: "Сила", bold: true, theme: "blue" },
        { text: "Скорость", bold: true, theme: "purple" },
        { text: "Активация", bold: true, theme: "pink" },
      ],
      [
        { text: "Назв. трен." },
        { text: "Построение атаки" },
        { text: "Продвижение атаки по центру" },
        { text: "Противодействие продвижению атаки" },
        { text: "Проникновение и завершение атаки по флангу" },
        { text: "Противодействие завершению атаки" },
      ],
    ],
    footer: [
      {
        text: null,
      },
      {
        text: "1 день",
      },
      {
        text: "2 день",
      },
      {
        text: "3 день",
      },
      {
        text: "4 день",
      },
      {
        text: "5 день",
      },
    ],
  },
};
