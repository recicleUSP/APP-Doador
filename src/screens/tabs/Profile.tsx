import {
  Box,
  Text,
  Icon,
  Button,
  Avatar,
  Divider,
  ScrollView,
} from "native-base";
import { StyleSheet } from "react-native";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";

import { useAuth } from "../../contexts";

export default function Profile() {
  const { signOut } = useAuth();
  return (
    <ScrollView>
      <Box pt={16} height="156" alignItems="center" bgColor="primary.100">
        <Text fontSize="lg" color="muted.600">
          MEU PERFIL
        </Text>
      </Box>
      <Avatar
        mt={-12}
        size="2xl"
        bg="muted.200"
        alignSelf="center"
        source={{
          uri: "https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80",
        }}
      >
        R+
      </Avatar>
      <Box mt={2} flexDir="row" alignItems="center" justifyContent="center">
        <Text color="muted.600" fontSize="md">
          4.79{" "}
        </Text>
        {[1, 2, 3, 4, 5].map((item) => (
          <Icon
            size="md"
            key={item}
            name="star"
            as={FontAwesome}
            color="primary.500"
          />
        ))}
      </Box>
      <Box mx={8} my={8}>
        <Divider />
      </Box>
      <Box px={6}>
        <Text bold fontSize="md" color="muted.600">
          Nome:
        </Text>
        <Text fontSize="lg" color="muted.600">
          Frederico Xavier Capanema
        </Text>
        <Text mt={4} bold fontSize="md" color="muted.600">
          Telefone:
        </Text>
        <Text fontSize="lg" color="muted.600">
          (37)9 9900-0011
        </Text>
        <Text mt={4} bold fontSize="md" color="muted.600">
          Total de Pedidos:
        </Text>
        <Text fontSize="lg" color="muted.600">
          18 Coletas
        </Text>
      </Box>
      <Box mx={8} mt={8}>
        <Divider />
      </Box>
      <Text mt={4} color="muted.400" textAlign="center">
        Caso tenha alguma dúvida, entre em contato: cidade@reciclamais.org
      </Text>
      <Button
        mx={6}
        mt={2}
        size="lg"
        opacity={0.7}
        variant="ghost"
        alignSelf="flex-end"
        colorScheme="danger"
        onPress={() => signOut()}
        leftIcon={<Icon size="sm" name="sign-out-alt" as={FontAwesome5} />}
      >
        SAIR
      </Button>
    </ScrollView>
  );
}
