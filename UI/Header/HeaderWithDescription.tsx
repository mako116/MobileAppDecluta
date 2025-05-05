import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ArrowBkOutline from "@/assets/images/ArrowBkOutline";
import { router } from "expo-router";

interface HeaderWithDescProps {
  title: string;
  subTile?: string;
  headerSave?: string;
  paddingTop?:   number;
  ordersBars?: string | Boolean;
  Actions?: string | Boolean;
  Receipt?: string | Boolean;

}

const HeaderWithDesc: React.FC<HeaderWithDescProps> = ({Receipt,ordersBars, paddingTop = 10, title, subTile, headerSave,Actions }) => {
  return (
    <View style={[styles.iconRow, { paddingTop }]}>
      <View style={styles.flexRow}>
        <ArrowBkOutline />
        <View style={styles.centerContainer}>
          <Text style={styles.label}>{title}</Text>
          {subTile && <Text style={styles.subLabel}>{subTile}</Text>}
        </View>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 10 }}>
      {Actions && (
          <TouchableOpacity onPress={()=> router.push("/(routes)/Notifications")}>
          <Image source={require("../../assets/images/New folder/Group 490.png")} style={{width:17,height:17}}/>
          </TouchableOpacity>
        )}

        {Receipt && (
          <View style={{flexDirection:"row",alignItems:"center",gap:7}}>
          <Image source={require("../../assets/images/New folder/document-text.png")} style={{width:19,height:19}}/>
          <Text>Receipt</Text>
          </View>
        )}
      {ordersBars && (
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 10 }}>
          <TouchableOpacity onPress={()=> router.push("/(routes)/Notifications")}>
          <Image source={require("../../assets/images/New folder/notification-bing.png")} style={{width:17,height:17}}/>
          </TouchableOpacity>
         
          <TouchableOpacity onPress={()=>router.push("/(routes)/cart")}>
          <Image source={require("../../assets/images/New folder/Group 489.png")} style={{width:17,height:17}} />
          </TouchableOpacity>
       </View>
      )}
      </View>
      {headerSave && (
        <TouchableOpacity>
          <Text style={styles.save}>{headerSave}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontFamily: "Helvetica Neue",
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 22.4,
    color: "#212121",
  },
  flexRow: {
    gap: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  subLabel: {
    fontFamily: "Helvetica Neue",
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 19.6,
    color: "#212121",
  },
  save: {
    fontWeight: "700",
    fontFamily: "Helvetica Neue",
    color: "#212121",
  },
  iconRow: {
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 10,
    justifyContent: "space-between",
  },
  centerContainer: {
    flexDirection: "column",
    justifyContent: "center",
  },
});

export default HeaderWithDesc;
