import styled from "styled-components";

const Paragraph = styled.p`
  line-height: calc(1ex / 0.32);
  margin: calc(1ex / 0.32) 0;
  width: 70ch;
  max-width: 100%;
  text-align: justify;
  hyphens: auto;
  text-indent: 3%;
`;

const Text = styled.text`
  line-height: calc(1ex / 0.32);
  margin: calc(1ex / 0.32) 0;
`;

export const HeaderText = styled(Text)`
  font-size: ${props => props.theme.typography.header.fontSize};
  font-family: ${props => props.theme.typography.header.fontFamily};
  line-height: calc(1ex / 0.42);
  margin: calc(1ex / 0.42) 0;
`;

export const SubtitleText = styled(Text)`
  font-size: ${props => props.theme.typography.subtitle.fontSize};
  font-family: ${props => props.theme.typography.subtitle.fontFamily};
  line-height: calc(1ex / 0.42);
  margin: calc(1ex / 0.42) 0;
`;

export const LargeText = styled(Text)`
  font-size: ${props => props.theme.typography.large.fontSize};
  font-family: ${props => props.theme.typography.large.fontFamily};
  line-height: calc(1ex / 0.37);
  margin: calc(1ex / 0.37) 0;
`;

export const RegularParagraph = styled(Paragraph)`
  font-size: ${props => props.theme.typography.regular.fontSize};
  font-family: ${props => props.theme.typography.regular.fontFamily};
`;

export const RegularText = styled(Text)`
  font-size: ${props => props.theme.typography.regular.fontSize};
  font-family: ${props => props.theme.typography.regular.fontFamily};
`;

export const SmallParagraph = styled(Paragraph)`
  font-size: ${props => props.theme.typography.small.fontSize};
  font-family: ${props => props.theme.typography.small.fontFamily};
`;

export const SmallText = styled(Text)`
  font-size: ${props => props.theme.typography.small.fontSize};
  font-family: ${props => props.theme.typography.small.fontFamily};
`;

export const DateText = styled.text`
  font-size: ${props => props.theme.typography.caption.fontSize};
  font-family: ${props => props.theme.typography.caption.fontFamily};
  margin-top: 0.75vw;
`;
export const Caption = styled.figcaption`
  font-style: italic;
  font-size: ${props => props.theme.typography.caption.fontSize};
  font-family: ${props => props.theme.typography.caption.fontFamily};
  margin-top: ${props => props.theme.typography.caption.marginTop};
  margin-left: 2%;
`;
