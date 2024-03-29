"use client";
import '../app/components/Hero'
import Hero from '../app/components/Hero'
import Nav from './components/Nav';
import TerminalBox from './components/TerminalBox';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import EmailSection from './components/EmailSection';
import MusicCard from './components/MusicCard';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col bg-[#121212] '>
      <Nav />
      <div className='container mx-auto px-12  mt-24 py-6'>
        <Hero />
        <TerminalBox />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
        {/* <MusicCard /> */}
      </div>
      <Footer />
    </main>
  )
}
