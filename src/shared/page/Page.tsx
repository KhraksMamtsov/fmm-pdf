import "./Page.scss";
import { Text } from "../../shared/text/Text";
import { Header } from "../../shared/header/Header";
import { SubHeader } from "../sub-header/SubHeader";
import clsx from "clsx";

export interface PageProps {
  orientation?: "horizontal" | "vertical";
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
  footer?: {
    sub: {
      left?: string;
      right?: string;
    };
    main: {
      left: string;
      right?: string;
    };
  };
}
export const Page = (props: PageProps) => (
  //  `page--${props.orientation ?? "vertical"}`
  <article className={clsx("page", `page--${props.orientation ?? "vertical"}`)}>
    {!props.header ? null : (
      <header id="page__header" className="page__header">
        <div className="colontitle">
          <div className="colontitle__item">
            <SubHeader>{props.header?.super?.left}</SubHeader>
          </div>
          <div className="colontitle__item">
            <SubHeader>{props.header?.super?.right}</SubHeader>
          </div>
        </div>

        <div className="colontitle">
          <div className="colontitle__item">
            <Header>{props.header?.main?.left}</Header>
          </div>
          <div className="colontitle__item">
            <Text>{props.header?.main?.right}</Text>
          </div>
        </div>
      </header>
    )}

    <main className="page__body">{props.children}</main>

    <footer id="page__footer" className="page__footer">
      <div className="colontitle">
        <div className="colontitle__item">
          <Text bold>{props.footer?.main?.left}</Text>
        </div>
        <div className="colontitle__item">
          <Text>{props.footer?.main?.right}</Text>
        </div>
      </div>
      <div className="colontitle">
        <div className="colontitle__item">
          <Text>{props.footer?.sub?.left}</Text>
        </div>
        <div className="colontitle__item">
          <Text>{props.footer?.sub?.right}</Text>
        </div>
      </div>
    </footer>
  </article>
);
