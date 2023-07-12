import React from "react";
import { View } from "react-native";

import { Container } from "./styles";
import { HomeHeader } from "../../components/HomeHeader";

export function Home() {

  return (
    <Container>
      <HomeHeader />
    </Container>
  );
}
