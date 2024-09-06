import "./TrainingTable.scss";
import clsx from "clsx";

export interface TrainingTableProps {
  header: [
    Array<{ text: string | null }>,
    [
      { text: string | null },
      ...Array<{
        text: string | null;
        theme: "green" | "red" | "pink" | "purple" | "blue";
      }>
    ],
    Array<{ text: string | null }>
  ];
  body: Array<Array<{ text: string | null }>>;
  footer: Array<{ text: string | null }>;
}

export const TrainingTable = (props: TrainingTableProps) => {
  const renderHeaderMain = (props: TrainingTableProps["header"][1]) => {
    const [first, ...rest] = props;

    return (
      <>
        <th className={clsx("training-table__header-cell")}>{first.text}</th>
        {rest.map((headerCell, i) => (
          <th
            key={i}
            className={clsx(
              "training-table__header-cell",
              "training-table__header-cell--main",
              `training-table__header-cell--color-${headerCell.theme}`
            )}
          >
            {headerCell.text}
          </th>
        ))}
      </>
    );
  };

  return (
    <table className="training-table">
      <thead className="training-table__header">
        <tr className="training-table__header-row">
          {props.header[0].map((headerCell, i) => (
            <th
              key={i}
              className="training-table__header-cell training-table__header-cell--sup"
            >
              {headerCell.text}
            </th>
          ))}
        </tr>
        <tr className="training-table__header-row">
          {renderHeaderMain(props.header[1])}
        </tr>
        <tr className="training-table__header-row">
          {props.header[2].map((headerCell, i) => (
            <th
              key={i}
              className="training-table__header-cell training-table__header-cell--sub"
            >
              {headerCell.text}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="training-table__body">
        {props.body.map((row, rowIndex) => (
          <tr key={rowIndex} className="training-table__body-row">
            {row.map((cell, i) => (
              <td key={i} className={clsx("training-table__body-cell")}>
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
};
