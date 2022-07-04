import React, { useRef } from "react";
import { Text, Button, AlertDialog } from "native-base";

import { useCommon } from "../../contexts";

export const DevAlert: React.FC = () => {
  const cancelRef = useRef(null);
  const { devAlert, setDevAlert } = useCommon();

  return (
    <AlertDialog
      isOpen={devAlert}
      animationPreset="slide"
      _backdrop={{ opacity: 0.7 }}
      leastDestructiveRef={cancelRef}
    >
      <AlertDialog.Content>
        <AlertDialog.Header py={3}>
          <Text fontSize="md" bold>
            Estamos evoluindo!
          </Text>
        </AlertDialog.Header>
        <AlertDialog.Body pt={2}>
          Essa funcionalidade ainda está sendo implementada, fique atento(a) as
          atualizações!
          <Button
            mt={4}
            colorScheme="emerald"
            onPress={() => setDevAlert(false)}
          >
            Entendi
          </Button>
        </AlertDialog.Body>
      </AlertDialog.Content>
    </AlertDialog>
  );
};
