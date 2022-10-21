import React , { useEffect, useState } from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

import Hidden from '@mui/material/Hidden';
import Pog from "./page/pog"
import Libreville from "./page/libreville"
import Footer from "./components/footer"
import Navbar from "./components/navbar"
import BottomNavigation from './components/buttomNavigation'
import Paper from '@mui/material/Paper';
import base from './api/base';

export default function CustomizedSteppers() {

  const [students, setStudents] = useState([]);
  const [tampon, setTampon] = useState([])
  const [loading, setLoading] = useState(true);
  const ref = React.useRef(null);

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
    ref.current.ownerDocument.body.scrollTop = 0;
    getStudents()
  },[]);

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <CssBaseline />
        <Navbar/>
        <Routes>
          <Route
            path="/"
            element={<Pog students={students.filter(student=>student.ville==="Port-gentil")}/>}
          />
          <Route
            path="/port-gentil"
            element={<Pog students={students.filter(student=>student.ville==="Port-gentil")}/>}
          />
          <Route
            path="/libreville"
            element={<Libreville students={students.filter(student=>student.ville==="Libreville")}/>}
          />
          
        </Routes>

        <Hidden only={['lg', 'xl', 'md']}>
          <Paper sx={{ position: 'fixed', bottom: 5, left: 0, right: 0 }} elevation={3}>
            <BottomNavigation/>
          </Paper>
        </Hidden>
        
        <Footer/>
    </Box>
  );
}
