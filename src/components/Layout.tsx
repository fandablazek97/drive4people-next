import Header from "@/components/Header";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main id="content">{children}</main>
      {/* <Footer /> */}
    </>
  );
}
