import React, { useRef, useState } from "react";

import { useRealm } from "../../lib/realm";
import { useUser } from "@realm/react";

import { Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { LicensePlateInput } from "../../components/LicencePlateInput";
import { TextAreaInput } from "../../components/TextAreaInput";
import { Button } from "../../components/Button";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TextInput,
} from "react-native";
import { LicensePlateValidation } from "../../utils/licensePlateValidate";
import { Historic } from "../../lib/realm/schemas/History";
import { useNavigation } from "@react-navigation/native";

export function Departure() {
  const [description, setDescription] = useState("");
  const [licensePlate, setLicensePlate] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);

  const realm = useRealm();
  const user = useUser();

  const { goBack } = useNavigation();

  const keyboardAvoidingViewBehavior =
    Platform.OS === "android" ? "height" : "position";

  const descriptionRef = useRef<TextInput>(null);
  const licensePlateRef = useRef<TextInput>(null);

  function handleDepartureRegister() {
    try {
      if (!LicensePlateValidation(licensePlate)) {
        licensePlateRef.current?.focus();
        return Alert.alert(
          "Placa Inválida",
          "A placa é invalida. Por favor, informe uma placa correta de veículo"
        );
      }

      if (description.trim().length === 0) {
        descriptionRef.current?.focus();
        return Alert.alert(
          "Finalidade",
          "Por favor, informe a finalidade de utilização do veículo"
        );
      }

      setIsRegistering(true);

      realm.write(() => {
        realm.create(
          "History",
          Historic.generate({
            description,
            license_plate: licensePlate.toUpperCase(),
            user_id: user!.id,
          })
        );
      });

      goBack();

      Alert.alert("Saída", "Saída do Veículo registrada com sucesso");
    } catch (error) {
      console.log(error);
      Alert.alert("Error", "Não foi possivel registrar a saída do veiculo.");

      setIsRegistering(false);
    }
  }

  return (
    <Container>
      <Header title="Saída" />

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={keyboardAvoidingViewBehavior}
      >
        <ScrollView>
          <Content>
            <LicensePlateInput
              ref={licensePlateRef}
              label="Placa do Veículo"
              placeholder="BRA4686"
              onSubmitEditing={() => descriptionRef.current?.focus}
              returnKeyType="next"
              onChangeText={setLicensePlate}
            />

            <TextAreaInput
              ref={descriptionRef}
              label="Finalidade"
              placeholder="Vou utilizar esse veículo para..."
              onSubmitEditing={handleDepartureRegister}
              blurOnSubmit
              returnKeyType="send"
              onChangeText={setDescription}
            />

            <Button
              title="Registrar saída"
              onPress={handleDepartureRegister}
              isLoading={isRegistering}
            />
          </Content>
        </ScrollView>
      </KeyboardAvoidingView>
    </Container>
  );
}
