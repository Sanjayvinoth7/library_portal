import axios from "axios";
import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../Get_Book/Get_Book.css"

const Get_Book = ({ setData }) => {
  const navigate = useNavigate();
  const [bookData, setBookData] = useState([]);
  useEffect(() => {
    const getdata = async () => {
      const response = await axios.get(
        `https://636bc9417f47ef51e13a6884.mockapi.io/addbook`
      );
    
      setBookData(response.data);
    };
    getdata();
  }, []);
  const handleDelete = async (e, id) => {
    const response = await axios.delete(
      `https://636bc9417f47ef51e13a6884.mockapi.io/addbook`
    );
    const data = bookData.filter((row) => row.id !== response.data.id);
    setBookData(data);
  };
  const handleEdit = (id) => {
    console.log(id);
    navigate(`/editbook/${id}`);
  };

  return (
    <div className="container" >
      <div className="row">
        <div className="col-lg-12">
          <div className="table">
            <TableContainer className="book" component={Paper}>
              <Table sx={{ maxWidth: "100%" }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell style={{fontSize:"large"}}>ID</TableCell>
                    <TableCell style={{fontSize:"large"}} align="right">BOOK TITLE</TableCell>
                    <TableCell style={{fontSize:"large"}} align="right">PRICE</TableCell>
                    <TableCell style={{fontSize:"large"}} align="right">AUTHOR</TableCell>
                    <TableCell style={{fontSize:"large"}} align="right">EDIT ACTION</TableCell>
                    <TableCell style={{fontSize:"large"}} align="right">DELETE ACTION</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {bookData.map((row) => (
                    <TableRow
                      key={row.id}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell component="th" scope="row">
                        {row.id}
                      </TableCell>
                      <TableCell align="right">{row.booktitle}</TableCell>
                      <TableCell align="right">{row.price}</TableCell>
                      <TableCell align="right">{row.author}</TableCell>
                      <TableCell align="right">
                        <Button onClick={() => handleEdit(row.id)}>Edit</Button>
                      </TableCell>
                      <TableCell align="right">
                        <Button onClick={(e) => handleDelete( e,row.id)}>
                          Delete
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Get_Book;