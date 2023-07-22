import React, { forwardRef } from "react";
import { Container, Input, Label } from "./styles";
import theme from "../../theme";
import { TextInput, TextInputProps } from "react-native";

type Props = TextInputProps & {
  label: string;
};
const LicensePlateInput = forwardRef<TextInput, Props>(
  ({ label, ...rest }: Props, ref) => {
    return (
      <Container>
        <Label>{label}</Label>

        <Input
          ref={ref}
          maxLength={7}
          autoCapitalize="characters"
          placeholderTextColor={theme.COLORS.GRAY_400}
          {...rest}
        />
      </Container>
    );
  }
);

export { LicensePlateInput };
