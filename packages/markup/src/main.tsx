import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "css-reset/reset.css";
import "./index.css";

import { TrainingReportPage } from "./page/training-report/TrainingReport.page.js";
import { TeamPage, TeamPageProps } from "./page/team/Team.page.js";
import { TrainingPage } from "./page/training/Training.page.js";
import { TrainingReportPageDataTest } from "./page/training-report/TrainingReport.data.js";
import { TeamPageDataTest } from "./page/team/Team.data.js";
import { TrainingDataTest } from "./page/training/Training.data.js";
import { TrainingReportFilledPage } from "./page/training-report-filled/TrainingReportFilled.page.js";
import { TrainingReportFilledPageDataTest } from "./page/training-report-filled/TrainingReportFilled.data.js";
import { ExercisesPage } from "./page/exercises/Exerises.page.js";
import { ExercisesPageDataTest } from "./page/exercises/Exerises.data.js";
import { MicrocyclePage } from "./page/microcycle/Microcycle.page.js";
import { MicrocyclePageDataTest } from "./page/microcycle/Microcycle.data.js";

export const TestApp = (
  <StrictMode>
    <TrainingPage {...TrainingDataTest} />
    <MicrocyclePage {...MicrocyclePageDataTest} />
    <ExercisesPage {...ExercisesPageDataTest} />
    <TeamPage {...TeamPageDataTest} />
    <TrainingReportFilledPage {...TrainingReportFilledPageDataTest} />
    <TrainingReportPage {...TrainingReportPageDataTest} />
  </StrictMode>
);

declare global {
  interface Window {
    __FFM_PDF_DATA: null | {
      template: "team";
      team: TeamPageProps;
    };
    __FFM_PDF_RUN_APP: () => void;
  }
}
function getApp() {
  if (window.__FFM_PDF_DATA === null) {
    return TestApp;
  }
  switch (window.__FFM_PDF_DATA.template) {
    case "team": {
      return <TeamPage {...window.__FFM_PDF_DATA.team} />;
    }
  }
}

window.__FFM_PDF_RUN_APP = function runApp() {
  createRoot(document.getElementById("root")!).render(getApp());
};

if (window.__FFM_PDF_DATA === null) {
  createRoot(document.getElementById("root")!).render(getApp());
}
