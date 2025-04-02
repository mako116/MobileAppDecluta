import React, { useState } from "react"; 
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import dwnArrow from "../../assets/images/iconDown.png";
import UpArrow from "../../assets/images/kyc/Up 2.png";
import activeCheckbox from "../../assets/images/checkbox/Frame 645588 (1).png"; // Active checkbox image
import inactiveCheckbox from "../../assets/images/checkbox/Frame 645588.png"; // Inactive checkbox image
import SellItems from "@/styles/sellItem/Sellitem";

interface DropdownOption {
  text: string;
  subText: string;
  checked?: boolean;  // Optionally, you can set whether it is checked initially
}

interface SelectDropdownProps {
  options: DropdownOption[];
  onSelect: (selectedOption: DropdownOption) => void;  // Expect a single selected option, not an array
}

const SelectDropdown: React.FC<SelectDropdownProps> = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState<DropdownOption | null>(null);
  const [isDropdownVisible, setDropdownVisible] = useState<boolean>(false);
  const [optionsWithCheckedStatus, setOptionsWithCheckedStatus] = useState<DropdownOption[]>(options);

  // Handle selecting an option
  const handleSelect = (option: DropdownOption) => {
    // Update the selected option
    setSelectedOption(option);
    setDropdownVisible(false);
    onSelect(option); // Pass the selected option

    // Update the selected state of the checkbox image
    const updatedOptions = optionsWithCheckedStatus.map((item) =>
      item.text === option.text ? { ...item, checked: true } : { ...item, checked: false }
    );
    setOptionsWithCheckedStatus(updatedOptions);
  };

  return (
    <View style={styles.container}>
      {/* Select Box with Dropdown Icon */}
      <TouchableOpacity
        style={styles.selectBox}
        onPress={() => setDropdownVisible(!isDropdownVisible)}
      >
        <Text style={styles.selectedText}>
          {selectedOption ? selectedOption.text : "Select an option"}
        </Text>
        <Text style={styles.dropdownIcon}>
          {isDropdownVisible ? (
            <Image source={UpArrow} style={{ width: 20, height: 20 }} />
          ) : (
            <Image source={dwnArrow} style={{ width: 20, height: 20 }} />
          )}
        </Text>
      </TouchableOpacity>

      {/* Dropdown List */}
      {isDropdownVisible && (
        <View style={styles.dropdown}>
          {optionsWithCheckedStatus.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.option}
              onPress={() => handleSelect(item)}  // Pass the selected option
            >
              <View style={styles.optionContainer}>
                <Text style={[SellItems.label,{fontSize:15}]}>{item.text}</Text>
                <Text style={styles.optionSubText}>{item.subText}</Text>
              </View>

              {/* Checkbox Image */}
              <TouchableOpacity onPress={() => handleSelect(item)}>
                <Image
                  source={item.checked ? activeCheckbox : inactiveCheckbox}
                  style={styles.checkbox}
                />
              </TouchableOpacity>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: "100%",
  },
  selectBox: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 20,
    borderRadius: 5,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  selectedText: {
    fontSize: 14,
    color: "#212121",
    fontFamily: "Proxima Nova",
  },
  dropdownIcon: {
    fontSize: 14,
    color: "#666",
    marginLeft: 5,
  },
  dropdown: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#E9E9E9",
    borderRadius: 10,
    zIndex: 1000,
    marginVertical: 10,
  },
  option: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#E9E9E9",
    flexDirection: "row",  // Aligning text and checkbox horizontally
    justifyContent: "space-between",
    alignItems: "center",
   
    
  },
  optionContainer: {
    flex: 1,  // Allow text to take remaining spacSellItems.label: {
    fontSize: 14,
    fontFamily: "Proxima Nova",
    color: "#212121",
     gap:5
   
  },
  optionSubText: {
    fontSize: 14,
    fontFamily: "Proxima Nova",
    color: "#212121",
    
  },
  checkbox: {
    width: 20, // Adjust the size of the checkbox image
    height: 20,
    marginLeft: 10, // Space between text and checkbox
  },
});

export default SelectDropdown;
