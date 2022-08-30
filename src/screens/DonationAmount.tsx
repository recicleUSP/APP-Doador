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
  Divider,
  Radio,
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
      <Box mt={4} mx={8}>
        <Text color="muted.500" fontSize="md" alignSelf="flex-start" bold>
          QUANTIDADE DE SACOS:
        </Text>

        <Slider
          defaultValue={0}
          alignSelf="center"
          size="md"
          mt={4}
          colorScheme="emerald"
          w="100%"
          maxW="250"
          maxValue={10}
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
              size="lg"
            />
          </Slider.Thumb>
        </Slider>
        <Text textAlign="center" fontSize="lg">
          {onChangeValueSack}
        </Text>
        <Text
          color="muted.500"
          mt={4}
          fontSize="md"
          alignSelf="flex-start"
          bold
        >
          QUANTIDADE DE CAIXAS:
        </Text>

        <Slider
          defaultValue={0}
          alignSelf="center"
          size="md"
          mt={4}
          colorScheme="emerald"
          w="100%"
          maxW="250"
          maxValue={10}
          onChange={(v) => {
            setOnChangeValueBox(Math.floor(v));
          }}
        >
          <Slider.Track bg="muted.400">
            <Slider.FilledTrack bg="emerald.600" />
          </Slider.Track>
          <Slider.Thumb borderWidth="0" bg="transparent">
            <Icon
              paddingLeft={-0.5}
              as={FontAwesome5}
              name="box"
              color="emerald.600"
              size="lg"
            />
          </Slider.Thumb>
        </Slider>
        <Text textAlign="center" fontSize="lg">
          {onChangeValueBox}
        </Text>

        <Text color="muted.500" mt={4} fontSize="md" alignSelf="center" bold>
          PESO ESTIMADO:
        </Text>

        <Radio.Group
          defaultValue="0"
          size="lg"
          name="Options"
          colorScheme="green"
          mt={2}
          justifyContent="space-around"
          flexDirection="row"
        >
          <Radio
            _text={{
              color: 'emerald.600',
            }}
            value="1"
            icon={<Icon as={<MaterialCommunityIcons name="check" />} />}
            my={1}
          >
            {' '}
          </Radio>

          <Radio
            _text={{
              color: 'emerald.600',
            }}
            value="2"
            icon={<Icon as={<MaterialCommunityIcons name="check" />} />}
            my={1}
          >
            {' '}
          </Radio>
          <Radio
            _text={{
              color: 'emerald.600',
            }}
            value="3"
            icon={<Icon as={<MaterialCommunityIcons name="check" />} />}
            my={1}
          >
            {' '}
          </Radio>
        </Radio.Group>
        <Box justifyContent="space-around" flexDirection="row">
          <Text color="emerald.600">1kg a 4kg</Text>
          <Text color="emerald.600">5kg a 9kg</Text>
          <Text color="emerald.600">10kg a 15kg</Text>
        </Box>

        <FormControl mt={4}>
          <FormControl.Label>Observações:</FormControl.Label>
          <Input height={60} />
        </FormControl>
      </Box>

      <Box
        flexDirection="row"
        borderColor="muted.100"
        mt={6}
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
