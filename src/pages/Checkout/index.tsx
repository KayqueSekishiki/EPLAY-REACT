import { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import Button from '../../components/Button'
import Card from '../../components/Card'

import barCodeIcon from '../../assets/images/boleto.png'
import creditCardIcon from '../../assets/images/cartao.png'

import { usePurchaseMutation } from '../../services/api'

import * as S from './styles'

const Checkout = () => {
  const [payWithCard, setPayWithCard] = useState(false)
  const [purchase, { data, isSuccess }] = usePurchaseMutation()

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
      purchase({
        billing: {
          document: values.cpf,
          email: values.email,
          name: values.fullName
        },
        delivery: {
          email: values.deliveryEmail
        },
        payment: {
          installments: 1,
          card: {
            active: payWithCard,
            code: Number(values.cardCode),
            name: values.cardDisplayName,
            number: values.cardNumber,
            owner: {
              document: values.cpfCardOwner,
              name: values.cardOwner
            },
            expires: {
              month: 1,
              year: 2025
            }
          }
        },
        products: [{ id: 1, price: 10 }]
      })
    }
  })

  const getErrorMessage = (fieldName: string, message?: string) => {
    const isChanged = fieldName in formik.touched
    const isInvalid = fieldName in formik.errors

    if (isChanged && isInvalid) return message

    return ''
  }

  return (
    <div className="container">
      {!isSuccess ? (
        <form onSubmit={formik.handleSubmit}>
          <Card title="Dados de cobrança">
            <>
              <S.Row>
                <S.InputGroup>
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
                </S.InputGroup>
                <S.InputGroup>
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
                </S.InputGroup>
                <S.InputGroup>
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
                </S.InputGroup>
              </S.Row>
              <h3 className="margin-top">
                Dados de entrega - conteúdo digital
              </h3>
              <S.Row>
                <S.InputGroup>
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
                    {getErrorMessage(
                      'deliveryEmail',
                      formik.errors.deliveryEmail
                    )}
                  </small>
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="confirmDeliveryEmail">
                    Confirme o e-mail
                  </label>
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
                </S.InputGroup>
              </S.Row>
            </>
          </Card>

          <Card title="Pagamento">
            <>
              <S.TabButton
                isActive={!payWithCard}
                onClick={() => setPayWithCard(false)}
              >
                <img src={barCodeIcon} alt="Boleto" />
                Boleto bancário
              </S.TabButton>
              <S.TabButton
                isActive={payWithCard}
                onClick={() => setPayWithCard(true)}
              >
                <img src={creditCardIcon} alt="Cartão de crédito" />
                Cartão de crédito
              </S.TabButton>
              <div className="margin-top">
                {!payWithCard ? (
                  <p>
                    Ao optar por essa forma de pagamento, é importante lembrar
                    que a confirmação pode levar até 3 dias úteis, devido aos
                    prazos estabelecidos pelas instituições financeiras.
                    Portanto, a liberação do código de ativação do jogo
                    adquirido ocorrerá somente após a aprovação do pagamento do
                    boleto.
                  </p>
                ) : (
                  <>
                    <S.Row>
                      <S.InputGroup>
                        <label htmlFor="cardOwner">
                          Nome do titular do cartão
                        </label>
                        <input
                          id="cardOwner"
                          type="text"
                          name="cardOwner"
                          value={formik.values.cardOwner}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        <small>
                          {getErrorMessage(
                            'cardOwner',
                            formik.errors.cardOwner
                          )}
                        </small>
                      </S.InputGroup>
                      <S.InputGroup>
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
                      </S.InputGroup>
                    </S.Row>
                    <S.Row marginTop="1.5rem">
                      <S.InputGroup>
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
                      </S.InputGroup>
                      <S.InputGroup>
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
                          {getErrorMessage(
                            'cardNumber',
                            formik.errors.cardNumber
                          )}
                        </small>
                      </S.InputGroup>
                      <S.InputGroup maxWidth="7.5rem">
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
                      </S.InputGroup>
                      <S.InputGroup maxWidth="7.5rem">
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
                      </S.InputGroup>
                      <S.InputGroup maxWidth="3rem">
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
                      </S.InputGroup>
                    </S.Row>
                    <S.Row marginTop="1.5rem">
                      <S.InputGroup maxWidth="9rem">
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
                      </S.InputGroup>
                    </S.Row>
                  </>
                )}
              </div>
            </>
          </Card>
          <Button type="button" title="Clique aqui para finalizar sua compra">
            Finalizar compra
          </Button>
        </form>
      ) : (
        <Card title="Muito Obrigado!">
          <>
            <p>
              É com satisfação que informamos que recebemos seu pedido com
              sucesso!
              <br />
              Abaixo estão os detalhes da sua compra:
              <br />
              Número do pedido: {data.orderId}
              <br />
              Forma de pagamento:{' '}
              {payWithCard ? 'Cartão de crédito' : 'Boleto Bancário'}
            </p>
            <p className="margin-top">
              Caso tenha optado pelo pagamento via boleto bancário, lembre-se de
              que a confirmação pode levar até 3 dias úteis. Após a aprovação do
              pagamento, enviaremos um e-mail contendo o código de ativação do
              jogo.
            </p>
            <p className="margin-top">
              Se você optou pelo pagamento com cartão de crédito, a liberação do
              código de ativação ocorrerá após a aprovação da transação pela
              operadora do cartão. Você receberá o código no e-mail cadastrado
              em nossa loja.
            </p>
            <p className="margin-top">
              Pedimos que verifique sua caixa de entrada e a pasta de spam para
              garantir que receba nossa comunicação. Caso tenha alguma dúvida ou
              necessite de mais informações, por favor, entre em contato conosco
              através dos nossos canais de atendimento ao cliente.
            </p>
            <p className="margin-top">
              Agradecemos por escolher a EPLAY e esperamos que desfrute do seu
              jogo!
            </p>
          </>
        </Card>
      )}
    </div>
  )
}

export default Checkout
