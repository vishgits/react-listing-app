import { render } from '@testing-library/react';
import DataTable from './index';

describe('Testing DataTable component',()=>{
  let res : any ;
  beforeEach(()=>{
     res = [
      {
        "id": 33565365,
        "startTime": "2021-03-07T01:31:28.809Z",
        "endTime": "2021-06-26T20:28:07.889Z",
        "status": "Pending",
        "serverName": "Duis nulla Ut",
        "scheduleId": 9662902
      },
      {
        "id": 38115106,
        "startTime": "2021-03-16T18:49:57.744Z",
        "endTime": "2021-09-07T12:43:14.980Z",
        "status": "Running",
        "serverName": "ea non qui sint",
        "scheduleId": 9662902
      },
      {
        "id": 11327574,
        "startTime": "2021-07-01T00:35:55.953Z",
        "endTime": "2021-10-10T01:46:08.051Z",
        "status": "Pending",
        "serverName": "incididunt non proident",
        "scheduleId": 9662902
      }
    ];
  })

  test('renders DataTable', () => {
    render(<DataTable  data={res}/>);
  });
  

})

