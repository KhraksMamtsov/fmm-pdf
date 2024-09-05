import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "css-reset/reset.css";
import "./index.css";

import { TrainingReportPage } from "./page/training-report/TrainingReport.page.tsx";
import { TeamPage, TeamPageProps } from "./page/team/Team.page.tsx";
import { TrainingPage } from "./page/training/Training.page.tsx";
import { TrainingReportPageDataTest } from "./page/training-report/TrainingReport.data.ts";
import { TeamPageDataTest } from "./page/team/Team.data.ts";
import { TrainingDataTest } from "./page/training/Training.data.tsx";
import { TrainingReportFilledPage } from "./page/training-report-filled/TrainingReportFilled.page.tsx";
import { TrainingReportFilledPageDataTest } from "./page/training-report-filled/TrainingReportFilled.data.ts";
import { ExercisesPage } from "./page/exercises/Exerises.page.tsx";
import { ExercisesPageDataTest } from "./page/exercises/Exerises.data.ts";
import { MicrocyclePage } from "./page/microcycle/Microcycle.page.tsx";
import { MicrocyclePageDataTest } from "./page/microcycle/Microcycle.data.tsx";

export const TestApp = (
  <StrictMode>
    <MicrocyclePage {...MicrocyclePageDataTest} />
    <ExercisesPage {...ExercisesPageDataTest} />
    <TrainingReportFilledPage {...TrainingReportFilledPageDataTest} />
    <TrainingPage {...TrainingDataTest} />
    <TeamPage {...TeamPageDataTest} />
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
