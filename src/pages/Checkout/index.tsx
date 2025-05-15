import { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Button from '../../components/Button'
import Card from '../../components/Card'

import { Row, InputGroup, TabButton } from './styles'

import billIcon from '../../assets/images/boleto.png'
import creditCardIcon from '../../assets/images/cartao.png'

const Checkout = () => {
  const [payWithCard, setPayWithCard] = useState(false)

  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      cpf: '',
      deliveryEmail: '',
      confirmDeliveryEmail: '',
      cardOwner: '',
      cpfCardOwner: '',
      cardDisplayName: '',
      cardNumber: '',
      expiresMonth: '',
      expiresYear: '',
      cardCode: '',
      installments: 1
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(3, 'O nome precisa ter pelo menos 3 caracteres')
        .required('O campo é obrigatorio'),
      email: Yup.string()
        .email('E-mail inválido')
        .required('O campo é obrigatorio'),
      cpf: Yup.string()
        .min(14, 'O campo precisa ter 14 caracteres')
        .max(14, 'O campo precisa ter 14 caracteres')
        .required('O campo é obrigatorio'),
      deliveryEmail: Yup.string()
        .email('E-mail inválido')
        .required('O campo é obrigatorio'),
      confirmDeliveryEmail: Yup.string()
        .oneOf([Yup.ref('deliveryEmail')], 'Os emails são diferentes')
        .required('O campo é obrigatorio'),

      cardOwner: Yup.string()
        .min(3, 'O campo precisa ter pelo menos 3 caracteres')
        .when((values, schema) =>
          payWithCard ? schema.required('O campo é obrigatorio') : schema
        ),
      cpfCardOwner: Yup.string()
        .min(14, 'O campo precisa ter 14 caracteres')
        .max(14, 'O campo precisa ter 14 caracteres')
        .when((values, schema) =>
          payWithCard ? schema.required('O campo é obrigatorio') : schema
        ),
      cardDisplayName: Yup.string()
        .min(3, 'O campo precisa ter pelo menos 3 caracteres')
        .when((values, schema) =>
          payWithCard ? schema.required('O campo é obrigatorio') : schema
        ),
      cardNumber: Yup.string()
        .min(3, 'O campo precisa ter pelo menos 3 caracteres')
        .when((values, schema) =>
          payWithCard ? schema.required('O campo é obrigatorio') : schema
        ),
      expiresMonth: Yup.string()
        .min(2, 'O campo precisa ter 2 caracteres')
        .max(2, 'O campo precisa ter 2 caracteres')
        .when((values, schema) =>
          payWithCard ? schema.required('O campo é obrigatorio') : schema
        ),
      expiresYear: Yup.string()
        .min(2, 'O campo precisa ter 2 caracteres')
        .max(2, 'O campo precisa ter 2 caracteres')
        .when((values, schema) =>
          payWithCard ? schema.required('O campo é obrigatorio') : schema
        ),
      cardCode: Yup.string()
        .min(3, 'O campo precisa ter 3 caracteres')
        .max(3, 'O campo precisa ter 3 caracteres')
        .when((values, schema) =>
          payWithCard ? schema.required('O campo é obrigatorio') : schema
        ),
      installments: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatorio') : schema
      )
    }),
    onSubmit: (values) => {
      console.log(values)
    }
  })

  const getErrorMessage = (fieldName: string, message?: string) => {
    const isChanged = fieldName in formik.touched
    const isInvalid = fieldName in formik.errors

    if (isChanged && isInvalid) return message

    return ''
  }

  return (
    <form className="container" onSubmit={formik.handleSubmit}>
      <Card title="Dados de cobrança">
        <>
          <Row>
            <InputGroup>
              <label htmlFor="fullName">Nome Completo</label>
              <input
                id="fullName"
                type="text"
                name="fullName"
                value={formik.values.fullName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <small>
                {getErrorMessage('fullName', formik.errors.fullName)}
              </small>
            </InputGroup>
            <InputGroup>
              <label htmlFor="email">E-mail</label>
              <input
                id="email"
                type="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <small>{getErrorMessage('email', formik.errors.email)}</small>
            </InputGroup>
            <InputGroup>
              <label htmlFor="cpf">CPF</label>
              <input
                id="cpf"
                type="text"
                name="cpf"
                value={formik.values.cpf}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <small>{getErrorMessage('cpf', formik.errors.cpf)}</small>
            </InputGroup>
          </Row>
          <h3 className="margin-top">Dados de entrega - conteúdo digital</h3>
          <Row>
            <InputGroup>
              <label htmlFor="deliveryEmail">E-mail</label>
              <input
                id="deliveryEmail"
                type="email"
                name="deliveryEmail"
                value={formik.values.deliveryEmail}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <small>
                {getErrorMessage('deliveryEmail', formik.errors.deliveryEmail)}
              </small>
            </InputGroup>
            <InputGroup>
              <label htmlFor="confirmDeliveryEmail">Confirme o e-mail</label>
              <input
                id="confirmDeliveryEmail"
                type="email"
                name="confirmDeliveryEmail"
                value={formik.values.confirmDeliveryEmail}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <small>
                {getErrorMessage(
                  'confirmDeliveryEmail',
                  formik.errors.confirmDeliveryEmail
                )}
              </small>
            </InputGroup>
          </Row>
        </>
      </Card>

      <Card title="Pagamento">
        <>
          <TabButton
            isActive={!payWithCard}
            onClick={() => setPayWithCard(false)}
          >
            <img src={billIcon} alt="Boleto" />
            Boleto bancário
          </TabButton>
          <TabButton
            isActive={payWithCard}
            onClick={() => setPayWithCard(true)}
          >
            <img src={creditCardIcon} alt="Cartão de crédito" />
            Cartão de crédito
          </TabButton>
          <div className="margin-top">
            {!payWithCard ? (
              <p>
                Ao optar por essa forma de pagamento, é importante lembrar que a
                confirmação pode levar até 3 dias úteis, devido aos prazos
                estabelecidos pelas instituições financeiras. Portanto, a
                liberação do código de ativação do jogo adquirido ocorrerá
                somente após a aprovação do pagamento do boleto.
              </p>
            ) : (
              <>
                <Row>
                  <InputGroup>
                    <label htmlFor="cardOwner">Nome do titular do cartão</label>
                    <input
                      id="cardOwner"
                      type="text"
                      name="cardOwner"
                      value={formik.values.cardOwner}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    <small>
                      {getErrorMessage('cardOwner', formik.errors.cardOwner)}
                    </small>
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="cpfCardOwner">
                      CPF do titular do cartão
                    </label>
                    <input
                      id="cpfCardOwner"
                      type="text"
                      name="cpfCardOwner"
                      value={formik.values.cpfCardOwner}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    <small>
                      {getErrorMessage(
                        'cpfCardOwner',
                        formik.errors.cpfCardOwner
                      )}
                    </small>
                  </InputGroup>
                </Row>
                <Row marginTop="1.5rem">
                  <InputGroup>
                    <label htmlFor="cardDisplayName">Nome no cartão</label>
                    <input
                      id="cardDisplayName"
                      type="text"
                      name="cardDisplayName"
                      value={formik.values.cardDisplayName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    <small>
                      {getErrorMessage(
                        'cardDisplayName',
                        formik.errors.cardDisplayName
                      )}
                    </small>
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="cardNumber">Número do cartão</label>
                    <input
                      id="cardNumber"
                      type="text"
                      name="cardNumber"
                      value={formik.values.cardNumber}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    <small>
                      {getErrorMessage('cardNumber', formik.errors.cardNumber)}
                    </small>
                  </InputGroup>
                  <InputGroup maxWidth="7.5rem">
                    <label htmlFor="expiresMonth">Mês do vencimento</label>
                    <input
                      id="expiresMonth"
                      type="text"
                      name="expiresMonth"
                      value={formik.values.expiresMonth}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    <small>
                      {getErrorMessage(
                        'expiresMonth',
                        formik.errors.expiresMonth
                      )}
                    </small>
                  </InputGroup>
                  <InputGroup maxWidth="7.5rem">
                    <label htmlFor="expiresYear">Ano do vencimento</label>
                    <input
                      id="expiresYear"
                      type="text"
                      name="expiresYear"
                      value={formik.values.expiresYear}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    <small>
                      {getErrorMessage(
                        'expiresYear',
                        formik.errors.expiresYear
                      )}
                    </small>
                  </InputGroup>
                  <InputGroup maxWidth="3rem">
                    <label htmlFor="cardCode">CVV</label>
                    <input
                      id="cardCode"
                      type="text"
                      name="cardCode"
                      value={formik.values.cardCode}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    <small>
                      {getErrorMessage('cardCode', formik.errors.cardCode)}
                    </small>
                  </InputGroup>
                </Row>
                <Row marginTop="1.5rem">
                  <InputGroup maxWidth="9rem">
                    <label htmlFor="installments">Parcelamento</label>
                    <select
                      id="installments"
                      name="installments"
                      value={formik.values.installments}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    >
                      <option value="">1x de R$200,00</option>
                      <option value="">2x de R$200,00</option>
                      <option value="">3x de R$200,00</option>
                    </select>
                    <small>
                      {getErrorMessage(
                        'installments',
                        formik.errors.installments
                      )}
                    </small>
                  </InputGroup>
                </Row>
              </>
            )}
          </div>
        </>
      </Card>
      <Button type="button" title="Clique aqui para finalizar sua compra">
        Finalizar compra
      </Button>
    </form>
  )
}

export default Checkout
