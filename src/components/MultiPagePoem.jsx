import React, {useMemo} from 'react'

// Simple text chunker: splits by paragraphs and aggregates until approx char limit
function chunkText(text, approxChars=2400){
  if(!text) return []
  const paras = text.split(/\n\n+/).map(p=>p.trim()).filter(Boolean)
  const pages = []
  let current = ''
  for(const p of paras){
    if((current + '\n\n' + p).length > approxChars && current.length>0){
      pages.push(current.trim())
      current = p
    } else {
      current = current ? current + '\n\n' + p : p
    }
  }
  if(current) pages.push(current.trim())
  return pages
}

export default function MultiPagePoem({text, pages, charsPerPage=2400, title, linesPerPage=20}){
  // helper to repair PDF-wrapped lines before pagination
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

  const computed = useMemo(()=>{
    if(pages && pages.length) return pages

    const sanitize = s => (s||'').replace(/--PAGE_BREAK--/g,'').replace(/\r/g,'').replace(/\n{3,}/g,'\n\n')
    const clean = sanitize(text)
    const paras = clean.split(/\n\n+/).map(p=>normalizeParagraph(p))
    const lines = []
    for(const p of paras){
      const segs = p.split(/\n/).map(l=>l.trim())
      for(const s of segs) lines.push(s)
      lines.push('')
    }
    if(lines.length && lines[lines.length-1] === '') lines.pop()

    const out = []
    let i = 0
    if(title){
      // First spread: title + 27 lines (so 14 per column when split)
      const first = []
      first.push(title)
      while(first.length < linesPerPage && i < lines.length) first.push(lines[i++])
      out.push(first.join('\n'))
    }
    // Remaining spreads: exactly linesPerPage lines per spread (e.g., 28 lines = 14 per column)
    while(i < lines.length){
      const pageLines = []
      while(pageLines.length < linesPerPage && i < lines.length) pageLines.push(lines[i++])
      out.push(pageLines.join('\n'))
    }

    return out
  },[text,pages,linesPerPage,title])

  const paraify = s => (s||'').split(/\n\n+/).map(p=>`<p>${p.replace(/\n/g,'<br/>')}</p>`).join('')

  // Split text into left and right halves for 50-50 column layout
  // But if text is short (few lines), keep it all on left
  const splitTextHalves = text => {
    const lines = (text||'').split('\n').filter(l => l.trim())
    // If 8 or fewer lines, keep all on left
    if(lines.length <= 8) {
      return {left: text, right: ''}
    }
    const mid = Math.ceil(lines.length / 2)
    const left = lines.slice(0, mid).join('\n')
    const right = lines.slice(mid).join('\n')
    return {left, right}
  }

  return (
    <>
      {computed.map((p, i)=> {
        // Skip essentially empty pages
        if(!p || p.trim() === '') return null
        
        // Remove title from text content if it's the first page and title exists
        let textContent = p
        if(i === 0 && title) {
          const lines = p.split('\n')
          // Remove first line if it matches the title
          if(lines[0].trim() === title.trim()) {
            textContent = lines.slice(1).join('\n')
          }
        }
        const {left, right} = splitTextHalves(textContent)
        return (
          <section key={i} className="snap-section" aria-label={`page ${i+1}`}>
            <div className="poem-frame text-only">
              {i===0 && title ? <h2 style={{gridColumn:'1 / -1', marginTop:0}}>{title}</h2> : null}
              <div className="poem-text" dangerouslySetInnerHTML={{__html:paraify(left)}} />
              <div className="poem-text" dangerouslySetInnerHTML={{__html:paraify(right)}} />
            </div>
          </section>
        )
      })}
    </>
  )
}