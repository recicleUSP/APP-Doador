import { AntDesign } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Box, Center, Image, IconButton } from "native-base";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

interface OnboardingBaseParams {
  children: React.ReactNode[];
}

export const OnboardingBase: React.FC<OnboardingBaseParams> = ({
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
      <Center pt={24} pb={20}>
        <Image size="2xl" source={img} alt="Recycles Logo" />
      </Center>
      <Box px={6} pt={10} flex={1} bg="primary.500" borderTopRadius={32}>
        <KeyboardAwareScrollView
          style={{ flex: 1 }}
          keyboardShouldPersistTaps={"always"}
          showsVerticalScrollIndicator={false}
        >
          {children}
        </KeyboardAwareScrollView>
      </Box>
    </Box>
  );
};
