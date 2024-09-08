import { Page, PageProps } from "../../shared/page/Page.js";
import { FilledArea, FilledAreaProps } from "./filled-area/FilledArea.js";
import { FilledMark, FilledMarkProps } from "./filled-mark/FillableMark.js";
import "./TrainingReportFilled.page.scss";

export interface TrainingReportFilledPageProps {
  page: Omit<PageProps, "children">;
  marks: Array<FilledMarkProps>;
  areas: Array<FilledAreaProps>;
}

export const TrainingReportFilledPage = (
  props: TrainingReportFilledPageProps,
) => (
  <Page {...props.page}>
    <div className="training-report-filled__body">
      <div className="training-report-filled__section">
        <div className="training-report-filled__marks">
          {props.marks.map((x, i) => (
            <div key={i} className="training-report-filled__marks-item">
              <FilledMark {...x} />
            </div>
          ))}
        </div>
      </div>
      {props.areas.map((x, i) => (
        <div key={i} className="training-report-filled__section">
          <FilledArea {...x} />
        </div>
      ))}
    </div>
  </Page>
);
