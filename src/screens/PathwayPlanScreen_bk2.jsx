// import React from 'react';
// import { View, Text, StyleSheet, SectionList, TouchableOpacity } from 'react-native';

// // Dummy data
// const systemPathway = [
//   { id: '1', title: 'နယူးဇီလန်ကို ကျောင်းသွားတက်မယ် (၁)', Passport: '🇲🇲', flag: '🇳🇿', Pathway: 'Study', VisaType: 'Fee Paying Student Visa' },
//   { id: '2', title: 'နယူးဇီလန်ကို ကျောင်းသွားတက်မယ် (၂)', Passport: '🇲🇲', flag: '🇳🇿', Pathway: 'Study', VisaType: 'Dependent Child Student Visa' },
//   { id: '3', title: 'နယူးဇီလန်ကို ကျောင်းသွားတက်မယ် (၃)', Passport: '🇲🇲', flag: '🇳🇿', Pathway: 'Study', VisaType: 'Pathway Student Visa' },
//   { id: '4', title: 'နယူးဇီလန်ကို ကျောင်းသွားတက်မယ် (၄)', Passport: '🇲🇲', flag: '🇸🇬', Pathway: 'Study', VisaType: 'Exchange Student Visa' },
//   { id: '5', title: 'နယူးဇီလန်ကို ကျောင်းသွားတက်မယ် (၅)', Passport: '🇲🇲', flag: '🇸🇬', Pathway: 'Study', VisaType: 'Dependent Student Visa' },
// ];

// const userPathway = [
//   { id: '3', title: 'စင်ကာပူကို ကျောင်းသွားတက်မယ် (၁)', Passport: '🇲🇲', flag: '🇸🇬', Pathway: 'Study', VisaType: 'Fee Paying Student Visa' },
//   { id: '4', title: 'စင်ကာပူကို ကျောင်းသွားတက်မယ် (၂)', Passport: '🇲🇲', flag: '🇸🇬', Pathway: 'Study', VisaType: 'Exchange Student Visa' },
// ];

// const PathwayPlanScreen = () => {
//   // Grouping data by country flag
//   const groupedData = [
//     {
//       title: 'New Zealand 🇳🇿',
//       data: systemPathway.filter(item => item.flag === '🇳🇿'),
//     },
//     {
//       title: 'Singapore 🇸🇬',
//       data: userPathway.filter(item => item.flag === '🇸🇬'),
//     },
//   ];

//   const renderItem = ({ item }) => (
//     <View style={styles.card}>
//       <Text style={styles.title}>{item.title}</Text>
//       <Text style={styles.buttonTitleSmallText}>Passport: {item.Passport}</Text>
//       <Text style={styles.buttonTitleSmallText}>Pathway: {item.Pathway}</Text>
//       <Text style={styles.buttonTitleSmallText}>Visa Type: {item.VisaType}</Text>
//       <Text style={styles.buttonTitleSmallText}>Destination: {item.flag}</Text>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Pathway Plans</Text>
//       <SectionList
//         sections={groupedData}
//         keyExtractor={(item) => item.id}
//         renderItem={renderItem}
//         renderSectionHeader={({ section }) => (
//           <View style={styles.sectionHeader}>
//             <Text style={styles.sectionTitle}>{section.title}</Text>
//           </View>
//         )}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#f8f8f8',
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   sectionHeader: {
//     backgroundColor: '#f0f0f0',
//     padding: 10,
//     marginBottom: 10,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#333',
//   },
//   card: {
//     backgroundColor: '#fff',
//     padding: 15,
//     marginBottom: 10,
//     borderRadius: 8,
//     elevation: 3,
//   },
//   title: {
//     fontSize: 16,
//     fontWeight: '600',
//     marginBottom: 5,
//   },
//   visaType: {
//     fontSize: 14,
//     color: '#555',
//   },
// });

// export default PathwayPlanScreen;
