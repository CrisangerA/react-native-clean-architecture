import React from 'react';
import * as Yup from 'yup';
import { Alert, View } from 'react-native';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// Components
import { Button, Item, Margin } from '@components/core';
import { TextInput, DatePicker, Select, Checkbox } from '@components/form';
// Modules
import { UserForm } from '@modules/user/domain/model';
import { regExpAlphabetic, regExpEmail } from '@config/regExp';

const citiesDataSource: Item[] = [
  { label: 'Medellin', value: '1' },
  { label: 'Cali', value: '2' },
  { label: 'Bogota', value: '3' },
  { label: 'Cartagena', value: '4' },
  { label: 'Barranquilla', value: '5' },
];

export default function FormExample() {
  const { control, handleSubmit } = useForm<UserForm>({
    resolver: yupResolver(
      Yup.object().shape({
        name: Yup.string().required().matches(regExpAlphabetic, 'Solo letras'),
        email: Yup.string()
          .required()
          .matches(regExpEmail, 'El correo es invalido'),
        date: Yup.date().required(),
        city: Yup.object().shape({
          label: Yup.string().required(),
          value: Yup.string().required('La ciudad es requerida'),
        }),
        terms: Yup.boolean()
          .oneOf([true], 'Debe aceptar los terminos')
          .required(),
      }),
    ),
  });

  function onSubmit(form: UserForm) {
    Alert.alert('Formulario enviado', JSON.stringify(form));
  }
  return (
    <View>
      <TextInput
        name="name"
        control={control}
        label="Nombre"
        placeholder="Ingresa tu nombre"
      />
      <Margin spacing="sm" />
      <TextInput
        name="email"
        control={control}
        label="Correo"
        placeholder="Ingresa tu correo electronico"
        keyboardType="email-address"
      />
      <Margin spacing="sm" />
      <DatePicker
        name="date"
        control={control}
        label="Edad"
        placeholder="Ingresa fecha de nacimiento"
        mode="date"
      />
      <Margin spacing="sm" />
      <Select
        name="city"
        control={control}
        label="Ciudad"
        placeholder="Selecciona ciudad de nacimiento"
        options={citiesDataSource}
      />
      <Margin spacing="sm" />
      <Checkbox
        name="terms"
        control={control}
        title="Acepto terminos y condiciones"
      />
      <Margin spacing="xxl" />
      <Button title="Enviar" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}
