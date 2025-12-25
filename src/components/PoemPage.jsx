import React from 'react'
import MultiPagePoem from './MultiPagePoem'

// Poem object shape:
// { id, title, author, text, pages, illustration } 
// illustration can be 'filename.jpg' or 'example.mp4' located in /public/illustrations

function Illustration({src, alt}){
  if(!src) return null
  const lower = src.toLowerCase()
  if(lower.endsWith('.mp4')){
    return <video className="illustration" src={`/illustrations/${src}`} autoPlay loop muted playsInline />
  }
  return <img className="illustration" src={`/illustrations/${src}`} alt={alt||''} />
}

export default function PoemPage({poem}){
  // If poem.pages provided: use those pages explicitly. Otherwise pass text into MultiPagePoem which chunks it.
  const hasIllustration = !!poem.illustration

  const normalizeParagraph = p => {
    const lines = p.split(/\n/).map(l=>l.trim())
    const out = []
    for(let i=0;i<lines.length;i++){
      let line = lines[i]
      if(i<lines.length-1){
        const next = lines[i+1]
        if(/-$/.test(line)){
          line = line.replace(/-$/,'') + next
          i++
          out.push(line)
          continue
        }
        if(/[.?!;:,–—"'\)]$/.test(line) || /^[A-Z0-9"'\(]/.test(next)){
          out.push(line)
        } else {
          line = line + ' ' + next
          i++
          lines[i] = line
          continue
        }
      } else {
        out.push(line)
      }
    }
    return out.join('\n')
  }

  const sanitize = s => (s||'').replace(/--PAGE_BREAK--/g,'').replace(/\r/g,'').replace(/\n{3,}/g,'\n\n')
  const paraify = s => sanitize(s).split(/\n\n+/).map(p=>`<p>${normalizeParagraph(p).replace(/\n/g,'<br/>')}</p>`).join('')

  if(hasIllustration){
    // Opening page with illustration: title, ~10 lines on left, illustration on right
    let firstPageTextRaw = ''
    let remainingText = ''
    
    if(poem.pages && poem.pages[0]) {
      // If explicit pages provided, use first page
      firstPageTextRaw = poem.pages[0]
      remainingText = poem.pages.slice(1).join('\n\n')
    } else if(poem.text) {
      // Otherwise, extract ~10 lines from raw text
      const allLines = poem.text.split(/\n/).filter(l => l.trim())
      const firstTenLines = allLines.slice(0, 10).join('\n')
      const remainingLines = allLines.slice(10).join('\n')
      firstPageTextRaw = firstTenLines
      remainingText = remainingLines
    }
    
    const firstPageText = paraify(firstPageTextRaw)

    return (
      <>
        <section className="snap-section">
          <div className="poem-frame with-illustration">
            <div>
              <h2 style={{marginTop:0}}>{poem.title}</h2>
              <div className="poem-text" dangerouslySetInnerHTML={{__html:firstPageText}} />
            </div>
            <Illustration src={poem.illustration} alt={poem.title} />
          </div>
        </section>

        {/* remaining content flows as normal pages */}
        {remainingText ? <MultiPagePoem text={remainingText} /> : null}
      </>
    )
  }

  // Text-only: special-case the foreword: render as single chunk and single column
  if(poem.id === 'foreword'){
    const body = (poem.text||'').replace(/--PAGE_BREAK--/g,' ').replace(/\s+/g,' ').trim()
    return (
      <>
        <section className="snap-section">
          <div className="poem-frame text-only">
            <div>
              <h2 style={{marginTop:0}}>{poem.title}</h2>
              <div className="poem-text foreword" dangerouslySetInnerHTML={{__html:`<p>${body}</p>`}} />
            </div>
          </div>
        </section>
      </>
    )
  }

  // If explicit pages are supplied: render first then the rest
  if(poem.pages){
    return (
      <>
        <section className="snap-section">
          <div className="poem-frame text-only">
            <div>
              <h2 style={{marginTop:0}}>{poem.title}</h2>
              <div className="poem-text columns" dangerouslySetInnerHTML={{__html:paraify(poem.pages[0])}} />
            </div>
          </div>
        </section>
        {poem.pages.slice(1).map((p,i)=> (
          <section className="snap-section" key={i}>
            <div className="poem-frame text-only">
              <div className="poem-text columns" dangerouslySetInnerHTML={{__html:paraify(p)}} />
            </div>
          </section>
        ))}
      </>
    )
  }

  // Otherwise, let the dynamic chunking component render pages and include the title in its first section
  return poem.text ? <MultiPagePoem text={poem.text} title={poem.title} /> : null
}
