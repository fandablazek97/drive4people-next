import { contact } from "@/configs/navigation";
import { useTranslation } from "@/hooks/useTranslation";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import Button from "../Button";
import Container from "../Container";
import Heading from "../Heading";
import Link from "../Link";
import PreHeading from "../PreHeading";
import Reveal from "../Reveal";
import Checkbox from "../inputs/Checkbox";
import Hnypot from "../inputs/Hnypot";
import TextArea from "../inputs/TextArea";
import TextInput from "../inputs/TextInput";

function ContactForm({ className = "" }: { className?: string }) {
  const [isMailSent, setIsMailSent] = useState(false);
  const [formError, setFormError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  const t = useTranslation();

  // Honeypot refs
  const hnyNameRef = useRef<HTMLInputElement>(null);
  const hnySurnameRef = useRef<HTMLInputElement>(null);
  const hnyTelRef = useRef<HTMLInputElement>(null);
  const hnyEmailRef = useRef<HTMLInputElement>(null);

  // Submit handler
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    if (!formRef.current) return;

    const hnyName = hnyNameRef.current?.value;
    const hnySurname = hnySurnameRef.current?.value;
    const hnyTel = hnyTelRef.current?.value;
    const hnyEmail = hnyEmailRef.current?.value;

    if (
      (hnyName === "" || hnyName === undefined) &&
      (hnySurname === "" || hnySurname === undefined) &&
      (hnyTel === "" || hnyTel === undefined) &&
      (hnyEmail === "" || hnyEmail === undefined)
    ) {
      emailjs
        .sendForm(
          "service_kxwxi1a",
          "template_mukthqd",
          formRef.current,
          "user_2tNsUaIQSULo6wFXKZVCs"
        )
        .then(
          // Success
          () => {
            setIsMailSent(true);
            e.target.reset();
            setIsLoading(false);
          },
          // Error
          () => {
            setFormError(true);
            setIsLoading(false);
          }
        );
    } else {
      setIsMailSent(true);
      e.target.reset();
      setIsLoading(false);
    }
  };
  return (
    <div className={`${className}`}>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className={`space-y-8`}
        aria-label="Kontaktní formulář"
      >
        {/* ---- Honey start - antispam ochrana ---- */}
        <Hnypot ref={hnyNameRef} type="text" id="hny-name" label="name" />
        <Hnypot
          ref={hnySurnameRef}
          type="text"
          id="hny-surname"
          label="surname"
        />
        <Hnypot
          ref={hnyTelRef}
          type="tel"
          id="hny-phone"
          label="phone number"
        />
        <Hnypot ref={hnyEmailRef} type="email" id="hny-email" label="E-mail" />
        {/* ---- Honey end - antispam ochrana ---- */}

        <TextInput
          type="text"
          id="name"
          name="name"
          label={t.index.contect.form.nameSurnameInput}
          isRequired
        />
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
          <TextInput
            type="email"
            id="mail"
            name="mail"
            label={t.index.contect.form.emailInput}
            isRequired
            className="col-span-1"
          />
          <TextInput
            type="tel"
            id="tel"
            name="tel"
            label={t.index.contect.form.phoneInput}
            isRequired
            className="col-span-1"
          />
        </div>
        <TextArea
          id="message"
          name="message"
          label={t.index.contect.form.messageInput}
          isRequired
        />
        <Checkbox
          id="gdpr"
          name="gdpr"
          isRequired
          label={
            <span>
              {t.index.contect.form.gdprLabel}{" "}
              <Link
                href="/gdpr"
                hoverEffect="scale-up"
                className="text-primary-500"
              >
                {t.index.contect.form.gdprLink}
              </Link>
            </span>
          }
        />
        <Button size="lg" type="submit" isLoading={isLoading}>
          {t.index.contect.form.submitButton}
        </Button>
      </form>
    </div>
  );
}

export default function Contact() {
  const t = useTranslation();
  return (
    <Container pt="md" pb="lg" id="kontakt">
      <Reveal>
        <PreHeading level={2}>{t.index.contect.preHeading}</PreHeading>
        <Heading level={"none"} size="md">
          {t.index.contect.heading}
        </Heading>
      </Reveal>

      <div className=" mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-16">
        <Reveal>
          <span className="mb-2 block text-base text-gray-500 md:text-lg">
            {t.index.contect.phoneHeading}
          </span>
          <Link
            href={contact[0].href}
            hoverEffect="scale-up"
            className="text-xl font-semibold text-primary md:text-2xl"
          >
            {contact[0].label}
          </Link>
        </Reveal>

        <Reveal>
          <span className="mb-2 block text-base text-gray-500 md:text-lg">
            {t.index.contect.emailHeading}
          </span>
          <Link
            href={contact[1].href}
            hoverEffect="scale-up"
            className="text-xl font-semibold text-primary md:text-2xl"
          >
            {contact[1].label}
          </Link>
        </Reveal>
      </div>

      <div className="mt-32 grid grid-cols-1 gap-16 md:grid-cols-3">
        <Reveal className="col-span-2">
          <Heading level={3} size="sm">
            {t.index.contect.form.heading}
          </Heading>
          <div className="pt-6">
            <ContactForm />
          </div>
        </Reveal>

        <Reveal className="col-span-1">
          <Heading level={4} size="sm">
            {t.index.contect.billingInfo.heading}
          </Heading>
          <p className="pt-6">
            <span className="font-bold">
              {t.index.contect.billingInfo.sro.name}
            </span>{" "}
            <br />
            <span>{t.index.contect.billingInfo.sro.ico}</span>
            <br />
            <span>{t.index.contect.billingInfo.sro.dic}</span>
            <br />
            <br />
            <span className="font-bold">Bankovní spojení</span> <br />
          </p>
        </Reveal>
      </div>
    </Container>
  );
}