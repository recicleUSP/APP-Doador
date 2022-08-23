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
  FormControl,
  Input,
} from 'native-base';
import { useState } from 'react';

import { SafeAreaView } from 'react-native-safe-area-context';

export default function DonationAmount() {
  const navigation = useNavigation();
  const [onChangeValueSack, setOnChangeValueSack] = useState(0);
  const [onChangeValueBox, setOnChangeValueBox] = useState(0);

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
      <Box mt={8} mx={8}>
        <Text color="muted.500"  fontSize="lg" alignSelf="flex-start">
          QUANTIDADE DE SACOS:
        </Text>

        <Slider
          defaultValue={0}
          alignSelf="center"
          size="lg"
          mt={4}
          colorScheme="emerald"
          w="100%"
          maxW="150"
          maxValue={8}
          onChange={(v) => {
            setOnChangeValueSack(Math.floor(v));
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
        <Text  textAlign="center" fontSize="2xl">
          {onChangeValueSack}
        </Text>
        <Text color="muted.500" mt={6} fontSize="lg" alignSelf="flex-start">
          QUANTIDADE DE CAIXAS:
        </Text>

        <Slider
          defaultValue={0}
          alignSelf="center"
          size="lg"
          mt={4}
          colorScheme="emerald"
          w="100%"
          maxW="150"
          maxValue={8}
          onChange={(v) => {
            setOnChangeValueBox(Math.floor(v));
          }}
        >
          <Slider.Track bg="muted.400">
            <Slider.FilledTrack bg="emerald.600" />
          </Slider.Track>
          <Slider.Thumb borderWidth="0" bg="transparent">
            <Icon
              as={FontAwesome5}
              name="box-open"
              color="emerald.600"
              size="2xl"
            />
          </Slider.Thumb>
        </Slider>
        <Text  textAlign="center" fontSize="2xl">
          {onChangeValueBox}
        </Text>
        <FormControl mt={4}>
            <FormControl.Label>Observações</FormControl.Label>
            <Input height={100}/>
            <FormControl.HelperText>
              Algum recipiente diferente?
            </FormControl.HelperText>
          </FormControl>
      </Box>

      <Box
        flexDirection="row"
        borderColor="muted.100"
        mt={4}
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
          onPress={() => navigation.navigate('DonationScheduling')}
        >
          PRÓXIMO
        </Button>
      </Box>
    </View>
  );
}
