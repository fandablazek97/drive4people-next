import { useTranslation } from "@/hooks/useTranslation";
import clsx from "clsx";
import Container from "../Container";
import Heading from "../Heading";
import PreHeading from "../PreHeading";
import Reveal from "../Reveal";

function PriceItem({
  caption,
  price,
  className,
  ...props
}: {
  caption: string;
  price: string;
  className?: string;
  [key: string]: any;
}) {
  return (
    <Reveal
      className={clsx("flex w-full overflow-hidden rounded-lg", className)}
      {...props}
    >
      <div className=" text-default flex w-full items-center bg-white py-3 px-5 leading-snug">
        {caption}
      </div>
      <div className="flex w-1/2 items-center justify-end bg-gray-900 bg-opacity-60 py-3 px-5 text-white">
        {price}
      </div>
    </Reveal>
  );
}

export default function PriceList() {
  const t = useTranslation();
  return (
    <section
      id="cenik"
      className="bg-gradient-to-br from-primary to-primary-900"
    >
      <Container py="lg">
        <Reveal>
          <PreHeading level={2} color="white" className="opacity-75">
            {t.index.priceList.preHeading}
          </PreHeading>
          <Heading level={"none"} size="md" color="white" hasMarginBottom>
            {t.index.priceList.heading}
          </Heading>
          <p className="text-gray-200">{t.index.priceList.perex}</p>
        </Reveal>

        <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
          <div>
            <Reveal className="mt-16 text-white">
              <Heading level={3} size="sm" color="white">
                {t.index.priceList.standardHeading}
              </Heading>
            </Reveal>
            <div className="mt-8 space-y-6">
              {t.index.priceList.standardPrices.map((service) => (
                <PriceItem
                  caption={service.item}
                  price={service.price}
                  key={service.item}
                />
              ))}
            </div>
          </div>

          <div>
            <Reveal className="mt-16 text-white">
              <Heading level={3} size="sm" color="white">
                {t.index.priceList.airportHeading}
              </Heading>
            </Reveal>
            <div className="mt-8 space-y-6">
              {t.index.priceList.airportPrices.map((service) => (
                <PriceItem
                  caption={service.item}
                  price={service.price}
                  key={service.item}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
