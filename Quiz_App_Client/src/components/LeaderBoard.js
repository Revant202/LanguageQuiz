import React, { useEffect, useState } from "react";
import { getServerData } from "../helper/helper";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

const columns = [
  { id: "name", label: "Name", minWidth: 170 },
  { id: "attempt", label: "Attempt", minWidth: 100 },
  {
    id: "score",
    label: "Score",
    minWidth: 170,
    align: "right",
  },
  {
    id: "result",
    label: "Result",
    minWidth: 170,
    align: "right",
  },
];

export default function LeaderBoard() {
  const [data, setData] = useState([]);
  function createData(name, attempt, score, result) {
    return { name, attempt, score, result};
  }
  const rows = data.map(
    (v) => (
        createData( v?.username || "", v?.attempts || 0, v?.points || 0, v?.achived || "")
    )
  ).sort((a,b)=>(a.score<b.score)?1:-1);    
 
  useEffect(() => {
    getServerData(
      `${process.env.REACT_APP_SERVER_HOSTNAME}/api/result`,
      (res) => {
        setData(res);
      }  
    );
  }, [setData]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  console.log(data);
  //   return (
  //     <div>
  //         <table>
  //             <thead className='table-header'>
  //                 <tr className='table-row'>
  //                     <td>Name</td>
  //                     <td>Attemps</td>
  //                     <td>Earn Points</td>
  //                     <td>Result</td>
  //                 </tr>
  //             </thead>
  //             <tbody>
  //                 { !data ?? <div>No Data Found </div>}
  //                 {
  //                     data.map((v, i) => (
  //                         <tr className='table-body' key={i}>
  //                             <td>{v?.username || ''}</td>
  //                             <td>{v?.attempts || 0}</td>
  //                             <td>{v?.points || 0}</td>
  //                             <td>{v?.achived || ""}</td>
  //                         </tr>
  //                     ))
  //                 }

  //             </tbody>
  //         </table>
  //     </div>
  //   )
  // }

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
