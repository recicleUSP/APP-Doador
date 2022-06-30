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
    <OnboardingBase title="LOGIN">
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
              <FormControl isInvalid={error} mt={10}>
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
                mt={error ? 6 : 10}
                isLoading={loading}
                colorScheme="emerald"
                opacity={invalid ? 0.5 : 1}
                onPress={() => handleSubmit()}
                _pressed={{ bg: "emerald.700" }}
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
