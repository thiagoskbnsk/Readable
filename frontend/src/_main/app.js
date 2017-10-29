require('../../public/style.sass')

import React, { Component } from 'react'

import Header from '../components/header'
import Article from '../components/article'

class App extends Component {
    render() {
        return (
          <div>
            <Header title="Articles: React"/>
            <div className="container">
              <Article />
            </div>
          </div>
        )
    }
}

export default App
