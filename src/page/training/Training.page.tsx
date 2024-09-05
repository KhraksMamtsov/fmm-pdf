import { Page, PageProps } from "../../shared/page/Page";
import { Paragraph } from "../../shared/paragraph/Paragraph";
import {
  TrainingBlock,
  TrainingBlockProps,
} from "./training-block/TrainingBlock";
import "./Training.page.scss";

export interface TrainingPageProps {
  page: Omit<PageProps, "children">;
  description: string;
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
        <aside className="training-page__aside">123</aside>
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
