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
    <OnboardingBase title="CADASTRO">
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
              <FormControl isInvalid={phoneError} mt={10}>
                <Input
                  fontSize="md"
                  value={values["name"]}
                  keyboardType="phone-pad"
                  onBlur={handleBlur("name")}
                  onChangeText={handleChange("name")}
                  placeholder="Digite seu nome completo"
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
                  fontSize="md"
                  value={values["phone"]}
                  keyboardType="phone-pad"
                  onBlur={handleBlur("phone")}
                  placeholder="Digite seu telefone"
                  onChangeText={handleChange("phone")}
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
                bg="emerald.600"
                disabled={invalid}
                isLoading={loading}
                colorScheme="emerald"
                mt={nameError ? 6 : 10}
                opacity={invalid ? 0.5 : 1}
                onPress={() => handleSubmit()}
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
