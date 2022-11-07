import React from 'react'
import { Toaster } from 'react-hot-toast'

import { Layout } from '../components'
import Background from '../components/Background.js'
import { StateContext } from '../context/StateContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Toaster />
        <Background />
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  )
}

export default MyApp


//we wrap the entire app in StateContext so that we can make sure all the state functions remain consistent throughout the entire app, and that they can be accessed anywhere from said app.