import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useDonation } from "../contexts";
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
  Divider,
} from 'native-base';

import { SafeAreaView } from 'react-native-safe-area-context';

export default function DonationType() {
  const navigation = useNavigation();
  const { localType, setLocalType } = useDonation();



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
          value={100}
          ml="45"
          mt="85"
        />
        <Text color="emerald.600" alignSelf="flex-end">
          Passo 5 <Text color="muted.400">de 5</Text>
        </Text>
      </Box>
      <Text
        color="muted.400"
        mt={10}
        fontSize="2xl"
        alignSelf="center"
        mx={8}
        bold
      >
        Resumo da Coleta
      </Text>

      <Box mt={8} mx={12} flexDirection="row" justifyContent="space-between" >
        <Box >
          <Text color="muted.400" fontSize="lg">
            Material:
          </Text>
          <Box >
            <Icon
              as={FontAwesome5}
              mt={4}
              color="emerald.600"
              name="wine-bottle"
              size={8}
              alignSelf="center"
            />
            <Text alignSelf="center" color="emerald.600" fontSize="md">
              {localType}
            </Text>
          </Box>
          <Box>
            <Icon
              as={FontAwesome5}
              mt={4}
              color="emerald.600"
              name="car-battery"
              size={8}
              alignSelf="center"
            />
            <Text alignSelf="center" color="emerald.600" fontSize="md">
              BATERIA
            </Text>
          </Box>
        </Box>
        <Box>
          <Text color="muted.400" fontSize="lg">
            Quantidade:
          </Text>
          <Box>
            <Icon
              paddingLeft={-0.5}
              as={FontAwesome5}
              mt={4}
              color="emerald.600"
              name="box"
              size={8}
              alignSelf="center"
            />
            <Text alignSelf="center" color="emerald.600" fontSize="md">
              3 CAIXAS
            </Text>
          </Box>
        </Box>
      </Box>

      
      <Divider mt={10}/>
      <Box mx={12} mt={2}>
        <Text color="muted.400" fontSize="lg">
          Coletas:
        </Text>
        <Text
          color="muted.600"
          fontSize="md"
          alignSelf="center"
          textDecorationLine="underline"
        >
          01/01- Segunda (14h até 18h)
        </Text>
        <Text
          color="muted.600"
          fontSize="md"
          alignSelf="center"
          textDecorationLine="underline"
        >
          04/01- Quarta (06h até 09h)
        </Text>
      </Box>

      
      <Box mt={4} mx={12}>
        <Text color="muted.400" fontSize="lg">
          Frequência:
        </Text>
        <Box>
          <Icon
            as={FontAwesome5}
            ml={15}
            color="emerald.600"
            name="calendar-check"
            size={8}
            alignSelf="center"
          />
          <Text alignSelf="center" color="muted.500" fontSize="md">
            SEMANAL
          </Text>
        </Box>
      </Box>
      <Divider mt={2}/>

      <Box
        flexDirection="row"
        borderColor="muted.100"
        mt={22}
        justifyContent="center"
      >
        <Button
          ml={3}
          px={8}
          size="lg"
          shadow="2"
          variant="solid"
          colorScheme="emerald"
          onPress={() => navigation.navigate('Root')}
        >
          FINALIZAR
        </Button>
      </Box>
    </View>
  );
}
