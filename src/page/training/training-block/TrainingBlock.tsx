import { Paragraph } from "../../../shared/paragraph/Paragraph";
import { SubHeader } from "../../../shared/sub-header/SubHeader";
import "./TrainingBlock.scss";

export interface TrainingBlockProps {
  header: string;
  children: string;
}

export const TrainingBlock = (props: TrainingBlockProps) => (
  <div className="training-block">
    <div className="training-block__header">
      <SubHeader>{props.header}</SubHeader>
    </div>
    <div className="training-block__body">
      <Paragraph>{props.children}</Paragraph>
    </div>
  </div>
);
