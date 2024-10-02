// import React, { useState } from 'react';
// import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

// const PathwayPlanScreen = ({ navigation }) => {
//   // System-created pathways with user pathways nested under each visa
//   const systemChecklist = [
//     {
//       id: '1',
//       title: 'New Zealand',
//       subPathways: [
//         {
//           title: 'Study',
//           visas: [
//             {
//               title: 'Fee Paying Student Visa',
//               userPathways: ['နယူးဇီလန်ကို ကျောင်းသွားတက်မယ် (၁)'],
//             },
//             {
//               title: 'Dependent Child Student Visa',
//               userPathways: ['နယူးဇီလန်ကို ကျောင်းသွားတက်မယ် (၂)'],
//             },
//             {
//               title: 'Pathway Student Visa',
//               userPathways: ['နယူးဇီလန်ကို ကျောင်းသွားတက်မယ် (၃)'],
//             },
//             {
//               title: 'Exchange Student Visa',
//               userPathways: ['နယူးဇီလန်ကို ကျောင်းသွားတက်မယ် (၄)'],
//             },
//             {
//               title: 'Dependent Student Visa',
//               userPathways: ['နယူးဇီလန်ကို ကျောင်းသွားတက်မယ် (၅)'],
//             },
//           ],
//         },
//         {
//           title: 'Work',
//           visas: [],
//         },
//         {
//           title: 'Visit',
//           visas: [],
//         },
//       ],
//     },
//   ];

//   // User-created pathways
//   const myChecklist = [
//     {
//       id: '1',
//       title: 'စင်ကာပူကို ကျောင်းသွားတက်မယ် (၁)',
//     },
//     {
//       id: '2',
//       title: 'စင်ကာပူကို ကျောင်းသွားတက်မယ် (၂)',
//     },
//   ];

//   // State to manage toggles
//   const [expandedItems, setExpandedItems] = useState({});

//   // Function to handle toggle
//   const toggleExpand = (id) => {
//     setExpandedItems((prev) => ({
//       ...prev,
//       [id]: !prev[id],
//     }));
//   };

//   const handlePress = (item) => {
//     navigation.navigate('EditCheckList', { item });
//   };

//   return (
//     <View style={styles.container}>
//       <ScrollView>
//         {/* System-created pathways */}
//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>System created pathways</Text>
//           {systemChecklist.map((country) => (
//             <View key={country.id} style={styles.countrySection}>
//               <TouchableOpacity onPress={() => toggleExpand(country.id)}>
//                 <Text style={styles.countryTitle}>
//                   {country.title} {expandedItems[country.id] ? '▲' : '▼'}
//                 </Text>
//               </TouchableOpacity>
//               {expandedItems[country.id] && (
//                 <View>
//                   {country.subPathways.map((subPathway, index) => (
//                     <View key={index} style={styles.subPathwaySection}>
//                       <TouchableOpacity onPress={() => toggleExpand(`${country.id}-${index}`)}>
//                         <Text style={styles.subPathwayTitle}>
//                           {subPathway.title} {expandedItems[`${country.id}-${index}`] ? '▲' : '▼'}
//                         </Text>
//                       </TouchableOpacity>
//                       {expandedItems[`${country.id}-${index}`] && (
//                         <View>
//                           {subPathway.visas.map((visa, visaIdx) => (
//                             <View key={visaIdx} style={styles.visaSection}>
//                               <TouchableOpacity onPress={() => toggleExpand(`${country.id}-${index}-${visaIdx}`)}>
//                                 <Text style={styles.visaTitle}>
//                                   {visa.title} {expandedItems[`${country.id}-${index}-${visaIdx}`] ? '▲' : '▼'}
//                                 </Text>
//                               </TouchableOpacity>
//                               {expandedItems[`${country.id}-${index}-${visaIdx}`] && (
//                                 <View>
//                                   {visa.userPathways.map((userPathway, userIdx) => (
//                                     <Text key={userIdx} style={styles.userPathway}>
//                                        {userPathway}
//                                     </Text>
//                                   ))}
//                                 </View>
//                               )}
//                             </View>
//                           ))}
//                         </View>
//                       )}
//                     </View>
//                   ))}
//                 </View>
//               )}
//             </View>
//           ))}
//         </View>

//         {/* User-created pathways */}
//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>User created pathways</Text>
//           {myChecklist.map((item) => (
//             <TouchableOpacity key={item.id} style={styles.checklistItem} onPress={() => handlePress(item)}>
//               <Text style={styles.buttonTitleBigText}>{item.title}</Text>
//             </TouchableOpacity>
//           ))}
//         </View>
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#f0f4f7',
//   },
//   section: {
//     marginBottom: 25,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 10,
//   },
//   countrySection: {
//     marginBottom: 20,
//   },
//   countryTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#555',
//     marginBottom: 10,
//   },
//   subPathwaySection: {
//     marginLeft: 20,
//     marginBottom: 15,
//   },
//   subPathwayTitle: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#777',
//     marginBottom: 5,
//   },
//   visaSection: {
//     marginLeft: 40,
//     marginBottom: 10,
//   },
//   visaTitle: {
//     fontSize: 16,
//     color: '#888',
//   },
//   userPathway: {
//     marginLeft: 60,
//     fontSize: 16,
//     color: '#999',
//   },
//   checklistItem: {
//     backgroundColor: '#fff',
//     padding: 15,
//     borderRadius: 10,
//     marginBottom: 10,
//     elevation: 3,
//   },
//   buttonTitleBigText: {
//     fontSize: 20,
//     fontWeight: '600',
//     color: '#333',
//   },
// });

// export default PathwayPlanScreen;
