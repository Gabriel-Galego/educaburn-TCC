import { Button as ButtonNativeBase, IButtonProps, Heading } from "native-base";

type Props = IButtonProps & {
  title: string;
};

export function Button({ title, variant, ...rest }: Props) {
  return (
    <ButtonNativeBase
      bg={"black"}
      borderWidth={1}
      borderColor="#000000"
      h={14}
      fontSize={16}
      rounded={100}
      _pressed={{ bg: "gray.500" }}
      {...rest}
    >
      <Heading color="white" fontSize={16}>
        {title}
      </Heading>
    </ButtonNativeBase>
  );
}
