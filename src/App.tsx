import React from "react";
import Layout from "@/components/layout";
import Home from "@/components/home";
import "@/styles/App.scss";
import Skills from "@/components/skills";
import About from "@/components/about";
import Projects from "@/components/projects";
import Contacts from "@/components/contacts";

const App: React.FC = () => {
    return (
        <Layout>
            <Home />
            <About />
            <Skills />
            <Projects />
            <Contacts />
        </Layout>
    );
};

export default App;
