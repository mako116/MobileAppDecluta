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
import stateSty from '@/styles/Kyc/stateStylesmodal';

interface StateSelectionModalProps {
  isState: boolean;
  toggleModals: () => void;
  onSelectstate: (state: string) => void;
}

const StateSelectionModal: React.FC<StateSelectionModalProps> = ({
  isState,
  toggleModals,
  onSelectstate,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [state, setstate] = useState<string>('Oyo');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const states = ['Oyo','Lagos','Ogun',];

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  const selectstate = (state: string) => {
    setstate(state);
    onSelectstate(state);
    setIsDropdownOpen(false);
  };

  const filteredState = states.filter((state) =>
    state.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Modal
      visible={isState}
      animationType="slide"
      transparent={true}
      onRequestClose={toggleModals}
    >
      <View style={stateSty.modalContainer}>
        <View style={stateSty.modalContent}>
          {/* Header */}
          <View style={stateSty.header}>
            <Text style={stateSty.label}> State</Text>
            <TouchableOpacity onPress={toggleModals}>
              <Close />
            </TouchableOpacity>
          </View>

          {/* Search Bar */}
          <View style={stateSty.searchContainer}>
            <TextInput
              style={stateSty.searchInput}
              placeholder="Search"
              value={searchTerm}
              onChangeText={setSearchTerm}
            />
            <Search />
          </View>

          {/* Dropdown Button */}
          <TouchableOpacity style={stateSty.dropdownButton} onPress={toggleDropdown}>
            <View style={stateSty.centerContainer}>
              
              <Text style={stateSty.countryName}>{state}</Text>
            </View>
            {isDropdownOpen ? <Upper /> : <Down2 />}
          </TouchableOpacity>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <FlatList
              data={filteredState}
              keyExtractor={(item) => item}
              style={stateSty.dropdownMenu}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[
                    stateSty.dropdownItem,
                    state === item && stateSty.selectedBackground,
                  ]}
                  onPress={() => selectstate(item)}
                >
                  
                  <Text style={stateSty.dropdownItemText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
          )}
        </View>
      </View>
    </Modal>
  );
};



export default StateSelectionModal;
