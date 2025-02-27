import React, { useState } from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import Close from '@/assets/images/kyc/close';
import Down2 from '@/assets/images/kyc/Down 2';
import Search from '@/assets/images/kyc/Search';
import Upper from '@/assets/images/kyc/Upper';
import Kyc from '@/styles/Kyc/Kyc.styles';

interface CitySelectionModalProps {
  iscity: boolean;
  toggleMod: () => void;
  onSelectCity: (city: string) => void;
}

const CitySelectionModal: React.FC<CitySelectionModalProps> = ({
  iscity,
  toggleMod,
  onSelectCity,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [city, setcity] = useState<string>('ibadan');
  const [searchTerm, setSearchTerm] = useState<string>('');

  // const cities = ['Ibadan','Ogbomoso','Iseyin',];
  const cities = {
    Lagos: ['Ikeja', 'Epe', 'Ikorodu', 'Badagry', 'Lekki'],
    Oyo: ['Ibadan', 'Ogbomoso', 'Iseyin', 'Oyo', 'Saki'],
    Kano: ['Kano', 'Wudil', 'Gaya', 'Rano', 'Bichi'],
    Rivers: ['Port Harcourt', 'Bonny', 'Opobo', 'Ahoada', 'Omoku'],
    // Add more states and their cities as needed
  };

  const allCities = Object.values(cities).flat();

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  const selectstate = (city: string) => {
    setcity(city);
    onSelectCity(city);
    setIsDropdownOpen(false);
  };

  const filteredState = allCities.filter((citing) =>
    citing.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Modal
      visible={iscity}
      animationType="slide"
      transparent={true}
      onRequestClose={toggleMod}
    >
      <View style={Kyc.modalContainer}>
        <View style={Kyc.modalContent}>
          {/* Header */}
          <View style={Kyc.header}>
            <Text style={Kyc.label}> City</Text>
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
              {/* <Image
                source={require('../../../../../assets/images/newimages/twemoji_flag-nigeria.png')}
                style={Kyc.flagIcon}
                resizeMode="contain"
              /> */}
              <Text style={Kyc.countryName}>{city}</Text>
            </View>
            {isDropdownOpen ? <Upper /> : <Down2 />}
          </TouchableOpacity>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <FlatList
              data={filteredState}
              keyExtractor={(item) => item}
              style={Kyc.dropdownMenu}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[
                    Kyc.dropdownItem,
                    city === item && Kyc.selectedBackground,
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



export default CitySelectionModal;
