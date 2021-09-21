import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import SimpleReactLightbox from 'simple-react-lightbox'

import store from './redux/store'

import App from './App'
import './index.css'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <SimpleReactLightbox>
        <App />
      </SimpleReactLightbox>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
