import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useDonation } from "../contexts";

import {
  Box,
  Text,
  IconButton,
  View,
  Progress,
  Icon,
  Button,
} from "native-base";
import { useEffect } from "react";

export default function Donation() {
  const navigation = useNavigation();
  const { localType, setLocalType } = useDonation();
  useEffect(()=>{
  },[])

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
            name: "chevron-left",
            as: FontAwesome5,
            color: "emerald.500",
          }}
        />
        <Progress
          bg="white"
          _filledTrack={{
            bg: "emerald.500",
          }}
          value={20}
          ml="45"
          mt="85"
        />
        <Text color="emerald.600" alignSelf="flex-end">
          Passo 1 <Text color="muted.400">de 5</Text>
        </Text>
      </Box>

      <Icon
        as={MaterialCommunityIcons}
        mt={50}
        color="muted.400"
        name="home-city"
        size={125}
        alignSelf="center"
      />
      <Text color="muted.400" mt={8} fontSize="md" alignSelf="center">
        Residêncial ou Comercial?
      </Text>

      <Text color="muted.400" mt={8} fontSize="md" alignSelf="center">
        {localType}
      </Text>

      <Box py={10} alignItems="center" borderColor="muted.100">
        <Button
          px={8}
          size="lg"
          shadow="2"
          variant="solid"
          colorScheme="emerald"
          
          onPress={() => {setLocalType("CASA"); navigation.navigate("DonationType")}}
        >
          CASA
        </Button>
        <Button
          mt={6}
          px={16}
          size="lg"
          shadow="2"
          variant="solid"
          colorScheme="emerald"
          onPress={() => {setLocalType("CONDOMÍNIO"); navigation.navigate("DonationType")}}
        >
          CONDOMÍNIO
        </Button>
        <Button
          mt={6}
          px={4}
          size="lg"
          shadow="2"
          variant="solid"
          colorScheme="emerald"
          onPress={() => {setLocalType("ORGANIZAÇÃO PUBLICA"); navigation.navigate("DonationType")}}
        >
          ORGANIZAÇÃO PUBLICA
        </Button>
      </Box>

      <Box
        flexDirection="row"
        py={6}
        borderColor="muted.100"
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
          onPress={() => navigation.navigate("DonationType")}
        >
          PRÓXIMO
        </Button>
      </Box>
    </View>
  );
}
