import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

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
  Slider,
} from 'native-base';
import { useState } from 'react';

import { SafeAreaView } from 'react-native-safe-area-context';

export default function DonationType() {
  const navigation = useNavigation();
  const [onChangeValue, setOnChangeValue] = useState(3);
 

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
          value={60}
          ml="45"
          mt="85"
        />
        <Text color="emerald.600" alignSelf="flex-end">
          Passo 3 <Text color="muted.400">de 5</Text>
        </Text>
      </Box>
      <Text color="muted.400" mt={8} fontSize="lg" alignSelf="center" mx={8}>
        Informe, por gentileza, a quantidade de material que será coletado:
      </Text>
      <Box mt={85}>

      <Text
        color="muted.500"
        mt={8}
        fontSize="lg"
        alignSelf="flex-start"
        mx={8}
      >
        QUANTIDADE DE SACOS:
      </Text>
      <Box alignItems="center" w="100%">
        <Slider
          defaultValue={3}
          size="lg"
          colorScheme="emerald"
          w="100%"
          maxW="300"
          maxValue={5}
          onChange={(v) => {
            setOnChangeValue(Math.floor(v));
          }}
         
        >
          <Slider.Track bg="muted.400">
            <Slider.FilledTrack bg="emerald.600" />
          </Slider.Track>
          <Slider.Thumb borderWidth="0" bg="transparent">
            <Icon
              as={MaterialCommunityIcons}
              name="sack"
              color="emerald.600"
              size="2xl"
            />
          </Slider.Thumb>
        </Slider>
        <Text mt={50} textAlign="center" fontSize="2xl" >{onChangeValue}KG</Text>
      </Box>
      </Box>

      <Box
        flexDirection="row"
        borderColor="muted.100"
        mt={190}
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
