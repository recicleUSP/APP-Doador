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
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { useNavigation } from "@react-navigation/core";

import { useAuth } from "../../contexts";
import { OnboardingBase } from "../../components/common";

export default function SignUp() {
  const { loading, signUp } = useAuth();
  const navigation = useNavigation();

  const phoneRegExp =
    /^\s*(\d{2}|\d{0})[-. ]?(\d{5}|\d{4})[-. ]?(\d{4})[-. ]?\s*$/;

  const SignUpSchema = Yup.object().shape({
    phone: Yup.string()
      .matches(phoneRegExp, "Telefone inválido")
      .required("Campo obrigatório"),
    name: Yup.string().required("Campo obrigatório"),
    email: Yup.string().email().required("Campo obrigatório"),
    password: Yup.string()
    .required("Campo obrigatório")
    .min(6, "Senha é muito curta. Mínimo de 6 caracteres"),
  });

  const [show, setShow] = React.useState(false);

  return (
    <OnboardingBase title="CADASTRO">
      <Formik
        validateOnMount
        validationSchema={SignUpSchema}
        onSubmit={(values) => signUp(values)}
        initialValues={{ phone: "", name: "", email: "", password: ""}}
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
          const emailError = Boolean(touched["email"] && errors["email"]);
          const passwordError = Boolean(touched["password"] && errors["password"]);
          return (
            <>
              <FormControl isInvalid={phoneError} mt={10}>
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
                  _text={{ color: "#FF0000" }}
                  leftIcon={<WarningOutlineIcon size="xs" />}
                >
                  {errors["phone"]}
                </FormControl.ErrorMessage>
              </FormControl>

              <FormControl mt={6} isInvalid={passwordError}>
                <Input
                  fontSize="md"
                  type={show ? "text" : "password"} 
                  InputRightElement={<Pressable onPress={() => setShow(!show)}>
                       <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={8} mr="2" color="muted.400" />
                  </Pressable>}
                  value={values["password"]}
                  onBlur={handleBlur("password")}
                  placeholder="Digite sua senha"
                  onChangeText={handleChange("password")}
                />

                <FormControl.ErrorMessage
                  mt={1}
                  ml={4}
                  _text={{ color: "#FF0000" }}
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
                onPress={() => {handleSubmit(); navigation.navigate("Onboarding")}}
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
