import React from 'react'
import "./ClientList.css";
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';

function ClientList(props) {
    // This page recives the data from Menu.js component and renders its information in a grid
    return (
        <div>
            <div className="Menu__Listgrid">
                <Grid container spacing={1} justify="center" alignItems="center" className="Menu_GridList">
                    <Grid container item xs={1}>
                        <input type="checkbox"></input>
                    </Grid>
                    <Grid container item xs={1}>
                        <p style={{ fontWeight: "700" }}>{props.data.clientName}</p>
                    </Grid>
                    <Grid container item xs={3}>
                        <p>{props.data.clientEmail}</p>
                    </Grid>
                    <Grid container item xs={1}>
                        <p>{props.data.clientWorkPhone}</p>
                    </Grid>
                    <Grid container item xs={1}>
                        <p>{props.data.clientIndustry}</p>
                    </Grid>
                    <Grid container item xs={1}>
                        <p>{props.data.clientIndustry}</p>
                    </Grid>
                    <Grid container item xs={3}>
                        <p>{props.data.clientWebsite}</p>
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
        </div>
    )
}

export default ClientList
