import "./Paragraph.scss";
import clsx from "clsx";

export const Paragraph = (props: { children?: string; bold?: boolean }) => (
  <p
    className={clsx("paragraph", {
      "paragraph--bold": props.bold ?? false,
    })}
  >
    {props.children ?? " "}
  </p>
);
