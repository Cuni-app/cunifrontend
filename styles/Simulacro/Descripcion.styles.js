import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
        justifyContent: 'center',
        alignItems: 'center',
      },
    container: {
        flex: 1,
        backgroundColor: '#806FAE',
        alignItems: 'center',
        justifyContent: 'center',
      },
    popup_container: {
        alignSelf: 'center',
        flex: 0.55,
        width: '325',        
        overflow: 'scroll',
        borderRadius: 15,
        backgroundColor: '#F0E9C0',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
      },
    desc_container: {
        fontFamily: 'Poppins_500Medium',
        flex: 0.75,
        width: 325,
        overflow: 'scroll',
        borderRadius: 15,
        backgroundColor: '#F0E9C0',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
      },
    popup_title: {
        color: '#6C5C93',
        fontFamily: 'Poppins_700Bold',
    },
    bold_text: {
        color: '#352A54',
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 16
    },
    text: {
        color: '#352A54',
        fontFamily: 'Poppins_500Medium',
        fontSize: 16
    },
    title: {
        color: '#352A54',
        fontFamily: 'Poppins_700Bold',
        fontSize: 18
    },
    button_partial: {
        backgroundColor: '#DE862D',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 20,
    },
    button_complete: {
        backgroundColor: '#67ABC0',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 20,
    },
    buttonText: {
        fontFamily: 'Poppins_700Bold',
        color: '#fff',
        fontSize: 16,
    },

})
export default styles;