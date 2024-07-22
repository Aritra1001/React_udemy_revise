// Next js works with React server components
// Components which require a special environment - Next JS provides such an environment
// React Server Components - Rendered only on the server, never on the client
// A type of app that is not easily built bu react but embraced and supported by next js
// The consoles won't be logging in the client side developer tool of the browser, instead it will be logged
// in the temrinal where we have started the server. This shows that the component is rendered only on the server.

import Link from "next/link"; //used for creating routes. This is similar to the Link tag in react-router-dom.

export default function Home() {
  // console.log("NExt js exeuting....")
  return (
    <main>
      <img src="/logo.png" alt="A server surrounded by magic sparkles." />
      <h1>Welcome to this NextJS Course!</h1>
      <p>🔥 Let&apos;s get started! 🔥</p>
      <p><Link href="/about">About Us</Link></p>
    </main>
  );
}
