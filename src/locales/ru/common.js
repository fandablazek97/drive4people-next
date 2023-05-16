import {
  FaCar,
  FaCompass,
  FaGlassMartiniAlt,
  FaHeart,
  FaPlane,
  FaShoppingBag,
} from "react-icons/fa";

export const ru = {
  common: {
    routes: [
      { href: "/#sluzby", label: "Услуги" },
      { href: "/#cenik", label: "Прейскурант" },
      { href: "/#reference", label: "Ссылка" },
      { href: "/#ridici", label: "Водители" },
      { href: "/#vozy", label: "Автопарк" },
      { href: "/#kontakt", label: "контакт" },
    ],
    footer: {
      links: [
        {
          href: "/gdpr",
          label: "Политика конфиденциальности",
        },
      ],
      revealSignature: "сделан Reveal",
    },
  },

  // Main Page
  index: {
    // Seo
    seo: {
      title: "Перевезем откуда угодно и куда угодно",
      description:
        "Мы обеспечим вам удобную, безопасную и быструю перевозку людей по Европе. Мы - молодая, динамичная компания, которая постоянно развивается, чтобы предложить вам самые современные способы транспортировки.",
    },

    // Hero section
    hero: {
      heading: "Перевезем откуда угодно и куда угодно",
      perex:
        "Мы обеспечим вам удобную, безопасную и быструю перевозку людей по Европе. Мы - молодая, динамичная компания, которая постоянно развивается, чтобы предложить вам самые современные способы транспортировки.",
      button: "узнать больше",
    },

    // Services section
    services: {
      preHeading: "Услуги",
      heading: "Что мы можем вам предложить?",
      services: [
        {
          heading: "Водитель вашего автомобиля",
          text: "Предлагаем роскошную транспортную услугу с водителем в вашем собственном автомобиле. Вы можете наслаждаться преимуществами вашего личного автомобиля, не занимаясь вождением и парковкой. Наши опытные водители обеспечат ваш комфорт и безопасность в путешествии в любой точке Европы. Мы доступны как для отдельных лиц, так и для групп в любое удобное для вас время. С нами вы можете быть уверены, что прибудете вовремя и без стресса на ваше место назначения.",
          icon: FaCar,
        },
        {
          heading: "Водитель с нашим автомобилем",
          text: "Наша компания предлагает вам комфортный и надежный транспорт с профессиональным водителем и современным автомобилем. Вам не придется беспокоиться о поиске места для парковки или о вождении в незнакомом городе, наш опытный водитель позаботится обо всем. Мы предлагаем на выбор различные типы автомобилей, чтобы сделать вашу перевозку максимально комфортной. С нашим личным шофером вы можете рассчитывать на пунктуальность, скорость и безопасность при транспортировке в любую точку Европы.",
          icon: FaCompass,
        },
        {
          heading: "Транспортировка в/из аэропортов в Европе",
          text: "Избегайте стресса, связанного с планированием поездки в аэропорт. Мы организуем для вас трансфер из аэропорта в Европе с комфортным и надежным обслуживанием, соответствующим вашим потребностям. С нами вы сможете насладиться приятным и беззаботным путешествием, не беспокоясь о парковке или поиске правильного маршрута.",
          icon: FaPlane,
        },
        {
          heading: "Экспресс-курьер",
          text: "Если у вас есть срочный груз, который необходимо надежно доставить в отдаленное место в Чешской Республике или даже в Европе, у нас есть для вас решение. Наша компания предлагает услугу экспресс-курьерской доставки, которая позволит вам быстро и безопасно доставить важный груз по адресу назначения.",
          icon: FaShoppingBag,
        },
        {
          heading: "Свадьбы",
          text: "Мы подготовили комфортабельные свадебные автомобили с профессиональным водителем в костюме, чтобы сделать день вашей свадьбы идеальным. Мы позаботимся о том, чтобы вы и ваши гости прибыли на свадебную церемонию с комфортом и стилем.",
          icon: FaHeart,
        },
        {
          heading: "Корпоративные вечеринки и праздники",
          text: "При организации корпоративных или семейных мероприятий мы рады предоставить безопасный и комфортный транспорт прямо к вашей двери. Вы можете положиться на нашу надежность и профессиональный подход - от своевременного забора до доставки в пункт назначения.",
          icon: FaGlassMartiniAlt,
        },
      ],
    },

    // Pricelist section
    priceList: {
      preHeading: "Прейскурант",
      heading: "Сколько это будет стоить?",
      perex:
        "* Свяжитесь с нами для получения дополнительной информации о ценах",
      standardHeading: "Стандартные услуги",
      standardPrices: [
        {
          item: "Персональный водитель с нашей машиной",
          price: "из 800 CZK / час",
        },
        {
          item: "Персональный водитель вашего автомобиля",
          price: "400 CZK / час",
        },
        {
          item: "Свадьбы",
          price: "из 800 CZK / час",
        },
        {
          item: "Корпоративные вечеринки и торжества",
          price: "из 800 CZK / час",
        },
        {
          item: "Экспресс-курьер",
          price: "согласно спецификации",
        },
      ],
      airportHeading: "Аэропорт",
      airportPrices: [
        {
          item: "Прага -> Аэропорт Вацлава Гавела",
          price: "из 800 CZK",
        },
        {
          item: "Прага -> Аэропорт Вены",
          price: "8150 CZK",
        },
        {
          item: "Прага -> Аэропорт Мюнхена",
          price: "8800 CZK",
        },
      ],
    },

    // Testimonials section
    testimonials: {
      preHeading: "Ссылка",
      heading: "Что говорят клиенты",
      perex: "* Происхождение ссылок - рейтинг компаний Google",
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
      preHeading: "Водители",
      heading: "Кто будет вашим водителем?",
      perex:
        "Наша компания гордится профессиональным подходом и качественным обслуживанием клиентов. Именно поэтому в нашей команде только опытные и надежные водители, которые хорошо знакомы с европейскими дорогами и придерживаются строгих стандартов безопасности. Наши водители всегда готовы помочь вам погрузить багаж и обеспечить максимальный комфорт и безопасность во время поездки. С нашей командой водителей вы можете быть уверены, что прибудете в пункт назначения вовремя и без стресса.",
      drivers: [
        {
          name: "Lukáš Jiránek",
          src: "/img/d4p-2023-5.jpg",
        },
        {
          name: "Nguyen Manh Tien",
          src: "/img/d4p-2023-6.jpg",
        },
        {
          name: "Matěj Bedrník",
          src: "/img/d4p-2023-7.jpg",
        },
      ],
    },

    // CarFleet section
    carFleet: {
      preHeading: "Автомобильный парк",
      heading: "Какие автомобили мы предоставляем?",
      perex:
        "Мы можем организовать для вас перевозку на любом транспортном средстве, будь то легковой автомобиль или многоместный микроавтобус. Кроме того, сейчас мы готовим профессиональные перевозки грузов по всей Европе, которые мы осуществляем на современных микроавтобусах. Вы можете положиться на нашу надежность и внимательное отношение к вашим потребностям.",
      cars: {
        car1: "Volkswagen Passat Variant, 2019",
        car2: "Mercedes-Benz E Class 220D – 2019",
      },
    },

    // Contact section
    contect: {
      preHeading: "контакт",
      heading: "Приезжайте кататься с нами",
      phoneHeading: "Телефон:",
      emailHeading: "Электронная почта:",
      form: {
        heading: "У вас есть вопрос?",
        nameSurnameInput: "Имя и фамилия",
        emailInput: "Электронная почта",
        phoneInput: "Телефон",
        messageInput: "Сообщение",
        gdprLabel: "Я согласен с условиями",
        gdprLink: "защита персональных данных.",
        submitButton: "Отправлять",
        // Success message
        successAlert: {
          heading: "Форма успешно отправлена",
          text: "Спасибо за заполнение формы. Мы свяжемся с вами как можно скорее.",
          backToHomePage: "Вернуться на главную страницу",
        },
        // Error messages
        errorAlert: {
          heading: "Что-то пошло не так",
          text: "Не удалось отправить форму. Повторите попытку позже или используйте другой способ связи.",
        },
      },
      billingInfo: {
        heading: "Задать вопрос",
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
