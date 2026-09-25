import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./pages/Home";
import { LanguageProvider } from "./context/Languagecontext";
import Login from "./components/Login/Login";
import MainProd from "./components/Productoveriew-page/Overview";
import ResearchDetail from "./pages/research/ResearchDetails";
import Documentdetails from "./components/Research/Documentation/Featuredocs/Documentdetails";
import ReactProductionGuide from "./components/Research/Guide/FeatureGuide/ReactProductionguide";
import AISaaSCaseStudy from "./components/Solutions/Developer/Devcase/DevAIsaas";
import Mainweb from "./components/Productoveriew-page/Webdevpage/Mainweb";
import MainAi from "./components/Productoveriew-page/Ai-products/MainAi";
import MainDev from "./components/Productoveriew-page/Devops/MainDev";
import MainInt from "./components/Productoveriew-page/Integration/MainInt";
import Mainstartup from "./components/Solutions/Startup/Mainstartup";
import Mainenterprise from "./components/Solutions/Enterprise/Mainenterprise";
import Mainagency from "./components/Solutions/Agency/Mainagency";
import Maindev from "./components/Solutions/Developer/Maindev";
import Blog from "./pages/Blog";
import Guide from "./pages/research/Guide";
import Techsucessstorypage from "./pages/Techsucessstorypage";
import Documentation from "./pages/research/Documentation";
import Aboutus from "./pages/Aboutus";
import Maincareer from "./components/Company/Career/Maincareer";
import Maincontact from "./components/Company/Contact/Maincontact";
import ScrollToTop from "./components/Scrolltop/Scrolltop";
import Signup from "./pages/Authentication/Register";
import Navbar from "./components/Navbar/Navbar";
import PlatformDetails from "./components/Capability/Platformdetails";
import WebProductDetails from "./components/Productoveriew-page/Webdevpage/Whatwe/WebProductdetails";
import TechnologyStackDetails from "./components/Productoveriew-page/Webdevpage/Techstack/Technologystackdetails";
import DeveloperDashboard from "./components/Dashboard/Developer";
import Dashboard from "./components/Dashboard/user";
import { AuthProvider } from "./components/Context/Authcontext";
import AIProductDetails from "./components/Productoveriew-page/Ai-products/Build/Aiproductdeatils";
import IntegrationDetails from "./components/Productoveriew-page/Integration/Intcard/Integrationdeatils";
import JobApplication from "./components/Company/Career/jobapp/JobApp";
import BlogDetails from "./components/Research/blog/Latestinsight/Blogdetails";
export default function App() {
  return (
    <AuthProvider>
      <LanguageProvider>
        <BrowserRouter>
          <ScrollToTop /> <Navbar />
          {/* <Signup/> */}
          {/* ROUTES */}{" "}
          <Routes>
            {" "}
            {/* HOME */} <Route path="/" element={<Home />} /> {/* PRODUCT */}{" "}
            <Route path="/product" element={<MainProd />}>
              <Route index element={<Navigate to="overview" replace />} />
              <Route path="overview" element={<MainProd />} />
              <Route path="/product">
                <Route path="Mainweb" element={<Mainweb />} />
              </Route>
            </Route>
            <Route path="/Productoveriew/Webdevpage/Mainweb" element={<Mainweb />} />
            <Route path="/Productoveriew/Ai-products/MainAi" element={<MainAi />} />
            <Route path="/Productoveriew-page/Devops/MainDev" element={<MainDev />} />
            <Route path="/productoveriew/Integration/MainInt" element={<MainInt />} />
            <Route path="/solutions/Startup/Mainstartup" element={<Mainstartup />} />
            <Route path="/solutions/Enterprise/Mainenterprise" element={<Mainenterprise />} />
            <Route path="/Solutions/Agency/Mainagency" element={<Mainagency />} />
            <Route path="/Solutions/Developer/Maindev" element={<Maindev />} />
            <Route path="/Solutions/Developer/Devcase/DevAIsaas" element={<AISaaSCaseStudy />} />
            <Route path="/pages/Blog" element={<Blog />} />
            <Route path="/pages/Guide" element={<Guide />} />
            <Route path="/pages/Techsucessstorypage" element={<Techsucessstorypage />} />
            <Route path="/pages/Documentation" element={<Documentation />} />
            <Route path="/pages/Aboutus" element={<Aboutus />} />
            <Route path="/Company/Career/Maincareer" element={<Maincareer />} />
            <Route path="/Company/Contact/Maincontact" element={<Maincontact />} />{" "}
            <Route path="/research/:slug" element={<ResearchDetail />} />
            <Route path="/Pages/Products" element={<MainProd />}></Route>
            <Route path="/resources/documentation/getting-started" element={<Documentdetails />} />
            <Route path="/resources/documentation/api" element={<Documentdetails />} />
            <Route path="/resources/documentation/integrations" element={<Documentdetails />} />
            <Route path="/resources/documentation/deployment" element={<Documentdetails />} />
            <Route
              path="/Research/Guide/FeatureGuide/reactProductionguide"
              element={<ReactProductionGuide />}
            />
            <Route path="Solutions/Developer/Devcase/DevAIsaas" element={<AISaaSCaseStudy />} />
            <Route path="/Capability/Platformdetails" element={<PlatformDetails />} />
            <Route
              path="/Productoveriew-page/Webdevpage/Whatwe/WebProductdetails"
              element={<WebProductDetails />}
            />{" "}
            <Route
              path="/Productoveriew-page/Webdevpage/Techstack/Technologystackdetails"
              element={<TechnologyStackDetails />}
            />
            <Route path="/Productoveriew-page/Webdevpage/Mainweb" element={<Mainweb />} />
            {/* LOGIN */} <Route path="/login" element={<Login />} />
            <Route path="/pages/Authentication/Register" element={<Signup />} />
            <Route path="/Dashboard/user" element={<Dashboard />} />
            <Route path="/dashboard/developer" element={<DeveloperDashboard />} />
            <Route
              path="/Productoveriew-page/Ai-products/Build/AiBuild/Aiproductdetails/:slug"
              element={<AIProductDetails />}
            />
            <Route path="/Solutions/Developer/Devcase/DevAIsaas" element={<AISaaSCaseStudy />} />{" "}
            {/* SCHEDULE */}{" "}
            <Route
              path="/Productoveriew-page/Integration/Intcard/Integrationdeatils/:slug"
              element={<IntegrationDetails />}
            />
            <Route path="/Company/Contact/Maincontact" element={<Maincontact />} />
            <Route path="/pages/research/Documentation" element={<Documentation />} />
            <Route path="/Company/Career/jobapp/JobApp" element={<JobApplication />} />
            <Route path="/Blog/Article/:id" element={<BlogDetails />} />
          </Routes>{" "}
          {/* FOOTER */} <Footer />{" "}
        </BrowserRouter>
      </LanguageProvider>
    </AuthProvider>
  );
}
