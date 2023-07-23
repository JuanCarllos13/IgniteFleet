import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { useQuery } from '../../lib/realm';
import { Historic } from '../../lib/realm/schemas/History';

import { HomeHeader } from '../../components/HomeHeader';
import { CarStatus } from '../../components/CarStatus';

import { Container, Content } from './styles';
import { useEffect } from 'react';

export function Home() {
  const { navigate } = useNavigation();

  const historic = useQuery(Historic)

  function handleRegisterMoviment() {
    navigate('departure')
  }

  function fetchVehicle() {
    console.log(historic);
  }

  useEffect(() => {
    fetchVehicle();
  },[])

  return (
    <Container>
      <HomeHeader />

      <Content>
        <CarStatus licensePlate="XXX-1234" onPress={handleRegisterMoviment} />
      </Content>
    </Container>
  );
}