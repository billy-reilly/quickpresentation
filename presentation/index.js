// Import React
import React from 'react';
import CodeSlide from 'spectacle-code-slide';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  Notes,
  Quote,
  Slide
} from 'spectacle';

import preloader from 'spectacle/lib/utils/preloader';
import createTheme from 'spectacle/lib/themes/default';

const images = {
  goodWork: require('../assets/good-work.gif')
};
preloader(images);

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'black',
    secondary: 'white',
    tertiary: 'hotpink'
  },
  {
    primary: 'Montserrat'
  }
);

export default class Presentation extends React.Component {
  render() {
    const codeSlideTitle = (<Heading textColor="primary" size={4}>index.js</Heading>);
    return (
      <Deck
        transition={['slide']}
        transitionDuration={500}
        theme={theme}
        progress="bar"
      >
        <Slide bgColor="secondary">
          <Heading size={1} caps lineHeight={1} textColor="primary">
            Presentation
          </Heading>
        </Slide>
        <Slide bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Something</Quote>
            <Cite margin="10px 0 0 30px">Someone</Cite>
          </BlockQuote>
        </Slide>
        <CodeSlide
          bgColor="secondary"
          lang="jsx"
          code={require('raw-loader!../assets/code.example')}
          textSize=".7em"
          showLineNumbers={false}
          ranges={[
            {
              loc: [0, 7],
              title: codeSlideTitle
            },
            {
              loc: [0, 1],
              title: codeSlideTitle,
              note: 'see this?'
            },
            {
              loc: [1, 6],
              title: codeSlideTitle,
              note: 'well it gets used here'
            }
          ]}
          transition={[]}
          transitionDuration={0}
        />
        <Slide bgColor="secondary">
          <Image src={images.goodWork} width={500} />
          <Notes>remember to mention that thing</Notes>
        </Slide>
      </Deck>
    );
  }
}
