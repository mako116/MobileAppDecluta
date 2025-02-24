import React from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import LeftButton from "@/assets/images/cart/arrowLeftMain";
import Search from "@/assets/images/kyc/Search";
import ArrowUpGray from "@/assets/svg/ArrowUpGray";
import ArrowGrayDown from "@/assets/svg/ArrowGrayDown";
import UssdStyles from "@/styles/UssdStyles/Ussdstyles";
import YourCart from "@/styles/Cart/YourCart.styles";

type Bank = {
  name: string;
  ussd: string;
};

interface AddUssdModalProps {
  visible: boolean;
  onClose: () => void;
  banks: Bank[];
  selectedBank: Bank | null;
  onSelectBank: (bank: Bank) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const AddUssdModal: React.FC<AddUssdModalProps> = ({
  visible,
  onClose,
  banks,
  selectedBank,
  onSelectBank,
  searchQuery,
  setSearchQuery,
}) => {
  const [dropdownVisible, setDropdownVisible] = React.useState(false);

  const filteredBanks = banks.filter((bank) =>
    bank.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={UssdStyles.modalOverlay}>
        <View style={UssdStyles.modalContent}>
          {/* Modal Header */}
          <View style={[YourCart.rewardInfoContainer, { width: "90%" }]}>
            <TouchableOpacity onPress={onClose}>
              <LeftButton />
            </TouchableOpacity>
            <Text style={UssdStyles.headerText}>Select Bank</Text>
          </View>

          {/* Search Bar */}
          <View style={UssdStyles.dropdowned}>
            <TextInput
              style={UssdStyles.searchInput}
              placeholder="Search"
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
            <Search />
          </View>

          {/* Dropdown Trigger */}
          <TouchableOpacity
            style={UssdStyles.dropdown}
            onPress={() => setDropdownVisible(!dropdownVisible)}
          >
            <Text style={[YourCart.bonusText, { color: "#A4A4A4" }]}>
              {selectedBank ? selectedBank.name : "Select option"}
            </Text>
            {dropdownVisible ? <ArrowUpGray /> : <ArrowGrayDown />}
          </TouchableOpacity>

          {/* Dropdown List */}
          {dropdownVisible && (
            <FlatList
              data={filteredBanks}
              keyExtractor={(item) => item.name}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={UssdStyles.bankItem}
                  onPress={() => {
                    onSelectBank(item);
                    onClose();
                  }}
                >
                  <Text
                    style={[
                      YourCart.rewardText,
                      { fontWeight: "400", color: "#212121" },
                    ]}
                  >
                    {item.name}
                  </Text>
                </TouchableOpacity>
              )}
            />
          )}
        </View>
      </View>
    </Modal>
  );
};

export default AddUssdModal;
