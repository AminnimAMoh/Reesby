import React from 'react'
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    List__Grid: {
        borderBottom: "1px solid rgb(230, 230, 230)",
        padding: theme.spacing(1),
    },
    heighWeightTypo: {
        fontWeight: 700,
    },
    List_button: {
        width: "50%",
        borderRadius: "12px",
        border: "2px double gray",
        textAlign: "center",
        [theme.breakpoints.down('sm')]: {
            height: "35px",
            width: "25%",
            borderRadius: "6px",
            border: "none"
        }
    },
    List_Checkbox: {
        marginLeft: theme.spacing(-2),
        marginRight: theme.spacing(2),
    },
    List_Headings: {
        fontWeight: 700,
        [theme.breakpoints.up('md')]: {
            display: "none",
        }
    },
    List_Blank:{
        fontStyle: "italic",
        color: "rgb(211, 211, 211)",
    }
}));

function ClientList(props) {
    const classes = useStyles();
    // This page recives the data from Menu.js component and renders its information in a grid
    return (
        <Grid container spacing={1} justify="center" alignItems="center" className={classes.List__Grid}>
            <Grid container spacing={1} xs={1} justify="center" alignItems="center" className={classes.List_Checkbox}>
                <Grid item xs={12} style={{ textAlign: "center" }}>
                    <input type="checkbox"></input>
                </Grid>
            </Grid>
            <Grid container spacing={1} xs={4} justify="center" alignItems="center" className={classes.List_Headings}>
                <Grid item xs={12} className={classes.heighWeightTypo}>
                    <p style={{ fontWeight: "700" }}>Client Name</p>
                </Grid>
                <Grid item xs={12}>
                    <p>Email</p>
                </Grid>
                <Grid item xs={12}>
                    <p>Phone</p>
                </Grid>
                <Grid item xs={12}>
                    <p>Industry</p>
                </Grid>
                <Grid item xs={12}>
                    <p>Point of Contact</p>
                </Grid>
                <Grid item xs={12}>
                    <p>Website</p>
                </Grid>
            </Grid>
            <Grid container spacing={1} xs={5} md={10} justify="center" alignItems="center">
                <Grid item xs={12} md={1} className={classes.heighWeightTypo}>
                        {(props.data.clientName) ? <p style={{ fontWeight: "700" }}>{props.data.clientName}</p> : <p className={classes.List_Blank}>Blank</p>}
                </Grid>
                <Grid item xs={12} md={3}>
                    {(props.data.clientEmail) ? <p>{props.data.clientEmail}</p> : <p className={classes.List_Blank}>Blank</p>}
                </Grid>
                <Grid item xs={12} md={1}>
                {(props.data.clientWorkPhone) ? <p>{props.data.clientWorkPhone}</p> : <p className={classes.List_Blank}>Blank</p>}
                </Grid>
                <Grid item xs={12} md={2}>
                {(props.data.clientIndustry) ? <p>{props.data.clientIndustry}</p> : <p className={classes.List_Blank}>Blank</p>}
                </Grid>
                <Grid item xs={12} md={2}>
                {(props.data.clientPocName) ? <p>{props.data.clientPocName}</p> : <p className={classes.List_Blank}>Blank</p>}
                </Grid>
                <Grid item xs={12} md={3}>
                {(props.data.clientWebsite) ? <p>{props.data.clientWebsite}</p> : <p className={classes.List_Blank}>Blank</p>}
                </Grid>
            </Grid>
            <Grid container spacing={1} xs={2} md={1} justify="center" alignItems="center">
                <Grid item xs={12}>
                    <div className={classes.List_button}>
                        <IconButton size="small" aria-label="delete" disabled color="primary">
                            <EditIcon style={{ color: "#5111a2" }} />
                        </IconButton>
                    </div>
                </Grid>
            </Grid>
        </Grid >
    )
}

export default ClientList
