import { Paragraph } from "../../../shared/paragraph/Paragraph.js";
import "./FillableMark.scss";

export const FillableMark = (props: { header: string }) => (
  <div className="fillable-mark">
    <div className="fillable-mark__header">
      <Paragraph>{props.header}</Paragraph>
    </div>
    <ul className="fillable-mark__mark">
      <li className="fillable-mark__mark-item"></li>
      <li className="fillable-mark__mark-item"></li>
      <li className="fillable-mark__mark-item"></li>
      <li className="fillable-mark__mark-item"></li>
      <li className="fillable-mark__mark-item"></li>
    </ul>
  </div>
);
