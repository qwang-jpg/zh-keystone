import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import OrganizationSchema from "@/components/common/OrganizationSchema";

export default function PageLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col">
      <OrganizationSchema />
      <Header />
      <main className="flex flex-1 flex-col">{children}</main>
      <Footer />
    </div>
  );
}
