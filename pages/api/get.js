// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import fs from 'fs';
import path from 'path';

//  Use path to build a filepath to our data subdirectory
const data_directory = path.join( process.cwd(), "data" );

//  UnComment when you need to check the value that was sent to console.log
// console.log(data_directory);

export default function handler(req, res) {
  const file_path = path.join( data_directory, "persons.json" );

  const json_data = fs.readFileSync( file_path, "utf8" );

  const json_object = JSON.parse( json_data );

  json_object.sort(
    function( first_comparison, second_comparison ) {
      return first_comparison.name.localeCompare( second_comparison.name );
    }
  );

  res.status(200).json( json_object );
}
