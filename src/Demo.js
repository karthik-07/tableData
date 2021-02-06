import React from 'react';
import { Button } from 'reactstrap';
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import { Table } from 'reactstrap';
import App from "./App"

const Demo = (props) => {


  return (
    <>
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Hosp.Number</th>
          <th>Patient Name</th>
          <th>Unit</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Visit Date</th>
          <th>Link</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>234234278</td>
          <td>ABC</td>
          <th>Uro001</th>
          <td>33</td>
          <td>M</td>
          <td>Today</td>
          <td><Link to ={
            {
              pathname: '/new',
              aboutPage:{
                HospNumber: "234234278",
                PatientName: "ABC",
                Unit: "Uro001",
                Age: "33",
                Gender: "M",
                VisitDate: "Today",
              }
            }
          }
          
          >CaseSheet</Link></td>

        </tr>
        <tr>
          <th scope="row">2</th>
          <td>23423234</td>
          <td>Otto</td>
          <th>Uro002</th>
          <td>23</td>
          <td>M</td>
          <td>Today</td>
          <td><Link to ={
            {
              pathname: '/new',
              aboutPage:{
                HospNumber: "234234234",
                PatientName: "Otto",
                Unit: "Uro002",
                Age: "23",
                Gender: "M",
                VisitDate: "Today",
              }
            }
          }
          
          >CaseSheet</Link></td>

        </tr>
        <tr>
        <th scope="row">2</th>
          <td>234234256</td>
          <td>DEF</td>
          <th>Uro003</th>
          <td>26</td>
          <td>F</td>
          <td>Today</td>
          <td><Link to ={
            {
              pathname: '/new',
              aboutPage:{
                HospNumber: "234234256",
                PatientName: "DEF",
                Unit: "Uro003",
                Age: "26",
                Gender: "F",
                VisitDate: "Today",
              }
            }
          }
          
          >CaseSheet</Link></td>
        </tr>
        <tr>
        <th scope="row">4</th>
        <td>234234215</td>
          <td>QWERTY</td>
          <th>Uro004</th>
          <td>20</td>
          <td>F</td>
          <td>Today</td>
          <td><Link to ={
            {
              pathname: '/new',
              aboutPage:{
                HospNumber: "234234215",
                PatientName: "QWERTY",
                Unit: "Uro004",
                Age: "20",
                Gender: "F",
                VisitDate: "Today",
              }
            }
          }
          
          >CaseSheet</Link></td>
        </tr>
      </tbody>
    </Table>
    
    </>
  );
}

export default Demo;