import "./SubHeader.scss";
import clsx from "clsx";

export const SubHeader = (props: {
  size?: "normal" | "small";
  bold?: boolean;
  children?: string;
}) => (
  <div
    className={clsx(`sub-header`, `sub-header--${props.size ?? "normal"}`, {
      "sub-header--bold": props.bold ?? false,
    })}
  >
    {props.children}
  </div>
);
