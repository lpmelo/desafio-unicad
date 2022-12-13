import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Segment } from "semantic-ui-react";
import { getAllDeliveries } from "../../../Api";
import SemanticUiTable from "../../../lib/elementComponents/SemanticUiTable";
import { visualizeDeliveriesHeadCells } from "./constants";
import { saveAllDeliveries } from "./features/visualizeDeliveriesSlice";
import "./VisualizeDeliveries.css";
import VisualizeDeliveriesTableRow from "./VisualizeDeliveriesTableRow";

const VisualizeDeliveries = () => {
  const AllDeliveries = useSelector(
    (state) => state.visualizeDeliveries.deliveries
  );
  const dispatch = useDispatch();

  const onResponseSuccess = (res) => {
    dispatch(saveAllDeliveries(res));
  };

  useEffect(() => {
    getAllDeliveries().then((res) =>
      res ? onResponseSuccess(res) : console.log("erro")
    );
  }, []);
  return (
    <div className="table-container">
      <Segment>
        <SemanticUiTable
          color={"green"}
          key={"green"}
          headCells={visualizeDeliveriesHeadCells}
          SemanticUiTableRow={VisualizeDeliveriesTableRow}
          data={AllDeliveries}
        />
      </Segment>
    </div>
  );
};

export default VisualizeDeliveries;
