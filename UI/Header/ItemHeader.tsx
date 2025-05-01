import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import DeleteModal from '@/components/Account/MyItems/ItemManagment/DeleteItem';


interface HeaderProps {
  title: string;
  showBack?: boolean;
  showNotification?: boolean;
  showCart?: boolean;
  showMenu?: boolean;
  itemId?: string; 
  itemName?: string;
}

const ItemHeader: React.FC<HeaderProps> = ({
  title,
  showBack = true,
  showNotification = false,
  showCart = false,
  showMenu = false,
  itemId = '',
  itemName = '',
}) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleMenuOption = (action: string) => {
    // Handle menu actions with routing
    switch (action) {
      case 'preview':
        console.log('Preview selected');
        router.push("/(routes)/Account/MyItem/PreviewItem");
        break;
      case 'edit':
        console.log('Edit selected');
        router.push("/(routes)/Account/MyItem/EditItem");
        break;
      case 'delete':
        console.log('Delete selected');
        setDeleteModalVisible(true);
        break;
      default:
        break;
    }
    setMenuVisible(false);
  };

  const handleDeleteConfirm = () => {
    console.log('Item deleted:', itemId);
    setDeleteModalVisible(false);

  };

  const handleDeleteCancel = () => {
    setDeleteModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        {showBack && (
          <TouchableOpacity onPress={() => router.back()} style={styles.iconButton}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
        )}
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.rightContainer}>
        {showNotification && (
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="notifications-outline" size={24} color="black" />
          </TouchableOpacity>
        )}
        {showCart && (
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="cart-outline" size={24} color="black" />
          </TouchableOpacity>
        )}
        {showMenu && (
          <View>
            <TouchableOpacity style={styles.iconButton} onPress={toggleMenu}>
              <Ionicons name="menu" size={24} color="black" />
            </TouchableOpacity>
            {menuVisible && (
              <View style={styles.dropdownMenu}>
                <TouchableOpacity 
                  style={styles.menuItem} 
                  onPress={() => handleMenuOption('preview')}
                >
                  <Ionicons name="eye-outline" size={20} color="black" />
                  <Text style={styles.menuText}>Preview</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={styles.menuItem} 
                  onPress={() => handleMenuOption('edit')}
                >
                  <Feather name="edit" size={20} color="black" />
                  <Text style={styles.menuText}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={styles.menuItem} 
                  onPress={() => handleMenuOption('delete')}
                >
                  <Ionicons name="trash-outline" size={20} color="red" />
                  <Text style={[styles.menuText, { color: 'red' }]}>Delete</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        )}
      </View>
      
      {/* Backdrop to close the menu when clicking outside */}
      {menuVisible && (
        <Pressable 
          style={styles.backdrop}
          onPress={() => setMenuVisible(false)}
        />
      )}

      {/* Delete Confirmation Modal */}
      <DeleteModal 
        visible={deleteModalVisible}
        onCancel={handleDeleteCancel}
        onDelete={handleDeleteConfirm}
        itemName={itemName || 'this item'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    height: 56,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#f1f1f1',
    zIndex: 1,
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
  },
  iconButton: {
    padding: 8,
  },
  dropdownMenu: {
    position: 'absolute',
    right: 0,
    top: 55,
    backgroundColor: 'white',
    borderRadius: 4,
    elevation: 5,
    width: 150,
    zIndex: 10,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderBottomColor: '#f1f1f1',
  },
  menuText: {
    marginLeft: 8,
    fontSize: 16,
  },
  backdrop: {
    position: 'absolute',
    top: 56,
    left: 0,
    right: 0,
    bottom: -1000, 
    backgroundColor: 'transparent',
    zIndex: 5,
  },
});

export default ItemHeader;