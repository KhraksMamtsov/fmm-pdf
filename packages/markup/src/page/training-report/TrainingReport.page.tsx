import { Page, PageProps } from "../../shared/page/Page.js";
import { FillableArea } from "./fillable-area/FillableArea.js";
import { FillableMark } from "./fillable-mark/FillableMark.js";
import "./TrainingReport.page.scss";

export interface TrainingReportPageProps {
  page: Omit<PageProps, "children">;
  marks: Array<string>;
  areas: Array<string>;
}

export const TrainingReportPage = (props: TrainingReportPageProps) => (
  <Page {...props.page}>
    <div className="training-report-form__body">
      <div className="training-report-form__section">
        <div className="training-report-form__marks">
          {props.marks.map((x, i) => (
            <div key={i} className="training-report-form__marks-item">
              <FillableMark header={x} />
            </div>
          ))}
        </div>
      </div>
      {props.areas.map((x, i) => (
        <div key={i} className="training-report-form__section">
          <FillableArea header={x} />
        </div>
      ))}
    </div>
  </Page>
);
