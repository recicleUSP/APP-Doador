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

export default function DonationScheduling() {
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
          value={80}
          ml="45"
          mt="85"
        />
        <Text color="emerald.600" alignSelf="flex-end">
          Passo 4 <Text color="muted.400">de 5</Text>
        </Text>
      </Box>
      <Text color="muted.400" mt={6} fontSize="lg" alignSelf="center" mx={8}>
        Selecione dia e horário para a coleta
      </Text>
      <Box mt={2} mx={8}>
      <Slider
          defaultValue={0}
          alignSelf="center"
          size="lg"
          mt={2}
          colorScheme="emerald"
          w="100%"
          maxW="300"
          maxValue={8}
          onChange={(v) => {
            setOnChangeValueSack(Math.floor(v));
          }}
          
        >
          <Slider.Track bg="muted.400">
            <Slider.FilledTrack bg="emerald.600" />
          </Slider.Track>
          <Slider.Thumb  borderWidth="0" bg="transparent" >
          <Icon
              as={MaterialCommunityIcons}
              name="sack"
              color="emerald.600"
              size="2xl"
            />
          </Slider.Thumb>
        </Slider>
        <Text textAlign="center" fontSize="2xl">
          {onChangeValueSack}
        </Text>
        <Stack
          direction={{
            base: 'column',
            md: 'row',
          }}
          space={3}
          alignItems="flex-start"
          mt={2}
        >
          <Checkbox
            value="paper"
            colorScheme="emerald"
            size="lg"
            icon={<Icon as={<FontAwesome5 name="calendar-check" />} />}
          >
            SEGUNDA
          </Checkbox>
          <Checkbox
            value="aluminum"
            colorScheme="emerald"
            size="lg"
            icon={<Icon as={<FontAwesome5 name="calendar-check" />} />}
          >
            TERÇA
          </Checkbox>
          <Checkbox
            colorScheme="emerald"
            value="Plastic"
            size="lg"
            icon={<Icon as={<FontAwesome5 name="calendar-check" />} />}
          >
            QUARTA
          </Checkbox>
          <Checkbox
            value="Glass"
            colorScheme="emerald"
            size="lg"
            icon={<Icon as={<FontAwesome5 name="calendar-check" />} />}
          >
            QUINTA
          </Checkbox>
          <Checkbox
            value="Oil"
            colorScheme="emerald"
            size="lg"
            icon={<Icon as={<FontAwesome5 name="calendar-check" />} />}
          >
            SEXTA
          </Checkbox>
          <Checkbox
            value="Metal"
            colorScheme="emerald"
            size="lg"
            icon={<Icon as={<FontAwesome5 name="calendar-check" />} />}
          >
            SÁBADO
          </Checkbox>
          <Checkbox
            value="Eletronic"
            colorScheme="emerald"
            size="lg"
            icon={<Icon as={<FontAwesome5 name="calendar-check" />} />}
          >
            DOMINGO
          </Checkbox>
        </Stack>

        <Stack
          direction={{
            base: 'row',
            md: 'row',
          }}
          space={12}
          alignItems="flex-start"
          mt={8}
        >
          <Checkbox
           value="weekly"
           colorScheme="emerald"
           borderColor="emerald.600"
           size="md"
           textDecorationColor="green"
           icon={<Icon as={<FontAwesome5 name="check" />} />}
          >
           <Text color="emerald.600" >Coleta Única</Text>
            
          </Checkbox>
          <Checkbox
            value="weekly"
            colorScheme="emerald"
            borderColor="emerald.600"
            size="md"
            icon={<Icon as={<FontAwesome5 name="check" />} />}
          >
            <Text color="emerald.600" >Semanal</Text>
            
          </Checkbox>
          
        </Stack>

        <Stack
          direction={{
            base: 'row',
            md: 'row',
          }}
          space={16}
          alignItems="flex-start"
          mt={4}
        >
          <Checkbox
           value="weekly"
           colorScheme="emerald"
           borderColor="emerald.600"
           size="md"
           textDecorationColor="green"
           icon={<Icon as={<FontAwesome5 name="check" />} />}
          >
           <Text color="emerald.600" >Quinzenal</Text>
            
          </Checkbox>
          <Checkbox
            value="weekly"
            colorScheme="emerald"
            borderColor="emerald.600"
            size="md"
            icon={<Icon as={<FontAwesome5 name="check" />} />}
          >
            <Text color="emerald.600" >Mensal</Text>
            
          </Checkbox>
          
        </Stack>

        
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
          px={10}
          size="lg"
          shadow="2"
          variant="solid"
          colorScheme="emerald"
          onPress={() => navigation.navigate('DonationScheduling')}
        >
          SALVAR
        </Button>
      </Box>
    </View>
  );
}
