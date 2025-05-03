import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ArrowBkOutline from "@/assets/images/ArrowBkOutline";

interface HeaderWithDescProps {
  title: string;
  subTile?: string;
  headerSave?: string;
  paddingTop?:   number;
}

const HeaderWithDesc: React.FC<HeaderWithDescProps> = ({ paddingTop = 10, title, subTile, headerSave }) => {
  return (
    <View style={[styles.iconRow, { paddingTop }]}>
      <View style={styles.flexRow}>
        <ArrowBkOutline />
        <View style={styles.centerContainer}>
          <Text style={styles.label}>{title}</Text>
          {subTile && <Text style={styles.subLabel}>{subTile}</Text>}
        </View>
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
