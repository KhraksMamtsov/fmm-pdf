import "./Header.scss";

export const Header = (props: { n?: 1 | 2; children?: string }) => (
  <div className={`header header--${props.n ?? 1}`}>{props.children}</div>
);
