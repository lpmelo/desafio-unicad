import React, { useEffect, useState } from "react";
import { Button, Form, Grid, Message, Segment } from "semantic-ui-react";
import "./RegisterDelivery.css";
import iconSearch from "../../icons/iconSearch";
import {
  cepError,
  requiredFields,
  validateCep,
  validateFields,
} from "./constants";
import { useDispatch, useSelector } from "react-redux";
import {
  changeValue,
  clearState,
  saveGetResponse,
} from "./features/registerDeliverySlice";
import { getCep } from "../../../ApiCep";
import iconUserCicle from "../../icons/iconUserCicle";
import iconPlus from "../../icons/iconPlus";
import { postNewDelivery } from "../../../Api";
import { v4 as uuidv4 } from "uuid";

const RegisterDelivery = () => {
  const [haveError, setHasError] = useState(false);
  const [success, setSucess] = useState(false);
  const [hasValue, setHasValue] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const formValues = useSelector((state) => state.registerDelivery);
  const activePage = useSelector((state) => state.pageSwitcher.item);
  const dispatch = useDispatch();

  const threatResponseData = (response) => {
    dispatch(saveGetResponse(response));
  };

  const onSucess = () => {
    dispatch(clearState(""));
    setSucess(true);
  };

  const handleChange = (event, field) => {
    const value = event.target.value;
    if (field === "cep" && value.length < 9) {
      dispatch(changeValue({ changedValue: value, field }));
    } else if (field !== "cep" && value.length) {
      dispatch(changeValue({ changedValue: value, field }));
    }
  };

  const handleBlur = (event) => {
    if (requiredFields.includes(event.target.id)) {
      if (validateFields(event.target.id, event.target.value)) {
        setHasError(true);
      }
    }
    if (event.target.value.length === 8) {
      setHasError(false);
      getCep(event.target.value).then((res) => threatResponseData(res));
      setHasValue(true);
      setIsDisabled(false);
    } else {
      setHasError(true);
    }
  };

  const handleSubmit = () => {
    const newId = uuidv4();

    postNewDelivery(
      newId,
      formValues.clientName,
      formValues.deliveryDate,
      formValues.cep,
      formValues.uf,
      formValues.city,
      formValues.district,
      formValues.address,
      formValues.number,
      formValues.complement
    ).then((res) => (res.data ? onSucess() : console.log("erro")));
  };

  useEffect(() => {
    dispatch(clearState(""));
  }, [activePage]);

  useEffect(() => {
    if (formValues.cep.length < 8) {
      setIsDisabled(true);
      setHasValue(false);
    }
  }, [formValues.cep]);

  return (
    <div>
      <Segment>
        <Grid>
          <Grid.Row columns={1}>
            <Grid.Column className="register-title">
              <h1>Cadastrar nova entrega</h1>
              {success && (
                <Message
                  success
                  header="Entrega cadastrada com sucesso!"
                  content="Sua entrega foi cadastrada com sucesso, para visualiza-la, acesse a aba 'Visualizar entregas'"
                />
              )}
            </Grid.Column>
          </Grid.Row>
          <Grid.Row className="row-form" columns={1}>
            <Button
              icon={iconPlus}
              content="Incluir"
              className="btn-submit"
              onClick={() => handleSubmit()}
            ></Button>
            <Grid.Column className="container-form">
              <Form className="form">
                <Form.Group>
                  <Form.Input
                    id="clientName"
                    placeholder="Nome do Cliente"
                    fluid
                    width={8}
                    icon={iconUserCicle}
                    iconPosition="left"
                    label="Nome do Cliente"
                    value={formValues.clientName}
                    onChange={(e) => handleChange(e, "clientName")}
                    onBlur={(e) => handleBlur(e)}
                    required
                  />

                  <Form.Field width={4}>
                    <label>Data da entrega</label>
                    <input
                      id="deliveryDate"
                      name="deliveryDate"
                      type="date"
                      value={formValues.deliveryDate}
                      onChange={(e) => {
                        handleChange(e, "deliveryDate");
                      }}
                      required
                    />
                  </Form.Field>
                  <Form.Input
                    id="cep"
                    placeholder="CEP"
                    error={haveError ? cepError : haveError}
                    fluid
                    width={4}
                    icon={iconSearch}
                    iconPosition="left"
                    label="CEP"
                    value={formValues.cep}
                    onChange={(e) => handleChange(e, "cep")}
                    onBlur={(e) => handleBlur(e)}
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Input
                    id="city"
                    label={hasValue ? "Cidade" : false}
                    placeholder="Cidade"
                    width={6}
                    value={formValues.city}
                    onChange={(e) => handleChange(e, "city")}
                    disabled={isDisabled}
                    required
                  />
                  <Form.Input
                    id="uf"
                    label={hasValue ? "UF" : false}
                    placeholder="UF"
                    width={2}
                    value={formValues.uf}
                    onChange={(e) => handleChange(e, "uf")}
                    disabled={isDisabled}
                    required
                  />
                  <Form.Input
                    id="address"
                    label={hasValue ? "Rua" : false}
                    placeholder="Rua"
                    width={6}
                    value={formValues.address}
                    onChange={(e) => handleChange(e, "address")}
                    disabled={isDisabled}
                    required
                  />
                  <Form.Input
                    id="number"
                    label={hasValue ? "Número" : false}
                    placeholder="Número"
                    width={2}
                    value={formValues.number}
                    disabled={isDisabled}
                    onChange={(e) => handleChange(e, "number")}
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Input
                    id="district"
                    label={hasValue ? "Bairro" : false}
                    placeholder="Bairro"
                    width={8}
                    value={formValues.district}
                    onChange={(e) => handleChange(e, "district")}
                    disabled={isDisabled}
                  />
                  <Form.Input
                    id="complement"
                    label={hasValue ? "Complemento" : false}
                    placeholder="Complemento"
                    width={8}
                    value={formValues.complement}
                    onChange={(e) => handleChange(e, "complement")}
                    disabled={isDisabled}
                  />
                </Form.Group>
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </div>
  );
};

export default RegisterDelivery;
