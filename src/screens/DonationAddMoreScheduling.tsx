import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
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
  Divider,
} from 'native-base';

import { SafeAreaView } from 'react-native-safe-area-context';

export default function DonationType() {
  const navigation = useNavigation();

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
      <Text color="muted.400" mt={16} fontSize="lg" alignSelf="center" mx={8}>
        Deseja adicionar outro dia e horário?
      </Text>
      <Button
        alignSelf="center"
        mt={12}
        p={4}
        size="lg"
        shadow="2"
        variant="solid"
        colorScheme="emerald"
        onPress={() => navigation.navigate('DonationScheduling')}
      >
        ADICIONAR
      </Button>
      <Divider mt={20}/>
      <Text color="muted.400" mt={8} fontSize="lg" alignSelf="center" mx={8}>
        Seus horários disponíveis para uma coleta são:
      </Text>

      <Box flexDirection="row" mx={8} mt={6}>
      <Text color="muted.600"  fontSize="md" alignSelf="center" textDecorationLine="underline">
       01/01- Segunda (14h até 18h)
      </Text>
      <IconButton
            size="md"
            rounded={32}
            _icon={{
              name: "trash",
              as: FontAwesome5,
              color: "muted.400",
            }}
          />
      </Box>
      
      <Box flexDirection="row" mx={8} mt={2}>
      <Text color="muted.600"  fontSize="md" alignSelf="center" textDecorationLine="underline">
       04/01- Quarta (06h até 09h)    
      </Text>
      <IconButton
            size="md"
           
            rounded={32}
            _icon={{
              name: "trash",
              as: FontAwesome5,
              color: "muted.400",
              marginRight: -12,
            }}
          />
      </Box>

      <Box
        flexDirection="row"
        borderColor="muted.100"
        mt={60}
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
          onPress={() => navigation.navigate('DonationResume')}
        >
          SALVAR
        </Button>
      </Box>
    </View>
  );
}
