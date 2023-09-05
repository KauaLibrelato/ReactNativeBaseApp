/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { theme } from "../../../../styles/theme";

export const Container = styled.TouchableOpacity<{
  color?: string;
}>`
  width: 100%;
  background-color: ${(props: { color: string }) =>
    props?.color ?? theme.colors.secondary900};
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  padding: 16px;
`;

export const Title = styled.Text<{
  colorText?: string;
}>`
  font-size: ${RFValue(16)}px;
  font-family: ${theme.fonts.primary500};
  color: ${(props: { colorText: string }) =>
    props.colorText ?? theme.colors.white};
`;
