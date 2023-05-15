import { HiArrowUp } from "react-icons/hi";

export default function ScrollToTop() {
  function ScrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button
      className="fixed right-8 bottom-8 z-fixed rounded-full bg-primary p-5 transition-colors duration-300 hover:bg-primary-600"
      onClick={ScrollToTop}
    >
      <HiArrowUp className="h-5 w-5 text-white" />
    </button>
  );
}
