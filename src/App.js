import "@amsterdam/design-tokens/dist/index.css";
import "@amsterdam/font/static/index.css";
import "@amsterdam/components-css/dist/document/document.css";
import "@amsterdam/components-css/dist/spacing/spacing.css";
import {
  Paragraph,
  Grid,
  GridItem,
  Heading,
  List,
  Link,
} from "@amsterdam/components-react";
import "@amsterdam/components-css/dist/paragraph/paragraph.css";
import "@amsterdam/components-css/dist/grid/grid.css";
import "@amsterdam/components-css/dist/heading/heading.css";
import "@amsterdam/components-css/dist/list/list.css";
import "@amsterdam/components-css/dist/link/link.css";
import "@amsterdam/components-css/dist/icon/icon.css";
import Card from "./components/Card";
import {
  Alert,
  Ball,
  Calendar,
  Data,
  Eclipse,
  Facebook,
  HandEuroCoin,
  IdentityCard,
} from "@amsterdam/icons-react";
import "./App.css";
import styled from "styled-components";

const linkList = [
  {
    title: "Lorem ipsum dolor sit amet",
    icon: <Alert />,
  },
  {
    title: "Lorem ipsum dolor sit amet",
    icon: <Ball />,
  },
  {
    title: "Lorem ipsum dolor sit amet",
    icon: <Calendar />,
  },
  {
    title: "Lorem ipsum dolor sit amet",
    icon: <Data />,
  },
  {
    title: "Lorem ipsum dolor sit amet",
    icon: <Eclipse />,
  },
  {
    title: "Lorem ipsum dolor sit amet",
    icon: <Facebook />,
  },
  {
    title: "Lorem ipsum dolor sit amet",
    icon: <HandEuroCoin />,
  },
  {
    title: "Lorem ipsum dolor sit amet",
    icon: <IdentityCard />,
  },
];

const cardList = [
  {
    title: "Lorem ipsum dolor 1",
    teaser:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt turpis vel nisl finibus sagittis. Nam hendrerit turpis sed purus feugiat egestas.",
  },
  {
    title: "Lorem ipsum dolor 2",
    teaser:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt turpis vel nisl finibus sagittis. Nam hendrerit turpis sed purus feugiat egestas.",
  },
  {
    title: "Lorem ipsum dolor 3",
    teaser:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt turpis vel nisl finibus sagittis. Nam hendrerit turpis sed purus feugiat egestas.",
  },
  {
    title: "Lorem ipsum dolor 4",
    teaser:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt turpis vel nisl finibus sagittis. Nam hendrerit turpis sed purus feugiat egestas.",
  },
];

const StyledLink = styled(Link)`
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(236, 0, 0, 1) 33%,
    rgba(0, 157, 236, 1) 66%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const StyledListItem = styled.li`
  @media (min-width: 51.25rem) {
    &:nth-child(even) {
      margin-top: 80px;
    }
  }
`;

function App() {
  return (
    <div className="amsterdam-theme">
      <Grid className="amsterdam-space-block-start-l">
        <GridItem spanLarge={3}>
          <Heading styleLevel={5} className="amsterdam-space-block-end-xs">
            Snel regelen
          </Heading>
          <List className="amsterdam-space-block-end-l">
            {linkList.map(({ icon, title }, index) => (
              <li key={index}>
                <Link href="/" variant="inList" icon={icon}>
                  {title}
                </Link>
              </li>
            ))}
          </List>
          <Heading styleLevel={5} className="amsterdam-space-block-end-xs">
            Styling opties
          </Heading>
          <List className="amsterdam-space-block-end-l">
            <li>
              <Link
                href="/"
                variant="inList"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,70,153,1) 33%, rgba(0,160,60,1) 66%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Gestijld met inline styling
              </Link>
            </li>
            <li>
              <Link href="/" variant="inList" className="link-with-class">
                Gestijld met className
              </Link>
            </li>
            <li>
              <StyledLink href="/" variant="inList">
                Gestijld met styled-components
              </StyledLink>
            </li>
          </List>
        </GridItem>
        <GridItem spanLarge={8} startLarge={5}>
          <img
            src="https://picsum.photos/800/450"
            alt=""
            style={{ width: "100%" }}
            className="amsterdam-space-block-end-m"
          />
          <Heading className="amsterdam-space-block-end-s">
            Nieuwe testlocatie bij Sloterdijk
          </Heading>
          <Paragraph className="amsterdam-space-block-end-s">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            tincidunt turpis vel nisl finibus sagittis. Nam hendrerit turpis sed
            purus feugiat egestas. Quisque in eros id mauris rhoncus malesuada.
            Quisque sodales augue nec consequat luctus. Vivamus eu elit eu ante
            venenatis venenatis quis non leo. Nunc ex augue, ornare sed ante sit
            amet, ornare tincidunt arcu. Curabitur in semper urna. Integer sed
            risus non nisi venenatis pellentesque. Nulla facilisi.
          </Paragraph>
          <Link
            href="/"
            variant="standalone"
            className="amsterdam-space-block-end-xxl"
          >
            Meer info
          </Link>
          <Heading styleLevel={2} className="amsterdam-space-block-end-m">
            Nieuws uit Amsterdam
          </Heading>
          <List className="amsterdam-subgrid-span-4 amsterdam-subgrid-span-8--large">
            {cardList.map((item) => (
              <StyledListItem
                key={item.title}
                className="amsterdam-col-span-4 amsterdam-space-block-end-l"
              >
                <Card>
                  <img
                    alt=""
                    style={{ width: "100%" }}
                    src="https://picsum.photos/400/300"
                    className="amsterdam-space-block-end-xs"
                  />
                  <Heading styleLevel={5}>{item.title}</Heading>
                  <Paragraph variant="small">{item.teaser}</Paragraph>
                </Card>
              </StyledListItem>
            ))}
          </List>
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
