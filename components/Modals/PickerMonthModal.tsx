import React, { Dispatch, SetStateAction, useRef, useState } from 'react';
import { Modal, Text, View, TouchableOpacity, FlatList, Image, PanResponder, Animated, TextInput } from 'react-native';
import Close from '@/assets/images/kyc/close';
import Down2 from '@/assets/images/kyc/Down 2';
import Search from '@/assets/images/kyc/Search';
import Upper from '@/assets/images/kyc/Upper';
import Kyc from '@/styles/Kyc/Kyc.styles';

interface MonthSelectionModalProps {
    isMonth: boolean;
    toggleMod: () => void;
    onSelectMonth: (month: string) => void;
  }

const MonthModal: React.FC<MonthSelectionModalProps> = ({
    isMonth,
    toggleMod,
    onSelectMonth,
}) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [month, setMonth] = useState<string>('January');
    const [searchTerm, setSearchTerm] = useState<string>('');

    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  const selectstate = (month: string) => {
    setMonth(month);
    onSelectMonth(month);
    setIsDropdownOpen(false);
  };

  const filteredCities = months.filter((month) =>
    month.toLowerCase().includes(searchTerm.toLowerCase())
  );

    return (
        <Modal
        visible={isMonth}
        animationType="slide"
        transparent={true}
        onRequestClose={toggleMod}
        >
            <View style={Kyc.modalContainer}>
                <View style={Kyc.modalContent}>
                    {/* Header */}
                    <View style={Kyc.header}>
                        <Text style={Kyc.label}>Month</Text>
                        <TouchableOpacity onPress={toggleMod}>
                        <Close />
                        </TouchableOpacity>
                    </View>

                    {/* Search Bar */}
                    <View style={Kyc.searchContainer}>
                        <TextInput
                        style={Kyc.searchInput}
                        placeholder="Search"
                        value={searchTerm}
                        onChangeText={setSearchTerm}
                        />
                        <Search />
                    </View>

                    {/* Dropdown Button */}
                    <TouchableOpacity style={Kyc.dropdownButton} onPress={toggleDropdown}>
                        <View style={Kyc.centerContainer}>
                        <Text style={Kyc.countryName}>{month}</Text>
                        </View>
                        {isDropdownOpen ? <Upper /> : <Down2 />}
                    </TouchableOpacity>

                    {/* Dropdown Menu */}
                    {isDropdownOpen && (
                        <FlatList
                            data={filteredCities}
                            keyExtractor={(item) => item}
                            style={Kyc.dropdownMenu}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                style={[
                                    Kyc.dropdownItem,
                                    month === item && Kyc.selectedBackground,
                                ]}
                                onPress={() => selectstate(item)}
                                >
                                
                                <Text style={Kyc.dropdownItemText}>{item}</Text>
                                </TouchableOpacity>
                            )}
                        />
                    )}
                </View>
            </View>
        </Modal>
    );
};

export default MonthModal;