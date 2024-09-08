import React from "react";
import "./TeamSection.scss";
import { FillableCheckbox } from "../fillable-checkbox/FillableCheckbox.js";
import { Paragraph } from "../../../shared/paragraph/Paragraph.js";
import { FillableLine } from "../fillable-line/FillableLine.js";
import { SubHeader } from "../../../shared/sub-header/SubHeader.js";

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
