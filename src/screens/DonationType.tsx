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
        <Checkbox
          value="paper"
          colorScheme="emerald"
          size="lg"
          icon={<Icon as={<FontAwesome5 name="copy" />} />}
        >
          PAPEL
        </Checkbox>
        <Checkbox
          value="aluminum"
          colorScheme="emerald"
          size="lg"
          icon={<Icon as={<FontAwesome5 name="trash-alt" />} />}
        >
          ALUMÍNIO
        </Checkbox>
        <Checkbox
          colorScheme="emerald"
          value="Plastic"
          size="lg"
          icon={<Icon as={<FontAwesome5 name="trash" />} />}
        >
          PLÁSTICO
        </Checkbox>
        <Checkbox
          value="Glass"
          colorScheme="emerald"
          size="lg"
          icon={<Icon as={<FontAwesome5 name="wine-bottle" />} />}
        >
          VIDRO
        </Checkbox>
        <Checkbox
          value="Oil"
          colorScheme="emerald"
          size="lg"
          icon={<Icon as={<FontAwesome5 name="oil-can" />} />}
        >
          ÓLEO DE COZINHA
        </Checkbox>
        <Checkbox
          value="Metal"
          colorScheme="emerald"
          size="lg"
          icon={<Icon as={<FontAwesome5 name="spray-can" />} />}
        >
          METAL
        </Checkbox>
        <Checkbox
          value="Eletronic"
          colorScheme="emerald"
          size="lg"
          icon={<Icon as={<FontAwesome5 name="mobile-alt" />} />}
        >
          ELETRONICO
        </Checkbox>
        <Checkbox
          value="Battery"
          colorScheme="emerald"
          size="lg"
          icon={<Icon as={<FontAwesome5 name="car-battery" />} />}
        >
          BATERIAS
        </Checkbox>
      </Stack>
      

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
