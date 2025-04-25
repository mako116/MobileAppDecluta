import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { 
  FilterHeader, 
  CheckboxFilterOption, 
  ActionButton 
} from '../../../../UI/Filter/index';

interface ConditionState {
  new: boolean;
  likeNew: boolean;
  used: boolean;
  openBox: boolean;
  refurbished: boolean;
}

const ConditionScreen: React.FC = () => {
  const router = useRouter();
  const [conditions, setConditions] = useState<ConditionState>({
    new: false,
    likeNew: false,
    used: true,
    openBox: false,
    refurbished: false
  });
  
  const toggleCondition = (condition: keyof ConditionState) => {
    setConditions({
      ...conditions,
      [condition]: !conditions[condition]
    });
  };
  
  return (
    <View style={styles.container}>
      <FilterHeader 
        title="Condition" 
        onBackPress={() => router.back()} 
        showCart={true}
      />
      
      <ScrollView style={styles.scrollContent}>
        <CheckboxFilterOption 
          label="New (10,095)"
          sublabel="Unused, unopened with original packaging"
          selected={conditions.new}
          onSelect={() => toggleCondition('new')}
        />
        <CheckboxFilterOption 
          label="Used Like New (10,975)"
          sublabel="Unused, unopened with original packaging"
          selected={conditions.likeNew}
          onSelect={() => toggleCondition('likeNew')}
        />
        <CheckboxFilterOption 
          label="Used (76)"
          sublabel="Save money, buy used"
          selected={conditions.used}
          onSelect={() => toggleCondition('used')}
        />
        <CheckboxFilterOption 
          label="Open Box (76)"
          sublabel="Unused, opened with original accessories"
          selected={conditions.openBox}
          onSelect={() => toggleCondition('openBox')}
        />
        <CheckboxFilterOption 
          label="Refurbished (42)"
          sublabel="Unused, opened with original accessories"
          selected={conditions.refurbished}
          onSelect={() => toggleCondition('refurbished')}
        />
      </ScrollView>
      
      <ActionButton 
        title="Show 200+ results" 
        onPress={() => {
          console.log('Conditions selected:', conditions);
          router.back();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  scrollContent: {
    flex: 1,
  },
});

export default ConditionScreen;