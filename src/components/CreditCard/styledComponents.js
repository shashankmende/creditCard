// Style your elements here
import styled from 'styled-components'

export const BgContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
`

export const OutputContainer = styled.div`
  width: 50%;
  background-color: #344e7a;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const OututInnerContainer = styled.div`
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const CardContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  width: 70%;
  border-radius: 20px;
  padding-left: 30px;
  
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end:
  
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
`

export const FormContainer = styled.div`
  width: 90%;
  box-shadow: 0px 4px 16px 0px #c3cad9;
  padding: 50px;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
`

export const CardHeading = styled.h1`
  font-family: 'Roboto';
  color: white;
  border-bottom: 3px solid #ffd773;
  align-self: center;
`

export const Para = styled.p`
  font-family: 'Roboto';
  color: white;

  font-size: 18px;
  font-weight: bold;
`

export const PaymentHeading = styled.h1`
  font-family: 'Roboto';
  color: #475569;
  align-self: center;
`

export const Input = styled.input`
  background-color: transparent;
  border: 1px solid #c3cad9;
  padding: 10px;
  margin-top: 20px;
  border-radius: 8px;
`

export const CardHolderName = styled.h1`
  font-family: 'Roboto';
  color: white;
`

export const DetailsContainer = styled.div`
  margin-top: 160px;
`
