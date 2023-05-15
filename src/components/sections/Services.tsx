import { useTranslation } from "@/hooks/useTranslation";
import Container from "../Container";
import Heading from "../Heading";
import PreHeading from "../PreHeading";
import Reveal from "../Reveal";

export default function Services() {
  const t = useTranslation();
  return (
    <Container as={"section"} py={"lg"} id="sluzby">
      <Reveal>
        <PreHeading level={2}>Služby</PreHeading>
        <Heading level={"none"} size="md">
          Co pro vás můžeme udělat?
        </Heading>
      </Reveal>

      <div className="mt-16 grid grid-cols-1 gap-16 md:mt-28 md:grid-cols-2">
        {/* Map over services */}
        {t.index.services.services.map((service) => (
          <Reveal
            className="grid grid-cols-1 xs:grid-cols-7"
            key={service.heading}
          >
            <service.icon className="col-span-1 mb-6 text-4xl text-primary" />
            <div className="col-span-1 xs:col-span-6">
              <Heading level={3} size="sm" hasMarginBottom>
                {service.heading}
              </Heading>
              <p>{service.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Container>
  );
}
