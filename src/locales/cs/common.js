import {
  FaCar,
  FaCompass,
  FaGlassMartiniAlt,
  FaHeart,
  FaPlane,
  FaShoppingBag,
} from "react-icons/fa";

export const cs = {
  common: {
    routes: [
      { href: "/#sluzby", label: "Služby" },
      { href: "/#cenik", label: "Ceník" },
      { href: "/#reference", label: "Reference" },
      { href: "/#ridici", label: "Řidiči" },
      { href: "/#vozy", label: "Vozy" },
      { href: "/#kontakt", label: "Kontakt" },
    ],
    footer: {
      links: [
        {
          href: "/gdpr",
          label: "Zpracování osobních údajů",
        },
      ],
      revealSignature: "Vytvořili Reveal",
    },
  },

  // Main Page
  index: {
    // Seo
    seo: {
      title: "Přepravíme odkudkoli kamkoli",
      description:
        "Zajistíme Vám pohodlnou, bezpečnou a rychlou přepravu osob po Evropě. Jsme mladá, dynamická firma, která se neustále rozvíjí, aby Vám mohla nabídnout nejmodernější způsoby dopravy.",
    },

    // Hero section
    hero: {
      heading: "Přepravíme odkudkoli kamkoli",
      perex:
        "Zajistíme Vám pohodlnou, bezpečnou a rychlou přepravu osob po Evropě. Jsme mladá, dynamická firma, která se neustále rozvíjí, aby Vám mohla nabídnout nejmodernější způsoby dopravy.",
      button: "Zjistit více",
    },

    // Services section
    services: {
      preHeading: "Služby",
      heading: "Co pro vás můžeme udělat?",
      services: [
        {
          heading: "Přeprava na/z letiště v rámci evropy",
          text: "Potřebujete osobní přepravu na letiště, ale nechcete se zdržovat plánovaním cesty a parkováním svého auta na letišti? Pak je tato služba dělaná přesně Vám na míru.",
          icon: FaPlane,
        },
        {
          heading: "Svatby",
          text: "Hledáte vhodný vůz pro novomanžele nebo svatební hosty? Pro tuto sváteční příležitost Vám zajistíme komfortní vůz s řidičem v obleku, který Vám bude po celou dobu profesionálně k dispozici.",
          icon: FaHeart,
        },
        {
          heading: "Osobní řidič s naším vozem",
          text: "Máte důležité jednání, na které se potřebujete soustředit a připravit? Nabízíme možnost profesionálního osobního řidiče, který za Vás naplánuje cestu a zajistí komfortní a bezpečnou přepravu v rámci České republiky a Evropy",
          icon: FaCompass,
        },
        {
          heading: "Expresní kurýr",
          text: "Máte důležitou zásilku, kterou potřebujete rychle a bezpečně dostat na druhou stranu republiky nebo Evropy. I takovou službu pro Vás zařídíme.",
          icon: FaShoppingBag,
        },
        {
          heading: "Firemní večírky a oslavy",
          text: "Pro firemní či rodinné akce, zajistíme dopravu od včasného vyzvednutí, po bezpečnou a komfortní přepravu přímo ke dveřím.",
          icon: FaGlassMartiniAlt,
        },
        {
          heading: "Osobní řidič Vašeho vozu",
          text: "Více informací na info@drive4people.cz",
          icon: FaCar,
        },
      ],
    },

    // Pricelist section
    priceList: {
      preHeading: "Ceník",
      heading: "Kolik to bude stát?",
      perex:
        "* Ceny jsou pouze orientační a upravují se podle požadavků zákazníků",
      standardHeading: "Standardní služby",
      standardPrices: [
        {
          item: "Osobní řidič s naším vozem",
          price: "od 800 Kč / hod",
        },
        {
          item: "Osobní řidič Vašeho vozidla",
          price: "400 kč / hod",
        },
        {
          item: "Svatby",
          price: "od 800 kč / hod",
        },
        {
          item: "Firmení večírky a oslavy",
          price: "od 800 Kč / hod",
        },
        {
          item: "Expresní kurýr",
          price: "dle specifikace",
        },
      ],
      airportHeading: "Letiště",
      airportPrices: [
        {
          item: "Praha -> Letiště Václava Havla",
          price: "od 800 Kč / hod",
        },
        {
          item: "Praha -> Letiště Vídeň",
          price: "8150 kč",
        },
        {
          item: "Praha -> Letiště Mnichov",
          price: "8800 kč",
        },
      ],
    },

    // Testimonials section
    testimonials: {
      preHeading: "Reference",
      heading: "Co řikají klienti",
      perex: "* Původ referencí - hodnocení firem google",
      testimonials: [
        {
          name: "Jan Hrubeš",
          text: "Skvělá domluva, rychlost, spolehlivost, profesionalita, vysoká kvalita 💯 byli jsme velmi spokojeni, díky 👏👍",
        },
        {
          name: "Kateřina Juránková",
          text: "Dokonala profi jizda, dokonala cistota interieru, velmi prijemne vystupovani, spolehlivost, stoprocentni servis jak ma byt a jako bonus, velmi sympaticky a pohledny mlady muz...",
        },
        {
          name: "Alexandr Kučera",
          text: "Skvělý profesionální přístup a vždy dobrá nálada. Drive4people můžu jedině doporučit.",
        },
        {
          name: "Marek Sahula",
          text: "Výborný a profesionální přístup. Pan řidič přijel na domluvený čas, byl usměvavý a po celou dobu velmi příjemný. Tuto společnost lze jedině doporučit.",
        },
        {
          name: "Jiří Sandanus",
          text: "Služba byla úžasná, vše proběhlo k naší naprosté spokojenosti. Mohu všem jen doporučit.",
        },
        {
          name: "Tobiáš bartoš",
          text: "Od prvního setkání Naprostá profesionalita!. Pan Lukáš je Velice příjemný a spolehlivý. Kvalitni repretentace firmy. Takových více Profi řidičů. Kodlova",
        },
        {
          name: "Lukáš Kousal",
          text: "(Přeloženo pomocí google) - Pravidelně chodím do této společnosti. A jsem vždy spokojen s přesností. Vždy mě potkávají ve všech požadavcích a náhlých změnách. Mohu jen DOPORUČIT!",
        },
        {
          name: "Hana Bluchová",
          text: "Velká spokojenost, jízda byla bez problémů, spolehlivost, profesionální.",
        },
      ],
    },

    // Drivers section
    drivers: {
      preHeading: "Řidiči",
      heading: "Kdo Vás poveze?",
      perex:
        "Řidič pro vás vždy přijede vhodně oblečen s profesionálním a osobním přístupem.",
    },

    // CarFleet section
    carFleet: {
      preHeading: "Vozový park",
      heading: "Čím Vás povezeme?",
      perex:
        "Jsme schopni zajistit pro Vás dopravu jakýmkoliv vozidlem, ať už potřebujete osobní vůz nebo vícecestný minibus. Navíc nově připravujeme profesionální přepravu zboží po celé Evropě, kterou zajišťujeme moderními dodávkami. Můžete se spolehnout na naši spolehlivost a pečlivý přístup k Vašim potřebám.",
      cars: {
        car1: "Volkswagen Passat Variant, 2019",
        car2: "Mercedes-Benz E Class 220D – 2019",
      },
    },

    // Contact section
    contect: {
      preHeading: "Kontakt",
      heading: "Pojďte se s námi svézt",
      phoneHeading: "Telefon:",
      emailHeading: "Email:",
      form: {
        heading: "Máte dotaz?",
        nameSurnameInput: "Jméno a příjmení",
        emailInput: "Váš e-mail",
        phoneInput: "Váš telefon",
        messageInput: "Vaše zpráva",
        gdprLabel: "Souhlasím s podmínkami",
        gdprLink: "ochrany osobních údajů.",
        submitButton: "Odeslat",
      },
      billingInfo: {
        heading: "Fakturační údaje",
        sro: {
          name: "Cardrive4people s.r.o",
          ico: "IČO: 17440858",
          dic: "DIČ: CZ17440858",
        },
        bank: {
          number: "6204445359/0800",
          iban: "IBAN - CZ76 0800 0000 0062 0444 5359",
          bicSwift: "BIC/SWIFT - GIBACZPX",
        },
      },
    },
  },
};
