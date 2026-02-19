import PageWithLoading from "./components/PageWithLoading";
import GradientBlobs from "./components/GradientBlobs";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StatsSection from "./components/StatsSection";
import AteliersPreview from "./components/AteliersPreview";
import PartnersSection from "./components/PartnersSection";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";

export default function Home() {
  return (
    <PageWithLoading>
      <GradientBlobs />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <MainContent>
          <StatsSection />
          <AteliersPreview />
          <PartnersSection />
          <Footer />
        </MainContent>
      </main>
    </PageWithLoading>
  );
}
