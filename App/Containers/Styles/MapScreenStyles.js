import { StyleSheet, Dimensions } from 'react-native'

const windowWidth= Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

export default StyleSheet.create({
  container: {
      flex: 1
    },
  map: {
    flex: 9
  },
  buttonGroup: {
    flex: 1,
  },
  overlay: {
    position: 'absolute',
    bottom:0
  },
  card: {
    width:windowWidth*0.96,
    height:windowHeight*0.3,
    position:'absolute',
    bottom: 25,
    backgroundColor: 'white',
    alignSelf: 'center',
    borderColor: 'white',
    borderWidth: 3,
    borderRadius: 0.5,
  }
})
