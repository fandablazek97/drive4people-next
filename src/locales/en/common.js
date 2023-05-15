import {
  FaCar,
  FaCompass,
  FaGlassMartiniAlt,
  FaHeart,
  FaPlane,
  FaShoppingBag,
} from "react-icons/fa";

export const en = {
  common: {
    routes: [
      { href: "/#sluzby", label: "Services" },
      { href: "/#cenik", label: "Price list" },
      { href: "/#reference", label: "Testimonials" },
      { href: "/#ridici", label: "Drivers" },
      { href: "/#vozy", label: "Car fleet" },
      { href: "/#kontakt", label: "Contact" },
    ],
    footer: {
      links: [
        {
          href: "/gdpr",
          label: "Privacy policy",
        },
      ],
      revealSignature: "Created by reveal",
    },
  },

  // Main Page
  index: {
    // Seo
    seo: {
      title: "We'll transport you everywhere",
      description:
        "We are a young, growing company that focuses on comfortable, safe and fast passenger transport within Europe.",
    },

    // Hero section
    hero: {
      heading: "We'll transport you everywhere",
      perex:
        "We are a young, growing company that focuses on comfortable, safe and fast passenger transport within Europe.",
      button: "Learn more",
    },

    // Services section
    services: {
      preHeading: "Services",
      heading: "What can we do for you?",
      services: [
        {
          heading: "Transport to / from the airport within europe",
          text: "Do you need a personal transfer to the airport, but do not want to delay planning your trip and parking your car at the airport? Then this service is made exactly for you.",
          icon: FaPlane,
        },
        {
          heading: "Weddings",
          text: "Are you looking for a suitable car for newlyweds or wedding guests? For this festive occasion, we will provide you with a comfortable car including a driver in a suit, which will be professionally available to you at all times.",
          icon: FaHeart,
        },
        {
          heading: "Personal driver with our car",
          text: "Do you have an important meeting that you need to focus and prepare on? We offer the possibility of a professional personal driver. He will plan your trip for you and ensure comfortable and safe transport within the Czech Republic and Europe.",
          icon: FaCompass,
        },
        {
          heading: "Express courier",
          text: "Do you have an important shipment that you need to get to the other side of the Republic or Europe quickly and safely? We can also arrange such a service for you.",
          icon: FaShoppingBag,
        },
        {
          heading: "Corporate parties and celebrations",
          text: "We also provide transportation for corporate or family events. From early pickup to safe and comfortable transportation directly to the door.",
          icon: FaGlassMartiniAlt,
        },
        {
          heading: "Personal driver of your car",
          text: "More information at info@drive4people.cz",
          icon: FaCar,
        },
      ],
    },

    // Pricelist section
    priceList: {
      preHeading: "Price list",
      heading: "How much will it cost?",
      perex:
        "* Prices are for guidance and are adjusted according to the clients requirements.",
      standardHeading: "Standart services",
      standardPrices: [
        {
          item: "Personal driver with our car",
          price: "starting at 800 CZK / hour",
        },
        {
          item: "Personal driver of your car",
          price: "400 CZK / hour",
        },
        {
          item: "Weddings",
          price: "starting at 800 CZK / hour",
        },
        {
          item: "Corporate parties and celebrations",
          price: "starting at 800 CZK / hour",
        },
        {
          item: "Express courier",
          price: "According to specification",
        },
      ],
      airportHeading: "Airport",
      airportPrices: [
        {
          item: "Prague -> Václav Havel Airport",
          price: "starting at 800 CZK / hour",
        },
        {
          item: "Prague -> Vienna Airport",
          price: "8150 CZK",
        },
        {
          item: "Prague -> Munich Airport",
          price: "8800 CZK",
        },
      ],
    },

    // Testimonials section
    testimonials: {
      preHeading: "Testimonials",
      heading: "Our clients say",
      perex: "* Testimonials origin - google business rankings",
      testimonials: [
        {
          name: "Jan Hrubeš",
          text: "Great deal, speed, reliability, professionalism, high quality 💯 we were very satisfied, thanks 👏👍",
        },
        {
          name: "Kateřina Juránková",
          text: "Perfect professional ride, perfect cleanliness of the interior, very pleasant performance, reliability, 100% service as it should be and like bonus, very nice and handsome young man ...",
        },
        {
          name: "Alexandr Kučera",
          text: "Great professional approach and always a good mood. Drive4people I can only recommend.",
        },
        {
          name: "Marek Sahula",
          text: "Excellent and professional approach. The driver arrived on time, he was smiling and very nice all the time. This company can only recommend.",
        },
        {
          name: "Jiří Sandanus",
          text: "The service was amazing, everything went to our complete satisfaction. I can just recommend to everyone.",
        },
        {
          name: "Tobiáš bartoš",
          text: "From the first meeting Absolute professionalism !. Mr. Luke is Very pleasant and reliable. Quality representation of the company. More like that Professional drivers.",
        },
        {
          name: "Lukáš Kousal",
          text: "(Translated by google) - I go to this company regularly. AND I am always satisfied with the accuracy. They always meet me in all demands and sudden changes. I can only recommend!",
        },
        {
          name: "Hana Bluchová",
          text: "Great satisfaction, the ride was without problems, reliability, professional.",
        },
      ],
    },

    // Drivers section
    drivers: {
      preHeading: "Drivers",
      heading: "Who will be your driver?",
      perex:
        "* The driver will always pick you up appropriately dressed with a professional and personal approach.",
    },

    // CarFleet section
    carFleet: {
      preHeading: "Car fleet",
      heading: "Which car will we use?",
    },

    // Contact section
    contect: {
      preHeading: "Contakt",
      heading: "Let's take a ride with us",
      phoneHeading: "Phone:",
      emailHeading: "E-mail:",
      form: {
        heading: "Have a question?",
        nameSurnameInput: "Name and Surname",
        emailInput: "Your e-mail",
        phoneInput: "Your phone",
        messageInput: "Yout message",
        gdprLabel: "I agree with terms and conditions described in our",
        gdprLink: "privacy policy.",
        submitButton: "Submit",
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
