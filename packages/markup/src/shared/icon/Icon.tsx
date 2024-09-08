import React from "react";
import { ArrowIcon } from "./icons/Arrow.icon.js";
import { BallIcon } from "./icons/Ball.icon.js";
import { CaseIcon } from "./icons/Case.icon.js";
import { TimerIcon } from "./icons/Timer.icon.js";
import { GoalIcon } from "./icons/Goal.icon.js";
import { CircularArrowIcon } from "./icons/CircularArrow.icon.js";
import { StonkArrowIcon } from "./icons/StonkArrow.icon.js";
import { BatteryIcon } from "./icons/Battery.icon.js";
import { CupIcon } from "./icons/Cup.icon.js";
import { TargetIcon } from "./icons/Target.icon.js";
import { ClockIcon } from "./icons/Clock.icon.js";

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
