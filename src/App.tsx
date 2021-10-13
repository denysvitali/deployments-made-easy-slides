import {
  Deck,
  Slide,
  Heading,
  Text,
  Grid,
  Notes,
  CodePane,
  FlexBox,
  Box,
  ListItem,
  UnorderedList,
  Progress,
  SlideTransition,
  OrderedList,
} from 'spectacle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight, faCode, faGlobeEurope, faHardHat, faTools, faTruck, faUsers, faVial } from '@fortawesome/free-solid-svg-icons';
import tomorrow from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import DevStep from './components/DevStep';
import denvit from './theme/denvit-theme/theme';
import './App.scss';
import Separator from './components/Separator';
import BigTitleSeparator from './components/BigTitleSeparator';

require('typeface-noto-sans');
require('typeface-roboto');
require('typeface-source-code-pro');

const template = () => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom={0}
    width={1}
  >
    <Box padding="0 10px" />
    <Box padding="10px">
      <Progress color="#ffffffaa" size={10} />
    </Box>
  </FlexBox>
);

const transition: SlideTransition = {
  from: {
    opacity: 0,
    transform: '',
  },

  enter: {
    opacity: 1,
    transform: '',
  },

  leave: {
    opacity: 0,
    transform: '',
  },
};

const swisscomNavyBlue = "#001155";

