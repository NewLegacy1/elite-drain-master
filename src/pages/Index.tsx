import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SpecialistSection from "@/components/SpecialistSection";
import FeaturesSection from "@/components/FeaturesSection";
import ServicesGrid from "@/components/ServicesGrid";
import WorkGallery from "@/components/WorkGallery";
import VideosSection from "@/components/VideosSection";
import TrustSection from "@/components/TrustSection";
import ScopeSection from "@/components/ScopeSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import DesktopCTA from "@/components/DesktopCTA";

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Jay That Drain Guy",
    "description": "Southern Ontario's elite drain specialists with 19 years of specialized drain clearing expertise. Serving Hamilton, Burlington, Stoney Creek, Oakville, Mississauga, Toronto and the Greater Toronto Area. 24/7 emergency drain service.",
    "url": "https://jaythatdrainguy.com",
    "telephone": "+1-289-242-4876",
    "email": "Jay.thatdrainguy@gmail.com",
    "image": "https://jaythatdrainguy.com/logo.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "5216 Dickenson Rd E",
      "addressLocality": "Hannon",
      "addressRegion": "ON",
      "postalCode": "L0R 1P0",
      "addressCountry": "CA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "43.2557",
      "longitude": "-79.8711"
    },
    "priceRange": "$$",
    "areaServed": [
      {
        "@type": "City",
        "name": "Hamilton",
        "containedIn": { "@type": "State", "name": "Ontario" }
      },
      {
        "@type": "City",
        "name": "Stoney Creek",
        "containedIn": { "@type": "State", "name": "Ontario" }
      },
      {
        "@type": "City",
        "name": "Burlington",
        "containedIn": { "@type": "State", "name": "Ontario" }
      },
      {
        "@type": "City",
        "name": "Hannon",
        "containedIn": { "@type": "State", "name": "Ontario" }
      },
      {
        "@type": "City",
        "name": "Binbrook",
        "containedIn": { "@type": "State", "name": "Ontario" }
      },
      {
        "@type": "City",
        "name": "Mount Hope",
        "containedIn": { "@type": "State", "name": "Ontario" }
      },
      {
        "@type": "City",
        "name": "Grimsby",
        "containedIn": { "@type": "State", "name": "Ontario" }
      },
      {
        "@type": "City",
        "name": "Oakville",
        "containedIn": { "@type": "State", "name": "Ontario" }
      },
      {
        "@type": "City",
        "name": "Mississauga",
        "containedIn": { "@type": "State", "name": "Ontario" }
      },
      {
        "@type": "City",
        "name": "Toronto",
        "containedIn": { "@type": "State", "name": "Ontario" }
      }
    ],
    "serviceType": [
      "Basement Drain Clearing",
      "Clogged Toilet Repair", 
      "Kitchen Drain Clearing",
      "Sewer Line Clearing",
      "Drain Camera Inspection",
      "Main Stack Clearing",
      "Building Trap Service",
      "Emergency Drain Service"
    ],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "96",
      "bestRating": "5",
      "worstRating": "1"
    },
    "sameAs": [
      "https://www.youtube.com/@Jaythatdrainguy",
      "https://www.facebook.com/profile.php?id=100063960034982",
      "https://www.instagram.com/jaythatdrainguy",
      "https://twitter.com/DrainThat",
      "https://www.tiktok.com/@jaythatdrainguy"
    ]
  };

  return (
    <>
      <Helmet>
        <title>Jay That Drain Guy | 5.0★ (96 Reviews) | 19 Years Clearing Drains in Hamilton, Burlington, Toronto | 24/7 Emergency</title>
        <meta name="description" content="★★★★★ 5.0 rating with 96+ reviews! Expert drain clearing in Hamilton, Burlington, Stoney Creek, Oakville, Mississauga & Toronto. 19 years experience. Basement drains, clogged toilets, kitchen lines. 24/7 emergency service. Call 289-242-4876." />
        <meta name="keywords" content="drain clearing Hamilton, emergency drain service Burlington, clogged toilet Stoney Creek, basement drain Oakville, kitchen drain Mississauga, drain specialist Toronto, sewer line clearing Hamilton, drain camera inspection Ontario, 24/7 drain service GTA, drain technician Southern Ontario" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="Jay That Drain Guy" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jaythatdrainguy.com" />
        <meta property="og:site_name" content="Jay That Drain Guy" />
        <meta property="og:title" content="Jay That Drain Guy | 5.0★ (96 Reviews) | Expert Drain Clearing Hamilton & GTA" />
        <meta property="og:description" content="★★★★★ Rated 5.0/5.0 by 96+ customers! 19 years clearing drains in Hamilton, Burlington, Toronto & GTA. 24/7 emergency service. Call 289-242-4876." />
        <meta property="og:image" content="https://jaythatdrainguy.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_CA" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@jaythatdrainguy" />
        <meta name="twitter:title" content="Jay That Drain Guy | Expert Drain Clearing Hamilton & GTA" />
        <meta name="twitter:description" content="19 years clearing drains in Hamilton, Burlington, Toronto & GTA. 24/7 emergency service. Call 289-242-4876." />
        <meta name="twitter:image" content="https://jaythatdrainguy.com/og-image.jpg" />
        
        {/* Geo tags for local SEO */}
        <meta name="geo.region" content="CA-ON" />
        <meta name="geo.placename" content="Hamilton, Ontario" />
        <meta name="geo.position" content="43.2557;-79.8711" />
        <meta name="ICBM" content="43.2557, -79.8711" />
        
        {/* Business Info */}
        <meta name="telephone" content="+1-289-242-4876" />
        <meta name="coverage" content="Hamilton, Burlington, Stoney Creek, Oakville, Mississauga, Toronto, GTA" />
        
        {/* Canonical */}
        <link rel="canonical" href="https://jaythatdrainguy.com" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <main className="min-h-screen bg-background overflow-x-hidden">
        {/* Header with Logo */}
        <Header />
        
        {/* Sticky CTAs */}
        <StickyCTA />
        
        {/* Page Sections */}
        <HeroSection />
        <SpecialistSection />
        <FeaturesSection />
        <WorkGallery />
        <VideosSection />
        <ServicesGrid />
        <ScopeSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
