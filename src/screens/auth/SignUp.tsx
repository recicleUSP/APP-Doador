import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import {
  Text,
  Input,
  Button,
  Heading,
  FormControl,
  WarningOutlineIcon,
} from "native-base";

import { useAuth } from "../../contexts";
import { OnboardingBase } from "../../components/common";

export default function SignUp() {
  const { loading, signIn } = useAuth();
  const phoneRegExp =
    /^\s*(\d{2}|\d{0})[-. ]?(\d{5}|\d{4})[-. ]?(\d{4})[-. ]?\s*$/;

  const SignUpSchema = Yup.object().shape({
    phone: Yup.string()
      .matches(phoneRegExp, "Telefone inválido")
      .required("Campo obrigatório"),
    name: Yup.string().required("Campo obrigatório"),
  });

  return (
    <OnboardingBase>
      <Heading color="white">Cadastrar</Heading>
      <Text mt={2} mb={4} color="white" fontSize="lg" lineHeight="sm">
        Cadastre e contribua hoje mesmo!
      </Text>

      <Formik
        validateOnMount
        validationSchema={SignUpSchema}
        onSubmit={(values) => signIn(values)}
        initialValues={{ phone: "", name: "" }}
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
          const nameError = Boolean(touched["name"] && errors["name"]);
          const phoneError = Boolean(touched["phone"] && errors["phone"]);
          return (
            <>
              <FormControl isInvalid={phoneError}>
                <Input
                  color="white"
                  fontSize="lg"
                  borderColor="white"
                  value={values["name"]}
                  keyboardType="phone-pad"
                  onBlur={handleBlur("name")}
                  onChangeText={handleChange("name")}
                  placeholder="Digite seu nome completo"
                  placeholderTextColor="rgba(255,255,255,0.6)"
                />
                <FormControl.ErrorMessage
                  mt={1}
                  ml={4}
                  _text={{ color: "#FFF" }}
                  leftIcon={<WarningOutlineIcon size="xs" />}
                >
                  {errors["name"]}
                </FormControl.ErrorMessage>
              </FormControl>

              <FormControl mt={6} isInvalid={phoneError}>
                <Input
                  color="white"
                  fontSize="lg"
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
                isLoading={loading}
                mt={nameError ? 6 : 8}
                opacity={invalid ? 0.5 : 1}
                onPress={() => handleSubmit()}
                _text={{ color: "muted.500" }}
                _pressed={{ bg: "muted.300" }}
              >
                Cadastrar
              </Button>
            </>
          );
        }}
      </Formik>
    </OnboardingBase>
  );
}
