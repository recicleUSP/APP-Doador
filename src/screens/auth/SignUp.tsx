import {
  Text,
  Input,
  Button,
  Heading,
  FormControl,
  WarningOutlineIcon,
  Pressable,
  Icon,
} from "native-base";
import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";

import { useAuth } from "../../contexts";
import { OnboardingBase } from "../../components/common";

export default function SignUp() {
  const { loading, signUp } = useAuth();

  const SignUpSchema = Yup.object().shape({
    name: Yup.string().required("Campo obrigatório"),
    email: Yup.string().email().required("Campo obrigatório"),
  });

  return (
    <OnboardingBase title="CADASTRO">
      <Formik
        validateOnMount
        validationSchema={SignUpSchema}
        onSubmit={(values) => signUp(values)}
        initialValues={{ name: "", email: "" }}
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
          const emailError = Boolean(touched["email"] && errors["email"]);
          return (
            <>
              <FormControl isInvalid={nameError} mt={10}>
                <Input
                  fontSize="md"
                  value={values["name"]}
                  onBlur={handleBlur("name")}
                  onChangeText={handleChange("name")}
                  placeholder="Digite seu nome completo"
                />
                <FormControl.ErrorMessage
                  mt={1}
                  ml={4}
                  _text={{ color: "#FF0000" }}
                  leftIcon={<WarningOutlineIcon size="xs" />}
                >
                  {errors["name"]}
                </FormControl.ErrorMessage>
              </FormControl>

              <FormControl mt={6} isInvalid={emailError}>
                <Input
                  fontSize="md"
                  value={values["email"]}
                  onBlur={handleBlur("email")}
                  placeholder="Digite seu email"
                  onChangeText={handleChange("email")}
                />
                <FormControl.ErrorMessage
                  mt={1}
                  ml={4}
                  _text={{ color: "#FF0000" }}
                  leftIcon={<WarningOutlineIcon size="xs" />}
                >
                  {errors["email"]}
                </FormControl.ErrorMessage>
              </FormControl>

              <Button
                size="lg"
                bg="emerald.600"
                disabled={invalid}
                isLoading={loading}
                colorScheme="emerald"
                mt={nameError ? 6 : 10}
                opacity={invalid ? 0.5 : 1}
                onPress={() => {handleSubmit()}}
                _pressed={{ bg: "emerald.700" }}
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
