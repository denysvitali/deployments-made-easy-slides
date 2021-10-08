import { Deck, Slide, Heading, Text, Grid, Notes, CodePane, FlexBox, Box } from 'spectacle';
import tomorrow from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import denvit from './theme/denvit-theme/theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub, faTwitter} from '@fortawesome/free-brands-svg-icons'
import { faGlobeEurope } from '@fortawesome/free-solid-svg-icons';
require('typeface-noto-sans');
require('typeface-source-code-pro');
function App() {
  return (
    <Deck theme={denvit}>
      <Slide>
        <FlexBox alignContent="middle" height="100%" flexDirection="column">
          <Heading>Deployments made easy</Heading>
          <Text className="main-subtitle">Introduction to a new workflow based on Waypoint</Text>
        </FlexBox>
      </Slide>
      <Slide>
        <Heading><code>$ whoami</code></Heading>
        <Grid gridTemplateColumns="0.5fr 3.5fr" height="100%">
          <FlexBox>
            <img
            src="propic.jpg"
            className="profile-picture"
            alt="Portrait of Denys Vitali"
          ></img>
          </FlexBox>
          <FlexBox className="aboutMe" flexDirection="column">
            <Heading fontSize="h3" className="name">Denys Vitali</Heading>
            <FlexBox>
              <Text className="role">Data, Analytics &amp; AI Engineer @</Text>
              <img 
                className="inline-logo"
                src="logos/swisscom-horizontal.svg"
                alt="Swisscom Logo"
              ></img>
            </FlexBox>
            <FlexBox flexDirection="row" className="social-links">
              <Text><FontAwesomeIcon icon={faGlobeEurope}/> 
                <a href="https://denv.it">denv.it</a>
              </Text>
              <Text><FontAwesomeIcon icon={faGithub}/> 
                <a href="https://github.com/denysvitali">denysvitali</a>
              </Text>
              <Text><FontAwesomeIcon icon={faTwitter}/>
                <a href="https://twitter.com/DenysVitali">DenysVitali</a>
              </Text>
            </FlexBox>
          </FlexBox>
        </Grid>
      </Slide>
      <Slide>
        <Heading>waypoint.hcl</Heading>
        <CodePane language="hcl" theme={tomorrow} highlightRanges={
          [1, [2, 13], [3, 6], [7, 9], [10, 12]]
        }>
        {`
          project = "example-ruby"
          app "example-ruby" {
            labels = {
              "service" = "example-ruby",
              "env" = "dev"
            }
            build {
              use "pack" {}
            }
            deploy {
              use "docker" {}
            }
          }
        `}
        </CodePane>
      </Slide>
    </Deck>
  );
}
export default App;