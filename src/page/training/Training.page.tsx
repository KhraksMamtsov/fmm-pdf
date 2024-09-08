import { ExerciseIcon, Icon } from "../../shared/icon/Icon";
import { Page, PageProps } from "../../shared/page/Page";
import { Paragraph } from "../../shared/paragraph/Paragraph";
import { SubHeader } from "../../shared/sub-header/SubHeader";
import {
  TrainingBlock,
  TrainingBlockProps,
} from "./training-block/TrainingBlock";
import { TrainingMap, TrainingMapProps } from "./training-map/TrainingMap";
import "./Training.page.scss";

export interface TrainingPageProps {
  page: Omit<PageProps, "children">;
  description: string;
  side: {
    map: TrainingMapProps;
    sections: Array<TrainingBlockProps>;
    exercises: {
      title: string;
      list: Array<{ icon: ExerciseIcon; text: string }>;
    };
  };
  twoColSections: Array<Array<TrainingBlockProps>>;
  oneColSections: Array<Array<TrainingBlockProps>>;
}

export const TrainingPage = (props: TrainingPageProps) => (
  <Page {...props.page}>
    <article className="training-page">
      <header className="training-page__description">
        <Paragraph>{props.description}</Paragraph>
      </header>
      <div className="training-page__body">
        <aside className="training-page__aside">
          <div className="training-page__aside-item">
            <TrainingMap {...props.side.map} />
          </div>
          {!props.side.exercises.list.length ? null : (
            <div className="training-page__aside-item">
              <div className="training-exercises">
                <div className="training-exercises__header">
                  <SubHeader>{props.side.exercises.title}</SubHeader>
                </div>
                <div className="training-exercises__list">
                  {props.side.exercises.list.map((x, i) => (
                    <div key={i} className="training-exercises__item">
                      <div className="training-exercises__item-icon">
                        <Icon icon={x.icon} />
                      </div>
                      <div className="training-exercises__item-text">
                        <Paragraph size="small">{x.text}</Paragraph>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          {props.side.sections.map((x, i) => (
            <div key={i} className="training-page__aside-item">
              <TrainingBlock {...x} />
            </div>
          ))}
        </aside>
        <main className="training-page__main">
          {!props.twoColSections.length
            ? null
            : props.twoColSections.map((x, i) =>
                !x.length ? null : (
                  <section
                    className="training-page__section training-page__section--2col"
                    key={i}
                  >
                    {x.map((trainingBlockProps, i) => (
                      <TrainingBlock key={i} {...trainingBlockProps} />
                    ))}
                  </section>
                )
              )}
          {!props.oneColSections.length
            ? null
            : props.oneColSections.map((x, i) =>
                !x.length ? null : (
                  <section
                    className="training-page__section training-page__section"
                    key={i}
                  >
                    {x.map((trainingBlockProps, i) => (
                      <TrainingBlock key={i} {...trainingBlockProps} />
                    ))}
                  </section>
                )
              )}
        </main>
      </div>
    </article>
  </Page>
);
