import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import {
  Box,
  Text,
  IconButton,
  View,
  Avatar,
  VStack,
  Heading,
  FlatList,
  HStack,
  Spacer,
} from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Notification() {
  const navigation = useNavigation();

  const data = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      recentText:
        'Parabéns! Você ganhou 397 ReciCoins por concluir uma coleta!',
      avatarUrl:
        'https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      recentText: 'Roberto Almeida marcou uma coleta como concluída',
      avatarUrl:
        'https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      recentText:
        'O Banco Sicoob acaba de te dar uma oportunidade perfeita. Clique e confira!!',
      avatarUrl:
        'https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80',
    },
    {
      id: '68694a0f-3da1-431f-bd56-142371e29d72',
      recentText:
        'Roberto Almeida aceitou sua coleta de 2x Sacos (10L) de Alumínio',
      avatarUrl:
        'https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80',
    },
  ];

  return (
    <View>
      <Box
        pb={4}
        height="120"
        bgColor="emerald.100"
        justifyContent="flex-end"
        alignItems="center"
        px={8}
      >
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
            name: 'chevron-left',
            as: FontAwesome5,
            color: 'emerald.500',
          }}
        />
        <Text fontSize="xl" color="muted.600">
          NOTIFICAÇÕES
        </Text>
      </Box>

      <SafeAreaView>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <Box
              borderBottomWidth="1"
              _dark={{
                borderColor: 'gray.600',
              }}
              borderColor="coolGray.200"
              pl="8"
              pr="8"
              py="2"
              flexDirection="row"
              justifyContent="space-between"
              flex={1}
            >
              <Box flexDirection="row">
                <Avatar
                  size="38px"
                  source={{
                    uri: item.avatarUrl,
                  }}
                />

                <Text
                  color="coolGray.600"
                  ml={2}
                  _dark={{
                    color: 'warmGray.200',
                  }}
                >
                  {item.recentText}
                </Text>
              </Box>
            </Box>
          )}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </View>
  );
}
