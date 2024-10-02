// import React, { useEffect, useRef } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';

// const HomeScreen = ({ navigation }) => {
//   const rotateAnim = useRef(new Animated.Value(0)).current;

//   // Animation for rotating the earth symbol
//   useEffect(() => {
//     const rotate = Animated.loop(
//       Animated.timing(rotateAnim, {
//         toValue: 1,
//         duration: 3000, // Duration for the full rotation
//         useNativeDriver: true,
//       })
//     );
//     rotate.start();
//     return () => rotate.stop(); // Stop animation on unmount
//   }, [rotateAnim]);

//   const rotateInterpolate = rotateAnim.interpolate({
//     inputRange: [0, 1],
//     outputRange: ['0deg', '360deg'],
//   });

//   // Animation for button scale on press
//   const scaleAnim = useRef(new Animated.Value(1)).current;

//   const handlePressIn = () => {
//     Animated.timing(scaleAnim, {
//       toValue: 0.95,
//       duration: 100,
//       useNativeDriver: true,
//     }).start();
//   };

//   const handlePressOut = () => {
//     Animated.timing(scaleAnim, {
//       toValue: 1,
//       duration: 100,
//       useNativeDriver: true,
//     }).start();
//   };

//   return (
//     <View style={styles.container}>
//       {/* Header */}
//       <Text style={styles.header}>ရွှေခရီး</Text>

//       {/* Rotating Earth Symbol */}
//       <Animated.Text style={{ fontSize: 80, transform: [{ rotate: rotateInterpolate }] }}>
//         🌍
//       </Animated.Text>

//       {/* System Checklist */}
//       <View style={styles.section}>
//         <View style={styles.buttonRow}>
//           <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('WhereToGoScreen')}>
//             <Text style={styles.buttonText}>🌍 ဘယ်သွားမလဲ (WhereToGo)</Text>
//           </TouchableOpacity>

//           <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PathwayPlanScreen')}>
//             <Text style={styles.buttonText}>🛤️ ဘယ်လိုသွားမလဲ (Pathways Plan)</Text>
//           </TouchableOpacity>
//         </View>

//         <View style={styles.buttonRow}>
//           <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('FAQScreen')}>
//             <Text style={styles.buttonText}>❓ အမေးအဖြေ (FAQ)</Text>
//           </TouchableOpacity>

//           <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SearchScreen')}>
//             <Text style={styles.buttonText}>🔍 ရှာမယ် (Search)</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center', // Center vertically
//     alignItems: 'center', // Center horizontally
//     padding: 20,
//     backgroundColor: '#f0f4f7',
//   },
//   section: {
//     marginBottom: 20,
//     width: '100%', // Ensures it takes the full width
//     alignItems: 'center', // Center items in the section
//   },
//   header: {
//     color: '#FFD700', // Gold color for better visibility
//     fontSize: 50,
//     fontWeight: 'bold', // Make header text bold
//     textAlign: 'center', // Center text
//     marginBottom: 20, // Space below the header
//   },
//   buttonRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between', // Space between buttons
//     width: '100%', // Full width for the row
//     marginBottom: 15, // Space between rows
//   },
//   button: {
//     flex: 1, // Allow buttons to grow equally
//     backgroundColor: '#007bff', // Blue color
//     borderRadius: 10,
//     paddingVertical: 20, // Increase vertical padding for larger buttons
//     marginHorizontal: 10, // Space between buttons
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//     textAlign: 'center', // Center text in buttons
//   },
// });

// export default HomeScreen;
