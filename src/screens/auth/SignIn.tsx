import {
  Text,
  Input,
  Button,
  Heading,
  FormControl,
  WarningOutlineIcon,
} from "native-base";
import React, {useState} from "react";
import * as Yup from "yup";
import { Formik } from "formik";

import { useAuth } from "../../contexts";
import { OnboardingBase } from "../../components/common";

export default function SignIn() {
  const { loading, signIn, confirmSMS } = useAuth();
  const [showSMS, setShowSMS] = useState(false);

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
        initialValues={{ phone: "", sms: "" }}
        validationSchema={SigninSchema}
        onSubmit={(values) => confirmSMS(values["sms"])}
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
          const errorPhone = Boolean(touched["phone"] && errors["phone"]);
          const errorSMS = Boolean(touched["sms"] && errors["sms"]);
          return (
            <>
              <FormControl isInvalid={errorPhone} mt={10}>
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
                mt={errorPhone ? 6 : 10}
                isLoading={loading}
                colorScheme="emerald"
                opacity={invalid ? 0.5 : 1}
                onPress={() => {signIn(values); setShowSMS(true)}}
                _pressed={{ bg: "emerald.700" }}
              >
                Enviar SMS
              </Button>
              
              {showSMS &&
                <>
                  <FormControl isInvalid={errorSMS} mt={10}>
                    <Input
                      fontSize="md"
                      value={values["sms"]}
                      keyboardType="phone-pad"
                      onBlur={handleBlur("sms")}
                      placeholder="Digite o código do SMS"
                      onChangeText={handleChange("sms")}
                    />
                    <FormControl.ErrorMessage
                      mt={1}
                      ml={4}
                      _text={{ color: "#FFF" }}
                      leftIcon={<WarningOutlineIcon size="xs" />}
                    >
                      {errors["sms"]}
                    </FormControl.ErrorMessage>
                  </FormControl>

                  <Button
                    size="lg"
                    bg="emerald.600"
                    disabled={invalid}
                    mt={errorSMS ? 6 : 10}
                    isLoading={loading}
                    colorScheme="emerald"
                    opacity={invalid ? 0.5 : 1}
                    onPress={() => handleSubmit()}
                    _pressed={{ bg: "emerald.700" }}
                  >
                    Entrar
                  </Button>
                </>
              }
            </>
          );
        }}
      </Formik>
    </OnboardingBase>
  );
}
