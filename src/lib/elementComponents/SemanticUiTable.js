import React from "react";
import { Table } from "semantic-ui-react";

const SemanticUiTable = ({
  color,
  key,
  headCells,
  SemanticUiTableRow,
  data,
}) => {
  return (
    <Table color={color} key={key}>
      <Table.Header>
        <Table.Row>
          {headCells.map((headCell) => {
            return <Table.HeaderCell>{headCell}</Table.HeaderCell>;
          })}
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {data.length ? (
          data.map((rowData) => {
            return <SemanticUiTableRow props={rowData} />;
          })
        ) : (
          <></>
        )}
      </Table.Body>
    </Table>
  );
};

export default SemanticUiTable;
