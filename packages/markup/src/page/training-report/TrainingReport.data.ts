import { TrainingReportPageProps } from "./TrainingReport.page.js";

export const TrainingReportPageDataTest: TrainingReportPageProps = {
  page: {
    header: {
      main: { left: "Отчет о тренировке" },
    },
    superHeader: {
      main: {
        left: "Противодействие продвижению атаки",
        right: "Cоздано на ffm.kz",
      },
      sub: {
        left: "31 авг 2024 09:00—10:00",
      },
    },
  },
  marks: ["Техника", "Тактика", "Фитнес", "Ментальность", "Общее впечатление"],
  areas: [
    "Что получилось",
    "Что не получилось",
    // "Что получилось",
    // "Что не получилось",
  ],
};
