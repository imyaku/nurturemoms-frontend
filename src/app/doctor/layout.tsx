
import Header from "@/app/doctor/components/header";
import HeaderMobile from '@/app/doctor/components/header-mobile';
import MarginWidthWrapper from "@/app/doctor/components/margin-width-wrapper";
import PageWrapper from "@/app/doctor/components/page-wrapper";
import SideNav from "@/app/doctor/components/side-nav";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex">
          <SideNav />
          <main className="flex-1">
            <MarginWidthWrapper>
              <Header />
              <HeaderMobile />
              <PageWrapper>{children}</PageWrapper>
            </MarginWidthWrapper>
          </main>
        </div>
      </body>
    </html>
  );
}
