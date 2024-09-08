import clsx from "clsx";
import "./TrainingMap.scss";
import {
  TrainingFootballField,
  TrainingFootballFieldProps,
} from "./TrainingFootaballField.js";

export interface TrainingMapProps {
  field: TrainingFootballFieldProps;
  pieces: Array<{
    number: string;
    border?: boolean;
    side: "top" | "bottom";
    x: number;
    y: number;
  }>;
}

export const TrainingMap = (props: TrainingMapProps) => (
  <div className="training-map">
    <div className="training-map__field">
      <TrainingFootballField {...props.field} />
    </div>
    {props.pieces.map((x, i) => (
      <div
        key={i}
        style={{
          left: x.x * 100 + "%",
          bottom: x.y * 100 + "%",
        }}
        className="training-map__piece"
      >
        <div
          className={clsx(
            "training-map-piece",
            `training-map-piece--${x.side}`,
            {
              "training-map-piece--border": x.border ?? false,
            },
          )}
        >
          <div className="training-map-piece__number">{x.number}</div>
        </div>
      </div>
    ))}
  </div>
);
