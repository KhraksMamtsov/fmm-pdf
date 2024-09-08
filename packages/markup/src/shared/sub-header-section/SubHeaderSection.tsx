import "./SubHeader.css";

export const SubHeaderSection = (props: {
  header: string;
  children: React.ReactNode;
}) => (
  <section className="sub-header-section">
    <div className="sub-header-section__header">{props.header}</div>
    <div className="sub-header-section__body">{props.children}</div>
  </section>
);
