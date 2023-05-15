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
    footer: {},
  },

  // Main Page
  index: {
    // Seo
    seo: {
      title: "Přepravíme odkudkoli kamkoli",
      description:
        "Drive4people se zaměřuje se na přepravu osob v rámci Evropy. Nabízíme služby osobního řidiče, expresního kurýra, přepravu na svatby, večírky nebo letiště.",
    },

    // Hero section
    hero: {
      heading: "Přepravíme odkudkoli kamkoli",
      perex:
        "Jsme mladá, rozvíjející se společnost, která se zaměřuje na komfortní, bezpečnou a rychlou přepravu osob v rámci Evropy.",
      button: "Zjistit více",
    },

    // Services section
    services: {
      preHeading: "Služby",
      heading: "Co pro vás můžeme udělat?",
      services: [
        {
          heading: "Přeprava na/z letiště v rámci evropy",
          text: "Lorem ipsum dolor",
          icon: FaPlane,
        },
        {
          heading: "Svatby",
          text: "Lorem ipsum dolor",
          icon: FaHeart,
        },
        {
          heading: "Osobní řidič s naším vozem",
          text: "Lorem ipsum dolor",
          icon: FaCompass,
        },
        {
          heading: "Expresní kurýr",
          text: "Lorem ipsum dolor",
          icon: FaShoppingBag,
        },
        {
          heading: "Firemní večírky a oslavy",
          text: "Lorem ipsum dolor",
          icon: FaGlassMartiniAlt,
        },
        {
          heading: "Osobní řidič Vašeho vozu",
          text: "Lorem ipsum dolor",
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
          text: "(Přeloženo pomocí google) <br /> Pravidelně chodím do této společnosti. A jsem vždy spokojen s přesností. Vždy mě potkávají ve všech požadavcích a náhlých změnách. Mohu jen DOPORUČIT!",
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
    },

    // Contact section
    contect: {
      preHeading: "Kontakt",
      heading: "Pojďte se s námi svézt",
    },
  },
};
