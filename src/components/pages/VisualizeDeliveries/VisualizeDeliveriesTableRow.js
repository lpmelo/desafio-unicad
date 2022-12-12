import React from "react";
import { Table } from "semantic-ui-react";

const VisualizeDeliveriesTableRow = ({ props }) => {
  return (
    <>
      <Table.Row>
        <Table.Cell />
        <Table.Cell>{props.clientName}</Table.Cell>
        <Table.Cell>{props.city}</Table.Cell>
        <Table.Cell>{props.deliveryDate}</Table.Cell>
      </Table.Row>
    </>
  );
};

export default VisualizeDeliveriesTableRow;
