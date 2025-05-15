import { useState } from 'react'
import Button from '../../components/Button'
import Card from '../../components/Card'

import { Row, InputGroup, TabButton } from './styles'

import billIcon from '../../assets/images/boleto.png'
import creditCardIcon from '../../assets/images/cartao.png'

const Checkout = () => {
  const [payWithCard, setPayWithCard] = useState(false)

  return (
    <div className="container">
      <Card title="Dados de cobrança">
        <>
          <Row>
            <InputGroup>
              <label htmlFor="fullname">Nome Completo</label>
              <input id="fullname" type="text" />
            </InputGroup>
            <InputGroup>
              <label htmlFor="email">E-mail</label>
              <input id="email" type="email" />
            </InputGroup>
            <InputGroup>
              <label htmlFor="cpf">CPF</label>
              <input id="cpf" type="text" />
            </InputGroup>
          </Row>
          <h3 className="margin-top">Dados de entrega - conteúdo digital</h3>
          <Row>
            <InputGroup>
              <label htmlFor="deliveryEmail">E-mail</label>
              <input id="deliveryEmail" type="email" />
            </InputGroup>
            <InputGroup>
              <label htmlFor="confirmDeliveryEmail">Confirme o e-mail</label>
              <input id="confirmDeliveryEmail" type="email" />
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
                    <input id="cardOwner" type="text" />
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="cpfCardOwner">
                      CPF do titular do cartão
                    </label>
                    <input id="cpfCardOwner" type="text" />
                  </InputGroup>
                </Row>
                <Row marginTop="1.5rem">
                  <InputGroup>
                    <label htmlFor="cardDisplayName">Nome no cartão</label>
                    <input id="cardDisplayName" type="text" />
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="cardNumber">Número do cartão</label>
                    <input id="cardNumber" type="text" />
                  </InputGroup>
                  <InputGroup maxWidth="7.5rem">
                    <label htmlFor="expiresMonth">Mês do vencimento</label>
                    <input id="expiresMonth" type="text" />
                  </InputGroup>
                  <InputGroup maxWidth="7.5rem">
                    <label htmlFor="expiresYear">Ano do vencimento</label>
                    <input id="expiresYear" type="text" />
                  </InputGroup>
                  <InputGroup maxWidth="3rem">
                    <label htmlFor="cardCode">CVV</label>
                    <input id="cardCode" type="text" />
                  </InputGroup>
                </Row>
                <Row marginTop="1.5rem">
                  <InputGroup maxWidth="9rem">
                    <label htmlFor="installments">Parcelamento</label>
                    <select name="" id="">
                      <option value="">1x de R$200,00</option>
                      <option value="">2x de R$200,00</option>
                      <option value="">3x de R$200,00</option>
                    </select>
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
    </div>
  )
}

export default Checkout
