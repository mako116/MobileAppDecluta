import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import BackButton from '@/assets/images/kyc/LeftArrow';
import ArrowBkOutline from "@/assets/images/ArrowBkOutline";


interface HeaderWithNoArrowProps {
  title: string;
  subTile?: string;
  headerSave?:string;
} 

const HeaderWithNoArrow: React.FC<HeaderWithNoArrowProps> = ({ title, subTile ,headerSave}) => {
  return (
    <View style={styles.iconRow}>
          <View style={[styles.centerContainer,{marginHorizontal:"auto"}]}>
         <Text style={[styles.label]}>{title}</Text>       
         </View>
         <TouchableOpacity>
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
        paddingTop: 60,
        gap:20,
        paddingBottom: 10,
        justifyContent:"space-between",
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