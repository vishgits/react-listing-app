import './index.css';
import ErrorIcon from '@mui/icons-material/Error';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

function PageNotFound() {
  return (
    <div className="pageNotFound">
        <Paper elevation={0} className='page-paper'>
          <ErrorIcon sx={{ fontSize: 75 }} />
          <Typography gutterBottom variant="h6" component="div" data-testid="heading">
            Page not found! Verify that you've entered the correct URL in the address bar of your web browser.
          </Typography>
        </Paper>

      
    </div>
  );
}

export default PageNotFound;
