import React from "react";
import { OnboardingBase } from "../components/common";
import { useNavigation } from "@react-navigation/core";
import { Box, Text, Button, Heading } from "native-base";

export default function Onboarding() {
  const navigation = useNavigation();

  return (
    <OnboardingBase>
      <Heading color="white">Bem-vinde!</Heading>
      <Text my={4} color="white" fontSize="lg" lineHeight="sm">
        Estamos aqui para te ajudar a tornar o mundo um lugar melhor.
      </Text>
      <Text color="white" fontSize="lg" lineHeight="sm">
        Junte-se a nossa missão!
      </Text>
      <Box mt={12} flexDirection="row" justifyContent="space-between">
        <Button
          size="lg"
          width="46%"
          bg="muted.500"
          _pressed={{ bg: "muted.600" }}
          onPress={() => navigation.navigate("SignUp")}
        >
          Cadastrar
        </Button>
        <Button
          size="lg"
          bg="white"
          width="46%"
          _text={{ color: "muted.500" }}
          _pressed={{ bg: "muted.300" }}
          onPress={() => navigation.navigate("SignIn")}
        >
          Entrar
        </Button>
      </Box>
    </OnboardingBase>
  );
}
