import React from "react";
import BlogSection from "./components/BlogSection";
import ClientLogos from "./components/ClientLogos";
import CommunityFeatures from "./components/CommunityFeatures";
import ContentSection from "./components/ContentSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import StatsSection from "./components/StatsSection";
import Testimonial from "./components/Testimonial";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <ClientLogos />
      <CommunityFeatures />

      <ContentSection
        imageSrc="/assets/mobile-login-illustration.svg"
        imageAlt="Mobile login illustration"
        title="The unseen of spending three years at Pixelgrade"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio."
        buttonText="Learn More"
      />

      <StatsSection />

      <ContentSection
        imageSrc="/assets/mobile-design-illustration.svg"
        imageAlt="Mobile design illustration"
        title="How to design your site footer like we did"
        description="Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilibus finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida."
        buttonText="Learn More"
        reverse={true}
      />

      <Testimonial />
      <BlogSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default App;
