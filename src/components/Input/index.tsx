import { Text, TextInput, TextInputProps, View } from 'react-native';
import { Controller, UseControllerProps } from 'react-hook-form';
import { Feather } from '@expo/vector-icons';
import clsx from "clsx";

import { styles } from './styles';
import { forwardRef } from 'react';

type InputProps = {
  inputProps: TextInputProps;
  formProps: UseControllerProps;
  error?: string;
  icon: keyof typeof Feather.glyphMap;
}

const Input = forwardRef<TextInput, InputProps>(({ formProps, inputProps, error = '', icon }, ref) => {
  return (
    <Controller {...formProps} render={({ field }) => (
      <View style={styles.container}>
        <View style={[styles.group, error ? styles.isError : {}]}>
          <View style={styles.icon}>
            <Feather
              name={icon}
              size={24}
              color={clsx({
                ["#DC1637"]: error.length > 0,
                ["#8257e5"]: (error.length === 0 && field.value),
                ["#999"]: (!field.value && error.length === 0),
              })}
            />
          </View>

          <TextInput
            ref={ref}
            style={styles.control}
            value={field.value}
            onChangeText={field.onChange}
            {...inputProps}
          />
        </View>

        {
          error.length > 0 &&
          <Text style={styles.errorText}>
            {error}
          </Text>
        }
      </View>
    )}
    />
  )
});

export { Input };