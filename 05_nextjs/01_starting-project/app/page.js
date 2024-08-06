// Next js works with React server components
// Components which require a special environment - Next JS provides such an environment
// React Server Components - Rendered only on the server, never on the client
// A type of app that is not easily built bu react but embraced and supported by next js
// The consoles won't be logging in the client side developer tool of the browser, instead it will be logged
// in the temrinal where we have started the server. This shows that the component is rendered only on the server.

// Folder names that start with '_' are not routable
// Folder names that are enclosed within () are for organizational purpose only and should not be included in the route's URL path.

// Dynamic Segments
// Dynamic Segments can be created by wrapping a folder's name in []. Ex: [folderName]
// app/blog/[slug]/page.js, where [slug] is the dynamic segment. /blog/a {slug: 'a'}
// Catch all statement: Catches all the slugs at a time. Adding ellipsis before slug name. /blog/app/[...slug]/page.js  /blog/a/b {slug: ['a', 'b']}

import Link from "next/link"; //used for creating routes. This is similar to the Link tag in react-router-dom.
import Header from "@/components/header"; // Adding '@' at the beginning of the import directory resembles the root directory. Also known as module path aliases

export default function Home() {
  // console.log("NExt js exeuting....")
  return (
    <main>
      <Header/>
      <p>🔥 Let&apos;s get started! 🔥</p>
      <p><Link href="/about">About Us</Link></p>
    </main>
  );
}
