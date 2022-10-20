import { useEffect, useState } from 'react';
import Stack from '@mui/material/Stack';
import base from './api/base';

export default function CustomizedSteppers() {

  const [students, setStudents] = useState([]);
  const [tampon, setTampon] = useState([])
  const [loading, setLoading] = useState(true);

  const getStudents = ()=>{
    var table = []
    base('resultats').select({
      maxRecords: 80,
      view: "Grid view"
    }).eachPage(function page(records, fetchNextPage) {
        // This function (`page`) will get called for each page of records.
        records.forEach(function(record) {
          table.push({
              email: record.get('email'),
              nom : record.get('nom'),
              prenom : record.get('prenom'),
              site : record.get('site'),
              facebook : record.get('facebook'),
              linkedin : record.get('linkedin'),
              ville : record.get('ville'),
              cohorte : record.get('cohorte'),
              profile : record.get('profil'),
              profession : record.get('profession'),
              description : record.get('description')
            })
        });

        // To fetch the next page of records, call `fetchNextPage`.
        // If there are more records, `page` will get called again.
        // If there are no more records, `done` will get called.
        fetchNextPage();
      }, function done(err) {
        if (err) { 
          console.error(err); return null;
        }
        setLoading(false)
        setStudents(table)
        setTampon(table)
      });
  }

  useEffect(() => {
    getStudents()
  },[]);

  console.log(students)
  return (
    <Stack sx={{ width: '100%' }} spacing={4}>
      <header style={{backgroundColor:"black", display:"flex", justifyContent:"space-between", alignItems:"center", paddingLeft:20, paddingRight:20}}>
        <img src="./logo-ecole.png" alt=""  height={80}/>

      </header>

    
    </Stack>
  );
}
