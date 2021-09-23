import Head from 'next/head';
import { get_all_IDs, get_data } from '../lib/data';
import Layout from '../components/layout';


//  Function Name:  getStaticProps
//  Inputs:  params being sent back
//  Purpose:  Creates an instance of getStaticProps() to rturn data for one person
//  Author:   Ethan Wilde, Santa Rosa Junior College.
export async function getStaticProps( { params } ) {
  const item_data = await get_data( params.id );
  return {
    props: {
      item_data
    }
  };
}


//  Function Name:  getStaticPaths
//  Inputs:  
//  Purpose:  Creates an instance of getStaticPaths() to report to next all possible dynamic urls
//  Author:   Ethan Wilde, Santa Rosa Junior College.
export async function getStaticPaths() {
  const paths = get_all_IDs();
  return {
    paths,
    fallback: false
  };
}

//  Function Name:  Entry
//  Inputs:  item_data
//  Purpose:  Makes a react component to display all of the details about a person when a dynamic route matches
//  Author:   Ethan Wilde, Santa Rosa Junior College.
export default function Entry( { item_data } ) {
  return (
    <Layout>
      <article className = "card col-6">
        <div className = "card-body">
          <h5 className = "card-title">{item_data.name}</h5>
          <h6 className = "card-subtitle mb-2 text-muted">{item_data.career}</h6>
          <p className = "card-text">{item_data.phone}</p>
          <p className = "card-text">{item_data.birthdate}</p>
          <a href = {'mailto:' + item_data.email} className = "card-link">{item_data.email}</a>
        </div>
      </article>
    </Layout>
  );
}

