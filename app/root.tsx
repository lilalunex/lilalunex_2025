declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
  }
}

import {
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  MetaFunction
} from "@remix-run/react";

import ColorPalette from "./routes/utilities/ColorPalette";

import "./css/main.css";
import { useEffect } from "react";

const navLinks = [
  { name: "Home", path: "/" },
  // { name: "Projects", path: "/projects" },
  // { name: "Partner", path: "/" },
  // { name: "Links", path: "/links" },
  // { name: "Peace", path: "/" },
  { name: "Hire", path: "/hire" }
]

export const links = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Noto+Sans+Lepcha&display=swap",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Noto+Sans+Lepcha&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap",
  }
];

export function Layout({ children }: { children: React.ReactNode }) {
  // const GA_TRACKING_ID = "G-5CQB16PW1Q";
  const vite_email = import.meta.env.VITE_EMAIL;

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     window.dataLayer = window.dataLayer || [];
  //     function gtag(...args: any) {
  //       window.dataLayer.push(args);
  //     }
  //     gtag("js", new Date());
  //     gtag("config", GA_TRACKING_ID);

  //     const script = document.createElement("script");
  //     script.async = true;
  //     script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
  //     document.head.appendChild(script);
  //   }
  // }, []);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <nav className="fixed w-full left-1/2 -translate-x-1/2 z-50">
          <ul className="flex flex-wrap items-center mx-auto justify-center">
            {navLinks?.map((link) => (
              <li key={link.path} className="px-3 sm:px-8">
                <a href={link.path}>{link.name}</a>
              </li>
            ))}
          </ul>
        </nav>

        <main>{children}</main>

        <div className="text-center pt-12 pb-4">
          <p className="text-black mx-auto">This website is not finished.
            <br />
            To stay loyal to the CI: I will take my time to finish it.
            <br />
            I want to make it good and not ... done.
            <br />
            <br />
            <a href="https://lilalunex.netlify.app/" className="underline">Stroll around my 2024 website if you wish to see more.</a>
          </p></div>

        <footer className="container pb-12 border-y-2 border-golden-tan my-8 px-2">

          <div className="flex justify-center px-24 pt-8 gap-24 text-center">
            <div className="flex justify-between">
              {/* <div>
                <a className="" href={`mailto:${vite_email}?subject=Feedback`}>My Links.</a>
              </div> */}
              {/* <div>
                <div><a href={`mailto:${vite_email}?subject=Feedback`}>Feedback</a></div>
                <div className="pt-4"><a href={`mailto:${vite_email}?subject=Contact`}>Contact form</a></div>
                <div className="pt-4"><a href={`mailto:${vite_email}?subject=Contact`}>Contact / Mail me</a></div>
              </div> */}
              <div>
                <div><Link to="/footer/imprint">Impressum / Imprint</Link></div>
                <div className="pt-4"><Link to="/footer/privacy">Datenschutz / Privacy Policy</Link></div>
              </div>
              {/* <div>
                <div>HTML</div>
                <div className="pt-4">CSS</div>
                <div className="pt-4">Goolgle Lighthouse</div>
              </div> */}
            </div>
            {/* <div className="text-center px-4 md:px-0 pt-12">
              <i>That's some contentful footer.</i>
              <br />
              <br />
              The purpose and motivation of this website changed. So did the footer. <br className="hidden md:block" />But without a footer, this website would look naked. So here we are now...
              <br />
              <br />
              If would like to see more about me, check out my <a className="underline text-blue" href="https://lilalunex.netlify.app">2024 website</a>.
            </div> */}
          </div>
        </footer>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <Outlet />
  );
}

export const meta: MetaFunction = () => {
  return [
    { title: "Lunex Evolution | Relax, Breathe & Move." },
    { name: "description", content: "Web development in Paderborn, Germany. Specialized in WordPress, Templates, Frontend & Shopware." },
    { name: "keywords", content: "Web Development Paderborn, WordPress, WordPress Templates, Templates, Shopware Development, Frontend Development, German Web Developer, Lunex Evolution" },
    { name: "author", content: "Lunex Edakumi" },
    { name: "robots", content: "index, follow" },
    { property: "og:title", content: "Lunex Evolution | Relax, Breathe & Move." },
    { property: "og:description", content: "Web development in Paderborn, Germany. Specialized in WordPress, Templates, Frontend & Shopware." },
    { property: "og:url", content: "https://lilalunex.dev/" },
    { property: "og:type", content: "website" },
    // { property: "og:image", content: "https://yourwebsite.com/your-preview-image.jpg" }
  ];
};