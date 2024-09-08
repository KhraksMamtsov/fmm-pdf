import { ClockIcon, ExerciseIcon, Icon } from "../../../shared/icon/Icon";
import { SubHeader } from "../../../shared/sub-header/SubHeader";
import "./ExercisePiece.scss";

export interface ExercisePieceProps {
  icon?: ExerciseIcon;
  header: string;
  text: string;
  textIcon?: ClockIcon;
}

export const ExercisePiece = (props: ExercisePieceProps) => (
  <div className="exercise-piece">
    {!props.icon ? null : (
      <div className="exercise-piece__icon">
        <Icon icon={props.icon} />
      </div>
    )}
    <div className="exercise-piece__content">
      <div className="exercise-piece__header">
        <SubHeader size="small">{props.header}</SubHeader>
      </div>
      <div className="exercise-piece__body">
        {!props.textIcon ? null : (
          <div className="exercise-piece__text-icon">
            <Icon icon={props.textIcon} />
          </div>
        )}
        <div className="exercise-piece__text">{props.text}</div>
      </div>
    </div>
  </div>
);
