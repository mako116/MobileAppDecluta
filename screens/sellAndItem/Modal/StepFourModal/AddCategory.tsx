import React, { useState } from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import activeCheckbox from "../../../../assets/images/checkbox/Radiobutton.png";
import inactiveCheckbox from "../../../../assets/images/checkbox/Frame 645588.png";
import UssdStyles from "@/styles/UssdStyles/Ussdstyles";
import YourCart from "@/styles/Cart/YourCart.styles";

type Category = {
  id: number;
  name: string;
  subcategories?: { id: number; name: string }[]; // Add this optional property for subcategories
};

interface AddCategoryModalProps {
  visible: boolean;
  onClose: () => void;
  Category: Category[];
  onSelectCategory: (category: Category) => void;
  onSelectSubcategory: (subcategory: { id: number; name: string }) => void; // Function to handle subcategory selection
}

const AddCategoryModal: React.FC<AddCategoryModalProps> = ({
  visible,
  onClose,
  Category,
  onSelectCategory,
  onSelectSubcategory,
}) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null);
  const [selectedSubcategoryId, setSelectedSubcategoryId] = useState<number | null>(null);
  const [openSubcategories, setOpenSubcategories] = useState<Record<number, boolean>>({}); // Track open/close for subcategories

  const handleCategorySelect = (category: Category) => {
    setSelectedCategoryId(category.id);
    setSelectedSubcategoryId(null); // Reset subcategory selection when changing category
    onSelectCategory(category); // Pass the selected category back to parent component
  };

  const handleSubcategorySelect = (subcategory: { id: number; name: string }) => {
    setSelectedSubcategoryId(subcategory.id);
    onSelectSubcategory(subcategory); // Pass the selected subcategory back to parent component
  };

  const toggleSubcategories = (categoryId: number) => {
    setOpenSubcategories((prev) => ({
      ...prev,
      [categoryId]: !prev[categoryId], // Toggle the visibility for this category's subcategories
    }));
  };

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <TouchableOpacity style={UssdStyles.modalOverlay} activeOpacity={1} onPress={onClose}>
        <View style={UssdStyles.modalContent}>
          {/* Modal Header */}
          <View style={[YourCart.rewardInfoContainer]}>
            <Text style={UssdStyles.headerText}>Categories</Text>
            <TouchableOpacity onPress={onClose}>
              <Text style={[UssdStyles.headerText, { color: "#212121", fontWeight: 400, fontSize: 15 }]}>
                Done
              </Text> 
            </TouchableOpacity>
          </View>

          {/* List of Categories */}
          <ScrollView>
            {Category.map((item, index) => (
              <View key={item.id ? item.id.toString() : `category-${index}`}>
                <TouchableOpacity
                  style={[
                    UssdStyles.CategoryItem,
                    index === Category.length - 1 && { borderBottomWidth: 0 }, // Remove border from last item
                  ]}
                  onPress={() => {
                    // If category has subcategories, toggle visibility
                    if (item.subcategories) {
                      toggleSubcategories(item.id); // Toggle the subcategories visibility
                    }
                    handleCategorySelect(item); // Select the category
                  }}
                >
                  <Image
                    source={selectedCategoryId === item.id ? activeCheckbox : inactiveCheckbox}
                    style={{ width: 20, height: 20, marginRight: 10 }}
                  />
                  <Text style={[YourCart.rewardText, { fontWeight: "400", color: "#212121" }]}>
                    {item.name}
                  </Text>
                </TouchableOpacity>

                {/* Show Subcategories if category is selected and subcategories exist */}
                {item.subcategories && selectedCategoryId === item.id && openSubcategories[item.id] && (
                  <View style={{ marginLeft: 20 }}>
                    {/* Display Subcategories */}
                    {item.subcategories.map((subcat) => (
                      <TouchableOpacity
                        key={subcat.id}
                        style={[
                          UssdStyles.CategoryItem,
                          { paddingLeft: 30 }, // Indent subcategories
                        ]}
                        onPress={() => handleSubcategorySelect(subcat)} // Handle subcategory selection
                      >
                        <Image
                          source={selectedSubcategoryId === subcat.id ? activeCheckbox : inactiveCheckbox}
                          style={{ width: 20, height: 20, marginRight: 10 }}
                        />
                        <Text style={[YourCart.rewardText, { fontWeight: "400", color: "#212121" }]}>
                          {subcat.name}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                )}
              </View>
            ))}
          </ScrollView>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default AddCategoryModal;
