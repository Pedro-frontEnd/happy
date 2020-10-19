import styled from 'styled-components'
import { FiPlus } from '../../styles/icons'

export const Container = styled.div`
  display: flex;
`

export const Main = styled.main`
  flex: 1;
`

export const Form = styled.form`
  width: 700px;
  margin: 64px auto;

  background: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.borderForm};
  border-radius: 20px;

  padding: 64px 80px;

  overflow: hidden;

  fieldset + fieldset {
    margin-top: 80px;
  }

  div + div {
    margin-top: 24px;
  }
`

export const Fieldset = styled.fieldset`
  border: 0;
`

export const Legend = styled.legend`
  width: 100%;

  font-size: ${props => props.theme.fontSizes.legend};
  line-height: ${props => props.theme.lineHeights.normal};
  color: ${props => props.theme.colors.legendColor};
  font-weight: ${props => props.theme.fontWeights.bold};

  border-bottom: 1px solid ${props => props.theme.colors.borderForm};
  margin-bottom: 40px;
  padding-bottom: 24px;
`

export const InputBlock = styled.div``

export const Label = styled.label`
  display: flex;
  color: ${props => props.theme.colors.labelColor};
  margin-bottom: 8px;
  line-height: ${props => props.theme.lineHeights.small};
`

export const Span = styled.span`
  font-size: ${props => props.theme.fontSizes.tooSmall};
  color: ${props => props.theme.colors.labelColor};
  margin-left: 24px;
  line-height: ${props => props.theme.lineHeights.small};
`

export const Input = styled.input`
  width: 100%;
  height: 64px;
  padding: 0 16px;

  background: ${props => props.theme.colors.backgroundInput};
  border: 1px solid ${props => props.theme.colors.borderForm};
  border-radius: 20px;
  outline: none;
  color: ${props => props.theme.colors.legendColor};
`

export const TextArea = styled.textarea`
  width: 100%;
  min-height: 120px;
  max-height: 240px;
  resize: vertical;
  padding: 16px;
  line-height: 28px;

  background: ${props => props.theme.colors.backgroundInput};
  border: 1px solid ${props => props.theme.colors.borderForm};
  border-radius: 20px;
  outline: none;
  color: ${props => props.theme.colors.legendColor};
`

export const UploadedImages = styled.div``

export const NewImage = styled.button`
  width: 100%;
  height: 64px;
  background: ${props => props.theme.colors.backgroundInput};
  border: 1px dashed ${props => props.theme.colors.borderImage};
  border-radius: 20px;
  cursor: pointer;
`

export const PlusIcon = styled(FiPlus)``

export const ButtonSelectDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

export const ButtonSelect = styled.button`
  height: 64px;
  background: ${props => props.theme.colors.backgroundInput};
  border: 1px solid ${props => props.theme.colors.borderForm};
  color: ${props => props.theme.colors.legendColor};
  cursor: pointer;

  &:first-child {
    border-radius: 20px 0px 0px 20px;
  }

  &:last-child {
    border-radius: 0 20px 20px 0;
    border-left: 0;
  }

  &.active {
    background: ${props => props.theme.colors.buttonActiveBackground};
    border: 1px solid ${props => props.theme.colors.buttonActiveBorder};
    color: ${props => props.theme.colors.buttonActiveColor};
  }
`

export const ConfirmButton = styled.button`
  margin-top: 64px;

  width: 100%;
  height: 64px;
  border: 0;
  cursor: pointer;
  background: ${props => props.theme.colors.buttonConfirmBackground};
  border-radius: 20px;
  color: ${props => props.theme.colors.white};
  font-weight: 800;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: background-color 0.2s;

  &:hover {
    background: ${props => props.theme.colors.buttonConfirmHover};
  }

  svg {
    margin-right: 16px;
  }
`
