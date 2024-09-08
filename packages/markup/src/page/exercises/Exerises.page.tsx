import { Page, PageProps } from "../../shared/page/Page.js";
import { Exercise, ExerciseProps } from "./exercise/Exercise.js";
import "./Exercises.page.scss";

export interface ExercisesPageProps {
  page: Omit<PageProps, "children">;
  exercises: Array<ExerciseProps>;
}

export const ExercisesPage = (props: ExercisesPageProps) => (
  <Page {...props.page}>
    <div className="exercises-page">
      {props.exercises.map((x, i) => (
        <div key={i} className="exercises-page__section">
          <Exercise {...x} />
        </div>
      ))}
    </div>
  </Page>
);
