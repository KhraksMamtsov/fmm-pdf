import { TrainingPageProps } from "./Training.page.js";

export const TrainingDataTest: TrainingPageProps = {
  page: {
    header: {
      super: { left: "тренировка" },
      main: {
        left: "Противодействие продвижению атаки",
        right: "Cоздано на ffm.kz",
      },
    },
  },
  description:
    "Противодействие развитию атаки, Противодействие продвижению атаки · Зона 2, Зона 3 · Вся ширина",
  side: {
    map: {
      field: {
        sections: [
          ["dark", "light", "dark"],
          ["light", "dark", "light"],
          ["dark", "light", "dark"],
        ],
      },
      pieces: [
        {
          number: "1",
          side: "bottom",
          border: true,
          x: 0.5,
          y: 0.05,
        },
        {
          number: "2",
          side: "bottom",
          x: 0.2,
          y: 0.2,
        },
        {
          number: "3",
          side: "bottom",
          border: true,
          x: 0.4,
          y: 0.2,
        },
        {
          number: "4",
          side: "bottom",
          x: 0.6,
          y: 0.2,
        },
        {
          number: "5",
          side: "bottom",
          border: true,
          x: 0.8,
          y: 0.2,
        },
        {
          number: "6",
          side: "bottom",
          x: 0.5,
          y: 0.35,
        },
        {
          number: "8",
          side: "bottom",
          border: true,
          x: 0.4,
          y: 0.5,
        },
        {
          number: "9",
          side: "bottom",
          x: 0.5,
          y: 0.4,
        },
        {
          number: "10",
          side: "bottom",
          border: true,
          x: 0.6,
          y: 0.5,
        },
        {
          number: "11",
          side: "bottom",
          x: 0.1,
          y: 0.6,
        },
        {
          number: "7",
          side: "bottom",
          border: true,
          x: 0.9,
          y: 0.6,
        },
        {
          number: "1",
          side: "top",
          x: 0.5,
          y: 0.95,
        },
        {
          number: "2",
          side: "top",
          border: true,
          x: 0.8,
          y: 0.8,
        },
        {
          number: "3",
          side: "top",
          x: 0.6,
          y: 0.8,
        },
        {
          number: "4",
          side: "top",
          border: true,
          x: 0.4,
          y: 0.8,
        },
        {
          number: "5",
          side: "top",
          x: 0.2,
          y: 0.8,
        },
        {
          number: "6",
          side: "top",
          border: true,
          x: 0.5,
          y: 0.65,
        },
        {
          number: "8",
          side: "top",
          x: 0.4,
          y: 0.5,
        },
        {
          number: "9",
          side: "top",
          border: true,
          x: 0.5,
          y: 0.6,
        },
        {
          number: "10",
          side: "top",
          x: 0.6,
          y: 0.5,
        },
        {
          number: "11",
          side: "top",
          border: true,
          x: 0.9,
          y: 0.4,
        },
        {
          number: "7",
          side: "top",
          x: 0.1,
          y: 0.4,
        },
      ],
    },
    exercises: {
      title: "Упражнения",
      list: [
        {
          icon: "timer",
          text: "Технический маршрут с мячом",
        },
        {
          icon: "case",
          text: "Противодействие продвижению атаки — позиционное упражнение",
        },
        { icon: "arrow", text: "Рондо 6×10: противодействие развитию атаки" },
        { icon: "goal", text: "Противодействие развитию атаки 6х11" },
        {
          icon: "ball",
          text: "Игра 11×11: противодействие развитию атаки / развитие атаки",
        },
      ],
    },
    sections: [
      {
        header: "ожидаемая продолжительность",
        text: "45 мин.",
      },
    ],
  },
  oneColSections: [
    [
      {
        header: "описание тренировки",
        text: "Отработка командных взаимодействий при противодействии построению и продвижению атаки соперника",
      },
      {
        header: "инвентарь",
        text: "Барьеры, ворота, конусы, лестницы, маленькие ворота, манишки, мячи, стойки, фишки",
      },
    ],
  ],
  twoColSections: [
    [
      {
        header: "возрастная группа",
        text: "U-17/18",
      },
    ],
    [
      {
        header: "стиль игры",
        text: "Активный прессинг",
      },
      {
        header: "фаза игры",
        text: "Без мяча",
      },
      {
        header: "зона",
        text: "2, 3",
      },
      {
        header: "детальная зона",
        text: "Левый фланг, Правый фланг",
      },
      {
        header: "схема игры команды",
        text: "4-3-3",
      },
      {
        header: "целевая группа",
        text: "2, 5, 6, 7, 8, 9, 10, 11",
      },
      {
        header: "схема игры соперника",
        text: "4-3-3",
      },
      {
        header: "нецелевая группа",
        text: "2, 4, 9",
      },
    ],
    [
      {
        header: "командные задачи",
        text: "Противодействие развитию атаки, Противодействие продвижению атаки",
      },
      {
        header: "Групповые задачи",
        text: "Ограничение пространства и времени (к мячу), Направление атаки соперника",
      },
      {
        header: "взаимодействия",
        text: "Перекрытие линий передач, Тень, Сохранение дистанции между игроками",
      },
      {
        header: "Индивидуальные задачи",
        text: "Ориентация на поле, Дистанция, Давление на игрока с мячом",
      },
    ],
  ],
};
