import { useState } from "react";
import { Box, Button, Text, View } from "native-base";

export default function Impact() {
  const [currentPage, setCurrentPage] = useState(0);
  const pageTexts = [
    "CERTIFICAR-SE DE QUE A EMBALAGEM ESTÁ COMPLETAMENTE VAZIA",
    "LEMBRE-SE DE PASSAR UMA ÁGUA NAS EMBALAGENS PARA MELHOR HIGIENE",
    "POR FIM, NÃO SE ESQUEÇA DE SEPARAR POR TIPOS DE MATERIAIS RECICLÁVEIS",
    "AGRADECEMOS SUA AJUDA! AGORA É SÓ AGUARDAR O SEU COLETOR ;)",
  ];

  return (
    <View flex={1} px={8} justifyContent="center">
      <Text bold color="emerald.700" fontSize="lg">
        Olá Frederico,
      </Text>
      <Text mt={2} color="emerald.700" lineHeight="sm" fontSize="2xl">
        Alguns cuidados importantes que você deve tomar antes da coleta são:
      </Text>
      <Box
        mt={8}
        width={32}
        height={32}
        rounded={64}
        borderWidth={4}
        alignSelf="center"
        alignItems="center"
        justifyContent="center"
        borderColor="emerald.700"
      >
        <Text color="emerald.700" fontSize="6xl">
          {currentPage + 1}
        </Text>
      </Box>
      <Text
        mt={8}
        fontSize="2xl"
        lineHeight="sm"
        textAlign="center"
        color="emerald.700"
      >
        {pageTexts[currentPage]}
      </Text>
      <Box
        mt={8}
        width="full"
        alignItems="center"
        flexDirection="row"
        justifyContent="space-evenly"
      >
        <Button
          height={4}
          width="24%"
          rounded={0}
          borderWidth={2}
          borderColor="red.400"
          onPress={() => setCurrentPage(0)}
          bgColor={currentPage >= 0 ? "red.400" : "transparent"}
        />
        <Button
          height={4}
          width="24%"
          rounded={0}
          borderWidth={2}
          borderColor="yellow.400"
          onPress={() => setCurrentPage(1)}
          bgColor={currentPage >= 1 ? "yellow.400" : "transparent"}
        />
        <Button
          height={4}
          width="24%"
          rounded={0}
          borderWidth={2}
          borderColor="emerald.400"
          onPress={() => setCurrentPage(2)}
          bgColor={currentPage >= 2 ? "emerald.400" : "transparent"}
        />
        <Button
          height={4}
          width="24%"
          rounded={0}
          borderWidth={2}
          borderColor="blue.400"
          onPress={() => setCurrentPage(3)}
          bgColor={currentPage >= 3 ? "blue.400" : "transparent"}
        />
      </Box>
    </View>
  );
}
