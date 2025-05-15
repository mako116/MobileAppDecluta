import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import BackButton from '@/assets/images/kyc/LeftArrow';
import ArrowBkOutline from "@/assets/images/ArrowBkOutline";
import { router } from "expo-router";


interface HeaderWithNoArrowProps {
  title: string;
  subTile?: string;
  headerSave?:string;
  paddingTop?:number;
} 

const HeaderWithNoArrow: React.FC<HeaderWithNoArrowProps> = ({ title, paddingTop,headerSave}) => {
  return (
    <View style={[styles.iconRow, { paddingTop }]}>
      <View style={[styles.centerContainer]}>
        <Text style={[styles.label]}>{title}</Text>       
      </View>
      <TouchableOpacity
        onPress={() => {
          router.push("/(tabs)/home");
        }}
      >
        <Text style={styles.save} > {headerSave}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
   
    label:{
        fontFamily:"Helvetica Neue",
        fontWeight:"700",
        fontSize:16,
        lineHeight:22.4,
        color:"#212121"
    },
    flexRow:{
        gap:20,
        flexDirection:"row"
    },
    subLabal:{
        fontFamily:"Helvetica Neue",
        fontWeight:"400",
        fontSize:14,
        lineHeight:19.6,
        color:"#212121"
    },
    save:{
       fontWeight:700,
       fontFamily:"Helvetica Neue",
     },
    iconRow: {
        backgroundColor: "#fff",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingTop: 10,
        gap:80,
        paddingBottom: 10,
        justifyContent:"flex-end",
      },
    centerContainer: {
        display: "flex",
        flexDirection: 'row',
        alignItems: "center",  
        justifyContent: "center",
        gap: 2,
    },
});

export default HeaderWithNoArrow;