import "./Page.scss";
import { Text } from "../../shared/text/Text";
import { Header } from "../../shared/header/Header";
import { SubHeader } from "../sub-header/SubHeader";
import clsx from "clsx";

export interface PageProps {
  orientation?: "horizontal" | "vertical";
  icon?: React.ReactNode;
  header?: {
    super?: {
      left?: string;
      right?: string;
    };
    main: {
      left: string;
      right?: string;
    };
  };
  children: React.ReactNode;
  superHeader?: {
    sub?: {
      left?: string;
      right?: string;
    };
    main: {
      left?: string;
      right?: string;
    };
  };
}
export const Page = (props: PageProps) => (
  //  `page--${props.orientation ?? "vertical"}`
  <article className={clsx("page", `page--${props.orientation ?? "vertical"}`)}>
    {!props.superHeader ? null : (
      <div className="page__super-header">
        <div className="colontitle">
          <div className="colontitle__item">
            <Text bold>{props.superHeader?.main?.left}</Text>
          </div>
          <div className="colontitle__item">
            <Text>{props.superHeader?.main?.right}</Text>
          </div>
        </div>
        {!props.superHeader?.sub ? null : (
          <div className="colontitle">
            <div className="colontitle__item">
              <Text>{props.superHeader?.sub?.left}</Text>
            </div>
            <div className="colontitle__item">
              <Text>{props.superHeader?.sub?.right}</Text>
            </div>
          </div>
        )}
      </div>
    )}
    {!props.header ? null : (
      <div id="page__header" className="page__header">
        <div className="colontitle">
          <div className="colontitle__item">
            <div className="colontitle-item">
              <div className="colontitle-item__super">
                <SubHeader>{props.header?.super?.left}</SubHeader>
              </div>
              <div className="colontitle-item__main">
                {!props.icon ? null : (
                  <div className="colontitle-item__main-icon">{props.icon}</div>
                )}
                <div className="colontitle-item__main-text">
                  <Header>{props.header?.main?.left}</Header>
                </div>
              </div>
            </div>
          </div>
          <div className="colontitle__item">
            <div className="colontitle-item colontitle-item--right">
              <div className="colontitle-item__super">
                <SubHeader>{props.header?.super?.right}</SubHeader>
              </div>
              <div className="colontitle-item__main">
                <div className="colontitle-item__main-text">
                  <Text>{props.header?.main?.right}</Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}

    <main className="page__body">{props.children}</main>
  </article>
);
