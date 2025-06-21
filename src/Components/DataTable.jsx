import { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material'

import { styled } from '@mui/material/styles'

const rows = [
  { デザスク: 'デザスク 1', ライカレ: 'ライカレ 1', プロスク: 'プロスク 1' },
  { デザスク: 'デザスク 2', ライカレ: 'ライカレ 2', プロスク: 'プロスク 2' },
  { デザスク: 'デザスク 3', ライカレ: 'ライカレ 3', プロスク: 'プロスク 3' },
  { デザスク: 'デザスク 4', ライカレ: 'ライカレ 4', プロスク: 'プロスク 4' },
]

const StyledTableCell = styled(TableCell)(() => ({
  fontWeight: 'bold',
  backgroundColor: '#1976d2',      // 青系 (MUIのprimary.main)
  color: 'white',
}))


const StripedTableRow = styled(TableRow, {
  shouldForwardProp: (prop) => prop !== 'selected',
})(({ selected }) => {
  const baseColor = selected ? '#f44336' : 'inherit';
  const hoverColor = selected ? '#f44336' : '#36f443';
  return {
    backgroundColor: baseColor,
    color: selected ? 'white' : 'inherit',
    cursor: 'pointer',
    '& td': {
      color: selected ? 'white' : 'inherit',
      fontWeight: selected ? 'bold' : 'normal',
    },
    '&:hover': {
      backgroundColor: hoverColor,
    },
  }
});

function DataTable() {
  const [selectedRow, setSelectedRow] = useState(null)

  return (
    <TableContainer component={Paper} elevation={2}>
      <Table aria-label="データ表">
        <TableHead>
          <TableRow>
            <StyledTableCell>デザスク</StyledTableCell>
            <StyledTableCell>ライカレ</StyledTableCell>
            <StyledTableCell align="right">プロスク</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, idx) => (
            <StripedTableRow
              key={idx}
              selected={selectedRow === idx}
              onClick={() => setSelectedRow(idx)}
            >
              <TableCell>{row.デザスク}</TableCell>
              <TableCell>{row.ライカレ}</TableCell>
              <TableCell align="right">{row.プロスク}</TableCell>
            </StripedTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default DataTable;