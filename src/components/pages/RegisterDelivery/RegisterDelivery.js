import React, { useEffect, useState } from "react";
import { Button, Form, Grid, Message, Segment } from "semantic-ui-react";
import { DateInput } from "semantic-ui-calendar-react";
import "./RegisterDelivery.css";
import iconSearch from "../../icons/iconSearch";
import {
  fieldsWithErrors,
  isValidCep,
  uniqueFieldWithError,
} from "./constants";
import { useDispatch, useSelector } from "react-redux";
import {
  changeValue,
  clearState,
  saveGetResponse,
  changeMessages,
  clearMessages,
  onSubmitFailed,
  onSubmitSuccess,
  clearValidations,
} from "./features/registerDeliverySlice";
import { getCep } from "../../../ApiCep";
import iconUserCicle from "../../icons/iconUserCicle";
import iconPlus from "../../icons/iconPlus";
import { postNewDelivery } from "../../../Api";
import { v4 as uuidv4 } from "uuid";

const RegisterDelivery = () => {
  const [hasValue, setHasValue] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const formValues = useSelector((state) => state.registerDelivery.formData);
  const messages = useSelector((state) => state.registerDelivery.messages);
  const { submitSuccess, submitFailed } = useSelector(
    (state) => state.registerDelivery.submitEvents
  );
  const activePage = useSelector((state) => state.pageSwitcher.item);

  const dispatch = useDispatch();

  const threatResponseData = (response) => {
    dispatch(saveGetResponse(response));
  };

  const onSuccess = () => {
    dispatch(clearState(""));
    dispatch(onSubmitSuccess());
  };

  const dispatchErrorMessages = (errorFields) => {
    dispatch(changeMessages({ ...errorFields }));
  };

  const verifyData = (keysOrFieldId, haveError) => {
    if (Array.isArray(keysOrFieldId)) {
      const fieldsWithError = fieldsWithErrors(keysOrFieldId, formValues);
      const isEmpty = Object.keys(fieldsWithError).length === 0;
      if (!isEmpty) {
        haveError = true;
      } else {
        haveError = false;
      }

      dispatchErrorMessages(fieldsWithError);
    } else {
      const fieldWithError = uniqueFieldWithError(
        keysOrFieldId,
        formValues,
        messages
      );
      dispatchErrorMessages(fieldWithError);
    }

    if (haveError) {
      return haveError;
    }
  };

  const handleClearDate = (event, { name, value }) => {
    dispatch(changeValue({ changedValue: "", field: name }));
  };

  const handleChangeDate = (event, { name, value }) => {
    if (value) {
      dispatch(changeValue({ changedValue: value, field: name }));
    }
  };

  const handleBlurDate = (event) => {
    if (event) {
      verifyData(event.target.id);
    }
  };

  const handleChange = (event, field) => {
    const value = event.target.value;
    if (field === "cep" && value.length < 9) {
      dispatch(changeValue({ changedValue: value, field }));
    } else if (field !== "cep") {
      dispatch(changeValue({ changedValue: value, field }));
    }
  };

  const handleBlur = (event) => {
    verifyData(event.target.id);
    if (isValidCep(event.target.name, event.target.value.length)) {
      getCep(event.target.value).then((res) => threatResponseData(res));
      setHasValue(true);
      setIsDisabled(false);
    }
  };
  const handleSubmit = () => {
    let haveError = false;
    const formKeys = Object.keys(formValues);
    haveError = verifyData(formKeys, haveError);

    if (haveError) {
      dispatch(onSubmitFailed());
    } else {
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
      ).then((res) => (res.data ? onSuccess() : console.log("erro")));
    }
  };

  useEffect(() => {
    dispatch(clearState(""));
    dispatch(clearMessages());
    dispatch(clearValidations());
  }, [activePage]);

  useEffect(() => {
    if (formValues.cep.length < 8) {
      setIsDisabled(true);
      setHasValue(false);
    }
  }, [formValues.cep]);

  useEffect(() => {
    if (formValues.deliveryDate) {
      verifyData("deliveryDate");
    }
  }, [formValues.deliveryDate]);

  return (
    <div>
      <Segment>
        <Grid>
          <Grid.Row columns={1}>
            <Grid.Column className="register-title">
              <h1>Cadastrar nova entrega</h1>
              {submitSuccess && (
                <Message
                  success
                  header="Entrega cadastrada com sucesso!"
                  content={`Sua entrega foi cadastrada com sucesso, para visualiza-la, acesse a aba 'Visualizar Entregas'`}
                />
              )}

              {submitFailed && (
                <Message
                  error
                  header="Existem erros no preenchimento do cadastro!"
                  content={`Existem erros no preenchimento do cadastro, por favor verifique e preencha corretamente`}
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
                    error={messages.clientName && messages.clientName}
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
                    <DateInput
                      id="deliveryDate"
                      name="deliveryDate"
                      label="Data da entrega"
                      clearable
                      onClear={handleClearDate}
                      error={messages.deliveryDate && messages.deliveryDate}
                      fluid
                      placeholder="Selecione a data"
                      dateFormat="DD/MM/YYYY"
                      startMode="year"
                      onChange={handleChangeDate}
                      onBlur={handleBlurDate}
                      closable
                      value={formValues.deliveryDate}
                      required
                    />
                  </Form.Field>
                  <Form.Input
                    id="cep"
                    name="cep"
                    placeholder="CEP"
                    error={messages.cep && messages.cep}
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
                    error={hasValue && messages.city && messages.city}
                    width={6}
                    value={formValues.city}
                    onChange={(e) => handleChange(e, "city")}
                    onBlur={(e) => handleBlur(e)}
                    disabled={isDisabled}
                    required
                  />
                  <Form.Input
                    id="uf"
                    label={hasValue ? "UF" : false}
                    placeholder="UF"
                    error={hasValue && messages.uf && messages.uf}
                    width={2}
                    value={formValues.uf}
                    onChange={(e) => handleChange(e, "uf")}
                    onBlur={(e) => handleBlur(e)}
                    disabled={isDisabled}
                    required
                  />
                  <Form.Input
                    id="address"
                    label={hasValue ? "Rua" : false}
                    placeholder="Rua"
                    error={hasValue && messages.address && messages.address}
                    width={6}
                    value={formValues.address}
                    onChange={(e) => handleChange(e, "address")}
                    onBlur={(e) => handleBlur(e)}
                    disabled={isDisabled}
                    required
                  />
                  <Form.Input
                    id="number"
                    label={hasValue ? "Número" : false}
                    placeholder="Número"
                    error={hasValue && messages.number && messages.number}
                    width={2}
                    value={formValues.number}
                    disabled={isDisabled}
                    onChange={(e) => handleChange(e, "number")}
                    onBlur={(e) => handleBlur(e)}
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Input
                    id="district"
                    label={hasValue ? "Bairro" : false}
                    placeholder="Bairro"
                    error={hasValue && messages.district && messages.district}
                    width={8}
                    value={formValues.district}
                    onChange={(e) => handleChange(e, "district")}
                    onBlur={(e) => handleBlur(e)}
                    disabled={isDisabled}
                    required
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
