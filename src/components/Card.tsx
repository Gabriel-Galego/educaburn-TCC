import { Text, View, useTheme, Modal } from "native-base";
import { Linking, TouchableOpacity, ScrollView,  } from "react-native";
import {  useState } from "react";


export function Card(props: {
  text: string;
  text2?: string;
  text3?: string;
  text4?: string;
  text5?: string;
  text6?: string;
  text7?: string;
  text8?: string;
  text9?: string;
  text10?: string;
  text11?: string;
  text12?: string;
  isWrapper?: boolean;
  isScrollable?: boolean;
  textPress?: string;
  centered?: boolean;
}) {
  const { colors }: any = useTheme();
  const { fonts }: any = useTheme();
  const [showModal, setShowModal] = useState(false);

  

  return (
    <View
      style={{
        backgroundColor: "white",
        width: "90%",
        marginBottom: 30,
        borderRadius: 10,
        elevation: 10,
        shadowColor: "#000",
        alignSelf: "center",
        
      }}
    >
      {!props.isScrollable && props.isWrapper && (
        <TouchableOpacity
          onPress={() => {
            if (props.isWrapper) {
              setShowModal(true);
              return;
            }
          }}
        >
          <Text
            style={{
              margin: 10,
              fontSize: 16,
              fontFamily: fonts.body,
              textAlign: props.centered ? "center" : ("left" as any),
              flexWrap: "wrap",
            }}
          >
            <Text>
              <Text
                style={{
                  color: colors.red[500],
                  fontWeight: "bold",
                  textDecorationLine: "underline",
                }}
              >
                Saiba mais!
              </Text>
              {"\n"}
              {"\n"}
              {props.text}
              {props.text2 && "\n\n" + props.text2}
              {props.text3 && "\n\n" + props.text3}
              {props.text4 && "\n\n" + props.text4}
              {props.text5 && "\n\n" + props.text5}
              {props.text6 && "\n\n" + props.text6}
              {props.text7 && "\n\n" + props.text7}
              {props.text8 && "\n\n" + props.text8}
              {props.text9 && "\n\n" + props.text9}
              {props.text10 && "\n\n" + props.text10}
              {props.text11 && "\n\n" + props.text11}
              {props.text12 && "\n\n" + props.text12}
            </Text>

            {props.text}
            {props.text2 && "\n\n" + props.text2}
            {props.text3 && "\n\n" + props.text3}
            {props.text4 && "\n\n" + props.text4}
            {props.text5 && "\n\n" + props.text5}
            {props.text6 && "\n\n" + props.text6}
            {props.text7 && "\n\n" + props.text7}
            {props.text8 && "\n\n" + props.text8}
            {props.text9 && "\n\n" + props.text9}
            {props.text10 && "\n\n" + props.text10}
            {props.text11 && "\n\n" + props.text11}
            {props.text12 && "\n\n" + props.text12}
          </Text>
        </TouchableOpacity>
      )}

      {!props.isScrollable && !props.isWrapper && !props.textPress && (
        <Text
          style={{
            margin: 10,
            fontSize: 16,
            fontFamily: fonts.body,
            textAlign: props.centered ? "center" : ("left" as any),
            flexWrap: "wrap",
          }}
        >
          {props.text}
          {props.text2 && "\n\n" + props.text2}
          {props.text3 && "\n\n" + props.text3}
          {props.text4 && "\n\n" + props.text4}
          {props.text5 && "\n\n" + props.text5}
          {props.text6 && "\n\n" + props.text6}
          {props.text7 && "\n\n" + props.text7}
          {props.text8 && "\n\n" + props.text8}
          {props.text9 && "\n\n" + props.text9}
          {props.text10 && "\n\n" + props.text10}
          {props.text11 && "\n\n" + props.text11}
          {props.text12 && "\n\n" + props.text12}
        </Text>
      )}
      {props.textPress && (
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            margin: 10,
          }}
        >
          {props.textPress && (
            <Text
              style={{
                fontSize: 16,
                fontFamily: fonts.body,
                textAlign: "center",
              }}
            >
              {props.text}
            </Text>
          )}
          {props.textPress && (
            <Text
              style={{
                color: colors.blue[500],
                fontWeight: "bold",
                textDecorationLine: "underline",
              }}
              onPress={() => {
                if (props.textPress) {
                  Linking.openURL(props.textPress);
                  return;
                }
              }}
            >
              {props.text2 && props.text2}
            </Text>
          )}
        </View>
      )}
      {props.isScrollable && (
        <ScrollView
          style={{
            maxHeight: 400,
            margin: 10,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontFamily: fonts.body,
              textAlign: props.centered ? "center" : ("left" as any),
              flexWrap: "wrap",
            }}
          >
            {props.text}
            {props.text2 && "\n\n" + props.text2}
            {props.text3 && "\n\n" + props.text3}
            {props.text4 && "\n\n" + props.text4}
            {props.text5 && "\n\n" + props.text5}
            {props.text6 && "\n\n" + props.text6}
            {props.text7 && "\n\n" + props.text7}
            {props.text8 && "\n\n" + props.text8}
            {props.text9 && "\n\n" + props.text9}
            {props.text10 && "\n\n" + props.text10}
            {props.text11 && "\n\n" + props.text11}
            {props.text12 && "\n\n" + props.text12}
          </Text>
        </ScrollView>
      )}

      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        backdropVisible={true}
        animationPreset="slide"
      >
        <Text
          style={{
            margin: 10,
            fontSize: 16,
            fontFamily: fonts.body,
            textAlign: props.centered ? "center" : ("left" as any),
            flexWrap: "wrap",
            backgroundColor: colors.GRAY_LIGHT,
            borderRadius: 10,
            padding: 10,
          }}
        >
          {props.text}
          {props.text2 && "\n\n" + props.text2}
          {props.text3 && "\n\n" + props.text3}
          {props.text4 && "\n\n" + props.text4}
          {props.text5 && "\n\n" + props.text5}
          {props.text6 && "\n\n" + props.text6}
          {props.text7 && "\n\n" + props.text7}
          {props.text8 && "\n\n" + props.text8}
          {props.text9 && "\n\n" + props.text9}
          {props.text10 && "\n\n" + props.text10}
          {props.text11 && "\n\n" + props.text11}
          {props.text12 && "\n\n" + props.text12}
        </Text>
      </Modal>
      
    </View>
  );
}
