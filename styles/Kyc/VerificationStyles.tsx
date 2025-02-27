import { StyleSheet } from "react-native";

const VerificationStyle = StyleSheet.create({
    row: {
        display: "flex",
        flexDirection: 'row',
        alignItems: "flex-start",
        justifyContent: "flex-start",
        paddingBottom: 10,
        gap: 5,
    },
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    TextHeader: {
        fontWeight: "700",
        fontSize: 16,
        lineHeight: 22.4,
        color: "#212121",
        paddingBottom: 20
    },
    SubTextHeader: {
        fontWeight: "400",
        fontSize: 16,
        lineHeight: 19.6,
        color: "#212121",
    },
    InfoText: {
        fontWeight: "300",
        fontSize: 14,
        lineHeight: 19.6,
        color: "#212121",
    }
});

export default VerificationStyle;