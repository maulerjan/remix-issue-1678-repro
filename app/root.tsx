import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "remix";
import type { MetaFunction, ErrorBoundaryComponent } from "remix";

export const meta: MetaFunction = () => {
  return { title: "New Remix App" };
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}

export const ErrorBoundary: ErrorBoundaryComponent = ({error}) => {
  console.error(error)
  return (
    <html lang="cs">
      <head>
        <title>Error!</title>
        <Meta/>
        <Links/>
      </head>
      <body>
        Everything is broken...
        <Scripts/>
      </body>
    </html>
  )
}