"use client";
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Head from 'next/head';
import './globals.css';
import Chatbot from '../components/Chatbot';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Your custom description here" />
        <meta name="keywords" content="your, custom, keywords, here" />
        <meta name="author" content="Your Name or Company" />
        <link rel="icon" href="/favicon.ico" />
        <title>CloudDogg</title>
      </Head>
      <body>
        <Header />
        {children}
        <Chatbot />
        <Footer />
      </body>
    </html>
  );
};

export default Layout;