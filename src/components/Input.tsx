import { Input as NativeBaseInput, IInputProps } from "native-base";

export function Input({ ...rest }: IInputProps) {
  return (
    <NativeBaseInput
      bg="gray.700"
      height={14}
      size="md"
      borderWidth={0}
      fontSize="md"
      fontFamily="Roboto_400Regular"
      color="white"
      placeholderTextColor="gray.300"
      _focus={{
        borderColor: "orange.700",
        borderWidth: 1,
        bg: "gray.700",
      }}
      {...rest}
    />
  );
}
