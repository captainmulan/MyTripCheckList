import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  // Predefined checklist (SystemCheckList) with Unicode flags
  const systemChecklist = [
    { id: '1', title: 'Moving to New Zealand with School Invitation', flag: '🇳🇿', roadmap: 'School > Visa > Relocation' },
    { id: '2', title: 'Moving to New Zealand with Job Offer', flag: '🇳🇿', roadmap: 'Job > Visa > PR' },
    { id: '3', title: 'Visiting New Zealand with Tourist Visa', flag: '🇳🇿', roadmap: 'Visit > Visa > Explore' },
    { id: '4', title: 'Moving to Singapore with Job Offer', flag: '🇸🇬', roadmap: 'Job > Visa > PR' },
    { id: '5', title: 'Visiting Singapore to Find a Job', flag: '🇸🇬', roadmap: 'Visit > Visa > Job' },
  ];

  // My checklist (user created)
  const myChecklist = [
    { id: '1', title: 'My Relocation Plan for Singapore 2024', flag: '🇸🇬', roadmap: 'Visa > Housing > Job' },
    { id: '2', title: 'My Journey to New Zealand 2024', flag: '🇳🇿', roadmap: 'School > Visa > Relocation' },
  ];

  const handlePress = (item) => {
    navigation.navigate('CheckListDetails', { item });
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* System Checklist */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Predefined Checklists</Text>
          {systemChecklist.map((item) => (
            <TouchableOpacity key={item.id} style={styles.checklistItem} onPress={() => handlePress(item)}>
              <View style={styles.itemHeader}>
                <Text style={styles.flag}>{item.flag}</Text>
                <Text style={styles.checklistText}>{item.title}</Text>
              </View>
              <Text style={styles.roadmapText}>{item.roadmap}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* My Checklist */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Your Custom Checklists</Text>
          {myChecklist.map((item) => (
            <TouchableOpacity key={item.id} style={styles.checklistItem} onPress={() => handlePress(item)}>
              <View style={styles.itemHeader}>
                <Text style={styles.flag}>{item.flag}</Text>
                <Text style={styles.checklistText}>{item.title}</Text>
              </View>
              <Text style={styles.roadmapText}>{item.roadmap}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Bottom Menu */}
      <View style={styles.bottomMenu}>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Search')}>
          <Text style={styles.menuText}>🔍 Search</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Create')}>
          <Text style={styles.menuText}>➕ Create Checklist</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Settings')}>
          <Text style={styles.menuText}>⚙️ Settings</Text>
        </TouchableOpacity>
      </View>
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
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#333',
    marginBottom: 15,
  },
  checklistItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    flexDirection: 'column',
  },
  itemHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  flag: {
    fontSize: 24,
    marginRight: 10,
  },
  checklistText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#333',
  },
  roadmapText: {
    fontSize: 14,
    color: '#888',
    marginTop: 5,
  },
  bottomMenu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    paddingVertical: 15,
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  menuItem: {
    alignItems: 'center',
  },
  menuText: {
    fontSize: 16,
    color: '#007AFF',
  },
});

export default HomeScreen;
