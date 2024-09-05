import { Page, PageProps } from "../../shared/page/Page";
import "./Microcycle.page.scss";
import {
  TrainingTable,
  TrainingTableProps,
} from "./trainings-table/TrainingTable";

export interface MicrocyclePageProps {
  page: Omit<PageProps, "children">;
  training: TrainingTableProps;
}

export const MicrocyclePage = (props: MicrocyclePageProps) => (
  <Page {...props.page}>
    <TrainingTable {...props.training} />
  </Page>
);
