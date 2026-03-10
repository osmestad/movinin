import LocalizedStrings from 'localized-strings'
import * as langHelper from '@/utils/langHelper'
import env from '@/config/env.config'

const strings = new LocalizedStrings({
  fr: {
    TITLE: 'Politique de cookies',
    POLICY: `
Cette Politique en matière de cookies explique comment ${env.WEBSITE_NAME} (« nous », « notre » ou « nos ») utilise des cookies et des technologies similaires sur notre site web. En utilisant notre site web, vous consentez à l'utilisation des cookies conformément à cette politique.

1. Qu'est-ce qu'un cookie ?

Les cookies sont de petits fichiers texte qui sont stockés sur votre appareil (ordinateur, tablette, smartphone) lorsque vous visitez un site web. Ils permettent d'améliorer votre expérience de navigation en mémorisant vos préférences et en fournissant des informations ou des services pertinents.

2. Types de cookies que nous utilisons

Nous utilisons les types de cookies suivants :

- Cookies strictement nécessaires : Ces cookies sont essentiels au fonctionnement du site web et ne peuvent pas être désactivés dans nos systèmes.
- Cookies de performance : Ces cookies nous aident à comprendre comment les visiteurs interagissent avec notre site web en collectant et en rapportant des informations de manière anonyme.
- Cookies fonctionnels : Ces cookies permettent au site web d'offrir des fonctionnalités améliorées et une personnalisation.
- Cookies de ciblage/publicitaires : Ces cookies sont utilisés pour diffuser des publicités pertinentes et suivre les performances des annonces.

3. Comment utilisons-nous les cookies ?

Nous utilisons les cookies pour :

- Améliorer la fonctionnalité et la performance du site web.
-Analyser l'utilisation du site afin d'améliorer nos services.
-Personnaliser votre expérience et mémoriser vos préférences.
-Diffuser des publicités ciblées en fonction de vos intérêts.

4. Gestion de vos préférences en matière de cookies

Vous pouvez gérer vos préférences en matière de cookies à tout moment en modifiant les paramètres de votre navigateur. La plupart des navigateurs vous permettent de :

- Bloquer tous les cookies.
- Supprimer les cookies existants.
- Recevoir des notifications lorsqu'un cookie est défini.

Veuillez noter que la désactivation des cookies peut affecter votre expérience sur notre site web.

5. Cookies tiers

Nous pouvons autoriser des prestataires de services tiers à placer des cookies sur notre site web pour analyser le trafic, fournir des services publicitaires ou activer des fonctionnalités supplémentaires. Ces cookies sont régis par les politiques de confidentialité des tiers.

6. Modifications de cette Politique en matière de cookies

Nous pouvons mettre à jour cette Politique en matière de cookies de temps en temps pour refléter les évolutions technologiques, législatives ou nos pratiques. La politique mise à jour sera publiée sur cette page avec une nouvelle date de « Dernière mise à jour ».

7. Nous contacter

Si vous avez des questions concernant cette Politique en matière de cookies, veuillez nous contacter à : ${env.CONTACT_EMAIL}
    `,
  },
  en: {
    TITLE: 'Cookie Policy',
    POLICY: `
This Cookie Policy explains how ${env.WEBSITE_NAME} ("we," "us," or "our") uses cookies and similar technologies on our website. By using our website, you consent to the use of cookies as described in this policy.

1. What Are Cookies?

Cookies are small text files that are stored on your device (computer, tablet, smartphone) when you visit a website. They help improve your browsing experience by remembering your preferences and providing relevant information or services.

2. Types of Cookies We Use

We use the following types of cookies:

- Strictly Necessary Cookies: These cookies are essential for the website to function and cannot be turned off in our systems.
- Performance Cookies: These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
- Functional Cookies: These cookies enable the website to provide enhanced functionality and personalization.
- Targeting/Advertising Cookies: These cookies are used to deliver relevant advertisements and track ad performance.

3. How We Use Cookies

We use cookies to:

- Enhance website functionality and performance.
- Analyze site usage to improve our services.
- Personalize your experience and remember your preferences.
- Deliver targeted advertisements based on your interests.

4. Managing Your Cookie Preferences

You can manage your cookie preferences at any time by adjusting the settings in your browser. Most browsers allow you to:

- Block all cookies.
- Delete existing cookies.
- Receive notifications when a cookie is set.

Please note that disabling cookies may impact your experience on our website.

5. Third-Party Cookies

We may allow third-party service providers to place cookies on our website to analyze site traffic, provide advertising services, or enable additional features. These cookies are governed by the third parties' privacy policies.

6. Changes to This Cookie Policy

We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our practices. The updated policy will be posted on this page with a revised "Last updated" date.

7. Contact Us

If you have any questions about this Cookie Policy, please contact us at: ${env.CONTACT_EMAIL}
    `,
  },
  no: {
    TITLE: 'Informasjonskapselpolicy',
    POLICY: `
Denne informasjonskapselpolicyen forklarer hvordan ${env.WEBSITE_NAME} ("vi," "oss," eller "v\u00e5r") bruker informasjonskapsler og lignende teknologier p\u00e5 nettstedet v\u00e5rt. Ved \u00e5 bruke nettstedet v\u00e5rt, samtykker du til bruk av informasjonskapsler i samsvar med denne policyen.

1. Hva er informasjonskapsler?

Informasjonskapsler er sm\u00e5 tekstfiler som lagres p\u00e5 enheten din (datamaskin, nettbrett, smarttelefon) n\u00e5r du bes\u00f8ker et nettsted. De hjelper til med \u00e5 forbedre surfeopplevelsen din ved \u00e5 huske dine preferanser og gi relevant informasjon eller tjenester.

2. Typer informasjonskapsler vi bruker

Vi bruker f\u00f8lgende typer informasjonskapsler:

- N\u00f8dvendige informasjonskapsler: Disse informasjonkasplene er essensielle for at nettstedet skal fungere og kan ikke sl\u00e5s av i systemene v\u00e5re.
- Ytelses-informasjonskapsler: Disse informasjonkasplene hjelper oss med \u00e5 forst\u00e5 hvordan bes\u00f8kende samhandler med nettstedet v\u00e5rt ved \u00e5 samle og rapportere informasjon anonym.
- Funksjonelle informasjonskapsler: Disse informasjonkasplene gj\u00f8r det mulig for nettstedet \u00e5 tilby forbedret funksjonalitet og personalisering.
- M\u00e5lretting/Reklame-informasjonskapsler: Disse informasjonkasplene brukes til \u00e5 levere relevante annonser og spore resultatene av annonser.

3. Hvordan bruker vi informasjonskapsler?

Vi bruker informasjonskapsler til \u00e5:

- Forbedre funksjonalitet og ytelse p\u00e5 nettstedet.
- Analysere nettstedsbruk for \u00e5 forbedre tjenestene v\u00e5re.
- Personalisere opplevelsen din og huske dine preferanser.
- Levere m\u00e5lrettede annonser basert p\u00e5 interessene dine.

4. Administrering av informasjonskapsel-preferanser

Du kan administrere informasjonskapsel-preferansene dine n\u00e5r som helst ved \u00e5 justere innstillingerne i nettleseren din. De fleste nettlesere lar deg:

- Blokkere alle informasjonskapsler.
- Slette eksisterende informasjonskapsler.
- Motta varsler n\u00e5r en informasjonskapsel angis.

Merk at deaktivering av informasjonskapsler kan p\u00e5virke opplevelsen din p\u00e5 nettstedet v\u00e5rt.

5. Informasjonskapsler fra tredjepart

Vi kan tillate leverand\u00f8rer fra tredjepart \u00e5 plassere informasjonskapsler p\u00e5 nettstedet v\u00e5rt for \u00e5 analysere trafikk, tilby reklametjenster eller aktivere tilleggsfunksjoner. Disse informasjonkasplene er underlagt tredjepartens privatvernpolicyer.

6. Endringer i denne informasjonskapselpolicyen

Vi kan oppdatere denne informasjonskapselpolicyen fra tid til annen for \u00e5 reflektere endringer i teknologi, lovgivning eller praksis v\u00e5r. Den oppdaterte policyen vil bli publisert p\u00e5 denne siden med en revidert \"Sist oppdatert\"-dato.

7. Kontakt oss

Hvis du har sp\u00f8rsm\u00e5l om denne informasjonskapselpolicyen, vennligst kontakt oss p\u00e5: ${env.CONTACT_EMAIL}
    `,
  },
})

langHelper.setLanguage(strings)
export { strings }
