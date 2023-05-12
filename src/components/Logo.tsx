import clsx from "clsx";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`h-8 w-20 xs:h-12 xs:w-28 ${className}`}>
      <img
        src={"/svg/logo.svg"}
        alt="Logo Drive4people"
        width="112"
        height="48"
        className={clsx("h-full w-full invert", className)}
      />
    </div>
  );
}
