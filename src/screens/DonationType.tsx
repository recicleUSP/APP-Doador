import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useDonation } from '../contexts';
import React, { Component, useEffect } from 'react';

import {
  Box,
  Text,
  IconButton,
  View,
  Avatar,
  FlatList,
  Progress,
  Icon,
  Button,
  Stack,
  Checkbox,
} from 'native-base';

import { useState } from 'react';

export default function Donation() {
  const navigation = useNavigation();
  const { localType, setLocalType} = useDonation();

  const [checked, setChecked] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);
  const [checked5, setChecked5] = useState(false);
  const [checked6, setChecked6] = useState(false);
  const [checked7, setChecked7] = useState(false);

  const itemTeste = [
    ['Papel',setChecked,checked],
    ['Aluminio', setChecked2,checked2],
    ['Plástico', setChecked3,checked3],
    ['vidro', setChecked4,checked4],
    ['Óleo de cozinha', setChecked5,checked5],
    ['Metal', setChecked6,checked6],
    ['Eletrônico', setChecked7,checked7],
  ]

  return (
    <View>
      <Box pb={4} height="120" bgColor="emerald.100" px={8}>
        <IconButton
          size="lg"
          rounded={32}
          alignSelf="flex-start"
          left={6}
          bottom={-16}
          position="absolute"
          onPress={() => navigation.goBack()}
          bgColor="white"
          shadow={2}
          _icon={{
            paddingLeft: 1,
            name: 'chevron-left',
            as: FontAwesome5,
            color: 'emerald.500',
          }}
        />
        <Progress
          bg="white"
          _filledTrack={{
            bg: 'emerald.500',
          }}
          value={40}
          ml="45"
          mt="85"
        />
        <Text color="emerald.600" alignSelf="flex-end">
          Passo 2 <Text color="muted.400">de 5</Text>
        </Text>
      </Box>
        <Text color="muted.400" mt={8} fontSize="lg" alignSelf="center" mx={8}>
          Selecione os tipos de recicláveis que serão coletados:
        </Text>
        <Stack
          direction={{ 
            base: 'column',
            md: 'row',
          }}
          space={3}
          alignItems="flex-start"
          mx={8}
          mt={6}
        >
        </Stack>
        
 
      {itemTeste.map((element)=>{
      const func = element[1] as React.Dispatch<React.SetStateAction<boolean>>
      return  <Checkbox
          isChecked={element[2] as boolean}
          onChange={() =>func(!element[2] as boolean)}
          color='#009688'
          value={element[0] as string}
        >
          {element[0] as string}
        </Checkbox>  
  })}

        <Box
          flexDirection="row"
          borderColor="muted.100"
          mt={100}
          justifyContent="center"
        >
        <Button
          mr={3}
          px={8}
          size="lg"
          shadow="2"
          variant="solid"
          colorScheme="muted"
          onPress={() => navigation.goBack()}
        >
          ANTERIOR
        </Button>
        <Button
          ml={3}
          px={8}
          size="lg"
          shadow="2"
          variant="solid"
          colorScheme="emerald"
          onPress={() => navigation.navigate('DonationAmount')}
        >
          PRÓXIMO
        </Button>
      </Box> 
    </View>
  );
}
