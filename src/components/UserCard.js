import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";

function UserCard(props) {
  const { first_name, last_name, email, avater_img } = props;
  const theme = useTheme();

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ marginBottom: "50px" }}
    >
      <Card sx={{ display: "flex", alignItems: "center" }}>
        <Avatar
          sx={{ width: 100, height: 100, marginLeft: "10px" }}
          alt="Remy Sharp"
          src={avater_img}
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h4">
              First Name:{first_name}
            </Typography>
            <Typography component="div" variant="h4">
              Last Name:{last_name}
            </Typography>
            <Typography variant="h5" color="text.secondary" component="div">
              Email-ID:{email}
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </Grid>
  );
}
export default UserCard;
