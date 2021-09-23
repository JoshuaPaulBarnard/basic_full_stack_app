import Head from 'next/head'
import Link from 'next/link'
import { get_sorted_list } from '../lib/data'
import Layout from '../components/layout';


export async function getStaticProps() {
  const all_data = get_sorted_list();
  return {
    props: {
      all_data
    }
  }
}

export default function Home( { all_data } ) {
  return (
      <Layout home>
        <h1>List of Names</h1>
        <div className = "list-group">
          {all_data.map( ( { id, name } ) => (
            <Link key={id} href = {`/${id}`}>
              <a className = "list-group-item list-group-item-action">{name}</a>
            </Link>
          ) ) }
        </div>
      </Layout>
  );
}
