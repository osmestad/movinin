import React, { useEffect } from 'react'
import '@/styles/background-images.css'

const Redalen665 = () => {
  useEffect(() => {
    // Inject Google Fonts
    const fontLink = document.createElement('link')
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Jost:wght@300;400;500&display=swap'
    fontLink.rel = 'stylesheet'
    document.head.appendChild(fontLink)

    // Inject inline styles
    const styles = `
        :root {
    --dark: #1a2310;
    --forest: #2C3A1E;
    --moss: #3d5228;
    --sage: #7A8F62;
    --cream: #F7F3EC;
    --warm: #EDE4D0;
    --gold: #8faa6a;
    --text: #1a2310;
    --muted: #5a4e38;
    --border: rgba(63,82,40,0.15);
  }
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body { background: var(--cream); color: var(--text); font-family: 'Jost', sans-serif; font-weight: 300; overflow-x: hidden; }

  /* NAV */
  nav {
    position: fixed; top: 0; left: 0; right: 0; z-index: 100;
    display: flex; justify-content: space-between; align-items: center;
    padding: 0.85rem 3.5rem;
    background: rgba(247,243,236,0.97);
    border-bottom: 1px solid var(--border);
    backdrop-filter: blur(8px);
  }
  .nav-brand img { height: 42px; width: auto; display: block; }
  nav ul { display: flex; gap: 2.2rem; list-style: none; }
  nav ul a {
    color: var(--forest); text-decoration: none;
    font-size: 0.7rem; letter-spacing: 0.16em; text-transform: uppercase;
    opacity: 0.7; transition: opacity 0.2s; font-weight: 500;
  }
  nav ul a:hover { opacity: 1; }
  .nav-cta { background: var(--forest); color: var(--cream) !important; padding: 0.5rem 1.3rem; opacity: 1 !important; }
  .nav-cta:hover { background: var(--moss) !important; }

  /* HERO */
  .hero { height: 100vh; position: relative; display: flex; align-items: flex-end; justify-content: center; overflow: hidden; }
  .hero-bg {
    position: absolute; inset: 0;
    /* Background moved to CSS class .bg-image-1 */ center 35% / cover no-repeat;
    animation: slowZoom 24s ease-in-out infinite alternate;
  }
  @keyframes slowZoom { from { transform: scale(1.04); } to { transform: scale(1.11); } }
  .hero-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(to bottom, rgba(26,35,16,0.2) 0%, rgba(26,35,16,0.05) 40%, rgba(26,35,16,0.78) 100%);
  }
  .hero-content {
    position: relative; text-align: center; padding: 0 2rem 7rem;
    animation: fadeUp 1.4s ease both;
  }
  @keyframes fadeUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
  .hero-logo-wrap { margin-bottom: 1.8rem; }
  .hero-logo-wrap img { height: 120px; width: auto; filter: drop-shadow(0 4px 24px rgba(0,0,0,0.4)); border-radius: 4px; }
  .hero h1 {
    font-family: 'Cormorant Garamond', serif; font-size: clamp(1.4rem, 3.5vw, 2.2rem);
    font-weight: 300; font-style: italic; color: rgba(247,243,236,0.9);
    letter-spacing: 0.04em; margin-bottom: 2.2rem;
  }
  .hero-pills { display: flex; gap: 0; justify-content: center; flex-wrap: wrap; border: 1px solid rgba(143,170,106,0.35); display: inline-flex; }
  .hero-pills span {
    color: rgba(247,243,236,0.7); font-size: 0.68rem; letter-spacing: 0.16em;
    text-transform: uppercase; padding: 0.6rem 1.4rem;
    border-right: 1px solid rgba(143,170,106,0.3);
  }
  .hero-pills span:last-child { border-right: none; }

  /* SECTIONS */
  section { padding: 7rem 0; }
  .container { max-width: 1160px; margin: 0 auto; padding: 0 2.5rem; }
  .section-label { font-size: 0.67rem; letter-spacing: 0.22em; text-transform: uppercase; color: var(--sage); font-weight: 500; display: block; margin-bottom: 0.9rem; }
  h2 { font-family: 'Cormorant Garamond', serif; font-size: clamp(2.2rem, 4.5vw, 3.6rem); font-weight: 300; line-height: 1.1; color: var(--dark); margin-bottom: 1.6rem; }
  h2 em { font-style: italic; color: var(--moss); }
  p { font-size: 0.98rem; line-height: 1.85; color: var(--muted); max-width: 62ch; }

  /* INTRO */
  .intro { background: var(--cream); border-bottom: 1px solid var(--border); }
  .intro-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 6rem; align-items: center; }
  .intro-text p + p { margin-top: 1.1rem; }
  .intro-image { position: relative; }
  .intro-image img { width: 100%; aspect-ratio: 4/5; object-fit: cover; display: block; }
  .intro-image::before {
    content: ''; position: absolute; top: -1.4rem; left: -1.4rem; right: 1.4rem; bottom: 1.4rem;
    border: 1px solid rgba(143,170,106,0.3); z-index: -1; pointer-events: none;
  }

  /* OFFERINGS */
  .offerings { background: var(--forest); padding: 0; overflow: hidden; }
  .offerings-grid { display: grid; grid-template-columns: 1fr 1fr; }
  .offering-card { padding: 6rem 4.5rem; border-right: 1px solid rgba(255,255,255,0.07); }
  .offering-card:last-child { border-right: none; }
  .offering-card .section-label { color: rgba(143,170,106,0.8); }
  .offering-card h2 { color: var(--warm); font-size: clamp(1.8rem, 3vw, 2.6rem); margin-bottom: 1.3rem; }
  .offering-card > p { color: rgba(247,243,236,0.68); max-width: 48ch; margin-bottom: 1.8rem; }
  .offering-card ul { list-style: none; margin-bottom: 2.5rem; }
  .offering-card ul li {
    color: rgba(247,243,236,0.72); font-size: 0.88rem; padding: 0.48rem 0;
    border-bottom: 1px solid rgba(255,255,255,0.06); display: flex; align-items: center; gap: 0.7rem;
  }
  .offering-card ul li::before { content: ''; width: 4px; height: 4px; background: var(--gold); border-radius: 50%; flex-shrink: 0; }
  .offering-img { width: 100%; height: 230px; object-fit: cover; opacity: 0.82; margin-top: 1.5rem; }

  /* PROGRAM */
  .program { background: var(--warm); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
  .program-header { text-align: center; margin-bottom: 5rem; }
  .program-header p { margin: 0 auto; text-align: center; }
  .program-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; }
  .program-day { border-top: 2px solid var(--moss); padding-top: 2rem; }
  .program-day h3 { font-family: 'Cormorant Garamond', serif; font-size: 1.5rem; font-weight: 600; color: var(--dark); margin-bottom: 1.4rem; }
  .program-item { display: flex; gap: 1.2rem; padding: 0.7rem 0; border-bottom: 1px solid var(--border); align-items: baseline; }
  .program-time { font-size: 0.68rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--sage); flex-shrink: 0; width: 52px; font-weight: 500; }
  .program-desc { font-size: 0.9rem; color: var(--muted); line-height: 1.5; }

  /* SPACES */
  .spaces { background: var(--cream); }
  .spaces-header { margin-bottom: 3.5rem; }
  .spaces-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 3px; margin-bottom: 3px; }
  .spaces-grid-bottom { display: grid; grid-template-columns: 2fr 1fr; gap: 3px; }
  .space-cell { position: relative; overflow: hidden; background: var(--forest); }
  .space-cell img { width: 100%; height: 300px; object-fit: cover; display: block; transition: transform 0.5s, opacity 0.3s; opacity: 0.88; }
  .space-cell:hover img { transform: scale(1.04); opacity: 1; }
  .space-cell-label {
    position: absolute; bottom: 0; left: 0; right: 0; padding: 1.2rem 1rem 0.9rem;
    background: linear-gradient(to top, rgba(26,35,16,0.88) 0%, transparent 100%);
  }
  .space-cell-label h4 { font-family: 'Cormorant Garamond', serif; font-size: 1.15rem; font-weight: 400; color: var(--cream); }
  .space-cell-label p { font-size: 0.68rem; color: rgba(247,243,236,0.65); letter-spacing: 0.1em; text-transform: uppercase; margin-top: 0.15rem; max-width: 100%; }

  /* ABOUT */
  .about { background: var(--forest); }
  .about-grid { display: grid; grid-template-columns: 1fr 1.4fr; gap: 6rem; align-items: center; }
  .about img { width: 100%; aspect-ratio: 3/4; object-fit: cover; object-position: center top; }
  .about .section-label { color: rgba(143,170,106,0.8); }
  .about h2 { color: var(--warm); }
  .about p { color: rgba(247,243,236,0.7); }
  .about p + p { margin-top: 1.1rem; }
  .credentials { display: flex; flex-direction: column; gap: 0.5rem; margin-top: 2rem; padding-top: 2rem; border-top: 1px solid rgba(255,255,255,0.1); }
  .credential { display: flex; align-items: center; gap: 0.8rem; font-size: 0.83rem; color: rgba(247,243,236,0.6); }
  .credential::before { content: ''; width: 18px; height: 1px; background: var(--gold); flex-shrink: 0; }

  /* ACTIVITIES */
  .activities { background: var(--warm); }
  .activities-header { margin-bottom: 3.5rem; }
  .activities-cols { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: start; }
  .activities-cols h3 { font-family: 'Cormorant Garamond', serif; font-size: 1.35rem; font-weight: 600; margin-bottom: 1.4rem; color: var(--dark); }
  .tag-cloud { display: flex; flex-wrap: wrap; gap: 0.6rem; }
  .tag {
    padding: 0.5rem 1.1rem; border: 1px solid rgba(44,58,30,0.3); color: var(--forest);
    font-size: 0.75rem; letter-spacing: 0.09em; text-transform: uppercase; font-weight: 400;
    transition: background 0.2s, color 0.2s; cursor: default;
  }
  .tag:hover { background: var(--forest); color: var(--cream); }

  /* PRACTICAL */
  .practical { background: var(--cream); border-top: 1px solid var(--border); }
  .practical-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 3rem; margin-top: 4rem; }
  .practical-block h4 { font-family: 'Cormorant Garamond', serif; font-size: 1.25rem; font-weight: 600; color: var(--dark); margin-bottom: 0.9rem; padding-bottom: 0.7rem; border-bottom: 1px solid var(--border); }
  .practical-block p, .practical-block li { font-size: 0.86rem; line-height: 1.78; color: var(--muted); max-width: 100%; }
  .practical-block ul { list-style: none; }
  .practical-block ul li { padding: 0.28rem 0; display: flex; justify-content: space-between; border-bottom: 1px dotted rgba(0,0,0,0.07); }
  .practical-block ul li span { font-weight: 500; color: var(--forest); }

  /* LOCATION */
  .location { background: var(--forest); text-align: center; }
  .location .section-label { color: rgba(143,170,106,0.8); }
  .location h2 { color: var(--warm); margin-bottom: 1rem; }
  .location > .container > p { color: rgba(247,243,236,0.65); margin: 0 auto 3rem; }
  .distance-row { display: flex; justify-content: center; border: 1px solid rgba(255,255,255,0.1); max-width: 680px; margin: 3rem auto 0; }
  .distance-item { flex: 1; padding: 2rem 1.5rem; border-right: 1px solid rgba(255,255,255,0.1); }
  .distance-item:last-child { border-right: none; }
  .distance-num { font-family: 'Cormorant Garamond', serif; font-size: 2.4rem; font-weight: 300; color: var(--gold); line-height: 1; margin-bottom: 0.35rem; }
  .distance-label { font-size: 0.68rem; letter-spacing: 0.14em; text-transform: uppercase; color: rgba(247,243,236,0.5); }

  /* CTA */
  .cta-section { background: var(--cream); text-align: center; padding: 8rem 0; border-top: 1px solid var(--border); }
  .cta-section .logo-mark { height: 76px; margin-bottom: 2.5rem; opacity: 0.88; }
  .cta-section h2 { margin: 0 auto 1.2rem; max-width: 560px; }
  .cta-section > .container > p { margin: 0 auto 3rem; max-width: 48ch; text-align: center; }
  .btn { display: inline-block; padding: 0.95rem 2.8rem; background: var(--forest); color: var(--cream); text-decoration: none; font-size: 0.72rem; letter-spacing: 0.18em; text-transform: uppercase; font-weight: 500; transition: background 0.2s; }
  .btn:hover { background: var(--moss); }
  .btn-ghost { background: transparent; border: 1px solid var(--forest); color: var(--forest); margin-left: 1rem; }
  .btn-ghost:hover { background: var(--forest); color: var(--cream); }

  /* FOOTER */
  footer { background: var(--dark); color: rgba(247,243,236,0.4); padding: 3rem; text-align: center; }
  footer img { height: 40px; filter: brightness(0) invert(1); opacity: 0.45; margin-bottom: 1.4rem; display: block; margin-left: auto; margin-right: auto; }
  footer p { font-size: 0.76rem; max-width: 100%; margin: 0 auto; }
  footer p + p { margin-top: 0.4rem; }

  .divider { display: flex; align-items: center; gap: 1rem; margin: 2rem 0 1.5rem; }
  .divider::before, .divider::after { content: ''; flex: 1; height: 1px; background: var(--border); }
  .divider span { color: var(--sage); font-size: 0.67rem; letter-spacing: 0.2em; text-transform: uppercase; white-space: nowrap; }

  @media (max-width: 900px) {
    nav { padding: 0.85rem 1.5rem; }
    nav ul { display: none; }
    .intro-grid, .about-grid, .offerings-grid, .program-grid, .activities-cols { grid-template-columns: 1fr; gap: 3rem; }
    .spaces-grid { grid-template-columns: 1fr 1fr; }
    .spaces-grid-bottom { grid-template-columns: 1fr; }
    .practical-grid { grid-template-columns: 1fr; }
    .offering-card { padding: 4rem 2rem; border-right: none; border-bottom: 1px solid rgba(255,255,255,0.07); }
    .container { padding: 0 1.5rem; }
    section { padding: 5rem 0; }
  }
    `

    const styleElement = document.createElement('style')
    styleElement.textContent = styles
    document.head.appendChild(styleElement)

    return () => {
      styleElement.remove()
      fontLink.remove()
    }
  }, [])

  return (
    <div>
      <nav>
        <a href="#" className="nav-brand">
          <img src="/images/redalen-image-13.png" alt="Redalen 665" /></a>
        <ul>
          <li><a href="#om">Om stedet</a></li>
          <li><a href="#laven">Låven</a></li>
          <li><a href="#sommer">Sommer</a></li>
          <li><a href="#rom">Overnatting</a></li>
          <li><a href="#praktisk">Praktisk</a></li>
          <li><a href="#kontakt" className="nav-cta">Ta kontakt</a></li>
        </ul>
      </nav>


      <section className="hero" style={{ padding: '0' }}>
        <div className="hero-bg"></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Et sted å komme til – og komme tilbake til</h1>
          <div className="hero-pills">
            <span>Hyttetun i Krødsherad</span>
            <span>Team & ledersamlinger</span>
            <span>Familieopphold</span>
            <span>Tilrettelagt ferie</span>
          </div>
        </div>
      </section>


      <section className="intro" id="om">
        <div className="container">
          <div className="intro-grid">
            <div className="intro-text">
              <span className="section-label">Om Redalen 665</span>
              <h2>Et vakkert hyttetun i <em>skogens ro</em></h2>
              <p>Redalen 665 er et idyllisk hyttetun i Krødsherad, med utsikt mot Norefjell og Høgevarde. Her møter du ro, stillhet og skog – bare en drøy time fra Oslo.</p>
                
<p>Tunet består av et hovedhus fra 1890, en laftet hytte, et sjarmerende stabbur og en grillhytte med utsikt mot Redalstjernet. Vi leier kun ut til én gruppe av gangen – enten dere er to eller tjue, har dere hele stedet for dere selv.
</p>
              
              <p>Naturen er nærmeste nabo. Fjellturer, stille morgener og bålkvelder venter rett utenfor døren.</p>
              <div className="divider"><span>Vi tilbyr</span></div>
              <div className="tag-cloud">
                <span className="tag">Teamsamlinger</span>
                <span className="tag">Workshops</span>
                <span className="tag">Familieturer</span>
                <span className="tag">Yoga</span>
                <span className="tag">Badstue</span>
                <span className="tag">Blomsterbinding</span>
                <span className="tag">Bryllup</span>
                <span className="tag">Konfirmasjon</span>
                <span className="tag">Slektstreff</span>
              </div>
            </div>
            <div className="intro-image">
              <img src="/images/redalen-image-3.jpg" alt="Redalen 665 – oversiktsbilde" />
            </div>
          </div>
        </div>
      </section>


      <section className="offerings" id="laven" style={{ padding: '0' }}>
        <div className="offerings-grid">
          <div className="offering-card">
            <span className="section-label">Ukedager & helger</span>
            <h2>Låven – for <em>samlinger</em></h2>
            <p>Med åpen takstol i furu, nytt parkettgulv og rikelig naturlig lys er låven like velegnet til en intim middag som til en heldags lederworkshop. Her skapes rom for både faglig dybde og god stemning.</p>
            <ul>
              <li>Opptil 30 personer til bords</li>
              <li>Prosjektor, lerret og wifi</li>
              <li>Eget toalettanlegg</li>
              <li>Fasilitert workshop med Cecilie</li>
              <li>Teambuilding og strategiprogram</li>
              <li>Konfirmasjon, dåp og runde dager</li>
              <li>Mindre bryllup og slektstreff</li>
            </ul>
            <img src="/images/redalen-image-4.jpg" alt="Låven dekket til festmiddag" className="offering-img" />
          </div>
          <div className="offering-card">
            <span className="section-label">Sommer</span>
            <h2>Familier <em>med rom for alle</em></h2>
            <p>Om sommeren er Redalen et sted for familier – inspirert av det vi selv savnet da barna var yngre: et sted uten stigma, uten kommentarer, med rom for uro og stillhet på samme tid.</p>
            <ul>
              <li>Alle måltider inkludert</li>
              <li>Morgenyoga for de som ønsker det</li>
              <li>Basseng og SUP etter frokost</li>
              <li>Varierte, frivillige aktiviteter</li>
              <li>Glamping i hytte og stabbur</li>
              <li>Grillkvelder og vedfyrt pizzaovn</li>
              <li>Ca. 4 dager, lunsj til lunsj</li>
            </ul>
            <img src="/images/redalen-image-5.jpg" alt="Yoga i låven om morgenen" className="offering-img" />
          </div>
        </div>
      </section>


      <section className="program">
        <div className="container">
          <div className="program-header">
            <span className="section-label">Eksempel på opplegg</span>
            <h2>Et opphold <em>fra lunsj til lunsj</em></h2>
            <p>Dette er et eksempel – vi legger alltid programmet i dialog med gruppen.</p>
          </div>
          <div className="program-grid">
            <div className="program-day">
              <h3>Dag 1 — Ankomst</h3>
              <div className="program-item"><span className="program-time">12:00</span><span className="program-desc">Ankomst og lunsj i låven eller ute</span></div>
              <div className="program-item"><span className="program-time">14:00</span><span className="program-desc">Teambuilding, naturtur eller kreativ økt</span></div>
              <div className="program-item"><span className="program-time">16:00</span><span className="program-desc">Faglig program i låven – workshop eller presentasjoner</span></div>
              <div className="program-item"><span className="program-time">19:00</span><span className="program-desc">Middag – enten hos oss eller fra lokal catering</span></div>
              <div className="program-item" style={{ borderBottom: 'none' }}><span className="program-time">21:00</span><span className="program-desc">Badstue, grillhytte eller rolig kveld</span></div>
            </div>
            <div className="program-day">
              <h3>Dag 2 — Avreise</h3>
              <div className="program-item"><span className="program-time">08:00</span><span className="program-desc">Morgenyoga (valgfritt)</span></div>
              <div className="program-item"><span className="program-time">09:00</span><span className="program-desc">Frokost</span></div>
              <div className="program-item"><span className="program-time">10:00</span><span className="program-desc">Faglig økt eller felles refleksjon</span></div>
              <div className="program-item" style={{ borderBottom: 'none' }}><span className="program-time">12:00</span><span className="program-desc">Lunsj og avreise</span></div>
              <p style={{ marginTop: '2rem', fontStyle: 'italic', fontSize: '0.82rem', color: 'var(--sage)' }}>Vi anbefaler opptil 10–12 personer dersom alle skal ha egen seng.</p>
            </div>
          </div>
        </div>
      </section>


      <section className="spaces" id="rom">
        <div className="container spaces-header">
          <span className="section-label">Overnatting & rom</span>
          <h2>Tre bygg – <em>én stemning</em></h2>
          <p>Alle rommene bærer sin egen karakter og historie, men henger naturlig sammen som ett anlegg.</p>
        </div>
        <div style={{ maxWidth: '1160px', margin: '0 auto', padding: '0 2.5rem' }}>
          <div className="spaces-grid">
            <div className="space-cell">
              <img src="/images/redalen-image-6.jpg" alt="Stua i hovedhuset" />
                <div className="space-cell-label"><h4>Hovedhuset</h4><p>Stue, kjøkken, 4 soverom</p></div>
            </div>
            <div className="space-cell">
              <img src="/images/redalen-image-7.jpg" alt="Kjøkkenet med blågrønne skap" />
                <div className="space-cell-label"><h4>Kjøkkenet</h4><p>Fullt utstyrt for hele gruppen</p></div>
            </div>
            <div className="space-cell">
              <img src="/images/redalen-image-8.jpg" alt="Soverom i hytta" />
                <div className="space-cell-label"><h4>Hytta</h4><p>Laftet tømmer, hemse og kjøkken</p></div>
            </div>
          </div>
          <div className="spaces-grid-bottom">
            <div className="space-cell">
              <img src="/images/redalen-image-9.jpg" alt="Låvesalen" style={{ height: '360px' }} />
                <div className="space-cell-label"><h4>Låvesalen</h4><p>Opptil 30 til bords · Yoga · Workshop · Feiring</p></div>
            </div>
            <div className="space-cell">
              <img src="/images/redalen-image-10.jpg" alt="Hemse i hytta" style={{ height: '360px'}} />
                <div className="space-cell-label"><h4>Hyttehemsen</h4><p>Koselig soveplass under åsen</p></div>
            </div>
          </div>
        </div>
      </section>


      <section className="about">
        <div className="container">
          <div className="about-grid">
            <img src="/images/redalen-image-11.jpg" alt="Cecilie – vertinne på Redalen 665" />
              <div>
                <span className="section-label">Vertskapet</span>
                <h2>Hei, <em>jeg er Cecilie</em></h2>
                <p>Redalen er hjemmet mitt og arbeidsstedet mitt. Jeg tror på at stedet og innholdet skal henge sammen – at naturen, pausene og måltidene er like viktige som agendaen.</p>
                <p>Jeg fasiliterer workshops og samlinger med 20 års erfaring fra design- og teknologibransjen, og utdanning innen innovasjonsledelse fra NHH. Jeg er snart sertifisert yin-yang-yogainstruktør og jobber med å utvikle blomsterbindings- og naturbaserte kurs for gjester som ønsker noe mer enn et møterom med utsikt.</p>
                <p>Vil du at oppholdet skal ha et faglig innhold, skreddersyr vi det. Vil du bare ha ro og natur, får du det like gjerne.</p>
                <div className="credentials">
                  <div className="credential">20 år i design- og teknologibransjen</div>
                  <div className="credential">Innovasjonsledelse, NHH</div>
                  <div className="credential">Sertifisert yin-yang-yogainstruktør (under sertifisering)</div>
                  <div className="credential">Fasilitator for team og ledergrupper</div>
                </div>
              </div>
          </div>
        </div>
      </section>


      <section className="activities" id="sommer">
        <div className="container">
          <div className="activities-header">
            <span className="section-label">Aktiviteter og opplevelser</span>
            <h2>Noe for alle – <em>ingenting er tvang</em></h2>
            <p>Vi legger til rette for struktur, men uten rigide rammer. Alt er valgfritt. Her er det lov å trekke seg tilbake, spise pizza til frokost og droppe fellesaktiviteten.</p>
          </div>
          <div className="activities-cols">
            <div>
              <h3>På stedet</h3>
              <div className="tag-cloud">
                <span className="tag">Yin-yang-yoga</span><span className="tag">Badstue</span><span className="tag">Basseng</span>
                <span className="tag">SUP-brett</span><span className="tag">Blomsterbinding</span><span className="tag">Kransebinding</span>
                <span className="tag">Smikurs i smia</span><span className="tag">Warhammer</span><span className="tag">Gaming i låven</span>
                <span className="tag">Hinderløype</span><span className="tag">Pizzaovn</span><span className="tag">Grillkvelder</span>
                <span className="tag">Sykler til utlån</span>
              </div>
            </div>
            <div>
              <h3>I nærområdet</h3>
              <div className="tag-cloud">
                <span className="tag">Tur til Høgnipa</span><span className="tag">Veslenipa</span><span className="tag">Tretjenn</span>
                <span className="tag">Krøderbanen</span><span className="tag">Kryllingen (båttur)</span><span className="tag">Pumptrack ved Krøderen</span>
                <span className="tag">Bading i tjernet</span><span className="tag">Norefjell</span><span className="tag">Blåfjell</span>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="practical" id="praktisk">
        <div className="container">
          <span className="section-label">Praktisk informasjon</span>
          <h2>Det du <em>trenger å vite</em></h2>
          <div className="practical-grid">
            <div className="practical-block">
              <h4>Catering & mat</h4>
              <p>Du kan ta med egen catering. Gode alternativer i nærheten: Sokna, Helgas Heimelaga og Krøderen Kro. Vi kan også hjelpe med koordinering av måltider.</p>
            </div>
            <div className="practical-block">
              <h4>Alkohol & skjenking</h4>
              <p>Vi har midlertidig skjenkebevilling og kan tilby vinsmaking. Ved private arrangementer er det også mulig å ta med alkohol til eget forbruk.</p>
            </div>
            <div className="practical-block">
              <h4>Inn- og utsjekk</h4>
              <p>Innrigg etter avtale, normalt dagen før. Utsjekk etter avtale, normalt i løpet av påfølgende dag. Vi er fleksible – ta kontakt.</p>
            </div>
            <div className="practical-block">
              <h4>Lyd og musikk</h4>
              <p>Vi har ingen nære naboer, men lyden bærer godt i dalen. Høy utendørs musikk avsluttes innen kl. 23.</p>
            </div>
            <div className="practical-block">
              <h4>Utvask</h4>
              <ul>
                <li>Hovedhus <span>3 000 kr</span></li>
                <li>Hytte <span>2 000 kr</span></li>
                <li>Stabbur <span>500 kr</span></li>
              </ul>
            </div>
            <div className="practical-block">
              <h4>Avbestilling</h4>
              <ul>
                <li>Mer enn 30 dager før <span>Full refusjon</span></li>
                <li>14–30 dager før <span>50 % refusjon</span></li>
                <li>Under 14 dager <span>Ingen refusjon</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>


      <section className="location">
        <div className="container">
          <span className="section-label">Beliggenhet</span>
          <h2>Midt i <em>Krødsherad</em></h2>
          <p>Nær nok Oslo til å være praktisk. Langt nok unna til at det faktisk kjennes som å komme bort.</p>
          <div className="distance-row">
            <div className="distance-item"><div className="distance-num">1,5t</div><div className="distance-label">Fra Oslo</div></div>
            <div className="distance-item"><div className="distance-num">1t</div><div className="distance-label">Fra Sandvika</div></div>
            <div className="distance-item"><div className="distance-num">1,5t</div><div className="distance-label">Fra Gardermoen</div></div>
          </div>
        </div>
      </section>


      <section className="cta-section" id="kontakt">
        <div className="container">
          <img src="/images/redalen-logo-1.png" alt="Redalen 665" className="logo-mark" />
            <h2>Klar for å <em>planlegge?</em></h2>
            <p>Fortell oss hvem dere er og hva dere ser for dere, så hører dere fra oss innen én arbeidsdag.</p>
            <a href="/cdn-cgi/l/email-protection#1a6a75696e5a687f7e7b767f742c2c2f347475" className="btn">Send en forespørsel</a>
            <a href="tel:+47" className="btn btn-ghost">Ring oss</a>
        </div>
      </section>

      <footer>
        <img src="/images/redalen-logo-2.png" alt="Redalen 665" />
          <p>Redalen 665 · Krødsherad · </p>
      </footer>
    </div>
  )
}

export default Redalen665
