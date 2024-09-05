import "./TrainingTable.scss";
import clsx from "clsx";

export interface TrainingTableProps {
  header: Array<{ text: string | null }>;
  body: Array<
    Array<{
      bold?: boolean;
      text: string | null;
      theme?: "green" | "red" | "pink" | "purple" | "blue";
    }>
  >;
  footer: Array<{ text: string | null }>;
}

export const TrainingTable = (props: TrainingTableProps) => (
  <table className="training-table">
    <thead className="training-table__header">
      <tr className="training-table__header-row">
        {props.header.map((headerCell, i) => (
          <th key={i} className="training-table__header-cell">
            {headerCell.text}
          </th>
        ))}
      </tr>
    </thead>
    <tbody className="training-table__body">
      {props.body.map((row, rowIndex) => (
        <tr key={rowIndex} className="training-table__body-row">
          {row.map((cell, cellIndex) => (
            <td
              key={cellIndex}
              className={clsx(
                "training-table__body-cell",
                { "training-table__body-cell--bold": cell.bold ?? false },
                cell.theme
                  ? `training-table__body-cell--color-${cell.theme}`
                  : null
              )}
            >
              {cell.text}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
    <tfoot className="training-table__footer">
      <tr className="training-table__footer-row">
        {props.footer.map((x, i) => (
          <td key={i} className="training-table__footer-cell">
            {x.text}
          </td>
        ))}
      </tr>
    </tfoot>
  </table>
);
