import { useTranslation } from "@/hooks/useTranslation";
import Image from "next/image";
import { MdArrowDownward } from "react-icons/md";
import Button from "../Button";
import Container from "../Container";

export default function Hero() {
  const t = useTranslation();
  return (
    <header
      id="domu"
      className="relative h-screen min-h-[36rem] w-screen overflow-hidden"
    >
      <Container className="relative z-20 flex h-full flex-col items-start justify-center">
        <h1 className="mb-10 max-w-4xl text-4xl font-bold leading-tight text-white md:text-6xl xl:text-7xl">
          {t.index.hero.heading}
        </h1>
        <div className="mb-10 h-1 w-24 bg-primary"></div>
        <p className="mb-10 max-w-4xl text-base text-gray-200 sm:text-xl">
          {t.index.hero.perex}
        </p>
        <div>
          <Button href="/#sluzby" size="lg" leftIcon={<MdArrowDownward />}>
            {t.index.hero.button}
          </Button>
        </div>
      </Container>

      <div className="absolute inset-0 z-10 h-full w-full bg-gray-950/65"></div>

      <Image
        src="/img/d4p-2023-1.jpg"
        width={1920}
        height={1280}
        alt="Lukáš Jiránek"
        priority
        loading="eager"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
    </header>
  );
}
