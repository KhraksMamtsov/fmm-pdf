import { Header } from "../../../shared/header/Header";
import { Paragraph } from "../../../shared/paragraph/Paragraph";
import "./FilledArea.scss";

export interface FilledAreaProps {
  header: string;
  text?: Array<string>;
}
export const FilledArea = (props: FilledAreaProps) => (
  <div className="filled-area">
    <div className="filled-area__header">
      <Header n={2}>{props.header}</Header>
    </div>
    <div className="filled-area__area">
      {props.text?.map((x, i) => (
        <Paragraph key={i} children={x} />
      ))}
    </div>
  </div>
);
