import styled from "styled-components";

export const HeaderText = styled.div`
  padding: auto;
  font-size: ${props => props.theme.typography.header.fontSize};
  font-family: ${props => props.theme.typography.header.fontFamily};
  line-height: 135%;
`;

export const HighlightText = styled.div`
  font-size: ${props => props.theme.typography.large.fontSize};
  font-family: ${props => props.theme.typography.large.fontFamily};
  line-height: 135%;
`;

export const RegularParagraph = styled.p`
  font-size: ${props => props.theme.typography.regular.fontSize};
  font-family: ${props => props.theme.typography.regular.fontFamily};
  text-indent: 3%;
  line-height: 155%;
`;

export const RegularText = styled.div`
  font-size: ${props => props.theme.typography.regular.fontSize};
  font-family: ${props => props.theme.typography.regular.fontFamily};
  line-height: 155%;
`;

export const SmallParagraph = styled.p`
  font-size: ${props => props.theme.typography.small.fontSize};
  font-family: ${props => props.theme.typography.small.fontFamily};
  text-indent: 3%;
  line-height: 165%;
`;

export const SmallText = styled.text`
  font-size: ${props => props.theme.typography.small.fontSize};
  font-family: ${props => props.theme.typography.small.fontFamily};
  line-height: 165%;
`;

export const StyledUnorderedList = styled.ul`
  font-size: ${props => props.theme.typography.regular.fontSize};
  font-family: ${props => props.theme.typography.regular.fontFamily};
  text-indent: 2%;
`;

export const Caption = styled.figcaption`
  font-style: italic;
  font-size: ${props => props.theme.typography.caption.fontSize};
  font-family: ${props => props.theme.typography.caption.fontFamily};
  margin-top: ${props => props.theme.typography.caption.marginTop};
`;
