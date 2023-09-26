import React, { useEffect, useRef } from 'react';
import './index.css';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 150 },
  {
    field: 'scheduleId',
    headerName: 'Schedule Id',
    width: 150,

  },
  {
    field: 'serverName',
    headerName: 'Server Name',
    width: 350,

  },
  {
    field: 'startTime',
    headerName: 'Start Time',
    width: 210,

  },
  {
    field: 'endTime',
    headerName: 'End Time',
    width: 210,

  },
  {
    field: 'status',
    headerName: 'Status',
    width: 210,

  }
];

function DataTable(props: any) {
  const ref: any = useRef(null);
  useEffect(() => {
    if (ref.current && window.innerWidth < 900) {
      ref.current.scrollIntoView()
    }
  }, [props.data])
  return (
    <div className="dataTable" ref={ref}>
      <Box sx={{ width: '100%' }}>
        <DataGrid
          rows={props.data}
          columns={columns}
          disableRowSelectionOnClick
          hideFooterPagination
          disableColumnFilter
        />
      </Box>
    </div>
  );
}

export default DataTable;
