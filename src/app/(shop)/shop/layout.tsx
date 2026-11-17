import Footer from "@/components/shared/footer";
import Header from "@/components/shared/header";

const Layout = ({ children }: any) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-1 w-full">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
