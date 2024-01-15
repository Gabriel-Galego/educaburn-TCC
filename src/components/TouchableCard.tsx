import React from "react";
import { TouchableOpacity } from "react-native";
import { HStack, Heading, Text, VStack, View } from "native-base";
import { useTheme } from "native-base";
import Icon from "react-native-vector-icons/Ionicons";


export function TouchableCard(props: {
  title: string;
  subtitle?: string;
  color?: string;
  onPress?: () => void;
  disabled?: boolean;
  icon?: JSX.Element;
  iconRight?: string;
  isSobre?: boolean;
}) {
  const { colors }: any = useTheme();
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        backgroundColor: colors.white,
        width: "90%",
        borderRadius: 16,
        marginBottom: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        elevation: 5,
        height: 60,
        paddingLeft: 20,
        paddingRight: 20,
        borderWidth: 1,
        borderColor: props.isSobre ? colors.orange[400] : "#D1D1D1",
      }}
      disabled={props.disabled}
    >
      {props.icon}

      <Heading
        style={{
          fontFamily: "Roboto_700Bold",
          fontSize: 20,
          color: colors.orange[400],
          textAlign: "left",
          marginLeft: 10,
          flexWrap: "wrap",
          width: "80%",
          lineHeight: 25,

        }}
      >
        {props.title}
      </Heading>
       

    {props.iconRight === "direita" && (
        <Icon name="chevron-forward" size={24} color={colors.orange[400]} style={{
          position: "absolute",
          right: 20,
        }} />
      )
    }
    {props.iconRight != "direita" && (
        <Icon name="chevron-down" size={24} color={colors.orange[400]} style={{
          position: "absolute",
          right: 20,
        }} />
      )
    }
     
      
   
    </TouchableOpacity>
  );
}
