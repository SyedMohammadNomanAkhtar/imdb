import Header from '@/components/header'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        {/* <Header/> */}
        <Header/>


        {/* <Navbar/> */}
        {/* <SearchBar/> */}

        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
