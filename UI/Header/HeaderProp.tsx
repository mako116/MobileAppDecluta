import { StyleSheet, Text, View } from "react-native";
import BackButton from '@/assets/images/kyc/LeftArrow';


interface HeaderPropProps {
  title: string;
  subTile?: string;
}

const HeaderProp: React.FC<HeaderPropProps> = ({ title, subTile }) => {
  return (
    <View style={styles.iconRow}>
        <BackButton />
        <View style={styles.centerContainer}>
            <Text style={styles.label}>{title}</Text>
            <Text style={styles.subLabal} >{subTile}</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#fff",
        paddingTop: "13%",
        height:"100%"
    },
    label:{
        fontFamily:"Helvetica Neue",
        fontWeight:"700",
        fontSize:16,
        lineHeight:22.4,
        color:"#212121"
    },
    subLabal:{
        fontFamily:"Helvetica Neue",
        fontWeight:"400",
        fontSize:14,
        lineHeight:19.6,
        color:"#212121"
    },
    iconRow: {
        backgroundColor: "#fff",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingTop: 60,
        paddingBottom: 10,
        gap: 10
     },
    centerContainer: {
        display: "flex",
        flexDirection: 'row',
        alignItems: "center",  
        justifyContent: "center",
        gap: 10,
    },
});

export default HeaderProp;