import { useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { Box, Text, Icon, Button, ScrollView, IconButton } from "native-base";

import { useCommon } from "../../contexts";

export default function Home() {
  const { setDevAlert } = useCommon();
  const [firstTime, setFirstTime] = useState(true);

  return (
    <ScrollView bgColor="white">
      <Box px={6} mt={16}>
        <Box
          alignItems="center"
          flexDirection="row"
          justifyContent="space-between"
        >
          <Box>
            <Text fontSize="lg" color="emerald.700">
              Olá Frederico,
            </Text>
            <Text fontSize="2xl" color="emerald.700" lineHeight="md">
              Bem vinde!
            </Text>
          </Box>
          <IconButton
            size="lg"
            rounded={32}
            variant="solid"
            bgColor="emerald.50"
            onPress={() => setDevAlert(true)}
            _icon={{
              name: "bell",
              paddingLeft: 0.5,
              as: FontAwesome5,
              color: "emerald.600",
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
                color="emerald.600"
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
        {!firstTime ? (
          <Box py={4} rounded={8} alignItems="center">
            <Text color="emerald.600">PRÓXIMA COLETA</Text>
            <Text bold color="emerald.600" letterSpacing="sm" fontSize="2xl">
              03 de Agosto de 2022
            </Text>
            <Box
              mt={3}
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
                  bgColor="emerald.600"
                  onPress={() => setDevAlert(true)}
                  _icon={{
                    name: "child",
                    color: "white",
                    as: FontAwesome5,
                    paddingLeft: 0.5,
                  }}
                />
                <Text color="emerald.600">Coletor</Text>
              </Box>
              <Box alignItems="center">
                <IconButton
                  size="lg"
                  rounded={32}
                  variant="solid"
                  bgColor="emerald.600"
                  onPress={() => setDevAlert(true)}
                  _icon={{
                    color: "white",
                    as: FontAwesome5,
                    name: "comment-dots",
                  }}
                />
                <Text color="emerald.600">Chat</Text>
              </Box>
              <Box alignItems="center">
                <IconButton
                  size="lg"
                  rounded={32}
                  variant="solid"
                  bgColor="emerald.600"
                  onPress={() => setFirstTime(true)}
                  _icon={{
                    name: "ban",
                    color: "white",
                    as: FontAwesome5,
                  }}
                />
                <Text color="emerald.600">Cancelar</Text>
              </Box>
            </Box>
          </Box>
        ) : (
          <Text
            my={10}
            fontSize="3xl"
            lineHeight="xs"
            textAlign="center"
            color="emerald.600"
            onPress={() => setFirstTime(false)}
          >
            Agende a sua primeira coleta
          </Text>
        )}
      </Box>
      <Box
        mb={6}
        mt={4}
        py={16}
        borderWidth={2}
        alignItems="center"
        bgColor="emerald.50"
        borderColor="muted.100"
      >
        <Button
          px={12}
          size="lg"
          shadow="2"
          variant="solid"
          colorScheme="emerald"
          leftIcon={<Icon size="sm" name="recycle" as={FontAwesome5} />}
        >
          RECICLAR
        </Button>
      </Box>
      <Box
        py={4}
        mx={8}
        shadow={2}
        rounded={8}
        borderWidth={1}
        bgColor="white"
        alignItems="center"
        borderColor="emerald.600"
      >
        <Text color="emerald.600">RANKING DE MEDALHAS</Text>
        <Box
          mt={2}
          width="full"
          alignItems="center"
          flexDirection="row"
          justifyContent="space-evenly"
        >
          <Box borderWidth={2} borderColor="red.400" rounded={32} p={1}>
            <IconButton
              size="lg"
              rounded={32}
              variant="solid"
              bgColor="red.400"
              onPress={() => setDevAlert(true)}
              _icon={{
                name: "medal",
                color: "white",
                as: FontAwesome5,
              }}
            />
          </Box>
          <IconButton
            size="lg"
            rounded={32}
            variant="solid"
            bgColor="yellow.300"
            onPress={() => setDevAlert(true)}
            _icon={{
              name: "medal",
              color: "white",
              as: FontAwesome5,
            }}
          />
          <IconButton
            size="lg"
            rounded={32}
            variant="solid"
            bgColor="emerald.400"
            onPress={() => setDevAlert(true)}
            _icon={{
              name: "medal",
              color: "white",
              as: FontAwesome5,
            }}
          />
          <IconButton
            size="lg"
            rounded={32}
            variant="solid"
            bgColor="blue.400"
            onPress={() => setDevAlert(true)}
            _icon={{
              name: "medal",
              color: "white",
              as: FontAwesome5,
            }}
          />
        </Box>
        <Text mt={3} textAlign="center" color="emerald.600" letterSpacing="sm">
          COM MAIS{" "}
          <Text bold fontSize="lg">
            3
          </Text>{" "}
          COLETAS CONQUISTE UMA NOVA MEDALHA
        </Text>
      </Box>
      <Box mb={8} />
    </ScrollView>
  );
}
