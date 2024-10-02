import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

// Dummy data
const systemPathway = [
  { id: '1', title: 'နယူးဇီလန်ကို ကျောင်းသွားတက်မယ် (၁)', Passport: '🇲🇲', flag: '🇳🇿', Pathway: 'Study', VisaType: 'Fee Paying Student Visa' },
  { id: '2', title: 'နယူးဇီလန်ကို ကျောင်းသွားတက်မယ် (၂)', Passport: '🇲🇲', flag: '🇳🇿', Pathway: 'Study', VisaType: 'Dependent Child Student Visa' },
  { id: '3', title: 'နယူးဇီလန်ကို ကျောင်းသွားတက်မယ် (၃)', Passport: '🇲🇲', flag: '🇳🇿', Pathway: 'Study', VisaType: 'Pathway Student Visa' },
  { id: '4', title: 'နယူးဇီလန်ကို ကျောင်းသွားတက်မယ် (၄)', Passport: '🇲🇲', flag: '🇸🇬', Pathway: 'Study', VisaType: 'Exchange Student Visa' },
  { id: '5', title: 'နယူးဇီလန်ကို ကျောင်းသွားတက်မယ် (၅)', Passport: '🇲🇲', flag: '🇸🇬', Pathway: 'Study', VisaType: 'Dependent Student Visa' },
];

const userPathway = [
  { id: '3', title: 'စင်ကာပူကို ကျောင်းသွားတက်မယ် (၁)', Passport: '🇲🇲', flag: '🇸🇬', Pathway: 'Study', VisaType: 'Fee Paying Student Visa' },
  { id: '4', title: 'စင်ကာပူကို ကျောင်းသွားတက်မယ် (၂)', Passport: '🇲🇲', flag: '🇸🇬', Pathway: 'Study', VisaType: 'Exchange Student Visa' },
];

const PathwayPlanScreen = ({ navigation }) => {
  // Grouping data by country flag
  const groupedData = [
    {
      title: 'My Plan',
      data: systemPathway.filter(item => item.flag === '🇳🇿'),
    },
    {
      title: 'Popular',
      data: userPathway.filter(item => item.flag === '🇸🇬'),
    },
    {
      title: 'New Zealand',
      data: systemPathway.filter(item => item.flag === '🇳🇿'),
    },
    {
      title: 'Singapore',
      data: userPathway.filter(item => item.flag === '🇸🇬'),
    },
  ];

    const handlePress = (item) => {
    navigation.navigate('EditCheckList', { item });
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.buttonTitleSmallText}>Passport: {item.Passport}</Text>
      <Text style={styles.buttonTitleSmallText}>Pathway: {item.Pathway}</Text>
      <Text style={styles.buttonTitleSmallText}>Visa Type: {item.VisaType}</Text>
      <Text style={styles.buttonTitleSmallText}>Destination: {item.flag}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      
      <ScrollView>
        {groupedData.map((group, index) => (
          <View key={index} style={styles.countryContainer}>
            <Text style={styles.sectionTitle}>{group.title}</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {group.data.map((item) => (
                <TouchableOpacity key={item.id} style={styles.cardWrapper} onPress={() => handlePress(item)}>
                  {renderItem({ item })}
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity>
      <Text style={styles.buttonTitleBigText}>Create Plan</Text></TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  countryContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
  },
  cardWrapper: {
    marginRight: 10,
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    elevation: 3,
    width: 250, // Adjust card width as needed
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
  },
  buttonTitleSmallText: {
    fontSize: 14,
    color: '#555',
  },
  button: {
    backgroundColor: 'blue', // Blue color
    paddingVertical: 15, // Vertical padding
    paddingHorizontal: 30, // Horizontal padding
    borderRadius: 10, // Rounded corners
    alignItems: 'center', // Center text inside the button
    justifyContent: 'center', // Center text inside the button
    elevation: 5, // Adds shadow effect (Android)
    shadowColor: '#000', // Shadow color (iOS)
    shadowOffset: { width: 0, height: 2 }, // Shadow position (iOS)
    shadowOpacity: 0.2, // Shadow opacity (iOS)
    shadowRadius: 3.5, // Shadow blur radius (iOS)
  },
  buttonTitleBigText: {
    fontSize: 18, // Text size
    color: 'black', // White text color
    fontWeight: 'bold', // Bold text
  },
});

export default PathwayPlanScreen;
