import React, { useEffect, useState } from 'react';
import './index.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Cards from '../../components/card';
import DataTable from '../../components/data-table';
import service from '../../services/schedule';


function Schedules() {
  const [schedules, setSchedules] = useState([]);
  const [schedulesLogs, setSchedulesLog] = useState([]);
  const [selectedId, setselectedId] = useState([]);

  useEffect(() => {
    service.getSchedule().then((res) => {
      setSchedules(res);
    });
  }, []);

  const getEmittedData = (obj: any) => {
    setSchedulesLog(obj);
  };
  const selectedCard = (id: any) => {
    setselectedId(id);
  };
  return (
    <div className="schedules">

      <React.Fragment>

        <Box>
          <Grid container spacing={2}>
            <Grid item xs={12} md={3} lg={3} className='left-column'>
              {schedules.map((resObj: any, index: number) => (
                <Cards key={index} scheduleDetails={resObj} idx={index} emitData={getEmittedData} selectedCard={selectedCard} selectedId={selectedId} />
              )
              )}

            </Grid>
            <Grid item xs={12} md={9} lg={9}>
              <Typography gutterBottom variant="h6" component="div" data-testid="heading">
                Schedules Logs
              </Typography>
              <DataTable data={schedulesLogs} />
            </Grid>
          </Grid>
        </Box>

      </React.Fragment>

    </div>
  );
}

export default Schedules;
