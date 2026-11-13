import Footer from "@/components/shared/footer";
import Header from "@/components/shared/header";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <div className="flex flex-col h-screen">
        <Header />
        <main className="wrapper flex-1 w-full">
            
            {children}
        </main>

        <Footer />
    </div>
  );
}