// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

// const dummyData = [
//   {
//     id: 1,
//     name: "နယူးဇီလန်ကို ကျောင်းသွားတက်မယ် (၁)",
//     pathway: "🇲🇲 ✈ Study ✈ 🇳🇿  (Fee Paying Student Visa)",
//     visaOption: "Fee Paying Student Visa",
//     requirements: [
//       "01. Accommodation - Hotel Booking",
//       "02. Air ticket",
//       "03. Travel insurance (optional)",
//       "04. Mobile/Communication",
//       "05. Personal belongings - Plug Adapters, Cosmetic, Mask, Cloth, shoe, sock",
//       "06. Photocopies - Air ticket, Passport, Hotel",
//       "07. Passport",
//       {
//         title: "08. Visa",
//         subRequirements: [
//           "01. Visa application form (INZ 1012)",
//           "02. Proof of enrollment",
//           "03. Proof of tuition payment",
//           "04. Proof of sufficient funds (NZD $15,000/year)",
//           "05. Health and character requirements",
//           "06. Medical and X-ray certificates (if staying for more than 6 months)",
//           "07. Visa fees",
//           "08. English proficiency test (if applicable)",
//         ],
//       },
//     ],
//   },
// ];

// const EditCheckListScreen = () => {
//   const [showRequirements, setShowRequirements] = useState(true);
//   const [showVisaRequirements, setShowVisaRequirements] = useState(false);
//   const [checkedStatus, setCheckedStatus] = useState({});

//   const toggleRequirements = () => {
//     setShowRequirements(!showRequirements);
//   };

//   const toggleVisaRequirements = () => {
//     setShowVisaRequirements(!showVisaRequirements);
//   };

//   const handleCheckBoxChange = (itemId) => {
//     setCheckedStatus(prev => {
//       const currentState = prev[itemId] || 0; // Default to 0 (ToDo)
//       return { ...prev, [itemId]: (currentState + 1) % 3 }; // Cycle through 0, 1, 2
//     });
//   };

//   const getCheckBoxSymbol = (status) => {
//     switch (status) {
//       case 0:
//         return '☑'; // ToDo
//       case 1:
//         return '✅'; // Done
//       case 2:
//         return '❌'; // Not Required
//       default:
//         return '☑';
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.label}>{dummyData[0].name}</Text>
//       <Text style={styles.pathway}>{dummyData[0].pathway}</Text>

//       {showRequirements && (
//         <View style={styles.requirementsContainer}>
//           <Text style={styles.requirementsTitle}>Requirements</Text>

//           <FlatList
//             data={dummyData[0].requirements}
//             keyExtractor={(item, index) => index.toString()}
//             renderItem={({ item, index }) => {
//               if (typeof item === 'string') {
//                 return (
//                   <View style={styles.requirementContainer}>
//                     <TouchableOpacity
//                       style={styles.checkBox}
//                       onPress={() => handleCheckBoxChange(index)}
//                     >
//                       <Text style={styles.checkBoxText}>{getCheckBoxSymbol(checkedStatus[index])}</Text>
//                     </TouchableOpacity>
//                     <Text style={styles.requirementText}>{item}</Text>
//                   </View>
//                 );
//               } else {
//                 return (
//                   <View>
//                     <TouchableOpacity onPress={toggleVisaRequirements}>
//                       <Text style={styles.requirementText}>{item.title}</Text>
//                     </TouchableOpacity>
//                     {showVisaRequirements && item.subRequirements.map((subItem, subIndex) => (
//                       <View style={styles.requirementContainer} key={subIndex}>
//                         <TouchableOpacity
//                           style={styles.checkBox}
//                           onPress={() => handleCheckBoxChange(`visa_${subIndex}`)}
//                         >
//                           <Text style={styles.checkBoxText}>{getCheckBoxSymbol(checkedStatus[`visa_${subIndex}`])}</Text>
//                         </TouchableOpacity>
//                         <Text style={styles.subRequirementText}>{subItem}</Text>
//                       </View>
//                     ))}
//                   </View>
//                 );
//               }
//             }}
//           />
//         </View>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: '#f8f9fa',
//   },
//   label: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 4,
//     color: '#333',
//   },
//   pathway: {
//     fontSize: 16,
//     color: '#007bff', // Changed to blue for emphasis
//     marginBottom: 20,
//   },
//   requirementsContainer: {
//     backgroundColor: '#fff',
//     borderRadius: 8,
//     padding: 16,
//     elevation: 2,
//   },
//   requirementsTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   requirementContainer: {
//     flexDirection: 'row-reverse',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   checkBox: {
//     width: 24,
//     height: 24,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: 10,
//   },
//   checkBoxText: {
//     fontSize: 14,
//   },
//   requirementText: {
//     fontSize: 14,
//     flex: 1,
//   },
//   subRequirementText: {
//     fontSize: 14,
//     marginLeft: 16,
//     marginBottom: 4,
//     color: '#555',
//     textAlign: 'left', 
//     flex: 1, 
//   }
// });

// export default EditCheckListScreen;