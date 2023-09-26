import {  render, waitFor,screen } from '@testing-library/react';
import Schedules from './index';



describe('Testing schedulle component',()=>{
  const res = 
      {
        "id": 9662902,
        "name": "Random Schedule Name (0.6977205139295206)",
        "description": "aute",
        "isRetired": false,
        "tasksCount": 3,
        "startPoint": "2021-03-07T19:13:04.710Z",
        "endPoint": "2021-11-17T07:32:42.884Z",
        "dayOfWeek": 4,
        "dayOfMonth": 30,
        "startDate": "2021-04-29T21:20:08.102Z",
        "endDate": "2021-11-12T19:45:10.193Z",
        "intervalType": "Second",
        "timePeriod": 4
      }
    
  jest.mock('../../services/schedule', () => ({
    getSchedule: jest.fn(() => Promise.resolve([res])),
  }));
 
 
  test('renders Schedules', () => {
    render(<Schedules />);
  });

  test('should call getScheduleDetails and get the schedule logs', async () => {
    render(<Schedules />);
    await waitFor(() => {
     expect(screen.getByText('Random Schedule Name (0.6977205139295206)')).toBeInTheDocument();
    });
  })
  
})

