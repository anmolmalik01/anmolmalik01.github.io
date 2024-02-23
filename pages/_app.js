import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import '../styles/globals.css';
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const router = useRouter();

  useEffect(() => {
    const updateCursorPosition = (event) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', updateCursorPosition);

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);

  useEffect(() => {
    const body = document.querySelector('body');
    body.style.cursor = 'none'; // Hide default cursor

    return () => {
      body.style.cursor = 'auto'; // Restore default cursor when component unmounts
    };
  }, []);

  useEffect(() => {
    const handleMouseOverLink = () => {
      const body = document.querySelector('body');
      body.style.cursor = 'pointer'; // Show cursor when hovering over a link
    };

    const handleMouseLeaveLink = () => {
      const body = document.querySelector('body');
      body.style.cursor = 'none'; // Hide cursor when leaving link
    };

    const links = document.querySelectorAll('a');

    links.forEach(link => {
      link.addEventListener('mouseover', handleMouseOverLink);
      link.addEventListener('mouseleave', handleMouseLeaveLink);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('mouseover', handleMouseOverLink);
        link.removeEventListener('mouseleave', handleMouseLeaveLink);
      });
    };
  }, [router.pathname]);

  return (
    <>
      <div className="custom-cursor" style={{ left: cursorPosition.x, top: cursorPosition.y }}></div>
      <Component {...pageProps} />
      <style jsx global>{`
        .custom-cursor {
          position: fixed;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black circle */
          pointer-events: none; /* Ensures cursor doesn't interfere with other elements */
          z-index: 9999; /* Ensures cursor is on top of other elements */
          transform: translate(-50%, -50%); /* Centers the cursor on the mouse position */
        }
      `}</style>
    </>
  );
}

export default MyApp;
