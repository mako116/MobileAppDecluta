import { StyleSheet } from "react-native";

const SellerStyles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between'
    },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: '#E9E9E9',
    marginVertical: 20
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  sellerName: {
    fontFamily: 'Helvetica Neue',
    fontSize: 16,
    fontWeight: 700,
    color: '#212121',
    marginBottom: 10
  },
  memberSince: {
    fontSize: 12,
    color: '#474747',
    fontFamily: 'Helvetica Neue',
    fontWeight: 400,
  },
  profileButton: {
    backgroundColor: '#E6D6C0',
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 6,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    fontFamily: 'Proxima Nova',
    color: '#474747',
    fontSize: 13,
    fontWeight: 400,
  },
  section: {
    marginBottom: 10,
    width: "50%"
  },
  label: {
    fontFamily: 'Proxima Nova',
    fontSize: 14,
    fontWeight: 400,
    color: '#212121',
    marginBottom: 5
  },
  ratingText: {
    fontSize: 14,
    color: '#757575',
  },
  starsContainer: {
    flexDirection: 'row',
    marginTop: 3,
  },
  star: {
    fontSize: 16,
    marginRight: 2,
  },
  filledStar: {
    color: '#DEBC8E',
  },
  emptyStar: {
    color: '#E0E0E0',
  },
  statsContainer: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  statBlock: {
    marginBottom: 10,
    width: "50%"
  },
  progressBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E0E0E0',
    height: 20,
    borderRadius: 5,
    overflow: 'hidden',
    position: 'relative',
    marginTop: 4,
    justifyContent: 'center'
  },
  progressFill: {
    backgroundColor: '#DEBC8E',
    height: '100%',
    position: 'absolute',
    left: 0,
    borderRadius: 5,
  },
  progressFillGray: {
    backgroundColor: '#B0B0B0',
    height: '100%',
    position: 'absolute',
    left: 0,
    borderRadius: 5,
  },
  progressText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#212121',
  },
});

export default SellerStyles;