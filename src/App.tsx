import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ArticlePage from "./pages/ArticlePage";
import CategoryPage from "./pages/CategoryPage";
import AuthorsPage from "./pages/AuthorsPage";
import AuthorPage from "./pages/AuthorPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NewsletterPage from "./pages/NewsletterPage";
import CareersPage from "./pages/CareersPage";
import JobDetailPage from "./pages/JobDetailPage";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";
import AdvertisePage from "./pages/AdvertisePage";
import SearchPage from "./pages/SearchPage";
import ArchivePage from "./pages/ArchivePage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/article/:id" element={<ArticlePage />} />
          <Route path="/politics" element={<CategoryPage />} />
          <Route path="/technology" element={<CategoryPage />} />
          <Route path="/business" element={<CategoryPage />} />
          <Route path="/culture" element={<CategoryPage />} />
          <Route path="/world" element={<CategoryPage />} />
          <Route path="/opinion" element={<CategoryPage />} />
          <Route path="/authors" element={<AuthorsPage />} />
          <Route path="/author/:id" element={<AuthorPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/newsletter" element={<NewsletterPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/careers/:id" element={<JobDetailPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/advertise" element={<AdvertisePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/archive" element={<ArchivePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
