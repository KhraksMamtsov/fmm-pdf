import "./Text.scss";
import clsx from "clsx";

export const Text = (props: { bold?: boolean; children?: string }) => (
  <p className={clsx("text", { "text--bold": props.bold ?? false })}>
    {props.children ?? " "}
  </p>
);
