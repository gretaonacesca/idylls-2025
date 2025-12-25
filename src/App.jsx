import React from 'react'
import TitlePage from './components/TitlePage'
import PoemPage from './components/PoemPage'
import poems from './poems/poemsData'
import './App.css'

import ErrorBoundary from './components/ErrorBoundary'

export default function App(){
  return (
    <div className="site-root">
      <ErrorBoundary>
        <main className="snap-container" role="main">
          <TitlePage title={`Idylls`} author={`George Popovic`} />
          {poems.map((p) => (
            <PoemPage key={p.id} poem={p} />
          ))}
        </main>
      </ErrorBoundary>
    </div>
  )
}
