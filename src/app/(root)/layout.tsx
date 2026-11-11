export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <div className="flex flex-col h-screen">
        <main className="flex-1 wrapper">
            {children}
        </main>
    </div>
  );
}