import { Button as ButtonNativeBase, IButtonProps, Heading } from "native-base";

type Props = IButtonProps & {
  title: string;
};

export function Button({ title, variant, ...rest }: Props) {
  return (
    <ButtonNativeBase
      bg={variant === "outline" ? "transparent" : "orange.700"}
      borderWidth={variant === "outline" ? 1 : 0}
      borderColor={"orange.700"}
      h={14}
      fontSize="sm"
      rounded="sm"
      _pressed={{ bg: variant === "outline" ? "gray.500" : "orange.300" }}
      {...rest}
    >
      <Heading
        color={variant === "outline" ? "orange.700" : "white"}
        fontSize="sm"
      >
        {title}
      </Heading>
    </ButtonNativeBase>
  );
}
