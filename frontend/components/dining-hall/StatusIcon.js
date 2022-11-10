import { Image, TouchableOpacity } from 'react-native';

import statusIconStyles from './StatusIconStyles';

const StatusIcon = ({ isOpen, onPress, style }) => {
    return (
        <TouchableOpacity onPress={onPress} style={style}>
            { isOpen ?
                <Image style={statusIconStyles.icon} source={require('../../assets/images/green-clock.png')} /> 
                : <Image style={statusIconStyles.icon} source={require('../../assets/images/red-clock.png')} />  }
        </TouchableOpacity>
    );
};

export default StatusIcon;