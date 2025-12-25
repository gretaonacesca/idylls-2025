import React from 'react'

export default function TitlePage({title, author}){
  return (
    <section className="snap-section">
      <div className="title-card">
        <h1>{title}</h1>
        <p><span style={{fontFamily: "'EB Garamond', serif"}}>by</span> <strong>{author}</strong></p>
        <p style={{fontFamily: "'EB Garamond', serif"}}>@philodemion</p>
        <p style={{fontFamily: "'EB Garamond', serif"}}>2025</p>
        <p style={{fontFamily: "'EB Garamond', serif", marginTop: "2rem"}}>illustrations by Greta Panna Toth<br/>@greta_on_a_cesca</p>
      </div>
    </section>
  )
}
