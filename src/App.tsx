import { Deck, Slide, Heading, Text, Grid, Notes, CodePane, FlexBox, Box, ListItem, UnorderedList, Progress, FullScreen, SlideTransition } from 'spectacle';
import tomorrow from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import denvit from './theme/denvit-theme/theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub, faTwitter} from '@fortawesome/free-brands-svg-icons'
import { faGlobeEurope } from '@fortawesome/free-solid-svg-icons';
require('typeface-noto-sans');
require('typeface-source-code-pro');

const template = () => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom={0}
    width={1}
  >
    <Box padding="0 10px">
      
    </Box>
    <Box padding="10px">
      <Progress color="#ffffffaa" size={10}></Progress>
    </Box>
  </FlexBox>
)

const transition: SlideTransition = {
  from: {
    opacity: 0,
    transform: ''
  },

  enter: {
    opacity: 1,
    transform: '',
  },

  leave: {
    opacity: 0,
    transform: ''
  }
}

function App() {
  return (
    <Deck theme={denvit} template={template} transition={transition}>
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
      <Slide 
        backgroundImage="url(backgrounds/swisscom-building.jpg)"
        backgroundOpacity={0.2}
      >
        <img 
            src="logos/swisscom-horizontal.svg"
            height="140"
            alt="Swisscom Logo"
          />
        <FlexBox>
          <UnorderedList fontSize="40px">
            <ListItem>~20k employees</ListItem>
            <ListItem>Not only telecommunications</ListItem>
            <UnorderedList fontSize="30px">
              <ListItem>Cloud</ListItem>
              <ListItem>IoT</ListItem>
              <ListItem>Security</ListItem>
              <ListItem>Banking</ListItem>
              <ListItem>Data Science / Artificial Intelligence</ListItem>
            </UnorderedList>
          </UnorderedList>
        </FlexBox>
      </Slide>

      <Slide 
        backgroundImage="url(backgrounds/swisscom-building-2.jpg)"
        backgroundOpacity={0.2}
      >
        <img 
            src="logos/swisscom-horizontal.svg"
            height="140"
            alt="Swisscom Logo"
          />
        <FlexBox>
          <UnorderedList>
          <ListItem>Multiple locations in Switzerland and abroad</ListItem>
          <UnorderedList fontSize="30px">
            <ListItem>Bellinzona, Zurich, Bern, Lausanne, ...</ListItem>
            <ListItem>Riga (Latvia)</ListItem>
            <ListItem>Rotterdam (Netherlands)</ListItem>
            <ListItem>Palo Alto, California (USA)</ListItem>
            <ListItem>Shangai (China)</ListItem>
          </UnorderedList>
          </UnorderedList>
        </FlexBox>
      </Slide>
      <Slide>
        <img 
            src="logos/swisscom-horizontal.svg"
            height="140"
            alt="Swisscom Logo"
          />
        <FlexBox flexDirection="column" height="100%">
          <Text>We are hiring!</Text>
          <Text>
            <a href="https://jobs.swisscom.ch/">jobs.swisscom.ch</a>
          </Text>
        </FlexBox>
      </Slide>
      <Slide>
        <Heading>
            <FlexBox>
              <Text fontSize="h1">What is</Text>
              <img 
                src="logos/waypoint-color-white.svg" 
                height="120px"
                alt="Waypoint Logo"
              />
              <Text fontSize="h1">?</Text>
            </FlexBox>
          </Heading>
        <UnorderedList>
          <ListItem>
            <FlexBox justifyContent="start">
              <Text className="text-no-padding-left">An</Text>
              <img 
                src="logos/hashicorp-logo-white.svg" 
                height="44"
                className="hashicorp-inline-logo"
                alt="Hashicorp Logo"
              />
              <Text>product</Text>
            </FlexBox>
          </ListItem>
          <ListItem>
            Build, Deployment and Release tool
          </ListItem>
        </UnorderedList>
      </Slide>
      <Slide>
        <Heading><img 
            src="logos/waypoint-color-white.svg"
            height="200"
            alt="Hashicorp Waypoint Logo"
          /></Heading>
        <FlexBox>
          <Text>A</Text>
        </FlexBox>
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