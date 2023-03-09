import React from "react";
import { useNavigation } from "@react-navigation/core";
import { Box, Text, Button, Heading } from "native-base";

import { OnboardingBase } from "../components/common";

export default function Onboarding() {
  const navigation = useNavigation();

  return (
    <OnboardingBase>
      <Heading>Bem-vinde!</Heading>
      <Text my={4} fontSize="lg" lineHeight="sm">
        Estamos aqui para te ajudar a tornar o mundo um lugar melhor.
      </Text>
      <Text fontSize="lg" lineHeight="sm">
        Junte-se a nossa missão!
      </Text>
      <Box mt={12} flexDirection="row" justifyContent="space-between">
        <Button
          size="lg"
          width="46%"
          bg="emerald.600"
          _pressed={{ bg: "emerald.700" }}
          onPress={() => navigation.navigate("SignIn")}
        >
          Entrar
        </Button>
      </Box>
    </OnboardingBase>
  );
}
