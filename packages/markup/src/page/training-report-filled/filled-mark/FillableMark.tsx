import { Paragraph } from "../../../shared/paragraph/Paragraph.js";
import "./FilledMark.scss";

export interface FilledMarkProps {
  header: string;
  mark: string;
  bold?: boolean;
}

export const FilledMark = (props: FilledMarkProps) => (
  <div className="filled-mark">
    <div className="filled-mark__header">
      <Paragraph bold={props.bold}>{props.header}</Paragraph>
    </div>
    <div className="filled-mark__mark">{props.mark}</div>
  </div>
);
