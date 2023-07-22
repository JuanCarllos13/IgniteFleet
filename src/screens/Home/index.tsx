import React from "react";
import { View } from "react-native";

import { Container, Content } from "./styles";
import { HomeHeader } from "../../components/HomeHeader";
import { CarStatus } from "../../components/CarStatus";
import { useNavigation } from "@react-navigation/native";

export function Home() {
  const {navigate} = useNavigation()

  function handleRegisterMovente(){
    navigate('departure')
  }

  return (
    <Container>
      <HomeHeader />

      <Content>
        <CarStatus licensePlate='689786' onPress={handleRegisterMovente}/>
      </Content>
    </Container>
  );
}
