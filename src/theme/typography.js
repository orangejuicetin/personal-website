import styled from "styled-components"

export const HeaderText = styled.div`
  padding: auto;
  font-size: ${props => props.theme.typography.header.fontSize};
`

export const HighlightText = styled.div`
  font-size: ${props => props.theme.typography.large.fontSize};
`

export const RegularParagraph = styled.p`
  font-size: ${props => props.theme.typography.regular.fontSize};
  text-indent: 3%;
`

export const RegularText = styled.div`
  font-size: ${props => props.theme.typography.regular.fontSize};
`

export const SmallParagraph = styled.p`
  font-size: ${props => props.theme.typography.small.fontSize};
  text-indent: 3%;
`

export const SmallText = styled.text`
  font-size: ${props => props.theme.typography.small.fontSize};
`

export const StyledUnorderedList = styled.ul`
  font-size: ${props => props.theme.typography.regular.fontSize};
  text-indent: 2%;
`

export const Caption = styled.figcaption`
  font-style: italic;
  font-size: ${props => props.theme.typography.caption.fontSize};
  margin-top: ${props => props.theme.typography.caption.marginTop};
`
