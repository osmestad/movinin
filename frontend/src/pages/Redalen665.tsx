import React, { useEffect } from 'react'
import '@/styles/redalen665.css'

const Redalen665 = () => {
  useEffect(() => {
    // Inject Google Fonts
    const fontLink = document.createElement('link')
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Jost:wght@300;400;500&display=swap'
    fontLink.rel = 'stylesheet'
    document.head.appendChild(fontLink)

    return () => {
      fontLink.remove()
    }
  }, [])

  return (
    <div>
      <nav>
        <a href="#" className="nav-brand">
          <img src="/images/redalen-logo.png" alt="Redalen 665" /></a>
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
          <img src="/images/redalen-logo.png" alt="Redalen 665" className="logo-mark" />
            <h2>Klar for å <em>planlegge?</em></h2>
            <p>Fortell oss hvem dere er og hva dere ser for dere, så hører dere fra oss innen én arbeidsdag.</p>
            <a href="/cdn-cgi/l/email-protection#1a6a75696e5a687f7e7b767f742c2c2f347475" className="btn">Send en forespørsel</a>
            <a href="tel:+47" className="btn btn-ghost">Ring oss</a>
        </div>
      </section>

      <footer>
        <img src="/images/redalen-logo.png" alt="Redalen 665" />
          <p>Redalen 665 · Krødsherad · </p>
      </footer>
    </div>
  )
}

export default Redalen665
