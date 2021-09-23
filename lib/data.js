import fs from 'fs';
import path from 'path';

//  Get the filepath to the data directory
const data_directory = path.join( process.cwd(), 'data' );

//  Function Name:   get_all_IDs
//  Inputs:   
//  Purpose:  Returns ids for all json objects in an array
//  Author:   Ethan Wilde, Santa Rosa Junior College.
export function get_all_IDs() {
    // Get the filepath to json file
  const file_path = path.join( data_directory, 'persons.json' );
  const file_path_2 = path.join( data_directory, 'people.json' );

  // Load the json file contents
  const json_string = fs.readFileSync( file_path, 'utf8' );
  const json_string_2 = fs.readFileSync( file_path_2, 'utf8' );

  // Convert string from file into json array object
  const json_object = JSON.parse( json_string );
  const json_object_2 = JSON.parse( json_string_2 );

  // Combine the two json objects
  const json_object_3 = json_object.concat(json_object_2)

  //  Use map() on array to extract just id properties into new array of object values
  return json_object_3.map( item => {
    return {
      params:  {
        id: item.id.toString()
      }
    }
  });
}

//  Function Name:  get_sorted_list
//  Inputs:  
//  Purpose:  Returns names and ids for all json objects in an array, sorted by the name property
//  Author:   Ethan Wilde, Santa Rosa Junior College.
export function get_sorted_list() {
    // Get the filepath to json file
  const file_path = path.join( data_directory, 'persons.json' );
  const file_path_2 = path.join( data_directory, 'people.json' );

  // Load the json file contents
  const json_string = fs.readFileSync( file_path, 'utf8' );
  const json_string_2 = fs.readFileSync( file_path_2, 'utf8' );

  // Convert string from file into json array object
  const json_object = JSON.parse( json_string );
  const json_object_2 = JSON.parse( json_string_2 );

  // Combine the two json objects
  const json_object_3 = json_object.concat(json_object_2)

  // Sort json array by name property
  json_object_3.sort( function( first_comparison, second_comparison ) {
    return first_comparison.name.localeCompare( second_comparison.name );
  } );

  //  Use the map() on an array to extract just the id & name properties into a new array of object values.
  return json_object_3.map( item => {
    return {
      id: item.id.toString(),
      name: item.name
    } } );
}

//  Function Name:  get_Data
//  Inputs:  
//  Outputs:  
//  Purpose:  Receives the complete data for just one person.
//  Used by:  getStaticProps() in [id].js
//  Author:   Ethan Wilde, Santa Rosa Junior College.
export async function get_data( ID_requested ) {
  // Get the filepath to json file
  const file_path = path.join( data_directory, 'persons.json' );
  const file_path_2 = path.join( data_directory, 'people.json' );

  // Load the json file contents
  const json_string = fs.readFileSync( file_path, 'utf8' );
  const json_string_2 = fs.readFileSync( file_path_2, 'utf8' );

  // Convert string from file into json array object
  const json_object = JSON.parse( json_string );
  const json_object_2 = JSON.parse( json_string_2 );

  // Combine the two json objects
  const json_object_3 = json_object.concat(json_object_2)

  //  Find the object value in an array that has the matching ID
  //  Returns an array with single element
  const object_match = json_object_3.filter( obj => {
      return obj.id.toString() === ID_requested
    }
  );

  //  Extracts object value in a filtered array, if any
  let object_returned;
  if( object_match.length > 0 ) {
    object_returned = object_match[0];
  } else {
    object_returned = {};
  }

  return object_returned;
}