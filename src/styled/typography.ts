import styled from "styled-components";

export const HeaderText = styled.div`
  font-size: ${props => props.theme.typography.header.fontSize};
  font-family: ${props => props.theme.typography.header.fontFamily};
  line-height: calc(1ex / 0.32);
`;

export const SubtitleText = styled.div`
  font-size: ${props => props.theme.typography.subtitle.fontSize};
  font-family: ${props => props.theme.typography.subtitle.fontFamily};
  line-height: calc(1ex / 0.32);
`;

export const LargeText = styled.div`
  font-size: ${props => props.theme.typography.large.fontSize};
  font-family: ${props => props.theme.typography.large.fontFamily};
  line-height: calc(1ex / 0.32);
`;

export const RegularParagraph = styled.p`
  font-size: ${props => props.theme.typography.regular.fontSize};
  font-family: ${props => props.theme.typography.regular.fontFamily};
  text-indent: 3%;
  line-height: calc(1ex / 0.32);
`;

export const RegularText = styled.div`
  font-size: ${props => props.theme.typography.regular.fontSize};
  font-family: ${props => props.theme.typography.regular.fontFamily};
  line-height: calc(1ex / 0.32);
`;

export const SmallParagraph = styled.p`
  font-size: ${props => props.theme.typography.small.fontSize};
  font-family: ${props => props.theme.typography.small.fontFamily};
  text-indent: 3%;
  line-height: calc(1ex / 0.32);
`;

export const SmallText = styled.text`
  font-size: ${props => props.theme.typography.small.fontSize};
  font-family: ${props => props.theme.typography.small.fontFamily};
  line-height: calc(1ex / 0.32);
`;

export const StyledUnorderedList = styled.ul`
  font-size: ${props => props.theme.typography.regular.fontSize};
  font-family: ${props => props.theme.typography.regular.fontFamily};
`;

export const DateText = styled.text`
  font-size: ${props => props.theme.typography.caption.fontSize};
  font-family: ${props => props.theme.typography.caption.fontFamily};
`;
export const Caption = styled.figcaption`
  font-style: italic;
  font-size: ${props => props.theme.typography.caption.fontSize};
  font-family: ${props => props.theme.typography.caption.fontFamily};
  margin-top: ${props => props.theme.typography.caption.marginTop};
`;
