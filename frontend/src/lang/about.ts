import LocalizedStrings from 'localized-strings'
import * as langHelper from '@/utils/langHelper'
import env from '@/config/env.config'

const strings = new LocalizedStrings({
  fr: {
    TITLE1: `${env.WEBSITE_NAME} - Votre service de location de propriétés`,
    SUBTITLE1: 'Votre partenaire de confiance pour la location de propriétés',
    CONTENT1: `Chez ${env.WEBSITE_NAME}, nous comprenons que chaque voyage est unique. Nous nous engageons à fournir à nos clients une sélection diversifiée de propriétés qui répondent à tous les besoins de voyage. Que vous exploriez une ville, que vous vous déplaciez pour affaires ou que vous recherchiez l'aventure, nos services de location de propriétés fiables garantissent que votre aventure commence en toute transparence. Notre mission est de fournir un service client exceptionnel, rendant votre expérience agréable et sans stress. Avec des tarifs compétitifs, une variété de propriétés bien entretenus et une équipe dédiée prête à vous aider, nous nous efforçons d'être votre partenaire de confiance sur la route. Choisissez ${env.WEBSITE_NAME} pour tous vos besoins de location de propriété et découvrez la liberté d'explorer à votre rythme.`,
    TITLE2: `Pourquoi choisir ${env.WEBSITE_NAME}`,
    SUBTITLE2: "Découvrez l'excellence à chaque voyage",
    CONTENT2: "Profitez d'une commodité, d'une fiabilité et d'une valeur inégalées avec notre service de location de propriétés. Des réservations sans effort aux propriétés de haute qualité, nous sommes votre partenaire de voyage de confiance.",
    FIND_DEAL: 'Trouver une Offre',
  },
  en: {
    TITLE1: `${env.WEBSITE_NAME} - Your Premier Property Rental Service`,
    SUBTITLE1: 'Your Trusted Partner for Property Rentals',
    CONTENT1: `At ${env.WEBSITE_NAME}, we understand that every journey is unique. We are committed to providing our customers with a diverse selection of properties that cater to every travel need. Whether you're exploring a city, commuting for business, or seeking adventure, our reliable property rental services ensure that your adventure begins seamlessly. Our mission is to deliver exceptional customer service, making your experience enjoyable and stress-free. With competitive rates, a variety of well-maintained properties, and a dedicated team ready to assist you, we strive to be your trusted partner on the road. Choose ${env.WEBSITE_NAME} for all your property rental needs and experience the freedom to explore at your own pace.`,
    TITLE2: `Why Choose ${env.WEBSITE_NAME}`,
    SUBTITLE2: 'Experience Excellence in Every Journey',
    CONTENT2: "Enjoy unmatched convenience, reliability, and value with our premier property rental service. From effortless bookings to high-quality properties, we're your trusted travel partner.",
    FIND_DEAL: 'Find Deal',
  },
  no: {
    TITLE1: `${env.WEBSITE_NAME} - Din Ledende Eiendomsutleietjeneste`,
    SUBTITLE1: 'Din Pålitelige Partner for Eiendomsutleie',
    CONTENT1: `Hos ${env.WEBSITE_NAME}, forstår vi at hver reise er unik. Vi er forpliktet til å gi kundene våre et mangfold av eiendommer som oppfyller alle reisebehov. Enten du utforsker en by, pendles for arbeid, eller søker eventyr, sikrer våre pålitelige eiendomsutleietjenester at ditt eventyr begynner smidig. Vår misjon er å levere eksepsjonell kundeservice som gjør opplevelsen din behagelig og stressfri. Med konkurransedyktige priser, et mangfold av godt vedlikeholdte eiendommer, og et dedikert team klart til å hjelpe deg, streber vi etter å være din pålitelige partner på veien. Velg ${env.WEBSITE_NAME} for alle dine eiendomsutleiebehov og opplev friheten til å utforske i ditt eget tempo.`,
    TITLE2: `Hvorfor Velge ${env.WEBSITE_NAME}`,
    SUBTITLE2: 'Opplev Utmerkethet på Hver Reise',
    CONTENT2: 'Nyt uovertruffen bekvemmelighet, pålitelighet og verdi med vår ledende eiendomsutleietjeneste. Fra enkle bestillinger til høykvalitetseiendommer er vi din pålitelige reisepartner.',
    FIND_DEAL: 'Finn Tilbud',
  },
})

langHelper.setLanguage(strings)
export { strings }
