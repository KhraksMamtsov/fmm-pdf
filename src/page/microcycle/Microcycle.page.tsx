import { Icon, MircocylceIcon } from "../../shared/icon/Icon";
import { Page, PageProps } from "../../shared/page/Page";
import {
  ExercisesTable,
  ExercisesTableProps,
  splitExercisesTableProps,
} from "./exercises-table/ExercisesTable";
import "./Microcycle.page.scss";
import {
  splitTrainingTableProps,
  TrainingTable,
  TrainingTableProps,
} from "./trainings-table/TrainingTable";

export interface MicrocyclePageProps {
  page: Omit<PageProps, "children">;
  icon: MircocylceIcon;
  training: TrainingTableProps;
  exercises: ExercisesTableProps;
  columnsPerPage: number;
}

export const MicrocyclePage = (props: MicrocyclePageProps) => {
  const splittenTrainings = splitTrainingTableProps({
    props: props.training,
    n: props.columnsPerPage,
  });

  const splittenExercises = splitExercisesTableProps({
    props: props.exercises,
    n: props.columnsPerPage,
  });
  console.log(splittenExercises);
  return (
    <>
      {splittenExercises.map((x, i) => (
        <Page icon={<Icon icon={props.icon} />} key={i} {...props.page}>
          <ExercisesTable {...x} />
        </Page>
      ))}
      {splittenTrainings.map((x, i) => (
        <Page icon={<Icon icon={props.icon} />} key={i} {...props.page}>
          <TrainingTable {...x} />
        </Page>
      ))}
    </>
  );
};
