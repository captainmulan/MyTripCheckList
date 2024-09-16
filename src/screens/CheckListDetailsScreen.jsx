import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, ScrollView, Dimensions } from 'react-native';

const { height: screenHeight } = Dimensions.get('window');

const CheckListDetailsScreen = ({ route }) => {
  const { item } = route.params;

  const [isRequirementsModalVisible, setRequirementsModalVisible] = useState(false);
  const [isDetailsModalVisible, setDetailsModalVisible] = useState(false);
  const [selectedRequirement, setSelectedRequirement] = useState(null);
  const [currentRequirements, setCurrentRequirements] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null); // Track the item selected for movement

  const [toDoItems, setToDoItems] = useState([]);
  const [inProgressItems, setInProgressItems] = useState([]);
  const [doneItems, setDoneItems] = useState([]);

  const requirements = {
    Visa: {
      Student: ['SOP', 'COC', 'BankStatement'],
      Partner: ['SOP', 'COC'],
      Child: ['SOP', 'BirthCertificate'],
    },
    Relocation: ['Accommodation', 'Mover (DHL from SG to NZ)'],
  };

  const handleRoadmapClick = (title) => {
    setCurrentRequirements(requirements[title] || []);
    setRequirementsModalVisible(true);
  };

  const openDetailsModal = (requirement) => {
    setSelectedRequirement(requirement);
    setDetailsModalVisible(true);
    setSelectedItem(requirement); // Set the item for movement
  };

  const addToChecklist = (requirement) => {
    setToDoItems((prevItems) => [...prevItems, { title: requirement }]);
    setRequirementsModalVisible(false); // Close modal after adding
  };

  const moveItem = (direction) => {
    if (!selectedItem) return;

    const move = (source, target) => {
      setToDoItems((prevToDo) => prevToDo.filter((item) => item.title !== selectedItem));
      setInProgressItems((prevInProgress) => prevInProgress.filter((item) => item.title !== selectedItem));
      setDoneItems((prevDone) => prevDone.filter((item) => item.title !== selectedItem));

      if (direction === 'forward') {
        if (source === 'ToDo') {
          setInProgressItems((prev) => [...prev, { title: selectedItem }]);
        } else if (source === 'InProgress') {
          setDoneItems((prev) => [...prev, { title: selectedItem }]);
        }
      } else if (direction === 'backward') {
        if (source === 'Done') {
          setInProgressItems((prev) => [...prev, { title: selectedItem }]);
        } else if (source === 'InProgress') {
          setToDoItems((prev) => [...prev, { title: selectedItem }]);
        }
      }
    };

    if (toDoItems.find((item) => item.title === selectedItem)) {
      move('ToDo', 'InProgress');
    } else if (inProgressItems.find((item) => item.title === selectedItem)) {
      move('InProgress', 'Done');
    } else if (doneItems.find((item) => item.title === selectedItem)) {
      move('Done', 'InProgress');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.title}</Text>

      {/* Roadmap Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>RoadMap</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.roadmapContainer}>
          {item.roadmap.split(' > ').map((step, index) => (
            <TouchableOpacity
              key={index}
              style={styles.roadmapItemContainer}
              onPress={() => handleRoadmapClick(step)}
            >
              <Text style={styles.roadmapText}>{step}</Text>
              {index < item.roadmap.split(' > ').length - 1 && <Text style={styles.roadmapArrow}>→</Text>}
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Checklist Panels */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>CheckList</Text>
        <View style={styles.checklistPanels}>
          {/* ToDo Panel */}
          <View style={styles.panel}>
            <Text style={styles.panelTitle}>To Do</Text>
            {toDoItems.map((item, index) => (
              <Text key={index} style={styles.panelItem}>{item.title}</Text>
            ))}
          </View>

          {/* InProgress Panel */}
          <View style={styles.panel}>
            <Text style={styles.panelTitle}>In Progress</Text>
            {inProgressItems.map((item, index) => (
              <Text key={index} style={styles.panelItem}>{item.title}</Text>
            ))}
          </View>

          {/* Done Panel */}
          <View style={styles.panel}>
            <Text style={styles.panelTitle}>Done</Text>
            {doneItems.map((item, index) => (
              <Text key={index} style={styles.panelItem}>{item.title}</Text>
            ))}
          </View>
        </View>
      </View>

      {/* Modal for showing requirements when clicking on roadmap */}
      <Modal
        visible={isRequirementsModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setRequirementsModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Requirements</Text>
            <ScrollView>
              {Object.entries(currentRequirements).map(([category, items]) => (
                <View key={category} style={styles.requirementCategory}>
                  <Text style={styles.requirementCategoryTitle}>{category}</Text>
                  {items.map((item, index) => (
                    <TouchableOpacity
                      key={index}
                      style={styles.requirementItem}
                      onPress={() => openDetailsModal(item)}
                    >
                      <Text style={styles.requirementText}>{item}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              ))}
            </ScrollView>
            <TouchableOpacity style={styles.closeButton} onPress={() => setRequirementsModalVisible(false)}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Modal for showing details of a requirement */}
      <Modal
        visible={isDetailsModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setDetailsModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>{selectedRequirement}</Text>
            <Text style={styles.requirementDescription}>Details for {selectedRequirement}</Text>
            <TouchableOpacity style={styles.addButton} onPress={() => addToChecklist(selectedRequirement)}>
              <Text style={styles.addButtonText}>Add to Checklist</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.closeButton} onPress={() => setDetailsModalVisible(false)}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Buttons for moving items */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.moveButton} onPress={() => moveItem('backward')}>
          <Text style={styles.buttonText}>{'<='}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.moveButton} onPress={() => moveItem('forward')}>
          <Text style={styles.buttonText}>{'=>'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  roadmapContainer: {
    flexDirection: 'row',
  },
  roadmapItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  roadmapText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007AFF',
    marginHorizontal: 10,
  },
  roadmapArrow: {
    fontSize: 24,
    color: '#888',
  },
  checklistPanels: {
    height: screenHeight * 0.5, // Half of the screen height
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  panel: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  panelTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  panelItem: {
    fontSize: 16,
    marginVertical: 5,
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  requirementCategory: {
    marginBottom: 20,
  },
  requirementCategoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  requirementItem: {
    paddingVertical: 5,
  },
  requirementText: {
    fontSize: 16,
    color: '#007AFF',
  },
  addButton: {
    backgroundColor: '#007AFF',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  closeButton: {
    backgroundColor: '#ddd',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  closeButtonText: {
    color: '#333',
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  moveButton: {
    flex: 1,
    backgroundColor: '#007AFF',
    borderRadius: 5,
    paddingVertical: 10,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default CheckListDetailsScreen;