function App(): JSX.Element {
  // react/no-unescaped-entities
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
        <Grid gridTemplateColumns="1fr 4fr" height="100%">
          <FlexBox>
            <img
              src="propic.jpg"
              className="profile-picture"
              alt="Portrait of Denys Vitali"
            />
          </FlexBox>
          <FlexBox className="aboutMe" flexDirection="column">
            <Heading fontSize="h3" className="name">Denys Vitali</Heading>
            <FlexBox>
              <Text className="role">Data, Analytics &amp; AI Engineer @</Text>
              <img
                className="inline-logo"
                src="logos/swisscom-horizontal.svg"
                alt="Swisscom Logo"
              />
            </FlexBox>
            <FlexBox flexDirection="row" className="social-links">
              <Text>
                <FontAwesomeIcon icon={faGlobeEurope} />
                <a href="https://denv.it">denv.it</a>
              </Text>
              <Text>
                <FontAwesomeIcon icon={faGithub} />
                <a href="https://github.com/denysvitali">denysvitali</a>
              </Text>
              <Text>
                <FontAwesomeIcon icon={faTwitter} />
                <a href="https://twitter.com/DenysVitali">DenysVitali</a>
              </Text>
            </FlexBox>
          </FlexBox>
        </Grid>
      </Slide>
      
      <Separator backgroundColor={swisscomNavyBlue}>
        <Heading margin={4} padding={4} fontSize="h1">About</Heading>
            <img
              src="logos/swisscom-horizontal.svg"
              height="180"
              alt="Swisscom Logo"
            />
      </Separator>
      
      <Slide
        backgroundImage="url(backgrounds/swisscom-building.jpg)"
        backgroundOpacity={0.2}
        backgroundColor="#001155"
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
        backgroundColor={swisscomNavyBlue}
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

      <Slide
        backgroundColor={swisscomNavyBlue}
      >
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

      {/*  Waypoint */}
      <BigTitleSeparator>A better development experience</BigTitleSeparator>

      <Slide>
        <Heading>Development Experience</Heading>
        <FlexBox height="100%" width="100%" flexDirection="column" alignContent="middle">
          <FlexBox flexDirection="row" justifyContent="space-around" width="100%">
            <DevStep desc="Code" icon={faCode}/>
            <DevStep desc="Test" icon={faVial}/>
            <DevStep desc="Build" icon={faTools}/>
            <DevStep desc="Deploy" icon={faTruck}/>
            <DevStep desc="Release" icon={faUsers}/>
            <DevStep desc="Operate" icon={faHardHat}/>
          </FlexBox>
          <Text>
            <FontAwesomeIcon icon={faArrowRight}/>
          </Text>
        </FlexBox>
        <Notes>
          The usual development workflow / experience consists of
          6 main blocks: Code, Test, Build, Deploy, Release and Operate
        </Notes>
      </Slide>

      <Slide>
        <Heading>
          Classic Workflows Items
        </Heading>
        <FlexBox>
          <UnorderedList fontSize="34px">
            <ListItem>Makefile</ListItem>
            <ListItem>Dockerfile</ListItem>
            <ListItem>Jenkinsfile</ListItem>
            <ListItem>travis.yml</ListItem>
            <ListItem>drone.yml</ListItem>
            <ListItem>... ?</ListItem>
          </UnorderedList>
        </FlexBox>
        <Notes>
          All of these files have something in common: 
          they tackle a specific part of the development workflow.
        </Notes>
      </Slide>

      <Slide>
        <Heading>
          &quot;Build&quot; Tools
        </Heading>
        <FlexBox>
          <UnorderedList fontSize="34px">
            <ListItem><code>mvn</code> / <code>gradle</code> (Java)</ListItem>
            <ListItem><code>npm</code> / <code>yarn</code> (JS)</ListItem>
            <ListItem><code>gcc</code> / <code>clang</code> (C)</ListItem>
            <ListItem><code>rustc</code> (Rust)</ListItem>
            <ListItem><code>go build</code> (Golang)</ListItem>
            <ListItem><code>pip</code>, <code>pipenv</code>, <code>virtualenv</code>, ... (Python)</ListItem>
            <ListItem>...</ListItem>
          </UnorderedList>
        </FlexBox>
        <Notes>
          There are a lot of tools out there to build a specific type of source code.
          This effectively means that to build a random project on GitHub, or an internal project at our company,
          we need to read the README, match the compiler versions and so on...
        </Notes>
      </Slide>

      <Slide>
        <Heading>
          &quot;Deployment&quot; Tools
        </Heading>
        <FlexBox>
          <UnorderedList fontSize="34px">
            <ListItem><code>kubectl apply</code> &nbsp; (Kubernetes)</ListItem>
            <ListItem><code>docker run</code>, &nbsp;<code>docker-compose up</code> &nbsp; (Docker / Docker Compose)</ListItem>
            <ListItem><code>cf push</code> &nbsp; (Cloud Foundry)</ListItem>
            <ListItem><code>gcloud run deploy</code> &nbsp; (Google Cloud Run)</ListItem>
            <ListItem>...</ListItem>
          </UnorderedList>
        </FlexBox>
        <Notes>
          All of these files have something in common: 
          they tackle a specific part of the development workflow.
        </Notes>
      </Slide>

      <Slide>
        <Heading>Imagine...</Heading>
        <FlexBox>
          <img src="pictures/wp1.png" width="80%" alt="Example project on GitHub"/>
        </FlexBox>
        <Notes>
          Picture the situation: you find a cool project on GitHub and you want to test it right away...
        </Notes>
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
            <div className="flex-row">
              <p className="padding-right no-margin">A</p>
              <img
                src="logos/hashicorp-logo-white.svg"
                height="44"
                className="hashicorp-inline-logo"
                alt="Hashicorp Logo"
              />
              <p className="padding-left no-margin">product</p>
            </div>
          </ListItem>
          <ListItem>
            A new workflow: Build, Deploy, Release
          </ListItem>
          <ListItem>
            GitOps tool
          </ListItem>
        </UnorderedList>
      </Slide>
      <Slide>
        <Heading>
          Waypoint Goals
        </Heading>
        <FlexBox>
          <OrderedList>
            <ListItem>Consistency of Workflows</ListItem>
            <ListItem>Confidence in Deployment</ListItem>
            <ListItem>Extensibility with the Ecosystem</ListItem>
          </OrderedList>
        </FlexBox>
        <Notes>
        1. Waypoint aims to provide an easy-to-use, consistent workflow for getting applications from development to production: waypoint up <br/>
        2. Waypoint provides tools such as logs and exec to give you confidence that deployments succeed. <br/>
        3. Waypoint is fully extensible via a plugin system
        </Notes>
      </Slide>
      <Slide>
        <Heading>
          <code>waypoint up</code>
        </Heading>
        <FlexBox>
          <UnorderedList>
            <ListItem><code>waypoint build</code></ListItem>
            <ListItem><code>waypoint deploy</code></ListItem>
            <ListItem><code>waypoint release</code></ListItem>
          </UnorderedList>
        </FlexBox>
        <Notes>
        Running "waypoint up" is exactly the same as running the three commands "build", "deploy" and "release" - one after the other.
        </Notes>
      </Slide>
      <Slide>
        <Heading>waypoint.hcl</Heading>
        <CodePane
          language="hcl"
          theme={tomorrow}
          highlightRanges={
          [1, [2, 13], [3, 6], [7, 9], [10, 12]]
        }
        >
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


      <Slide>
        <Heading>These slides' <code>waypoint.hcl</code></Heading>
        <CodePane
          language="hcl"
          theme={tomorrow}
          highlightRanges={
          [1, 3, [4, 15], [5,7], [9, 14], [18, 30], [19, 29]]
        }
        >
          {`
          project = "waypoint-slides"
          
          app "slides" {
              build {
                  use "docker" {
                    disable_entrypoint = true
                  }
          
                  registry {
                    use "docker" {
                      image = "dvitali/waypoint-slides"
                      tag = "latest"
                    }
                  }
              }
          
              # Deploy to Kubernetes
              deploy {
                  use "kubernetes" {
                    service_port = 80
                    replicas = 3
                    namespace = "denvit-waypoint-example"
                    resources = {
                      limits_cpu = "100m"
                      limits_memory = "64Mi"
                      requests_cpu = "10m"
                      requests_memory = "16Mi"
                    }
                  }
              }
          }
        `}
        </CodePane>
      </Slide>

      <Slide>
          <Heading>Plugin System</Heading>
          <FlexBox height="100%">
            <img src="pictures/wp2.png" height="400px" alt="Plugin list on Waypoint website"/>
          </FlexBox>
      </Slide>

      <Slide>
          <Heading><code>waypoint-plugin-cloudfoundry</code></Heading>
          <FlexBox flexDirection="column">
            <Text>... and if you use Cloud Foundry</Text>
            <img src="pictures/wp3.png" height="300px" alt="Swisscom open source plugin for Cloud Foundry"/>
          </FlexBox>
      </Slide>

      <BigTitleSeparator>Demo Time 🧑‍💻</BigTitleSeparator>
      <BigTitleSeparator>Q &amp; A</BigTitleSeparator>
      <BigTitleSeparator>Thank you for your attention!</BigTitleSeparator>

    </Deck>
  );
}
export default App;
