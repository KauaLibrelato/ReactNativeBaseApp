/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { theme } from "../../../../styles/theme";

export const Container = styled.TouchableOpacity<{
  color?: string;
}>`
  width: 100%;
  justify-content: center;
  align-items: center;
  border: 1px solid
    ${(props: { color: string }) => props.color ?? theme.colors.secondary900};
  border-radius: 4px;
  padding: 15px;
  flex-direction: row;
`;

export const Title = styled.Text<{
  colorText?: string;
}>`
  font-size: ${RFValue(16)}px;
  font-family: ${theme.fonts.primary500};
  color: ${(props: { colorText: string }) =>
    props.colorText ?? theme.colors.secondary900};
`;
