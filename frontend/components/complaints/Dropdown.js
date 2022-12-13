import complaintStyles from "./ComplaintStyles";
import SelectDropdown from "react-native-select-dropdown";

const Dropdown = ({ options, setVal, title }) => {
    return (
        <SelectDropdown
            data={options}
            defaultButtonText={title}
            buttonStyle={complaintStyles.inputButton}
            buttonTextStyle={complaintStyles.diningHallOption}
            onSelect={(selectedItem, index) => {
                setVal(selectedItem);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
                return item;
            }}
        />
    );
};

export default Dropdown;
