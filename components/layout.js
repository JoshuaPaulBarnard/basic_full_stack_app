import Head from 'next/head';
import Link from 'next/link';

export default function Layout( { children, home } ) {
  return (
    <div>
      <Head>
        <title>Basic Full Stack App</title>
      </Head>

      <header>
        <p>Student project by Joshua Paul Barnard for the Santa Rosa Junior College, Fall 2021.</p>
      </header>

      <main>
        {children}
      </main>
      {!home && (
        <Link href = "/">
          <a className = "btn btn-primary mt-3">← Back to home </a> 
        </Link>
      ) }
    
      <footer>
        <nav>
          <a href="https://github.com/JoshuaPaulBarnard">My Github</a> <br />
          <a href="https://www.JoshuaPaulBarnard.com">My homepage (under construction)</a>
        </nav>
      </footer>
    </div>
  )
}


