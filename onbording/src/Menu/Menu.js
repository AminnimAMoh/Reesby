import { React, useEffect, useState } from 'react';
//Importing the Menu page Style sheet 
// import "./Menu.css";
//Axios library to read the api and sort it
import axios from "axios";

import { makeStyles } from '@material-ui/core/styles';
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

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: "25px",
    },
    heighWeightTypo: {
        fontWeight: 700,
        backgroundColor: "rgb(214, 214, 214)",
        fontStyle: "italic",
        padding: theme.spacing(1),
        [theme.breakpoints.down('sm')]:{
            display: "none",
        }
    },
    Menu__HeadingFlex: {
        // Need Fix
        position: "relative",
        width: "40%",
        marginTop: "25px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    Menu__search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: "white",
        '&:hover': {
            backgroundColor: "gray",
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    Menu__searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
    Menu__button: {
        textAlign: "center",
        margin: theme.spacing(1),
        [theme.breakpoints.down("sm")]: {
            minWidth: 32,
            paddingLeft: 8,
            paddingRight: 8,
            "& .MuiButton-startIcon": {
                margin: 0
            }
        },
        textTransform: "capitalize",
    },
    Menu__buttonText: {
        [theme.breakpoints.down("sm")]: {
            display: "none"
        }
    },
    Menu__List: {
        borderRadius: "12px",
        marginTop: "24px",
        backgroundColor: "white",
        padding: "4px"
    },
    List_button: {
        borderRadius: "12px", border: "1px double gray",
        textAlign: "center"
    },
    Menu_Search:{
        height: "50px",
        [theme.breakpoints.up("md")]: {
            marginTop: theme.spacing(5)
        }
    }
}));


function Menu() {
    const classes = useStyles();
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
        <div className={classes.root}>
            {/*Heading names */}
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <p>Managment</p>
                </Grid>
                <Grid item xs={12}>
                    <h1>Clients</h1>
                </Grid>
                {/* Larg width grid */}
                {/* To push the Search and filter buttons to the right side */}
                <Grid container spacing={2} xs={10} className={classes.Menu_Search}>
                    {/* Flex container for Search bar and buttons */}
                    <Grid item xs={10} lg={2}>
                        {/* Serach bar container */}
                        <div className={classes.Menu__search}>
                            <div className={classes.Menu__searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder="Search…"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </div>
                    </Grid>
                    {/* buttons */}
                    <Grid item xs={6} lg={1}>
                        <Button variant="contained" style={{ backgroundColor: "white" }}>Search</Button>
                    </Grid>
                    <Grid item xs={6} lg={1}>
                        <Button variant="contained" style={{ backgroundColor: "white" }}>Clear</Button>
                    </Grid>
                </Grid>

                {/* Small grid size for right hand side buttons */}
                <Grid container spacing={2} xs={2} direction="rows" justify="center">
                    <Grid item xs={12}>
                        {/* In line styling to make minner changes */}
                        <Button variant="contained" startIcon={<FilterListIcon />} className={classes.Menu__Button} style={{ backgroundColor: "#5111a2", color: "white" }}>
                            <span className={classes.Menu__buttonText}>New Client</span>
                        </Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" startIcon={<AddIcon />} className={classes.Menu__Button}>
                            <span className={classes.Menu__buttonText}>Show Filter</span>
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
            {/* Heading of the list */}

            {/* Main container for list for an esier styling */}
            {/* Sindle manual grid for topick headings of the list */}
            <div className={classes.Menu__List}>
                <Grid container xs={12} style={{ padding: "25px" }}>
                    <h1>All Clients</h1>
                </Grid>
                <Grid container spacing={1} justify="center" alignItems="center" className={classes.heighWeightTypo}>
                    <Grid container spacing={1} xs={1} justify="center" alignItems="center">
                        <Grid item xs={12} style={{ textAlign: "center" }}>
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} xs={7} md={10} justify="center" alignItems="center">
                        <Grid item xs={12} md={1} className={classes.heighWeightTypo}>
                            <p style={{ fontWeight: "700" }}>Client Name</p>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <p>Email</p>
                        </Grid>
                        <Grid item xs={12} md={1}>
                            <p>Phone</p>
                        </Grid>
                        <Grid item xs={12} md={2}>
                            <p>Industry</p>
                        </Grid>
                        <Grid item xs={12} md={2}>
                            <p>Point of Contact</p>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <p>Website</p>
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} xs={4} md={1} justify="center" alignItems="center">
                        <Grid item xs={12}>
                        </Grid>
                    </Grid>
                </Grid >
                {/* Looping through the data and rendering the setup in ClientList.js component */}
                {
                    ClientsData.map((client) =>
                        <ClientList data={client} />
                    )
                }
            </div>
        </div >
    )
}

export default Menu


