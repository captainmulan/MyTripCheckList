import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

const PathwayPlanScreen = ({ navigation }) => {
  // Predefined checklist (SystemCheckList) with Unicode flags
  const systemChecklist = [
    { id: '1', title: 'နယူးဇီလန်ကို ကျောင်းသွားတက်မယ် (၁)', Passport: '🇲🇲', flag: '🇳🇿', Pathway: 'Study', VisaType: 'Fee Paying Student Visa' },
    { id: '2', title: 'နယူးဇီလန်ကို ကျောင်းသွားတက်မယ် (၂)', Passport: '🇲🇲', flag: '🇳🇿', Pathway: 'Study', VisaType: 'Dependent Child Student Visa'  },
    { id: '3', title: 'နယူးဇီလန်ကို ကျောင်းသွားတက်မယ် (၃)', Passport: '🇲🇲', flag: '🇳🇿', Pathway: 'Study', VisaType: 'Pathway Student Visa'  },
    { id: '4', title: 'နယူးဇီလန်ကို ကျောင်းသွားတက်မယ် (၄)', Passport: '🇲🇲', flag: '🇸🇬', Pathway: 'Study', VisaType: 'Exchange Student Visa' },
    { id: '5', title: 'နယူးဇီလန်ကို ကျောင်းသွားတက်မယ် (၅)', Passport: '🇲🇲', flag: '🇸🇬', Pathway: 'Study', VisaType: 'Dependent Student Visa' },
  ];

  // My checklist (user created)
  const myChecklist = [
    { id: '1', title: 'စင်ကာပူကို ကျောင်းသွားတက်မယ် (၁)', Passport: '🇲🇲', flag: '🇸🇬', Pathway: 'Study', VisaType: 'Fee Paying Student Visa'  },
    { id: '2', title: 'စင်ကာပူကို ကျောင်းသွားတက်မယ် (၂)', Passport: '🇲🇲', flag: '🇸🇬', Pathway: 'Study', VisaType: 'Exchange Student Visa'  },
  ];

  const handlePress = (item) => {
    navigation.navigate('EditCheckList', { item });
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* System Checklist */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>စနစ်မှ ဖန်တီးထားသော လမ်းကြောင်းများ</Text>
          {systemChecklist.map((item) => (
            <TouchableOpacity key={item.id} style={styles.checklistItem} onPress={() => handlePress(item)}>
              <View style={styles.itemHeader}>               
                <Text style={styles.buttonTitleBigText}>{item.title}</Text>
              </View>
              <Text style={styles.buttonTitleSmallText}>Passport: {item.Passport}</Text>
              <Text style={styles.buttonTitleSmallText}>Pathway: {item.Pathway}</Text>
              <Text style={styles.buttonTitleSmallText}>Visa Type: {item.VisaType}</Text>
              <Text style={styles.buttonTitleSmallText}>Destination: {item.flag}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* My Checklist */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>မိမိ ဖန်တီးထားသော လမ်းကြောင်းများ</Text>
          {myChecklist.map((item) => (
            <TouchableOpacity key={item.id} style={styles.checklistItem} onPress={() => handlePress(item)}>
              <View style={styles.itemHeader}>               
                <Text style={styles.buttonTitleBigText}>{item.title}</Text>
              </View>
              <Text style={styles.buttonTitleSmallText}>Passport: {item.Passport}</Text>
              <Text style={styles.buttonTitleSmallText}>Pathway: {item.Pathway}</Text>
              <Text style={styles.buttonTitleSmallText}>Visa Type: {item.VisaType}</Text>
              <Text style={styles.buttonTitleSmallText}>Destination: {item.flag}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f4f7',
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  checklistItem: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 3,  // Added elevation for shadow effect
  },
  itemHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  buttonTitleBigText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
  },
  buttonTitleSmallText: {
    fontSize: 16,
    color: '#666',  // Changed color for better visibility
    marginTop: 5,
  },
});

export default PathwayPlanScreen;
