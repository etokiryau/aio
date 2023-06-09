import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import Spinner from "../spinner/Spinner";
import { AuthProvider } from "../auth/AuthProvider";
import RequireAuth from "../auth/RequireAuth";
import { Provider } from 'react-redux';
import store from "../../store";

// import { ProjectPage, DocumentationPage, BuildingPage, SmartHousePage, SupportPage } from "../pages/account";
// import { HomePage, AdvantagesPage, ServicesPage, BlogPage, CareerPage, ContactsPage, FaqPage, PolicyPage, ProjectsPage, SingleProjectPage} from "../pages/main";
import { HomePage } from "../pages/main";

const MainPageLayout = lazy(() => import("../mainPageLayout/MainPageLayout"));
const LoginPage = lazy(() => import("../pages/loginPage/LoginPage"));
const AccountLayout = lazy(() => import("../accountLayout/AccountLayout"));
const Page404 = lazy(() => import("../pages/page404/Page404"));
const SolutionViewerPage = lazy(() => import("../pages/account/solutionViewerPage/SolutionViewerPage"));
const PlatformInstructionsPage = lazy(() => import("../pages/main/platformInstructionsPage/PlatformInstructionsPage"));
const MapPage = lazy(() => import("../pages/mapPage/MapPage"));
const AdvantagesPage = lazy(() => import("../pages/main/advantagesPage/AdvantagesPage"));
const ServicesPage = lazy(() => import("../pages/main/servicesPage/ServicesPage"));
const BlogPage = lazy(() => import("../pages/main/blogPage/BlogPage"));
const CareerPage = lazy(() => import("../pages/main/careerPage/CareerPage"));
const ContactsPage = lazy(() => import("../pages/main/contactsPage/ContactsPage"));
const FaqPage = lazy(() => import("../pages/main/faqPage/FaqPage"));
const PolicyPage = lazy(() => import("../pages/main/policyPage/PolicyPage"));
const ProjectsPage = lazy(() => import("../pages/main/ProjectsPage"));
const SingleProjectPage = lazy(() => import("../pages/main/singleProjectPage/SingleProjectPage"));

const ProjectPage = lazy(() => import("../pages/account/ProjectPage"));
const DocumentationPage = lazy(() => import("../pages/account/DocumentationPage"));
const BuildingPage = lazy(() => import("../pages/account/buildingPage/BuildingPage"));
const SmartHousePage = lazy(() => import("../pages/account/SmartHousePage"));
const SupportPage = lazy(() => import("../pages/account/SupportPage"));

function App() {

    return (
        <AuthProvider>
            <Provider store={store}>
            <Suspense fallback={<Spinner/>}>
                <Routes>
                    <Route path="/login" element={<LoginPage />} /> 
                    <Route path="/map" element={<MapPage />} />
                    <Route exact path='*' element={<Page404 />}/>

                    <Route element={<MainPageLayout />}>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/projects" element={<ProjectsPage />} />
                        <Route path="/projects/:id" element={<SingleProjectPage />} />
                        <Route path="/advantages" element={<AdvantagesPage />} />
                        <Route path="/services" element={<ServicesPage />} />
                        <Route path="/questions" element={<FaqPage />} />
                        <Route path="/career" element={<CareerPage />} />
                        <Route path="/contacts" element={<ContactsPage />} />
                        <Route path="/blog" element={<BlogPage />} />
                        <Route path="/policy" element={<PolicyPage />} />
                        <Route path="/instructions" element={<PlatformInstructionsPage />} />
                    </Route>

                    <Route element={<AccountLayout />}>
                        <Route exact path='/project' element={
                            <RequireAuth >
                                <ProjectPage />
                            </RequireAuth>
                        }/>

                        <Route exact path='/documentation' element={
                            <RequireAuth>
                                <DocumentationPage />
                            </RequireAuth>
                        }/>

                        <Route exact path='/building' element={
                            <RequireAuth>
                                <BuildingPage />
                            </RequireAuth>
                        }/>

                        <Route exact path='/smarthouse' element={
                            <RequireAuth>
                                <SmartHousePage />
                            </RequireAuth>
                        }/>

                        <Route exact path='/support' element={
                            <RequireAuth>
                                <SupportPage />
                            </RequireAuth>
                        }/>
                    </Route>

                    <Route exact path='/documentation/:solution' element={
                        <RequireAuth>
                            <SolutionViewerPage />
                        </RequireAuth>
                    }/>
                </Routes>
            </Suspense>
            </Provider>
        </AuthProvider>
    );
}

export default App;