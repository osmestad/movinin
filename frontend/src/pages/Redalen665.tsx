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
          <li><a href="#overnatting">Overnatting</a></li>
          <li><a href="#arrangement">Arrangement</a></li>
          <li><a href="#kontakt" className="nav-cta">Ta kontakt</a></li>
        </ul>
      </nav>


      <section className="hero" style={{ padding: '0' }}>
        <div className="hero-bg"></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Kom inn på tunet. Pust ut.</h1>
          <div className="hero-pills">
            <span>Hyttetun i Krødsherad</span>
            <span>Team og ledersamlinger</span>
            <span>Tilrettelagt ferie</span>
            <span>Leie hele stedet</span>
          </div>
        </div>
      </section>


      <section className="intro" id="om">
        <div className="container">
          <div className="intro-grid">
            <div className="intro-text">
              <span className="section-label">Om Redalen 665</span>
              <h2>Et vakkert hyttetun med <em>skogens ro</em></h2>
              <p>Redalen 665 er et idyllisk hyttetun i Krødsherad, med utsikt mot Norefjell og Høgevarde. Her møter du ro, stillhet og skog – bare en drøy time fra Oslo.</p>
                
<p>Tunet består av et hovedhus fra 1890, en laftet hytte, et sjarmerende stabbur og en grillhytte med utsikt mot Redalstjernet.
</p>
              
              <p>Vi leier kun ut til én gruppe av gangen – dere har hele stedet for dere selv. I tillegg til utleie, fasiliterer vi bedriftssamlinger og er med å arrangere private selskaper. </p>
              <div className="divider"><span>Vi tilbyr</span></div>
              <div className="tag-cloud">
                <span className="tag">Teamsamlinger</span>
                <span className="tag">Workshops</span>
                <span className="tag">Tilrettelagte ferier</span>
                <span className="tag">Intime Bryllup</span>
                <span className="tag">Konfirmasjonsfeiring</span>
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
            <span className="section-label">Arrangemnet</span>
            <h2>Lei låven til din <em>samling</em></h2>
            <p>Låven er den perfekte rammen for din samling – enten om dere er få eller mange, om dere vil spise, jobbe, praktisere yoga eller feire. Om dere ønsker å være for dere selv, eller om dere vil ha oss i nærheten bestemmer dere selv.</p>
            <ul>
              <li>Opptil 40 personer til bords</li>
              <li>Prosjektor, lerret og wifi</li>
              <li>Eget toalettanlegg</li>
             <li>Konfirmasjon, dåp og runde dager</li>
              <li>Mindre bryllup og slektstreff</li>
              <li>Fasilitering av team- og ledersamlinger med Cecilie</li>       
            </ul>
            <img src="/images/redalen-image-4.jpg" alt="Låven dekket til festmiddag" className="offering-img" />
          </div>
          <div className="offering-card">
            <span className="section-label">Praktisk</span>
            <h2>Om <em>låven</em></h2>
            <p>
Vi har konferansebord og stoler som dere rigger etter eget ønske – klassisk langbord, hestesko eller noe helt annet. </p>

            <ul>
              <li>Duker, glass, service og bestikk er inkludert i leien. Vil dere ha blomster, lager vi dekorasjoner fra vår egen blomstereng – bestilles separat.</li>
              <li>Ta med egen mat og drikke – eller la oss hjelpe til. Vi tilbyr frokost, gryteretter og enkel bevertning. For større menyer samarbeider vi med lokale cateringtilbydere.</li>
            </ul>
           <p> Vil dere også overnatte? Hovedhuset og hytta gir plass til 11–15 personer, stabburet gir ekstra kapasitet om sommeren, og med glamping kan vi tilby overnatting til alle 44 gjester. Hele tunet er da kun for dere.<br />
