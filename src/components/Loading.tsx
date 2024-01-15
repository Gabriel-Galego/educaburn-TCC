import { Center, Spinner } from "native-base";

export function Loading() {
  return (
    <Center flex={1} alignItems="center" bg="white">
      <Spinner color="orange.400" size={36} />
    </Center>
  );
}
