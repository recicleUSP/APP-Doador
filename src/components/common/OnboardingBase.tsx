import { Box, Text, Center, Image } from "native-base";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

interface OnboardingBaseParams {
  title?: string;
  children: React.ReactNode[] | React.ReactNode;
}

export const OnboardingBase: React.FC<OnboardingBaseParams> = ({
  title,
  children,
}) => {
  const navigation = useNavigation();
  const img = require("../../../assets/logo.png");
  const [canGoBack, setCanGoBack] = useState(false);

  useEffect(() => {
    if (navigation.canGoBack()) setCanGoBack(true);
    else setCanGoBack(false);
  }, [navigation.canGoBack()]);

  return (
    <Box flex={1}>
      <Box px={6} bg="emerald.500">
        <Center pt={20}>
          <Image size="md" source={img} alt="Ecodive Logo" />
          <Text
            my={4}
            color="white"
            fontSize="2xl"
            fontWeight="bold"
            textAlign="center"
          >
            {title || "ECODIVE"}
          </Text>
        </Center>
      </Box>
      <Box px={6} pt={10} flex={1}>
        <KeyboardAwareScrollView
          style={{ flex: 1 }}
          keyboardShouldPersistTaps={"always"}
          showsVerticalScrollIndicator={false}
        >
          {children}
        </KeyboardAwareScrollView>
        <Text color="muted.500" textAlign="center" mb={4}>
          Caso tenha alguma dúvida, entre em contato: contato@ecodive.com.br
        </Text>
      </Box>
    </Box>
  );
};