Pris og booking: Vi setter opp et tilbud basert på antall gjester og ønsker. Ta kontakt så finner vi ut av det sammen.</p>
            <img src="/images/redalen-image-5.jpg" alt="Yoga i låven om morgenen" className="offering-img" />
          </div>
        </div>
      </section>


      <section className="program">
        <div className="container">
          <div className="program-header">
            <span className="section-label">Eksempel på samling</span>
            <h2>Et opphold <em>fra lunsj til lunsj</em></h2>
            <p>Dette er et eksempel – vi legger alltid programmet i dialog med gruppen.</p>
          </div>
          <div className="program-grid">
            <div className="program-day">
              <h3>Dag 1 — Ankomst</h3>
              <div className="program-item"><span className="program-time">12:00</span><span className="program-desc">Ankomst og lunsj i låven eller ute</span></div>
              <div className="program-item"><span className="program-time">14:00</span><span className="program-desc">Teambuilding, hinderløype eller kreativ økt</span></div>
              <div className="program-item"><span className="program-time">16:00</span><span className="program-desc">Faglig program i låven – workshop eller presentasjoner</span></div>
              <div className="program-item"><span className="program-time">19:00</span><span className="program-desc">Middag – enten selvlaget eller fra lokal catering</span></div>
              <div className="program-item" style={{ borderBottom: 'none' }}><span className="program-time">21:00</span><span className="program-desc">Badstue, bading eller rolig kveld</span></div>
            </div>
            <div className="program-day">
              <h3>Dag 2 — Avreise</h3>
              <div className="program-item"><span className="program-time">08:00</span><span className="program-desc">Morgenyoga (valgfritt)</span></div>
              <div className="program-item"><span className="program-time">09:00</span><span className="program-desc">Frokost</span></div>
              <div className="program-item"><span className="program-time">10:00</span><span className="program-desc">Faglig økt eller felles refleksjon</span></div>
              <div className="program-item" style={{ borderBottom: 'none' }}><span className="program-time">12:00</span><span className="program-desc">Lunsj og avreise</span></div>
  
            </div>
          </div>
        </div>
      </section>


      <section className="spaces" id="overnatting">
        <div className="container spaces-header">
          <span className="section-label">Overnatting</span>
          <h2>Et tun av <em>muligheter</em></h2>
          <p>Når dere booker overnatting i Redalen 665, leier dere ikke bare et rom – dere leier hele stedet. Ingen andre gjester, ingen naboer å ta hensyn til.
Tunet består av et hovedhus fra 1890 og en laftet hytte som leies ut hele året. Når minusgradene gir seg, øker vi sengekapasiteten med stabburet og om sommeren kommer glampingteltene til – ett på knausen med panoramautsikt, ett skjermet inne i skogen.
</p>
        </div>

       <div className="container">
          <h3>Hovedhuset – en sjarmbombe fra <em>1890</em></h3>
          <p>Tykke vegger, skjeive gulv og et peissmykke som virkelig varmer. Fullt utstyrt kjøkken, stue og spisestue, tre soverom og to bad. Verandaen på framsiden er stedet å være om sommeren. Om vinteren samles alle rundt peisene.
