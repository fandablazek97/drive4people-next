import { useTranslation } from "@/hooks/useTranslation";
import Container from "../Container";
import Heading from "../Heading";
import PreHeading from "../PreHeading";
import Reveal from "../Reveal";

export default function Drivers() {
  const t = useTranslation();
  return (
    <section className="w-screen bg-white">
      <Container id="ridici" py="lg">
        <Reveal>
          <PreHeading level={2}>{t.index.drivers.preHeading}</PreHeading>
          <Heading level={"none"} size="md" hasMarginBottom>
            {t.index.drivers.heading}
          </Heading>
          <p>{t.index.drivers.perex}</p>
        </Reveal>

        <div className="mt-24 grid grid-cols-1 gap-16 md:grid-cols-2">
          {/* <Reveal>
        <StaticImage
          src="../../../assets/images/golf/golf-1.jpg"
          alt="Lukáš Jiránek"
          placeholder="blurred"
          loading="lazy"
          layout="fullWidth"
          className="aspect-[4/3]"
          objectFit="cover"
          objectPosition="50% 50%"
        />
      </Reveal>

      <Reveal className="md:reveal-delay-300">
        <h3 className="ui-heading text-primary" data-heading="lg">
          Lukáš Jiránek, 25 let
        </h3>
        <h4 className="ui-heading">Zkušenosti</h4>
        <ul className="marker:text-primary ml-8 list-disc">
          <li>6 let aktivní řidič</li>
          <li>Roční nájezd 60 – 80 tis. Km</li>
          <li>
            Zkušenosti s řízením jak osobních, tak užitkových vozů na krátké i
            dlouhé vzdálenosti
          </li>
          <li>Zkušenosti s řízením ve velkých městech</li>
          <li>
            Dlouhodobě působí jako řidič pro osobní přepravu osob v Praze
          </li>
          <li>Komunikace v německém a anglickém jazyce</li>
        </ul>
      </Reveal> */}
        </div>
      </Container>
    </section>
  );
}
