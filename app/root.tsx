import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import { AppLayout } from "~/components/Layout"; // Import the layout

import "./tailwind.css";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

// Use the AppLayout component here
export default function App() {
  return (
    <AppLayout>
      <Outlet />
    </AppLayout>
  );
}

// Add an ErrorBoundary (optional but recommended)
export function ErrorBoundary() {
  // You can use useRouteError to get the error
  // const error = useRouteError();
  // console.error(error); // Log error to console

  return (
    <html lang="en">
      <head>
        <title>Oops!</title>
        <Meta />
        <Links />
      </head>
      <body>
        <AppLayout>
          <div className="text-center py-10">
            <h1 className="text-2xl font-bold text-red-600">Something went wrong!</h1>
            <p className="mt-4">We encountered an error. Please try again later.</p>
            {/* You could add more error details here in development */}
          </div>
        </AppLayout>
        <Scripts />
      </body>
    </html>
  );
}
