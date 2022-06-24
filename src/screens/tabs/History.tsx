import { StyleSheet } from "react-native";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";

import { Box, Text, Icon, Button, ScrollView } from "native-base";

export default function History() {
  return (
    <ScrollView>
      <Box pt={16} height="156" alignItems="center" bgColor="primary.100">
        <Text fontSize="lg" color="muted.600">
          COLETAS
        </Text>
      </Box>
      <Box p={6} mx={6} mt={-12} shadow="2" rounded={8} bgColor="white">
        <Text color="muted.600">
          <Text fontSize="lg" color="muted.300">
            ●{" "}
          </Text>
          Nenhum pedido para acompanhar!
        </Text>
        <Button
          mt={4}
          size="lg"
          shadow="2"
          variant="solid"
          colorScheme="primary"
          leftIcon={<Icon size="sm" name="recycle" as={FontAwesome5} />}
        >
          CRIAR COLETA
        </Button>
      </Box>
      <Box my={8} px={6}>
        <Text bold fontSize="lg" color="muted.600">
          Resumo Trimestral
        </Text>
        <Icon
          mt={6}
          size="lg"
          name="inbox"
          as={FontAwesome}
          color="muted.400"
          alignSelf="center"
        />
        <Text textAlign="center" color="muted.400">
          Nenhum resumo gerado
        </Text>
      </Box>
      <Box mb={8} px={6}>
        <Text bold fontSize="lg" color="muted.600">
          Histórico
        </Text>
        <Icon
          mt={6}
          size="lg"
          name="history"
          as={FontAwesome}
          color="muted.400"
          alignSelf="center"
        />
        <Text textAlign="center" color="muted.400">
          Nenhum histórico
        </Text>
      </Box>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
