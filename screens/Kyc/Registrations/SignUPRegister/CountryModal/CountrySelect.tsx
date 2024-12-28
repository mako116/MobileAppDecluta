import React, { useState } from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
   Image,
  TextInput,
  FlatList,
} from 'react-native';
import Close from '@/assets/images/kyc/close';
import Down2 from '@/assets/images/kyc/Down 2';
import Search from '@/assets/images/kyc/Search';
import Upper from '@/assets/images/kyc/Upper';
import Country from '@/styles/Kyc/country.styles';

interface CountrySelectionModalProps {
  isModalVisible: boolean;
  toggleModal: () => void;
  onSelectCountry: (country: string) => void;
}

const CountrySelectionModal: React.FC<CountrySelectionModalProps> = ({
  isModalVisible,
  toggleModal,
  onSelectCountry,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<string>('Nigeria');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const countries = ['Nigeria',];

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  const selectCountry = (country: string) => {
    setSelectedCountry(country);
    onSelectCountry(country);
    setIsDropdownOpen(false);
  };

  const filteredCountries = countries.filter((country) =>
    country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Modal
      visible={isModalVisible}
      animationType="slide"
      transparent={true}
      onRequestClose={toggleModal}
    >
      <View style={Country.modalContainer}>
        <View style={Country.modalContent}>
          {/* Header */}
          <View style={Country.header}>
            <Text style={Country.label}> Country</Text>
            <TouchableOpacity onPress={toggleModal}>
              <Close />
            </TouchableOpacity>
          </View>

          {/* Search Bar */}
          <View style={Country.searchContainer}>
            <TextInput
              style={Country.searchInput}
              placeholder="Search"
              value={searchTerm}
              onChangeText={setSearchTerm}
            />
            <Search />
          </View>

          {/* Dropdown Button */}
          <TouchableOpacity style={Country.dropdownButton} onPress={toggleDropdown}>
            <View style={Country.centerContainer}>
              <Image
                source={require('../../../../../assets/images/newimages/twemoji_flag-nigeria.png')}
                style={Country.flagIcon}
                resizeMode="contain"
              />
              <Text style={Country.countryName}>{selectedCountry}</Text>
            </View>
            {isDropdownOpen ? <Upper /> : <Down2 />}
          </TouchableOpacity>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <FlatList
              data={filteredCountries}
              keyExtractor={(item) => item}
              style={Country.dropdownMenu}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[
                    Country.dropdownItem,
                    selectedCountry === item && Country.selectedBackground,
                  ]}
                  onPress={() => selectCountry(item)}
                >
                  <Image
                    source={require('../../../../../assets/images/newimages/twemoji_flag-nigeria.png')}
                    style={Country.subFlagIcon}
                    resizeMode="contain"
                  />
                  <Text style={Country.dropdownItemText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
          )}
        </View>
      </View>
    </Modal>
  );
};



export default CountrySelectionModal;
