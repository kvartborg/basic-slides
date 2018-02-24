
import React, { Component } from 'react'
import {
  Deck,
  Slide
} from 'spectacle'
import createTheme from "spectacle/lib/themes/default"
import './Presentation.css'

import Footer from './components/Footer'
import PlaneView from './components/PlaneView'
import View from './components/View'
import Code from './components/Code'

import Start from './slides/Start'
import Intro from './slides/Intro'


const theme = createTheme({
  'primary': '#59CD90',
  'primary-light': '#7AD7A6',
  'info': '#559DF3',
  'info-light': '#77B1F5',
  'danger': '#EE6352',
  'danger-light': '#F18275',
  'dark': '#1C3144',
  'dark-light': '#495A69',
  'dark-transparent': 'rgba(0, 0, 0, 0.3)',
  'grey': '#DCE0D9',
  'grey-light': '#F2F2F2',
  'grey-transparent': 'rgba(0, 0, 0, .026)',
  'white': 'white',
  'white-light': '#FFFEFD',
  'quarternary': '#495A69',
})

export default class Presentation extends Component {
  render() {
    return (
      <div>
        <Deck
          transitionDuration={300}
          contentWidth='100%'
          contentHeight='100%'
          theme={theme}
          progress='bar'
          controls={false}
          bgColor='white'
        >
          <Slide bgColor='white' transition={['slide', 'fade']}>
            <Start />
          </Slide>
          <Slide bgColor='white' transition={['slide', 'fade']}>
            <Intro />
          </Slide>
          <Slide bgColor='white' transition={['slide', 'fade']}>
            <View>
              <Code lang='js'>
                {`import Client from '@upsub/client'

const client = new Client('ws://localhost:4400')

client.on('channel', msg => console.log(msg))
client.send('channel', 'Hello world!')
`}
              </Code>
            </View>
          </Slide>
          <Slide bgColor='white' transition={['slide', 'fade']}>
            <View>
              <h1>Why the WebSocket protocol?</h1>
            </View>
          </Slide>
          <Slide bgColor='white' transition={['slide', 'fade']}>
            <View>
              <h1>Connection</h1>
            </View>
          </Slide>
          <Slide bgColor='white' transition={['slide', 'fade']}>
            <View>
              <h1>Channels</h1>
            </View>
          </Slide>
          <Slide bgColor='white' transition={['slide', 'fade']}>
            <View>
              <h1>Subscriptions</h1>
            </View>
          </Slide>
          <Slide bgColor='white' transition={['slide', 'fade']}>
            <View>
              <h1>Publishers</h1>
            </View>
          </Slide>
          <Slide bgColor='white' transition={['slide', 'fade']}>
            <View>
              <h1>Authentication</h1>
            </View>
          </Slide>
          <Slide bgColor='white' transition={['slide', 'fade']}>
            <View>
              <h1>Presence</h1>
            </View>
          </Slide>
          <Slide bgColor='white' transition={['slide', 'fade']}>
            <View>
              <h1>Integration</h1>
            </View>
          </Slide>
          <Slide bgColor='white' transition={['slide', 'fade']}>
            <View>
              <h1>Docker</h1>
            </View>
          </Slide>
        </Deck>
        <Footer />
      </div>
    )
  }
}
