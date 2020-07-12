import styled from "styled-components"

export const HeaderText = styled.div`
  padding: auto;
  font-size: ${props => props.theme.typography.header.fontSize};
`

export const Paragraph = styled.p`
  font-size: ${props => props.theme.typography.regular.fontSize};
`

export const HighlightText = styled.div`
  font-size: ${props => props.theme.typography.large.fontSize};
  height: 100%;
`

export const StyledUnorderedList = styled.ul`
  font-size: ${props => props.theme.typography.regular.fontSize};
`
export const Caption = styled.figcaption`
  font-style: italic;
  font-size: ${props => props.theme.typography.caption.fontSize};
  margin-top: ${props => props.theme.typography.caption.marginTop};
`
export const SmallText = styled.text`
  font-size: ${props => props.theme.typography.small.fontSize};
`