Sengeplass til 6–8 personer. Ett soverom og bad i kjelleren har egen utvendig inngang – praktisk for dem som vil ha litt privatliv.
Merk: Huset er gammelt og lytt. De fleste syns det er koselig – men det er greit å vite.
</p>
        </div>
          
        <div className="gallery-block">
          <div className="spaces-grid">
            <div className="space-cell">
              <img src="/images/redalen-image-6.jpg" alt="Stua i hovedhuset" />
                <div className="space-cell-label"><h4>Stuen</h4><p>Romslig stue med den fineste peisen </p></div>
            </div>
            <div className="space-cell">
              <img src="/images/redalen-image-7.jpg" alt="Kjøkkenet med blågrønne skap" />
                <div className="space-cell-label"><h4>Kjøkkenet</h4><p>Fullt utstyrt med det du trenger</p></div>
            </div>
            <div className="space-cell">
              <img src="/images/redalen-image-8.jpg" alt="Soverom i hytta" />
                <div className="space-cell-label"><h4>Soverommet</h4><p>Dobbeltseng 140 cm</p></div>
            </div>
          </div>
          <div className="spaces-grid-bottom">
            <div className="space-cell">
              <img src="/images/redalen-image-9.jpg" alt="Låvesalen" style={{ height: '360px' }} />
                <div className="space-cell-label"><h4>Låvesalen</h4><p>Opptil 40 til bords · Yoga · Workshop · Feiring</p></div>
            </div>
            <div className="space-cell">
              <img src="/images/redalen-image-10.jpg" alt="Hemsen i hytta" style={{ height: '360px'}} />
                <div className="space-cell-label"><h4>Hyttehemsen</h4><p>Romslig soveplasser på hemsen </p></div>
            </div>
          </div>
        </div>

               <div className="container">
          <h3>Hytta med laftet tømmer og ekte <em>hyttefølelse</em></h3>
          <p>Tømmervegger, lun atmosfære og en hems ungene elsker. Sengeplass til 5–7 personer. Tekjøkken med to kokeplater, kjøleskap og kaffetrakter – men ikke stekeovn.
Hytta fungerer fint alene for en liten gruppe, eller som del av en større booking med hovedhuset.

</p>
        </div>
          
        <div className="gallery-block">
          <div className="spaces-grid">
            <div className="space-cell">
              <img src="/images/redalen-image-6.jpg" alt="Stua i hovedhuset" />
                <div className="space-cell-label"><h4>Stuen</h4><p>Romslig stue med den fineste peisen </p></div>
            </div>
            <div className="space-cell">
              <img src="/images/redalen-image-7.jpg" alt="Kjøkkenet med blågrønne skap" />
                <div className="space-cell-label"><h4>Kjøkkenet</h4><p>Fullt utstyrt med det du trenger</p></div>
            </div>
            <div className="space-cell">
              <img src="/images/redalen-image-8.jpg" alt="Soverom i hytta" />
                <div className="space-cell-label"><h4>Soverommet</h4><p>Dobbeltseng 140 cm</p></div>
            </div>
          </div>
          <div className="spaces-grid-bottom">
            <div className="space-cell">
              <img src="/images/redalen-image-9.jpg" alt="Låvesalen" style={{ height: '360px' }} />
                <div className="space-cell-label"><h4>Låvesalen</h4><p>Opptil 40 til bords · Yoga · Workshop · Feiring</p></div>
            </div>
            <div className="space-cell">
              <img src="/images/redalen-image-10.jpg" alt="Hemsen i hytta" style={{ height: '360px'}} />
                <div className="space-cell-label"><h4>Hyttehemsen</h4><p>Romslig soveplasser på hemsen </p></div>
            </div>
          </div>
        </div>

                 <div className="container">
          <h3>Stabburet og grillhytta med særegen <em>sjarm</em></h3>
          <p>Det gamle stabburet gir plass til 2–4 personer i sommerhalvåret. Perfekt for ungdommer eller dem som vil ha litt avstand fra resten av selskapet. I grillhytta samles vi og nyter utsikten!
        
</p>
        </div>
          
        <div className="gallery-block">
          <div className="spaces-grid">
            <div className="space-cell">
              <img src="/images/redalen-image-6.jpg" alt="Stua i hovedhuset" />
                <div className="space-cell-label"><h4>Stuen</h4><p>Romslig stue med den fineste peisen </p></div>
            </div>
            <div className="space-cell">
              <img src="/images/redalen-image-7.jpg" alt="Kjøkkenet med blågrønne skap" />
                <div className="space-cell-label"><h4>Kjøkkenet</h4><p>Fullt utstyrt med det du trenger</p></div>
            </div>
            <div className="space-cell">
              <img src="/images/redalen-image-8.jpg" alt="Soverom i hytta" />
                <div className="space-cell-label"><h4>Soverommet</h4><p>Dobbeltseng 140 cm</p></div>
            </div>
          </div>
          <div className="spaces-grid-bottom">
            <div className="space-cell">
              <img src="/images/redalen-image-9.jpg" alt="Låvesalen" style={{ height: '360px' }} />
                <div className="space-cell-label"><h4>Låvesalen</h4><p>Opptil 40 til bords · Yoga · Workshop · Feiring</p></div>
            </div>
            <div className="space-cell">
              <img src="/images/redalen-image-10.jpg" alt="Hemsen i hytta" style={{ height: '360px'}} />
                <div className="space-cell-label"><h4>Hyttehemsen</h4><p>Romslig soveplasser på hemsen </p></div>
            </div>
          </div>
        </div>

                      <div className="container">
          <h3>Glamping</h3>
          <p><b>Panoramateltet på knausen</b>
