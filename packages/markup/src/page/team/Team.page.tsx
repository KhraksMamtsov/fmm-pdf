import { Page, PageProps } from "../../shared/page/Page.js";
import { TeamSection } from "./team-section/TeamSection.js";
import "./Team.page.scss";

export interface TeamPageProps {
  page: Omit<PageProps, "children">;
  players: Array<{
    title: string;
    names: Array<string>;
  }>;
}

export const TeamPage = (props: TeamPageProps) => (
  <Page {...props.page}>
    <div className="team-page">
      {props.players.map((x, i) => (
        <div key={i} className="team-page__section">
          <TeamSection header={x.title} names={x.names} />
        </div>
      ))}
    </div>
  </Page>
);
