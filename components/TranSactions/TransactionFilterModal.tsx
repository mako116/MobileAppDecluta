import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Modal, ScrollView, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const FilterModal = ({ visible, onClose, onApply }) => {
  const [selectedTransactionType, setSelectedTransactionType] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

  const transactionTypes = ['All', 'Purchase', 'Withdrawal', 'Item Sold', 'Item Resold'];
  const statusTypes = ['All', 'Success', 'Failed', 'Cancelled', 'Pending', 'Rejected'];

  const handleApply = () => {
    onApply({
      transactionType: selectedTransactionType,
      status: selectedStatus,
      dateRange: {
        from: fromDate,
        to: toDate
      }
    });
    onClose();
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Filter by</Text>
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
              <Ionicons name="close" size={24} color="#1F2937" />
            </TouchableOpacity>
          </View>

          <View style={styles.filterSection}>
            <Text style={styles.filterSectionTitle}>Transaction Type</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.chipContainer}>
                {transactionTypes.map((type) => (
                  <TouchableOpacity
                    key={type}
                    style={[
                      styles.chip,
                      selectedTransactionType === type && styles.chipSelected
                    ]}
                    onPress={() => setSelectedTransactionType(type)}
                  >
                    <Text
                      style={[
                        styles.chipText,
                        selectedTransactionType === type && styles.chipTextSelected
                      ]}
                    >
                      {type}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>
          </View>

          <View style={styles.filterSection}>
            <Text style={styles.filterSectionTitle}>Status</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.chipContainer}>
                {statusTypes.map((status) => (
                  <TouchableOpacity
                    key={status}
                    style={[
                      styles.chip,
                      selectedStatus === status && styles.chipSelected
                    ]}
                    onPress={() => setSelectedStatus(status)}
                  >
                    <Text
                      style={[
                        styles.chipText,
                        selectedStatus === status && styles.chipTextSelected
                      ]}
                    >
                      {status}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>
          </View>

          <View style={styles.filterSection}>
            <Text style={styles.filterSectionTitle}>Date</Text>
            <View style={styles.dateRangeContainer}>
              <View style={styles.dateInputWrapper}>
                <Ionicons name="calendar-outline" size={20} color="#6B7280" style={styles.calendarIcon} />
                <Text style={styles.dateLabel}>From</Text>
                <TextInput
                  style={styles.dateInput}
                  placeholder="DD / MM / YY"
                  placeholderTextColor="#9CA3AF"
                  value={fromDate}
                  onChangeText={setFromDate}
                />
              </View>
              <Text style={styles.dateSeparator}>To</Text>
              <View style={styles.dateInputWrapper}>
                <TextInput
                  style={styles.dateInput}
                  placeholder="DD / MM / YY"
                  placeholderTextColor="#9CA3AF"
                  value={toDate}
                  onChangeText={setToDate}
                />
              </View>
            </View>
          </View>

          <TouchableOpacity style={styles.applyButton} onPress={handleApply}>
            <Text style={styles.applyButtonText}>Apply</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 16,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    paddingVertical: 25,

  },

    closeButton: {
        position: 'absolute',
        right: 16,
        top: 30,
    },
  modalTitle: {
    fontSize: 24,
    fontFamily:"HelveticaNeueBold",
    textAlign: 'center',
    color: '#1F2937',
    

 
  },
  filterSection: {
    marginBottom: 14,
  },
  filterSectionTitle: {
    fontSize: 16,
    color: '#1F2937',
    marginBottom: 12,
    fontFamily:"ProximaNovaR",

  },
  chipContainer: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    paddingBottom: 4,
  },
  chip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
borderWidth:1,
borderColor:"#E5E7EB",
    minWidth: 50,
    marginRight: 8,
 
  },
  chipSelected: {
    backgroundColor: '#D6C395',
  },
  chipText: {
    fontSize: 14,
    color: '#4B5563',
    fontFamily:"ProximaNovaR",
  },
  chipTextSelected: {
    color: '#1F2937',
  },
  dateRangeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 8,
    padding: 4,
    paddingHorizontal: 8,
    justifyContent: 'center',
    marginBottom: 18,
  },
  dateInputWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  calendarIcon: {
    marginRight: 8,
  },
  dateLabel: {
    fontSize: 14,
    color: '#4B5563',
    marginRight: 8,
  },
  dateInput: {
    flex: 1,
    fontSize: 14,
    color: '#1F2937',
    fontFamily:"ProximaNovaR",
  },
  dateSeparator: {
    fontSize: 14,
    color: '#4B5563',
    marginHorizontal: 12,
  },
  applyButton: {
    backgroundColor: '#F3F4F6',
    borderRadius: 8,
    paddingVertical: 20,
    alignItems: 'center',
    marginTop: 8,
  },
  applyButtonText: {
    color: '#9CA3AF',
    fontSize: 16,
    fontFamily:"ProximaNovaR",
  },
});

export default FilterModal;