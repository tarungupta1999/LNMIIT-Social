import React from 'react';

import Button from './Button';
import {postRequest} from './CallApi'

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    width: 'fitContent',
  },
  tableHead: {
    backgroundColor: '#4574bf',
    color: 'white',
    fontSize: 20,
    //fontFamily: 'cursive'
  },
  tableRow: {
    width: 'fitContent',
    "&:hover":{
    }
  },
  tableCell: {
    width: 'fitContent',
    color: 'black',
    fontSize: 15,
    textAlign: 'center'
    //fontFamily: 'cursive'
  },
});

export default function Requests(props){

  const classes = useStyles();
  
  return(
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow classes={{root:classes.tableRow}}>
              <TableCell align = "center" classes={{root:classes.tableHead}}>Email ID</TableCell>
              <TableCell align = "center" classes={{root:classes.tableHead}}>Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {(props.users.length==0)?
            <TableRow classes={{root:classes.tableRow}}>
              <TableCell classes={{root:classes.tableCell}}>
               No Pending Requests
              </TableCell>
            </TableRow>
            :
            props.users.map((user) => (
            <>
            <TableRow key={user} id = {user} classes={{root:classes.tableRow}}>
              <TableCell classes={{root:classes.tableCell}}>
                {user /*Email Id*/}
              </TableCell>
              <TableCell classes={{root:classes.tableCell}}>
                Name {/*User Name */}
              </TableCell>
            </TableRow>
            <TableRow classes={{root:classes.tableRow}}>
              <TableCell classes={{root:classes.tableCell}}>
                <Button text = "Confirm" type = "button accept__request--button"
                  onClick = {()=>{
                    postRequest('project/invitetojoin',
                      {
                        'email':window.localStorage.getItem('email'),
                        'password': window.localStorage.getItem('password'),
                        'project_id': props.id,
                        'user': user
                      },
                      (res)=>{
                        if(res.message=="SUCCESS")
                        {
                          window.alert("Success")
                        }
                        else
                        {
                          window.alert("Fail")
                        }
                      }
                    )
                  }}
                />
              </TableCell>
              <TableCell classes={{root:classes.tableCell}}> 
                <Button text = "Reject" type = "button reject__request--button"/>
              </TableCell>
            </TableRow>
            </>
          ))}
          </TableBody>
        </Table>
      </TableContainer>
)}