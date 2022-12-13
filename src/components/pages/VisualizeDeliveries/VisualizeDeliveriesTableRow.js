import React, { useState } from "react";
import { Table } from "semantic-ui-react";
import IconAngleDown from "../../icons/IconAngleDown";
import IconAngleUp from "../../icons/IconAngleUp";
import SemanticUiTable from "../../../lib/elementComponents/SemanticUiTable";
import { registerTableHeadCells } from "./constants";
import RegisterTableRow from "./RegisterTable/RegisterTableRow";

const VisualizeDeliveriesTableRow = ({ props }) => {
  const [activeIndex, setActiveIndex] = useState(false);

  const handleClick = (event) => {
    setActiveIndex(!activeIndex);
  };

  return (
    <>
      <Table.Row>
        <Table.Cell textAlign="center" width={1}>
          <div className="collapse-container" onClick={(e) => handleClick(e)}>
            {activeIndex ? <IconAngleUp /> : <IconAngleDown />}
          </div>
        </Table.Cell>
        <Table.Cell width={6}>{props.clientName}</Table.Cell>
        <Table.Cell width={6}>{props.city}</Table.Cell>
        <Table.Cell textAlign="center" width={3}>
          {props.deliveryDate}
        </Table.Cell>
      </Table.Row>
      {activeIndex && (
        <Table.Row className="sub-row">
          <Table.Cell colSpan={4}>
            <SemanticUiTable
              headCells={registerTableHeadCells}
              SemanticUiTableRow={RegisterTableRow}
              data={props}
              subTable
            />
          </Table.Cell>
        </Table.Row>
      )}
    </>
  );
};

export default VisualizeDeliveriesTableRow;
