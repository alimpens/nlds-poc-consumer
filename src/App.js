import "@amsterdam/design-tokens/dist/index.css";
import "@amsterdam/font/static/index.css";
import "@amsterdam/components-css/dist/document/document.css";
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

const linkList = [
  {
    title: "Lorem ipsum dolor sit amet",
  },
  {
    title: "Lorem ipsum dolor sit amet",
  },
  {
    title: "Lorem ipsum dolor sit amet",
  },
  {
    title: "Lorem ipsum dolor sit amet",
  },
  {
    title: "Lorem ipsum dolor sit amet",
  },
  {
    title: "Lorem ipsum dolor sit amet",
  },
  {
    title: "Lorem ipsum dolor sit amet",
  },
  {
    title: "Lorem ipsum dolor sit amet",
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

function App() {
  return (
    <div className="amsterdam-theme amsterdam-space-block-start-l">
      <Grid>
        <GridItem spanLarge={3}>
          <Heading styleLevel={5} className="amsterdam-space-block-end-xs">
            Snel regelen
          </Heading>
          <List className="amsterdam-space-block-end-l">
            {linkList.map((item, index) => (
              <li key={index}>
                <Link href="/" variant="inList">
                  {item.title}
                </Link>
              </li>
            ))}
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
          <List className="amsterdam-grid">
            {cardList.map((item) => (
              <li
                key={item.title}
                className="amsterdam-col-span-4 amsterdam-col-span-6--large amsterdam-space-block-end-l"
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
              </li>
            ))}
          </List>
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
