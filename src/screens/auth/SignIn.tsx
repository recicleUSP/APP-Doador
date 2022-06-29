import {
  Text,
  Input,
  Button,
  Heading,
  FormControl,
  WarningOutlineIcon,
} from "native-base";
import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";

import { useAuth } from "../../contexts";
import { OnboardingBase } from "../../components/common";

export default function SignIn() {
  const { loading, signIn } = useAuth();
  const phoneRegExp =
    /^\s*(\d{2}|\d{0})[-. ]?(\d{5}|\d{4})[-. ]?(\d{4})[-. ]?\s*$/;

  const SigninSchema = Yup.object().shape({
    phone: Yup.string()
      .matches(phoneRegExp, "Telefone inválido")
      .required("Campo obrigatório"),
  });

  return (
    <OnboardingBase>
      <Heading color="white">Entrar</Heading>
      <Text my={4} color="white" fontSize="lg" lineHeight="sm">
        Acesse sua conta usando seu telefone.
      </Text>

      <Formik
        validateOnMount
        initialValues={{ phone: "" }}
        validationSchema={SigninSchema}
        onSubmit={(values) => signIn(values)}
      >
        {({
          values,
          errors,
          isValid,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => {
          const invalid = loading || !isValid;
          const error = Boolean(touched["phone"] && errors["phone"]);
          return (
            <>
              <FormControl isInvalid={error}>
                <Input
                  color="white"
                  fontSize="xl"
                  borderColor="white"
                  value={values["phone"]}
                  keyboardType="phone-pad"
                  onBlur={handleBlur("phone")}
                  placeholder="Digite seu telefone"
                  onChangeText={handleChange("phone")}
                  placeholderTextColor="rgba(255,255,255,0.6)"
                />
                <FormControl.ErrorMessage
                  mt={1}
                  ml={4}
                  _text={{ color: "#FFF" }}
                  leftIcon={<WarningOutlineIcon size="xs" />}
                >
                  {errors["phone"]}
                </FormControl.ErrorMessage>
              </FormControl>

              <Button
                size="lg"
                bg="white"
                disabled={invalid}
                colorScheme="white"
                mt={error ? 8 : 12}
                isLoading={loading}
                opacity={invalid ? 0.5 : 1}
                onPress={() => handleSubmit()}
                _text={{ color: "muted.500" }}
                _pressed={{ bg: "muted.300" }}
              >
                Entrar
              </Button>
            </>
          );
        }}
      </Formik>
    </OnboardingBase>
  );
}
