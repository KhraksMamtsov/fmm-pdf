import { ExerciseIcon, Icon } from "../../../shared/icon/Icon";
import "./ExercisesTable.scss";
import clsx from "clsx";

export interface ExercisesTableProps {
  header: ReadonlyArray<{ text: string | null }>;
  body: ReadonlyArray<
    ReadonlyArray<
      [
        { text: string },
        ...ReadonlyArray<{
          text: string | null;
          icon?: ExerciseIcon;
        }>
      ]
    >
  >;
  footer: ReadonlyArray<{ text: string | null }>;
}

export const ExercisesTable = (props: ExercisesTableProps) => {
  return (
    <table className="exercises-table">
      <thead className="exercises-table__header">
        <tr className="exercises-table__header-row">
          {props.header.map((headerCell, i) => (
            <th key={i} className="exercises-table__header-cell">
              {headerCell.text}
            </th>
          ))}
        </tr>
      </thead>
      {props.body.map((bigRow, bigRowIndex) => (
        <tbody key={bigRowIndex} className="exercises-table__body">
          {bigRow.map((row, rowIndex) => {
            const [first, ...rest] = row;
            return (
              <tr key={rowIndex} className="exercises-table__body-row">
                <td className={clsx("exercises-table__body-cell", {})}>
                  {first.text}
                </td>
                {rest.map((cell, i) => (
                  <td
                    key={i}
                    className={clsx("exercises-table__body-cell", {})}
                  >
                    <div className="exercises-table__body-cell-content">
                      {!cell.icon ? null : (
                        <div className="exercises-table__body-cell-icon">
                          <Icon icon={cell.icon} />
                        </div>
                      )}
                      <div className="exercises-table__body-cell-text">
                        {cell.text}
                      </div>
                    </div>
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      ))}

      <tfoot className="exercises-table__footer">
        <tr className="exercises-table__footer-row">
          {props.footer.map((x, i) => (
            <td key={i} className="exercises-table__footer-cell">
              {x.text}
            </td>
          ))}
        </tr>
      </tfoot>
    </table>
  );
};

export function splitExercisesTableProps(options: {
  props: ExercisesTableProps;
  n: number;
}): Array<ExercisesTableProps> {
  const { props, n } = options;

  // Распаковка исходных данных
  const { header, body, footer } = props;

  // Первый столбец (фиксированный для всех частей)
  const fixedHeaderColumn = header[0];
  // const fixedBodyColumn = body.map((row) => row[0]);
  const fixedFooterColumn = footer[0];

  const splitTables: Array<ExercisesTableProps> = [];

  const totalColumns = header.length;

  const steps = Math.ceil((totalColumns - 1) / n);

  for (let cursor = 1; cursor <= steps * n; cursor += n) {
    const currentHeaderColumns = header.slice(cursor, cursor + n);
    while (currentHeaderColumns.length < n) {
      currentHeaderColumns.push({ text: null });
    }

    const currentBodyColumns = body.map((bigRow) => {
      const fixedBodyColumn = bigRow.map((row) => row[0]);
      return bigRow.map((row, rowIndex) => {
        const bodyRow = row.slice(cursor, cursor + n);
        while (bodyRow.length < n) {
          bodyRow.push({ text: null });
        }
        return [fixedBodyColumn[rowIndex], ...bodyRow];
      });
    });

    const currentFooterColumns = footer.slice(cursor, cursor + n);
    while (currentFooterColumns.length < n) {
      currentFooterColumns.push({ text: null });
    }

    splitTables.push({
      header: [fixedHeaderColumn, ...currentHeaderColumns],
      body: currentBodyColumns as any,
      footer: [fixedFooterColumn, ...currentFooterColumns],
    });
  }

  return splitTables;
}
