import React, { useEffect, useState, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import Home from "./components/pages/Home";
import Blog from "./components/pages/Blog/Blog";
import Project from "./components/pages/Project/Project";
import Sidebar from "./components/Layouts/Sidebar";
import Navbar from "./components/Layouts/Navbar";
import Certificate from "./components/pages/Certificates/Certificate";
import Roadmap from "./components/pages/Roadmap/Roadmap";
import ProjectDetail from "./components/Contents/ProjectDetail";
import UseDarkSideHook from "./components/Contents/Blog/useDarkSideHook";



const App = () => {
  const defaultTitle = "Irsyad Nata | Personal Website";
  const [title, setTitle] = useState(defaultTitle);

  useEffect(() => {
    document.title = title;
  }, [title]);
  
  return (
    <section className="flex gap-10 dark:bg-primary ">
      <div className="mt-5 flex flex-col lg:flex-row gap-10 lg:mt-10 mx-6 md:mx-20 lg:mx-40 max-w-full">
        <Router>
          <div >
            <div className="hidden lg:block md:hidden sticky top-10">
              <Sidebar />
            </div>
            <div className="block lg:hidden md:block">
              <Navbar />
            </div>
          </div>
          <div className="max-w-full ">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Helmet>
                      <title>{`${defaultTitle} Personal Website`}</title>
                    </Helmet>
                    <Home />
                  </>
                }
              />
              <Route
                path="/project"
                element={
                  <>
                    <Helmet>
                      <title>{`Irsyad Nata | Project`}</title>
                    </Helmet>
                    <Project />
                  </>
                }
              />
              <Route
                path="/blog"
                element={
                  <>
                    <Helmet>
                      <title>{`Irsyad Nata | Blog`}</title>
                    </Helmet>
                    <Blog />
                  </>
                }
              />
              <Route
                path="/roadmap"
                element={
                  <>
                    <Helmet>
                      <title>{`Irsyad Nata | Roadmap`}</title>
                    </Helmet>
                    <Roadmap />
                  </>
                }
              />
              <Route
                path="/certificate"
                element={
                  <>
                    <Helmet>
                      <title>{`Irsyad Nata | Certificate`}</title>
                    </Helmet>
                    <Certificate />
                  </>
                }
              />
              <Route path="/project/:slug" element={<ProjectDetail />} />
              <Route path="/blog/react-custom-hooks-useDarkSide" element={<UseDarkSideHook />} />
            </Routes>
          </div>
        </Router>
      </div>
    </section>
  );
};

export default App;
