import React from "react";
import { ArrowIcon } from "./icons/Arrow.icon";
import { BallIcon } from "./icons/Ball.icon";
import { CaseIcon } from "./icons/Case.icon";
import { ClockIcon } from "./icons/Clock.icon";
import { GoalIcon } from "./icons/Goal.icon";

export type ExerciseIcon = "goal" | "clock" | "case" | "ball" | "arrow";
export type Icon = ExerciseIcon;
export interface IconProps {
  icon: Icon;
}

const map: Record<Icon, React.ReactNode> = {
  arrow: <ArrowIcon />,
  ball: <BallIcon />,
  case: <CaseIcon />,
  clock: <ClockIcon />,
  goal: <GoalIcon />,
};
export const Icon = (props: IconProps) => map[props.icon];
