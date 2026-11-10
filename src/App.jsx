import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';
import ScrollToTop from './components/ScrollToTop';
import { LanguageProvider } from '@/lib/i18n';
import { ThemeProvider } from '@/lib/theme';
import Layout from '@/components/layout/Layout';
// Add page imports here
import Home from '@/pages/Home';
import About from '@/pages/About';
import Branches from '@/pages/Branches';
import Leadership from '@/pages/Leadership';
import Projects from '@/pages/Projects';
import ProjectDetail from '@/pages/ProjectDetail';
import PrimarySchool from '@/pages/PrimarySchool';
import SkillDevelopment from '@/pages/SkillDevelopment';
import Gallery from '@/pages/Gallery';
import GalleryPictures from '@/pages/GalleryPictures';
import GalleryVideos from '@/pages/GalleryVideos';
import Connect from '@/pages/Connect';
import Volunteer from '@/pages/Volunteer';
import RegularMember from '@/pages/RegularMember';
import LifetimeMember from '@/pages/LifetimeMember';
import Career from '@/pages/Career';
import Blogs from '@/pages/Blogs';
import BlogArticle from '@/pages/BlogArticle';
import Contact from '@/pages/Contact';
import Donate from '@/pages/Donate';
import LegalPage from '@/pages/LegalPage';
import Constitution from '@/pages/Constitution';

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();

  // Show loading spinner while checking app public settings or auth
  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"></div>
      </div>
    );
  }

  // Handle authentication errors
  if (authError) {
    if (authError.type === 'user_not_registered') {
      return <UserNotRegisteredError />;
    } else if (authError.type === 'auth_required') {
      // Redirect to login automatically
      navigateToLogin();
      return null;
    }
  }

  // Render the main app
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/branches" element={<Branches />} />
        <Route path="/about/leadership" element={<Leadership />} />
        <Route path="/about/projects" element={<Projects />} />
        <Route path="/about/projects/:slug" element={<ProjectDetail />} />
        <Route path="/about/primary-school" element={<PrimarySchool />} />
        <Route path="/about/skill-development" element={<SkillDevelopment />} />
        <Route path="/about/constitution" element={<Constitution />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/gallery/pictures" element={<GalleryPictures />} />
        <Route path="/gallery/videos" element={<GalleryVideos />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="/connect/volunteer" element={<Volunteer />} />
        <Route path="/connect/regular-member" element={<RegularMember />} />
        <Route path="/connect/lifetime-member" element={<LifetimeMember />} />
        <Route path="/connect/career" element={<Career />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:slug" element={<BlogArticle />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/privacy" element={<LegalPage type="privacy" />} />
        <Route path="/terms" element={<LegalPage type="terms" />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};

function App() {

  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <LanguageProvider>
          <ThemeProvider>
            <Router>
              <ScrollToTop />
              <AuthenticatedApp />
            </Router>
            <Toaster />
          </ThemeProvider>
        </LanguageProvider>
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default App