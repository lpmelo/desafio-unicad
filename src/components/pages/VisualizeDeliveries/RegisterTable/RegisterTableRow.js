import React, { useEffect, useState } from "react";
import IconUserCicle from "../../../icons/IconUserCicle";
import { Label, List, Segment, Table } from "semantic-ui-react";
import IconBuilding from "../../../icons/IconBuilding";
import IconStreetView from "../../../icons/IconStreetView";
import IconPoint from "../../../icons/IconPoint";
import IconClipboard from "../../../icons/IconClipboard";
import IconCalendarAlternate from "../../../icons/IconCalendarAlternate";
import GoogleMapsComponent from "../../../../lib/apiElements/googleMaps/GoogleMapsComponent";
import "./RegisterTableRow.css";
import { getGeocode } from "../../../../ApiGoogleGeocode";

const RegisterTableRow = ({ props }) => {
  const [local, setLocal] = useState({ lat: 0, lng: 0 });

  const getLatAndLng = (res) => {
    const lat = res.results[0].geometry.location.lat;
    const lng = res.results[0].geometry.location.lng;
    const localObj = { lat: lat, lng: lng };

    setLocal(localObj);
  };

  useEffect(() => {
    getGeocode(props.cep).then((res) => getLatAndLng(res));
  }, []);

  return (
    <>
      <Table.Row>
        <Table.Cell width={4}>
          <Segment className="deliveries-data-list">
            <Label attached="top">Dados da entrega</Label>
            <List animated>
              <List.Item
                className="list-item"
                icon={IconUserCicle}
                content={props.clientName}
              />
              <List.Item
                className="list-item"
                icon={IconStreetView}
                content={props.cep}
              />
              <List.Item
                className="list-item"
                icon={IconBuilding}
                content={`${props.city}, ${props.uf}`}
              />
              <List.Item
                className="list-item"
                icon={IconPoint}
                content={`${props.address}, Nº ${props.number}, ${props.district}`}
              />
              {props.complement ? (
                <List.Item
                  className="list-item"
                  icon={IconClipboard}
                  content={props.complement}
                />
              ) : (
                <></>
              )}
              <List.Item
                className="list-item"
                icon={IconCalendarAlternate}
                content={props.deliveryDate}
              />
            </List>
          </Segment>
        </Table.Cell>
        <Table.Cell width={7}>
          <Segment>
            <Label attached="top">Local da entrega</Label>
            <div className="map-container">
              <GoogleMapsComponent
                containerStyle={{ width: "100%", height: "100%" }}
                local={local}
                zoom={15}
                marker
              />
            </div>
          </Segment>
        </Table.Cell>
      </Table.Row>
    </>
  );
};

export default RegisterTableRow;
