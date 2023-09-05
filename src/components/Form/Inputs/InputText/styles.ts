/* eslint-disable no-nested-ternary */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { theme } from "../../../../styles/theme";

export const Container = styled.View`
  width: 100%;
`;

export const InputTextContainer = styled.TextInput<{
  error: boolean;
  disabled: boolean | undefined;
  isFocused?: any;
}>`
  width: 100%;
  padding: 16px;
  border-radius: 4px;
  border-width: 1px;
  border-color: ${(props: { error: boolean; isFocused: boolean }) =>
    props.error ? "#FF4C4C" : props.isFocused ? "#527A77" : "#C2D6D5"};
  background-color: ${(props: { disabled: boolean }) =>
    props.disabled ? "#E0EBEA" : "#FFF"};
  color: ${(props: { disabled: boolean; error: boolean }) =>
    props.disabled ? "#527A77" : props.error ? "#FF4C4C" : "#141F1E"};
  font-size: 16px;
  font-family: ${theme.fonts.primary500};
`;

export const Error = styled.View`
  margin-top: 4px;
`;

export const ErrorText = styled.Text`
  color: ${theme.colors.danger500};
  font-size: ${RFValue(12)}px;
  font-family: ${theme.fonts.primary400};
`;

export const InputLabel = styled.Text<{ labelColor: any }>`
  margin-top: 8px;
  color: ${(props: { labelColor: string }) =>
    props.labelColor ?? theme.colors.neutral900};
  font-size: 14px;
  font-family: ${theme.fonts.primary500};
  margin-bottom: 4px;
`;
