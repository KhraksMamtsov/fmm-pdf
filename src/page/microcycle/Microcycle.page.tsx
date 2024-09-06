import { Icon, MircocylceIcon } from "../../shared/icon/Icon";
import { Page, PageProps } from "../../shared/page/Page";
import "./Microcycle.page.scss";
import {
  TrainingTable,
  TrainingTableProps,
} from "./trainings-table/TrainingTable";

export interface MicrocyclePageProps {
  page: Omit<PageProps, "children">;
  icon: MircocylceIcon;
  training: TrainingTableProps;
  columnsPerPage: number;
}

function splitProps(options: {
  props: TrainingTableProps;
  n: number;
}): Array<TrainingTableProps> {
  const { props, n } = options;

  // Распаковка исходных данных
  const { header, body, footer } = props;

  // Первый столбец (фиксированный для всех частей)
  const fixedHeaderColumn = header.map((row) => row[0]);
  const fixedBodyColumn = body.map((row) => row[0]);
  const fixedFooterColumn = footer[0];

  const splitTables: Array<TrainingTableProps> = [];

  const totalColumns = header[1].length;

  const steps = Math.ceil((totalColumns - 1) / n);

  for (let cursor = 1; cursor <= steps * n; cursor += n) {
    const currentHeaderColumns = header.map((row, rowIndex) => {
      const headerRow = row.slice(cursor, cursor + n);
      while (headerRow.length < n) {
        headerRow.push({ text: null });
      }
      return [fixedHeaderColumn[rowIndex], ...headerRow];
    });

    const currentBodyColumns = body.map((row, rowIndex) => {
      const bodyRow = row.slice(cursor, cursor + n);
      while (bodyRow.length < n) {
        bodyRow.push({ text: null });
      }
      return [fixedBodyColumn[rowIndex], ...bodyRow];
    });

    const currentFooterColumns = footer.slice(cursor, cursor + n);
    while (currentFooterColumns.length < n) {
      currentFooterColumns.push({ text: null });
    }

    splitTables.push({
      header: currentHeaderColumns as any,
      body: [...currentBodyColumns],
      footer: [fixedFooterColumn, ...currentFooterColumns],
    });
  }

  return splitTables;
}

export const MicrocyclePage = (props: MicrocyclePageProps) => {
  const splittenTrainings = splitProps({
    props: props.training,
    n: props.columnsPerPage,
  });

  return splittenTrainings.map((x, i) => (
    <Page icon={<Icon icon={props.icon} />} key={i} {...props.page}>
      <TrainingTable {...x} />
    </Page>
  ));
};
