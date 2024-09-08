import "./Paragraph.scss";
import clsx from "clsx";

export const Paragraph = (props: {
  children?: string;
  bold?: boolean;
  size?: "normal" | "small";
}) => (
  <p
    className={clsx("paragraph", `paragraph--${props.size ?? "normal"}`, {
      "paragraph--bold": props.bold ?? false,
    })}
  >
    {props.children ?? " "}
  </p>
);
