import { css } from "styled-components";
import { marg, pad } from "../../../maps";

export default css`
  height: ${(props) =>
    !props.bg
      ? "auto"
      : props.theme.space[props.bg]
      ? props.theme.space[props.bg]
      : props.bg};
  width: ${(props) =>
    !props.bg
      ? "100%"
      : props.theme.space[props.bg]
      ? props.theme.space[props.bg]
      : props.bg};
  max-height: ${(props) =>
    !props.bg
      ? "none"
      : props.theme.space[props.bg]
      ? props.theme.space[props.bg]
      : props.bg};
  max-width: ${(props) =>
    !props.bg
      ? "none"
      : props.theme.space[props.bg]
      ? props.theme.space[props.bg]
      : props.bg};
  min-height: ${(props) =>
    !props.bg
      ? "none"
      : props.theme.space[props.bg]
      ? props.theme.space[props.bg]
      : props.bg};
  min-width: ${(props) =>
    !props.bg
      ? "none"
      : props.theme.space[props.bg]
      ? props.theme.space[props.bg]
      : props.bg};
  margin: ${(props) =>
    !props.bg
      ? marg
      : props.theme.space[props.bg]
      ? props.theme.space[props.bg]
      : props.bg};
  margin-top: ${(props) =>
    !props.bg
      ? "none"
      : props.theme.space[props.bg]
      ? props.theme.space[props.bg]
      : props.bg};
  margin-bottom: ${(props) =>
    !props.bg
      ? "none"
      : props.theme.space[props.bg]
      ? props.theme.space[props.bg]
      : props.bg};
  margin-left: ${(props) =>
    !props.bg
      ? "none"
      : props.theme.space[props.bg]
      ? props.theme.space[props.bg]
      : props.bg};
  margin-right: ${(props) =>
    !props.bg
      ? "none"
      : props.theme.space[props.bg]
      ? props.theme.space[props.bg]
      : props.bg};
  padding: ${(props) =>
    !props.bg
      ? pad
      : props.theme.space[props.bg]
      ? props.theme.space[props.bg]
      : props.bg};
  padding-top: ${(props) =>
    !props.bg
      ? "none"
      : props.theme.space[props.bg]
      ? props.theme.space[props.bg]
      : props.bg};
  padding-bottom: ${(props) =>
    !props.bg
      ? "none"
      : props.theme.space[props.bg]
      ? props.theme.space[props.bg]
      : props.bg};
  padding-left: ${(props) =>
    !props.bg
      ? "none"
      : props.theme.space[props.bg]
      ? props.theme.space[props.bg]
      : props.bg};
  padding-right: ${(props) =>
    !props.bg
      ? "none"
      : props.theme.space[props.bg]
      ? props.theme.space[props.bg]
      : props.bg};
`;
