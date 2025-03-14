import { ComponentMapping } from '@uniformdev/csk-components/utils/createComponentResolver';
import AlgoliaSearch from './AlgoliaSearch';
import Article from './Article';
import Container from './Container';
import CustomComponent from './CustomComponent';
import NavBar from './NavBar';
import VideoPlayer from './VideoPlayer';

// Here, you can add your own component or customize an existing CSK component with your logic or styles.
export const customComponentsMapping: ComponentMapping = {
  // This is a simple example of how you can add your own components.
  customComponent: { component: CustomComponent },
  // This is an overridden CSK Container component.
  container: { component: Container },
  navbar: { component: NavBar },
  videoPlayer: { component: VideoPlayer },
  article: { component: Article },
  algoliaSearch: { component: AlgoliaSearch },
};
