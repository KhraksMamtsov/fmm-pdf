import {
  ExercisePiece,
  ExercisePieceProps,
} from "../exercise-piece/ExercisePiece";
import "./Exercise.scss";

export interface ExerciseProps {
  headerLeft: string;
  header: string;
  imageSrc: string;
  leftPieces: Array<ExercisePieceProps>;
  rightPieces: Array<ExercisePieceProps>;
}

export const Exercise = (props: ExerciseProps) => (
  <div className="exercise">
    <div className="exercise__left">
      <div className="exercise__body">
        <div className="exercise__header">
          <span className="exercise__header-left">{props.headerLeft}</span>
          <span className="exercise__header-right">{props.header}</span>
        </div>
        <div className="exercise__main">
          {props.leftPieces.map((x, i) => (
            <ExercisePiece key={i} {...x} />
          ))}
        </div>
      </div>
    </div>
    <div className="exercise__right">
      <img src={props.imageSrc} className="exercise__image" />
      {props.rightPieces.map((x, i) => (
        <ExercisePiece key={i} {...x} />
      ))}
    </div>
  </div>
);
