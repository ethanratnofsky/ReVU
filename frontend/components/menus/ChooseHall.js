import { StatusBar, View, SafeAreaView, StyleSheet } from 'react-native';
import { THEME_STYLES } from '../../constants';

const DINING_HALLS = [
    {
        id: 0,
        name: 'Rand Dining Hall'
    },
    {
        id: 1,
        name: 'Kissam Dining Hall'
    },
    {
        id: 2,
        name: 'Rothschild Dining Hall'
    },
    {
        id: 3,
        name: 'E. B. I. Dining Hall'
    },
    {
        id: 4,
        name: 'Zeppos Dining Hall'
    },
    {
        id: 5,
        name: 'Commons Dining Hall'
    }
]


const ChooseHall = ({navigation}) => {

    const renderMenuButton = ({ item }) => (
        <MenuButton {...item} />
    );

    return (
        <SafeAreaView style={menuStyles.container}>
            <View style={menuStyles.infoContainer}>
                <Text style={{
                    fontSize: 20,
                    fontWeight: 'bold'
                }}>Menus</Text>
            </View>
            <FlatList 
                data={DINING_HALLS} 
                renderItem={renderDiningHallButton} 
                keyExtractor={item => item.id}
                scrollEnabled={false}
            />
        </SafeAreaView>
    );
}

const menuStyles = {
    container: {
        ...THEME_STYLES.blackBackground,
        height: '100%',
        alignItems: 'center',
    },
    infoContainer: {
        ...THEME_STYLES.whiteBackground,
        width: 220,
        height: 55,
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: VU_GOLD,
        borderRadius: 6,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        margin: 12,
    },
}

export default ChooseHall;