import {useState} from 'react'
import {
  BgContainer,
  OutputContainer,
  CardContainer,
  InputContainer,
  FormContainer,
  CardHeading,
  Para,
  PaymentHeading,
  Input,
  CardHolderName,
  DetailsContainer,
} from './styledComponents'

const CreditCard = () => {
  const [cardNumber, setNumber] = useState('')

  const [name, setName] = useState('')

  const onChangeCardNumber = event => {
    setNumber(event.target.value)
  }

  const onChangeName = event => {
    setName(event.target.value)
  }

  return (
    <BgContainer>
      <OutputContainer>
        <CardHeading>CREDIT CARD</CardHeading>
        <CardContainer data-testid="creditCard">
          <DetailsContainer>
            <Para>{cardNumber}</Para>
            <Para>CARDHOLDER NAME</Para>
            <Para>{name.toUpperCase()}</Para>
          </DetailsContainer>
        </CardContainer>
      </OutputContainer>
      <InputContainer>
        <FormContainer>
          <PaymentHeading>Payment Method</PaymentHeading>
          <Input
            type="text"
            placeholder="Card Number"
            onChange={onChangeCardNumber}
          />
          <Input
            type="text"
            placeholder="Cardholder Name"
            onChange={onChangeName}
          />
        </FormContainer>
      </InputContainer>
    </BgContainer>
  )
}

export default CreditCard
