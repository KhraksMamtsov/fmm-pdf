import { Header } from "../../../shared/header/Header";
import "./FillableArea.scss";

export const FillableArea = (props: { header: string }) => (
  <div className="fillable-area">
    <div className="fillable-area__header">
      <Header n={2}>{props.header}</Header>
    </div>
    <div className="fillable-area__area"></div>
  </div>
);
