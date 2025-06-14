import React from 'react';
import {
  Text,
  Button,
  TextInput,
  Margin,
  Select,
  Checkbox,
  Card,
  DatePicker,
} from '@components/core';
import { BaseLayout, Loading } from '@components/layout';

export default function ComponentsScreen() {
  return (
    <BaseLayout scrollable>
      <Margin top={24} />
      <Card title="Botones">
        <Button title="Primary Button" onPress={() => {}} />
        <Margin top={20} />
        <Button title="Secondary Button" type="secondary" onPress={() => {}} />
        <Margin top={20} />
        <Button
          title="Outline Button"
          type="outline"
          onPress={() => {}}
          icon="home"
          iconPosition="left"
        />
        <Margin top={20} />
        <Button
          title="Disabled Button"
          type="disabled"
          onPress={() => {}}
          disabled
          icon="home"
          iconPosition="right"
        />
      </Card>
      <Margin top={24} />
      <Card title="Floating Action Button">
        <Button title="Primary Button" onPress={() => {}} />
        <Margin top={20} />
        <Button title="Secondary Button" type="secondary" onPress={() => {}} />
        <Margin top={20} />
        <Button
          title="Outline Button"
          type="outline"
          onPress={() => {}}
          icon="home"
          iconPosition="left"
        />
        <Margin top={20} />
        <Button
          title="Disabled Button"
          type="disabled"
          onPress={() => {}}
          disabled
          icon="home"
          iconPosition="right"
        />
      </Card>
      <Margin top={24} />
      <Card title="Entrada de texto">
        <TextInput label="Nombre completo" placeholder="Escribe algo" />
        <Margin top={16} />
        <TextInput
          label="Texto deshabilitado"
          placeholder="Escribe algo"
          value="Valor Input con valor lorem ipsum loremp siadaois daois daios daosidoid "
          editable={false}
          iconRight="home"
        />
        <Margin top={16} />
        <TextInput
          placeholder="Segundo nombre"
          type="error"
          label="Texto con error"
          value="Este text-input tiene la variante error"
          error="Error: Este es un mensaje de error"
          iconLeft="account"
        />
        <Margin top={24} />
        <Text title="Selectores:" font="bodyMMedium" />
        <Margin top={12} />
        <Select
          pointerEvents="none"
          label="Ciudad"
          labelModal="Seleccionar ciudad"
          placeholder="Selecciona una ciudad"
          options={[
            { label: 'Lunes', value: '1' },
            { label: 'Martes', value: '2' },
            { label: 'Miercoles', value: '3' },
            { label: 'Jueves', value: '4' },
          ]}
        />
        <Margin top={12} />
        <Select
          pointerEvents="none"
          label="Ciudad"
          labelModal="Seleccionar ciudad"
          placeholder="Selecciona una ciudad"
          options={[]}
          editable={false}
        />
        <Margin top={24} />
        <Text title="Fechas:" font="bodyMMedium" />
        <Margin top={12} />
        <DatePicker
          mode="time"
          date={new Date()}
          setDate={() => {}}
          label="Hora"
          placeholder="Selecciona una hora"
        />
        <Margin top={16} />
        <DatePicker
          mode="date"
          setDate={() => {}}
          label="Fecha"
          placeholder="Selecciona una fecha"
        />
        <Margin top={16} />
        <DatePicker
          mode="datetime"
          setDate={() => {}}
          label="Fecha y hora"
          editable={false}
          placeholder="Selecciona una fecha y hora"
        />
      </Card>
      <Margin top={24} />
      <Card title="Indicators">
        <Loading />
        <Loading label="Custom text..." />
      </Card>
      <Margin top={24} />
      <Card title="Checkboxs">
        <Checkbox selected onChange={() => {}} title="Checkbox primary" />
        <Checkbox
          selected={false}
          onChange={() => {}}
          title="Checkbox primary"
        />
        <Checkbox
          selected
          onChange={() => {}}
          color="secondary"
          title="Checkbox primary"
        />
        <Checkbox
          selected={false}
          onChange={() => {}}
          color="tertiary"
          title="Checkbox primary"
        />
      </Card>
      <Margin top={100} />
    </BaseLayout>
  );
}
