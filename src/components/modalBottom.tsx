// BottomSheet.tsx

import React, { useRef } from "react";
import { Modalize } from "react-native-modalize";
import { View, Text, Button, StyleSheet } from "react-native";

interface BottomSheetProps {
  data: string[];
  onClose?: () => void;
  modalizeRef: React.RefObject<Modalize>;
}

const modalBottom: React.FC<BottomSheetProps> = ({ data, onClose, modalizeRef }) => {
  const handleClose = () => {
    modalizeRef.current?.close();
    if (onClose) {
      onClose();
    }
  };

  return (
    <Modalize ref={modalizeRef} adjustToContentHeight>
      <View style={styles.content}>
        {data.map((item) => (
          <Text key={item}>{item}</Text>
        ))}
        <Button title="Fechar" onPress={handleClose} />
      </View>
    </Modalize>
  );
};

const styles = StyleSheet.create({
  content: {
    padding: 16,
    backgroundColor: "white",
  },
});

export default modalBottom;
