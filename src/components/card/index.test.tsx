import { fireEvent, render, waitFor,screen } from '@testing-library/react';
import Cards from './index';
import DataTable from '../data-table';

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
  const seletctedId = 12333;
  const mockedLog =  [{
      "id": 33565365,
      "startTime": "2021-03-07T01:31:28.809Z",
      "endTime": "2021-06-26T20:28:07.889Z",
      "status": "Pending",
      "serverName": "Duis nulla Ut",
      "scheduleId": 9662902
    }]
  jest.mock('../../services/schedule', () => ({
    getSchedule: jest.fn(() => Promise.resolve([res])),
  }));
  jest.mock('../../services/schedule', () => ({
    getScheduleLogs: jest.fn(() => Promise.resolve([mockedLog])),
  }));
 
  test('renders Crads', () => {
    render(<Cards scheduleDetails={res} idx={0} selectedId={seletctedId} emitData={()=>{}} selectedCard={()=>{}}/>);
  });

  test('should call getScheduleDetails and get the schedule logs', async () => {
    const eventMock = jest.fn();
    const {getByTestId} = render(<Cards scheduleDetails={res} idx={0} selectedId={seletctedId} emitData={()=>eventMock} selectedCard={()=>eventMock}/>);
    render(<DataTable data={mockedLog}/>);
    const cardBtn = getByTestId('card-wrapper');
    expect(cardBtn).toBeInTheDocument();
    fireEvent.click(cardBtn);
    await waitFor(() => {
     expect(screen.getByText('Duis nulla Ut')).toBeInTheDocument();
    });
  })

  test('should toggle the retire button state', async () => {
    const eventMock = jest.fn();
    const {getByTestId, container} = render(<Cards scheduleDetails={res} idx={0} selectedId={seletctedId} emitData={()=>eventMock} selectedCard={()=>eventMock}/>);
    const toggleBtn = getByTestId('toggle-btn');
    expect(toggleBtn).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    await waitFor(() => {
      expect(toggleBtn).toHaveTextContent('Unretire');
    });
  })
  
})