Et Sibley Apex 720 – 32 m² med store panoramavinduer og utsikt over Redalstjernet. Laget for helårsbruk, og like vakkert innenfra som utenfra.
Safariteltet i skogen
Skjermet, stille og med en stemning som er vanskelig å beskrive uten å ha vært der. Her forstyrrer ingenting.
Begge teltene er møblert og klare for innflytting. Toalett og dusj er i låven. Sengetøy medbringes.

</p>
        </div>
          
        <div className="gallery-block">
          <div className="spaces-grid">
            <div className="space-cell">
              <img src="/images/redalen-image-6.jpg" alt="Stua i hovedhuset" />
                <div className="space-cell-label"><h4>Stuen</h4><p>Romslig stue med den fineste peisen </p></div>
            </div>
            <div className="space-cell">
              <img src="/images/redalen-image-7.jpg" alt="Kjøkkenet med blågrønne skap" />
                <div className="space-cell-label"><h4>Kjøkkenet</h4><p>Fullt utstyrt med det du trenger</p></div>
            </div>
            <div className="space-cell">
              <img src="/images/redalen-image-8.jpg" alt="Soverom i hytta" />
                <div className="space-cell-label"><h4>Soverommet</h4><p>Dobbeltseng 140 cm</p></div>
            </div>
          </div>
          <div className="spaces-grid-bottom">
            <div className="space-cell">
              <img src="/images/redalen-image-9.jpg" alt="Låvesalen" style={{ height: '360px' }} />
                <div className="space-cell-label"><h4>Låvesalen</h4><p>Opptil 40 til bords · Yoga · Workshop · Feiring</p></div>
            </div>
            <div className="space-cell">
              <img src="/images/redalen-image-10.jpg" alt="Hemsen i hytta" style={{ height: '360px'}} />
                <div className="space-cell-label"><h4>Hyttehemsen</h4><p>Romslig soveplasser på hemsen </p></div>
            </div>
          </div>
        </div>
        
        
        </section>


      <section className="about">
        <div className="container">
          <div className="about-grid">
            <img src="/images/redalen-image-11.jpg" alt="Cecilie – vertinne på Redalen 665" />
              <div>
                <span className="section-label">Fasilitering</span>
                <h2>Hei, <em>jeg er Cecilie</em></h2>
                <p>Cecilie har 20 års erfaring som konsulent fra designbransjen, og har studert innovasjonsledelse ved NHH og marketing ved London Metropolitan University. Hun vet hva som skiller gode workshops fra de som faktisk fører til noe.
Hun fasiliterer strategisamlinger, lederworkshops og kreative prosesser – med en tilnærming som er strukturert nok til å drive fremdrift, og åpen nok til at de riktige samtalene får plass.

</p>
                <p>JTa kontakt for å snakke om hva dere trenger – så skreddersyr vi et opplegg.</p>
               
                <div className="credentials">
                  <div className="credential">20 år i design- og teknologibransjen</div>
                  <div className="credential">Fasilitator for team og ledergrupper</div>
                  <div className="credential">Innovasjonsledelse, NHH</div>
                  <div className="credential">Sertifisert yin-yang-yogainstruktør (under sertifisering)</div>
        
                </div>
              </div>
          </div>
        </div>
      </section>


      <section className="activities" id="sommer">
        <div className="container">
          <div className="activities-header">
            <span className="section-label">Aktiviteter</span>
            <h2>Ute og <em>i nærheten</em></h2>
             <h3>Sommer</h3>
            <p>Rett nede ved veien ligger Redalstjernet med badeplass – og for den eventyrlystne er det fine turer opp til <a href="https://ut.no/turforslag/1112164735/hgnipa">Høgnipa</a>, eller den kortere turen til Veslenipa. Vil dere ha en forfriskende dukkert i fjellet, er Tretjenn et ypperlig mål.
