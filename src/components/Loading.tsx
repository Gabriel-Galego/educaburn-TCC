import { Center, Spinner } from "native-base";

export function Loading() {
  return (
    <Center flex={1} alignItems="center" bg="gray.700">
      <Spinner color="orange.700" />
    </Center>
  );
}
