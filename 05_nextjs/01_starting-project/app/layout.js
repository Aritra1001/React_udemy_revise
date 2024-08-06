// layout.js is another reserved file name like page.js.
// page.js file defines the content of the page whereas layout.js defines the shell around one
// or more pages.
// every next project needs atleast one root layout.js file

// In the app directory - there is globals.css which is the css file imported to layout.js
// In the app directory if we have image named as icon, then it will be considered as favicon by next js.


import './globals.css'

export const metadata = {
 //metadata is a reserved name for the contents inside the head tag of html like title and description
  title: 'NextJS Course App',
  description: 'Your first NextJS app!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
