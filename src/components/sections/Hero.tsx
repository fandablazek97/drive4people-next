import Image from "next/image";
import { MdArrowDownward } from "react-icons/md";
import Button from "../Button";
import Container from "../Container";

export default function Hero() {
  return (
    <header
      id="domu"
      className="relative h-screen min-h-[36rem] w-screen overflow-hidden"
    >
      <Container className="relative z-20 flex h-full flex-col items-start justify-center">
        <h1
          className="ui-separator mb-10 text-4xl font-bold leading-tight text-white md:text-6xl xl:text-7xl"
          data-separator="left"
        >
          Přepravíme <br /> odkudkoli kamkoli
        </h1>
        <p className="mb-10 max-w-4xl text-xl text-gray-200">
          Jsme mladá, rozvíjející se společnost, která se zaměřuje na komfortní,
          bezpečnou a rychlou přepravu osob v rámci Evropy.
        </p>
        <div>
          <Button as="span" leftIcon={<MdArrowDownward />}>
            Zjistit více
          </Button>
        </div>
      </Container>

      <div className="dark:bg-gray-950/80 absolute inset-0 z-10 h-full w-full bg-gray-900/[0.65]"></div>

      <Image
        src="/img/d4p-2023-1.jpg"
        width={1920}
        height={1080}
        alt="Lukáš Jiránek"
        priority
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
    </header>
  );
}
