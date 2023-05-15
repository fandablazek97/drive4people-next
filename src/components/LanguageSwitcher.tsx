import clsx from "clsx";
import { useRouter } from "next/router";

type Props = {
  className?: string;
};

export default function LanguageSwitcher({ className = "" }: Props) {
  const router = useRouter();
  const { locale } = router;

  function changeLanguage(e: any) {
    const locale = e.target.value;
    router.push(router.pathname, router.asPath, { locale });
  }

  // function changeLanguage() {
  //   const newLocale = locale === "cs" ? "en" : "cs";
  //   router.push(router.pathname, router.pathname, { locale: newLocale });
  // }

  return (
    <select
      onChange={changeLanguage}
      defaultValue={locale}
      className={clsx(
        " bg-transparent text-sm font-semibold tracking-wide text-white",
        className
      )}
    >
      <option className="text-black" value="cs">
        CZ
      </option>
      <option className="text-black" value="en">
        EN
      </option>
      <option className="text-black" value="de">
        DE
      </option>
      <option className="text-black" value="ru">
        RU
      </option>
    </select>
  );
}