På tunet kan dere nyte rolige dager ved bassenget, plukke sopp og bær i skogen, eller la barna prøve hinderløypa vi har bygget selv inne i skogen. Vi har også to SUP-brett i tjernet, sykler til utlån og pizzaovn for grillkvelder.
I nærområdet er det mye å ta av: en spennende togtur med den historiske <a href="https://njk.no/kroderbanen">Krøderbanen</a>, en tur på vannet med Kryllingen, pumptrack og sandvolleyball ved Krøderen, og utallige merkede løyper opp mot Norefjell og Høgevarde.</p>
<h3>Vinter</h3>
<p>Om vinteren forvandles tunet. Barna kan ake på jordet eller lage en liten skibakke, og skogen rundt byr på fine turmuligheter til fots eller på ski. Norefjell alpinanlegg ligger ca. 30 minutter unna med bil.
</p>
         

      <section className="practical" id="praktisk">
        <div className="container">
          <span className="section-label">Praktisk informasjon</span>
          <h2>Det du <em>trenger å vite</em></h2>
          <div className="practical-grid">
            <div className="practical-block">
              <h4>Dette må dere ta med dere:</h4>
              <p>Sengetøy og håndklær, kjøkkenklut og håndkle, og alt av mat og drikke. Om vinteren er tøfler og pysjamas et godt tips.</p>
            </div>
            <div className="practical-block">
              <h4>Inkludert i leien:</h4>
              <p>Ved, tennbriketter og fyrstikker, toalettpapir, oppvaskmiddel, håndsåpe og stearinlys.
              Booker dere badstuen? Husk ekstra håndklær, badetøy og gjerne slippers hvis dere skal ta en tur ut i snøen. Ved er inkludert.</p>
            </div>
            <div className="practical-block">
              <h4>Parkering og elbillading:</h4>
              <p>Det er god parkering på tunet, og det er mulig å lade elbil.
En liten heads-up om vinteren: ved glatt føre kan det være utfordrende å kjøre opp uten firehjulstrekk. Da er det lurt å parkere nede ved søppelbøttene. På stabilt vinterføre er det uproblematisk, men det er en skarp sving og to bratte bakker – og i mørket kan det virke mer skummelt enn det er. Beste råd: kom opp mens det fortsatt er lyst.
</p>
            </div>
          
          </div>
        </div>
      </section>


      <section className="location">
        <div className="container">
          <span className="section-label">Beliggenhet</span>
          <h2>Midt i <em>Krødsherad</em></h2>
          <p>Nær nok Oslo til å være praktisk. Langt nok unna til at det faktisk kjennes som å komme seg bort.</p>
          <div className="distance-row">
            <div className="distance-item"><div className="distance-num">1,5 time</div><div className="distance-label">Fra Oslo</div></div>
            <div className="distance-item"><div className="distance-num">1 time</div><div className="distance-label">Fra Sandvika</div></div>
            <div className="distance-item"><div className="distance-num">1,5 time</div><div className="distance-label">Fra Gardermoen</div></div>
          </div>
        </div>
      </section>


      <section className="cta-section" id="kontakt">
        <div className="container">
          <img src="/images/redalen-logo.png" alt="Redalen 665" className="logo-mark" />
            <h2>Klar for å <em>oppleve roen?</em></h2>
            <p>Vi setter opp et tilbud basert på antall gjester, varighet og ønsker. Ta kontakt så finner vi ut av det sammen.</p>
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
