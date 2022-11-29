import complaintStyles from './ComplaintStyles';
import  SelectDropdown from 'react-native-select-dropdown';

const Dropdown = ({setVal, title}) => {
    options = ["Rand Dining Hall", "Kissam Dining Hall", "Rothschild Dining Hall", "E. B. I. Dining Hall", "Zeppos Dining Hall", "Commons Dining Hall"];
    return (
        <SelectDropdown
            data={options}
            defaultButtonText={title}
            buttonStyle={complaintStyles.inputButton}
            buttonTextStyle={complaintStyles.diningHallOption}
            // onSelect={(selectedItem, index) => {
            //     setVal(selectedItem);
            // }}
            // buttonTextAfterSelection={(selectedItem, index) => {
            //     return selectedItem
            // }}
            // rowTextForSelection={(item, index) => {
            //     return item
            // }}
        />
    )
}

export default Dropdown;