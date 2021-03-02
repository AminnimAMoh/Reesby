import { React, useEffect, useState } from 'react';
//Importing the Menu page Style sheet 
import "./Menu.css";
//Axios library to read the api and sort it
import axios from "axios";

//Importing ClientList.js that renders the data information
import ClientList from "./ClientList/ClientList";

//Impoting MaterialUi elements
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import FilterListIcon from '@material-ui/icons/FilterList';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';


function Menu() {
    //Reserving API url in a variable
    const rource = "http://javareesbyapi-env.eba-rtdeyeqd.ap-southeast-2.elasticbeanstalk.com/api/v1/getallclients/tenant/reesby";
    //Using a constat for reserving the data from API
    const [ClientsData, setClientsData] = useState([{}]);

    //Using useEffect to read the data at landing 
    useEffect(() => {
        axios.get(rource)
            .then((responce) => {
                setClientsData(responce.data)
            })
    }, [])

    return (
        <div className="Menu">
            {/*Heading names */}
            <p>Managment</p>
            <h1>Clients</h1>

            {/*A container holding heading objects */}
            <div className="Menu_heading">
                {/* Using a grid for menu to split the width in to */}
                <Grid container spacing={1}>
                    {/* Larg width grid */}
                    {/* To push the Search and filter buttons to the right side */}
                    <Grid container item xs={11}>
                        {/* Flex container for Search bar and buttons */}
                        <div className="Menu__HeadingFlex">
                            {/* Serach bar container */}
                            <div className="Menu__SearchBar">
                                <div className="Menu__SearchIcon">
                                    {/* Search Icon */}
                                    <SearchIcon />
                                </div>

                                {/* Search bar input */}
                                <InputBase
                                    placeholder="Search…"
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                            </div>
                            {/* buttons */}
                            <Button variant="contained" style={{ backgroundColor: "white" }}>Search</Button>
                            <Button variant="contained" style={{ backgroundColor: "white" }}>Clear</Button>
                        </div>
                    </Grid>

                    {/* Small grid size for right hand side buttons */}
                    <Grid container item xs={1} direction="column">
                        <div className="Menu__LeftOptions">
                            {/* In line styling to make minner changes */}
                            <Button variant="contained" startIcon={<FilterListIcon />} style={{ backgroundColor: "#5111a2", width: "125px", color: "white" }}>Search</Button>
                            <br></br>
                            <Button variant="contained" startIcon={<AddIcon />} style={{ backgroundColor: "white", width: "125px" }}>Clear</Button>
                        </div>
                    </Grid>
                </Grid>
            </div>
            <br></br>
            {/* Heading of the list */}
            <div className="Menu__ClientList">
                <div className="Menu__Listgrid" style={{ padding: "25px" }}>
                    <h1>All Clients</h1>
                </div>
                {/* Main container for list for an esier styling */}
                <div className="Menu__Listgrid" style={{ backgroundColor: "#f8f8fa" }}>
                    {/* Sindle manual grid for topick headings of the list */}
                    <Grid container spacing={1} justify="center" alignItems="center" className="Menu_GridList">
                        <Grid container item xs={1}>
                            <input type="checkbox"></input>
                        </Grid>
                        <Grid container item xs={1}>
                            <h3>Client Name</h3>
                        </Grid>
                        <Grid container item xs={3}>
                            <h3>Email</h3>
                        </Grid>
                        <Grid container item xs={1}>
                            <h3>Phone</h3>
                        </Grid>
                        <Grid container item xs={1}>
                            <h3>Industry</h3>
                        </Grid>
                        <Grid container item xs={1}>
                            <h3>Point of Contact</h3>
                        </Grid>
                        <Grid container item xs={3}>
                            <h3>Website</h3>
                        </Grid>
                        <Grid container item xs={1}>
                            <div style={{ borderRadius: "12px", border: "1px solid gray" }}>
                                <IconButton aria-label="delete" disabled color="primary">
                                    <EditIcon />
                                </IconButton>
                            </div>
                        </Grid>

                    </Grid>
                </div>
                {/* Looping through the data and rendering the setup in ClientList.js component */}
                {
                    ClientsData.map((client) =>
                        <ClientList data={client} />
                    )
                }

            </div >
        </div >
    )
}

export default Menu


