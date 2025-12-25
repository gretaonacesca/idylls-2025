import React from 'react'

export default class ErrorBoundary extends React.Component{
  constructor(props){
    super(props)
    this.state = {error:null}
  }
  static getDerivedStateFromError(error){
    return {error}
  }
  componentDidCatch(error, info){
    // log to console for now
    console.error('ErrorBoundary caught', error, info)
  }
  render(){
    if(this.state.error){
      return (
        <div style={{padding:'4rem',fontFamily:'system-ui',color:'#b00020'}}>
          <h2>Something went wrong — check the console for details.</h2>
          <pre style={{whiteSpace:'pre-wrap'}}>{String(this.state.error)}</pre>
        </div>
      )
    }
    return this.props.children
  }
}
