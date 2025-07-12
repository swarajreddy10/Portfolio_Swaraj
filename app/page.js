'use client'
import { useEffect, useState } from "react";
import About from "../components/About";
import Accomplishemnts from "../components/Accomplishemnts";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Work from "../components/Work";

export default function Home() {
  // Initialize state without directly accessing localStorage during SSR
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Set mounted to true after component mounts (client-side only)
  useEffect(() => {
    setMounted(true);

    // Check for dark mode preference after component mounts
    const isDark = localStorage.theme === 'dark' ||
                  (!('theme' in localStorage) &&
                    window.matchMedia('(prefers-color-scheme: dark)').matches);

    setIsDarkMode(isDark);

    // Apply dark mode class to document element
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Update dark mode when isDarkMode changes
  useEffect(() => {
    if (!mounted) return; // Skip initial render

    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  }, [isDarkMode, mounted]);

  // Prevent rendering until after mount to avoid hydration mismatch
  if (!mounted) {
    // You can return a loading state or null here
    return null;
  }

  return (
    <>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Header isDarkMode={isDarkMode} />
      <About isDarkMode={isDarkMode} />
      <Accomplishemnts isDarkMode={isDarkMode} />
      <Work isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </>
  );
}
