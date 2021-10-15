import React, { useState, useEffect } from "react";
import UserCard from "./UserCard";
import Grid from "@mui/material/Grid";

function Welcomepage() {
  const [userData, setUserData] = useState(null);
  const [searchEmail, setSearchEmail] = useState("");
  useEffect(() => {
    getData();
    async function getData() {
      const response = await fetch("https://reqres.in/api/users");
      const api_User_Data = await response.json();
      console.log(api_User_Data);
      setUserData(api_User_Data.data);
    }
  }, []);
  return (
    <>
      <Grid container justifyContent="center">
        <Grid
          item
          container
          xl={10}
          lg={10}
          justifyContent="center"
          alignItems="center"
        >
          <h1>Welcome User's</h1>
        </Grid>
        <Grid
          item
          container
          xl={10}
          lg={10}
          justifyContent="center"
          alignItems="center"
        >
          <input
            type="text"
            placeholder="Email_Search Bar"
            style={{ width: "20%", height: "30px", marginBottom: "10px" }}
            onChange={(e) => {
              setSearchEmail(e.target.value);
            }}
          />
        </Grid>
        {userData && (
          <Grid container xl={10} lg={10} justifyContent="space-around">
            {userData
              .filter((data) => {
                if (searchEmail == "") {
                  return data;
                } else if (data.email.includes(searchEmail)) {
                  return data;
                }
              })
              .map((data, index) => (
                <Grid item key={index}>
                  <UserCard
                    first_name={data.first_name}
                    last_name={data.last_name}
                    email={data.email}
                    avater_img={data.avatar}
                  />
                </Grid>
              ))}
          </Grid>
        )}
      </Grid>
    </>
  );
}

export default Welcomepage;
