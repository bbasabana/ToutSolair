import type { NextPage } from 'next'
import Head from 'next/head'
import HomePage from './home/homePage';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>ToutSolaire - L’énergie solaire à votre domicile.</title>
        <meta name="description" content="Expert de l'autonomie solaire & kit solaire" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
          <HomePage/>
      </main>
  </div>
  )
}

export default Home
