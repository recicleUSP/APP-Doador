import { StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Box, Text, Icon, Button, ScrollView, IconButton } from "native-base";

import { useCommon } from "../../contexts";

export default function Home() {
  const { setDevAlert } = useCommon();

  return (
    <ScrollView>
      <Box px={6} mt={16}>
        <Box
          alignItems="center"
          flexDirection="row"
          justifyContent="space-between"
        >
          <Box>
            <Text fontSize="lg" color="muted.700">
              Olá Frederico,
            </Text>
            <Text fontSize="2xl" color="muted.700" lineHeight="md">
              Bem vinde de volta!
            </Text>
          </Box>
          <IconButton
            size="lg"
            rounded={32}
            variant="solid"
            bgColor="primary.100"
            onPress={() => setDevAlert(true)}
            _icon={{
              name: "bell",
              paddingLeft: 0.5,
              as: FontAwesome5,
              color: "primary.500",
            }}
          />
        </Box>
        <Box mt={2} alignItems="flex-start">
          <Button
            px={2}
            ml={-2}
            variant="ghost"
            colorScheme="muted"
            leftIcon={
              <Icon
                size="sm"
                as={FontAwesome5}
                color="primary.600"
                name="map-marker-alt"
              />
            }
            rightIcon={
              <Icon
                ml={1}
                as={FontAwesome5}
                color="muted.400"
                name="angle-down"
              />
            }
          >
            Rua Paraíba 1801, Centro
          </Button>
        </Box>
        <Box
          mt={4}
          py={4}
          rounded={8}
          alignItems="center"
          bgColor="primary.500"
        >
          <Text color="white">Recicla Coins</Text>
          <Text bold color="white" letterSpacing="sm" fontSize="2xl">
            R₵ 129,875
          </Text>
          <Box
            mt={6}
            width="full"
            alignItems="center"
            flexDirection="row"
            justifyContent="space-evenly"
          >
            <Box alignItems="center">
              <IconButton
                size="lg"
                rounded={32}
                variant="solid"
                bgColor="primary.100"
                onPress={() => setDevAlert(true)}
                _icon={{
                  name: "bars",
                  paddingLeft: 0.5,
                  as: FontAwesome5,
                  color: "primary.500",
                }}
              />
              <Text color="white">Transações</Text>
            </Box>
            <Box alignItems="center">
              <IconButton
                size="lg"
                rounded={32}
                variant="solid"
                bgColor="primary.100"
                onPress={() => setDevAlert(true)}
                _icon={{
                  name: "exchange-alt",
                  as: FontAwesome5,
                  color: "primary.500",
                }}
              />
              <Text color="white">Trocar</Text>
            </Box>
            <Box alignItems="center">
              <IconButton
                size="lg"
                rounded={32}
                variant="solid"
                bgColor="primary.100"
                onPress={() => setDevAlert(true)}
                _icon={{
                  name: "share-alt",
                  as: FontAwesome5,
                  color: "primary.500",
                }}
              />
              <Text color="white">Compartilhar</Text>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        mt={10}
        mb={6}
        py={16}
        borderWidth={1}
        alignItems="center"
        bgColor="primary.100"
        borderColor="muted.200"
      >
        <Button
          size="lg"
          width="xs"
          shadow="2"
          variant="solid"
          colorScheme="primary"
          leftIcon={<Icon size="sm" name="recycle" as={FontAwesome5} />}
        >
          RECICLAR
        </Button>
      </Box>
      <Box px={6}>
        <Text fontSize="lg" color="muted.700">
          Quem apoia a iniciativa?
        </Text>
        <ScrollView
          mt={4}
          horizontal
          overflow="visible"
          overScrollMode="never"
          showsHorizontalScrollIndicator={false}
        >
          <Box
            width="250"
            rounded={8}
            height="100"
            alignItems="center"
            bgColor="muted.500"
          />
          <Box
            ml={6}
            width="250"
            rounded={8}
            height="100"
            alignItems="center"
            bgColor="muted.700"
          />
          <Box
            ml={6}
            width="250"
            rounded={8}
            height="100"
            alignItems="center"
            bgColor="muted.300"
          />
        </ScrollView>
      </Box>
      <Box mb={8} />
    </ScrollView>
  );
}
