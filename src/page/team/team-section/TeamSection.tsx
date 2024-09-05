import React from "react";
import "./TeamSection.scss";
import { FillableCheckbox } from "../fillable-checkbox/FillableCheckbox";
import { Paragraph } from "../../../shared/paragraph/Paragraph";
import { FillableLine } from "../fillable-line/FillableLine";
import { SubHeader } from "../../../shared/sub-header/SubHeader";

export const TeamSection = (props: {
  header: string;
  names: Array<string>;
}) => (
  <section className="team-section">
    <div className="team-section__list">
      <div></div>

      <SubHeader>{props.header}</SubHeader>

      <div></div>
      {props.names.map((name, i) => (
        <React.Fragment key={i}>
          <FillableCheckbox />
          <Paragraph>{name}</Paragraph>
          <FillableLine />
        </React.Fragment>
      ))}
    </div>
  </section>
);
