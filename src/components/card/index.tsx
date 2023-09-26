import React, { useEffect, useState } from 'react';
import './index.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import service from '../../services/schedule';


function Cards(props: any) {
  const [retired, setRetire] = useState(false);
  const { scheduleDetails } = props;

  const getScheduleDetails = async (e: any) => {
    if (e) {
      getSchedule(scheduleDetails.id);
      props.selectedCard(scheduleDetails.id);
    }
  }
  useEffect(() => {
    if (props.idx == 0) {
      getSchedule(scheduleDetails.id);
      props.selectedCard(scheduleDetails.id);
    }
    setRetire(scheduleDetails.isRetired);
  }, []);

  const getSchedule = async (idVal: number) => {
    await service.getScheduleLogs(idVal).then((res) => {
      props.emitData(res);
    });
  }

  const toggleRetire = async () =>{
    const response = await service.updateSchedule(props.scheduleDetails);
    setRetire(!retired);
  }

  return (
    <div className="cards" id="card-wrapper"  data-testid="card-wrapper" onClick={(e: any) => {
      getScheduleDetails(e);
    }}>
      <Card sx={{ minWidth: 275 }} className={`mat-cards-cls ${scheduleDetails.id === props.selectedId ? 'active' : ''}`}>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {scheduleDetails.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {scheduleDetails.description}
          </Typography>
        </CardContent>
        <CardActions className='retire-btn-area'>
          <Button id="toggle-btn"  data-testid="toggle-btn" variant="outlined" color="error" endIcon={retired?<CloseIcon />:<CheckIcon />} onClick={toggleRetire}>
            {retired?'Unretire':'Retire'}
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default Cards;
