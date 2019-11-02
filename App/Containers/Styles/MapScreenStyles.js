import { StyleSheet, Dimensions } from 'react-native'

const windowWidth= Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

export default StyleSheet.create({
  container: {
      flex: 1
    },
  map: {
    flex: 1
  },
  optionsButton: {
    position: 'absolute',
    bottom: 35,
    right: 10,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'white',
    alignItems:'center',
    justifyContent:'center',
    borderWidth:1,
    borderColor:'rgba(0,0,0,0.2)',
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
  },
  filtersContainer: {
    width:windowWidth*0.96,
    height:windowHeight*0.5,
    bottom: 35,
    alignSelf: 'center',
    position:'absolute',
    backgroundColor: 'white',
    borderRadius: 10,
  },
  titulo: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: "bold",
    color: 'black'
  },
  closeFiltersButton: {
    alignSelf: 'flex-end',
    position: 'absolute',
    marginTop: 10,
    right: 8,
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
  }
})
