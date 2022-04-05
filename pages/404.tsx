import { NextPage } from "next"
import Head from "next/head"
import { HomeButton } from "../components/UI"


const NotFoundPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>404 - Page not found</title>
      </Head>
      <div className="h-screen flex flex-col justify-center items-center animate-fade">
        <div className="text-center flex flex-col -translate-y-20 gap-3">
          <h1 className="text-9xl font-bold block py-4">404</h1>
          <h2 className="font-medium mb-5 text-lighter-700">Page not found!</h2>
          <HomeButton />
        </div>
      </div>
    </>
  )
}

export default NotFoundPage