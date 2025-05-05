import { Image, StyleSheet, Text, View } from "react-native";

const SummaryText = ({
    label,
    value,
    icon,
  }: {
    label: string;
    value: string;
    icon?: any; // Accept image source
  }) => (
    <View style={styles.summaryRow}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.valueWithIcon}>
        <Text style={styles.value}>{value}</Text>
        {icon && <Image source={icon} style={styles.summaryIcon} />}
      </View>
    </View>
  );
  
  export default SummaryText

const styles = StyleSheet.create({
    valueWithIcon: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
      },
      summaryIcon: {
        width: 16,
        height: 16,
        resizeMode: 'contain',
      },
      summaryRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 6,
      },
      label: {
        fontSize: 14,
        color: '#7E7E7E',
        fontWeight: '400',
      },
      value: {
        fontSize: 14,
        fontWeight: '500',
        color: '#212121',
      },
      
      historyLink: {
        flexDirection: 'row',
        gap: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 16,
        borderTopWidth: 1,
        borderColor: '#E9E9E9',
        paddingTop: 12,
      },
      historyText: {
        fontSize: 14,
        fontWeight: '500',
        color: '#212121',
      },
})