import React from "react";
import { TouchableOpacityProps } from "react-native";
import { Container, IconBox, Message, TextHighlight } from "./styles";
import { Key, Car } from "phosphor-react-native";
import theme from "../../theme";

type Props = TouchableOpacityProps & {
  licensePlate?: string | null;
};

export function CarStatus({ licensePlate = null, ...rest }: Props) {
  const Icon = licensePlate ? Car : Key;
  const message = licensePlate
    ? `Veículo ${licensePlate} em uso `
    : `Nenhum veiculo em uso. `;
  const status = licensePlate ? "Chegada" : "Saída";

  return (
    <Container {...rest}>
      <IconBox>
        <Icon size={52} color={theme.COLORS.BRAND_LIGHT} />
      </IconBox>

      <Message>
        {message}

        <TextHighlight>clique aqui para registrar a {status}</TextHighlight>
      </Message>
    </Container>
  );
}
