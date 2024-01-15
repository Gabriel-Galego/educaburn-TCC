import { Input as NativeBaseInput, IInputProps } from "native-base";

export function Input({ ...rest }: IInputProps) {
  return (
    <NativeBaseInput
      bg="#F6F6F6"
      height={14}
      size="md"
      borderWidth={1}
      borderColor="#E8E8E8"
      fontSize="md"
      fontFamily="Roboto_400Regular"
      color="black"
      placeholderTextColor="#BDBDBD"
      {...rest}
    />
  );
}
