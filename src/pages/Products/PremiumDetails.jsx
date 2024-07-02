import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Paper from "@mui/material/Paper";
const PremiumDetails = ({ goToPreviousTab, goToNextTab }) => {
  return (
    <>
      <TableContainer component={Paper} sx={{ width: "80%" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  border: "1px solid #dddddd",
                  padding: "0px",
                  textAlign: "center",
                }}
              >
                S/No
              </TableCell>
              <TableCell
                sx={{
                  border: "1px solid #dddddd",
                  padding: "0px",
                  textAlign: "center",
                }}
              >
                Premium Amount
              </TableCell>
              <TableCell
                sx={{
                  border: "1px solid #dddddd",
                  padding: "0px",
                  textAlign: "center",
                }}
              >
                Sum Assured
              </TableCell>
              <TableCell
                sx={{
                  border: "1px solid #dddddd",
                  padding: "0px",
                  textAlign: "center",
                }}
              >
                Premium Amount Round Up
              </TableCell>
              <TableCell
                sx={{
                  border: "1px solid #dddddd",
                  padding: "0px",
                  textAlign: "center",
                }}
              >
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell
                sx={{
                  border: "1px solid #dddddd",
                  padding: "0px",
                  textAlign: "center",
                }}
              >
                1
              </TableCell>
              <TableCell
                sx={{
                  border: "1px solid #dddddd",
                  padding: "0px",
                  textAlign: "center",
                }}
              >
                ₹500
              </TableCell>
              <TableCell
                sx={{
                  border: "1px solid #dddddd",
                  padding: "0px",
                  textAlign: "center",
                }}
              >
                ₹500
              </TableCell>
              <TableCell
                sx={{
                  border: "1px solid #dddddd",
                  padding: "0px",
                  textAlign: "center",
                }}
              >
                ₹500
              </TableCell>
              <TableCell
                sx={{
                  border: "1px solid #dddddd",
                  padding: "0px",
                  textAlign: "center",
                }}
              >
                <IconButton aria-label="edit">sdn</IconButton>
                <IconButton aria-label="delete">sdvn</IconButton>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                sx={{
                  border: "1px solid #dddddd",
                  padding: "0px",
                  textAlign: "center",
                }}
              >
                2
              </TableCell>
              <TableCell
                sx={{
                  border: "1px solid #dddddd",
                  padding: "0px",
                  textAlign: "center",
                }}
              >
                ₹801.12
              </TableCell>
              <TableCell
                sx={{
                  border: "1px solid #dddddd",
                  padding: "0px",
                  textAlign: "center",
                }}
              >
                ₹800
              </TableCell>
              <TableCell
                sx={{
                  border: "1px solid #dddddd",
                  padding: "0px",
                  textAlign: "center",
                }}
              >
                ₹802
              </TableCell>
              <TableCell
                sx={{
                  border: "1px solid #dddddd",
                  padding: "0px",
                  textAlign: "center",
                }}
              >
                <IconButton aria-label="edit">sdn</IconButton>
                <IconButton aria-label="delete">sdvn</IconButton>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                sx={{
                  border: "1px solid #dddddd",
                  padding: "0px",
                  textAlign: "center",
                }}
              >
                3
              </TableCell>
              <TableCell
                sx={{
                  border: "1px solid #dddddd",
                  padding: "0px",
                  textAlign: "center",
                }}
              >
                ₹1200
              </TableCell>
              <TableCell
                sx={{
                  border: "1px solid #dddddd",
                  padding: "0px",
                  textAlign: "center",
                }}
              >
                ₹1200
              </TableCell>
              <TableCell
                sx={{
                  border: "1px solid #dddddd",
                  padding: "0px",
                  textAlign: "center",
                }}
              >
                ₹1200
              </TableCell>
              <TableCell
                sx={{
                  border: "1px solid #dddddd",
                  padding: "0px",
                  textAlign: "center",
                }}
              >
                <IconButton aria-label="edit">sdn</IconButton>
                <IconButton aria-label="delete">sdvn</IconButton>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Grid container>
        <Grid item xs={12} sm={6} md={3}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              margin: "1rem",
              paddingBottom: "1rem",
            }}
          >
            <Button
              sx={{
                width: "100%",
                background: "#DF2B87",
                color: "white",
                ":hover": {
                  background: "#DF2B87",
                },
                padding: "0.6rem 1.5rem",
                textTransform: "none",
              }}
              onClick={goToPreviousTab}
            >
              <Typography>Previous Step</Typography>
            </Button>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              margin: "1rem",
              paddingBottom: "1rem",
            }}
          >
            <Button
              sx={{
                width: "100%",
                background: "#DF2B87",
                color: "white",
                ":hover": {
                  background: "#DF2B87",
                },
                padding: "0.6rem 1.5rem",
                textTransform: "none",
              }}
              onClick={goToNextTab}
            >
              <Typography>Save & Proceed</Typography>
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default PremiumDetails;
