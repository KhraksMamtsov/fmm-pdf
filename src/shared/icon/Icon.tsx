import React from "react";
import { ArrowIcon } from "./icons/Arrow.icon";
import { BallIcon } from "./icons/Ball.icon";
import { CaseIcon } from "./icons/Case.icon";
import { TimerIcon } from "./icons/Timer.icon";
import { GoalIcon } from "./icons/Goal.icon";
import { CircularArrowIcon } from "./icons/CircularArrow.icon";
import { StonkArrowIcon } from "./icons/StonkArrow.icon";
import { BatteryIcon } from "./icons/Battery.icon";
import { CupIcon } from "./icons/Cup.icon";
import { TargetIcon } from "./icons/Target.icon";
import { ClockIcon } from "./icons/Clock.icon";

export type ExerciseIcon = "goal" | "timer" | "case" | "ball" | "arrow";
export type MircocylceIcon =
  | "battery"
  | "circular-arrow"
  | "cup"
  | "stonk-arrow"
  | "targer";

export type ClockIcon = "clock";
export type Icon = ExerciseIcon | MircocylceIcon | ClockIcon;

export interface IconProps {
  icon: Icon;
}

const map: Record<Icon, React.ReactNode> = {
  arrow: <ArrowIcon />,
  ball: <BallIcon />,
  case: <CaseIcon />,
  timer: <TimerIcon />,
  clock: <ClockIcon />,
  goal: <GoalIcon />,
  "circular-arrow": <CircularArrowIcon />,
  "stonk-arrow": <StonkArrowIcon />,
  battery: <BatteryIcon />,
  cup: <CupIcon />,
  targer: <TargetIcon />,
};
export const Icon = (props: IconProps) => map[props.icon];
