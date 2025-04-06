import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, TextInput, SectionList } from 'react-native';

// Sample contacts with Pakistani names, phone numbers, and telecom operators
const contacts = [
  { id: '1', name: 'Ahmed Khan', number: '0301-1234567', group: 'Family' },
  { id: '2', name: 'Sara Ali', number: '0312-2345678', group: 'Friends' },
  { id: '3', name: 'Faisal Malik', number: '0345-3456789', group: 'Work' },
  { id: '4', name: 'Ayesha Bukhari', number: '0300-4567890', group: 'Family' },
  { id: '5', name: 'Ali Zafar', number: '0321-5678901', group: 'Friends' },
  { id: '6', name: 'Usman Butt', number: '0333-6789012', group: 'Work' },
  { id: '7', name: 'Zainab Javed', number: '0316-7890123', group: 'Family' },
  { id: '8', name: 'Bilal Shah', number: '0342-8901234', group: 'Friends' },
  { id: '9', name: 'Muneeb Iqbal', number: '0334-9012345', group: 'Work' },
  { id: '10', name: 'Fatima Rehman', number: '0302-1234567', group: 'Family' },
  { id: '11', name: 'Ali Zong', number: '0310-1234567', group: 'Family' },
  { id: '12', name: 'Taskeen Ufone', number: '0331-2345678', group: 'Friends' },
  { id: '13', name: 'RTC Services', number: '0355-3456789', group: 'Work' },
  { id: '14', name: 'Adeel Ufone', number: '0330-4567890', group: 'Family' },
  { id: '15', name: 'Kiran Zong', number: '0312-5678901', group: 'Friends' },
  { id: '16', name: 'Zeeshan Jazz', number: '0309-6789012', group: 'Work' },
  { id: '17', name: 'Shazia Telenor', number: '0322-7890123', group: 'Family' },
  { id: '18', name: 'Hassan Ufone', number: '0335-8901234', group: 'Friends' },
  { id: '19', name: 'Misha Jazz', number: '0308-9012345', group: 'Work' },
  { id: '20', name: 'Nazia Telenor', number: '0318-1234567', group: 'Family' }
];

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('Home');
  const [selectedContact, setSelectedContact] = useState(null);
  const [search, setSearch] = useState('');
  const [filteredContacts, setFilteredContacts] = useState(contacts);

  const handleSearch = (text) => {
    setSearch(text);
    const filtered = contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(text.toLowerCase()) ||
        contact.number.includes(text)
    );
    setFilteredContacts(filtered);
  };

  const groupedContacts = [
    { title: 'Family', data: filteredContacts.filter(contact => contact.group === 'Family') },
    { title: 'Friends', data: filteredContacts.filter(contact => contact.group === 'Friends') },
    { title: 'Work', data: filteredContacts.filter(contact => contact.group === 'Work') }
  ];

  if (currentScreen === 'Home') {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Contacts</Text>

        {/* Search Bar */}
        <TextInput
          style={styles.searchInput}
          placeholder="Search by Name or Number"
          value={search}
          onChangeText={handleSearch}
        />

        <SectionList
          sections={groupedContacts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.contactItem}
              onPress={() => {
                setSelectedContact(item);
                setCurrentScreen('Details');
              }}
            >
              <Text style={styles.contactText}>{item.name} - {item.number}</Text>
            </TouchableOpacity>
          )}
          renderSectionHeader={({ section }) => (
            <Text style={styles.sectionHeader}>{section.title}</Text>
          )}
        />
      </View>
    );
  }

  if (currentScreen === 'Details') {
    return (
      <View style={styles.detailsContainer}>
        <Text style={styles.detailsTitle}>Contact Info</Text>
        <View style={styles.detailsBox}>
          <Text style={styles.contactDetails}>Name: {selectedContact?.name}</Text>
          <Text style={styles.contactDetails}>Number: {selectedContact?.number}</Text>
          <Text style={styles.contactDetails}>Group: {selectedContact?.group}</Text>
        </View>

        <TouchableOpacity style={styles.backButton} onPress={() => setCurrentScreen('Home')}>
          <Text style={styles.backButtonText}>Back to Contacts</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return null;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#F0F8FF',
    padding: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#4682B4', // Steel blue title
    textAlign: 'center', // Center the title
  },
  contactItem: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: '#E6F0F9', // Light pastel blue for contact items
    borderRadius: 10,
  },
  contactText: {
    fontSize: 16,
    color: '#333333',
  },
  sectionHeader: {
    backgroundColor: '#ADD8E6',
    fontWeight: 'bold',
    fontSize: 18,
    padding: 10,
    color: '#FFFFFF',
    borderRadius: 5,
  },
  searchInput: {
    height: 45,
    marginTop: 15,
    borderColor: '#B0C4DE',
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 15,
    backgroundColor: '#FFFFFF',
    fontSize: 16,
    marginBottom: 20,
  },
  detailsContainer: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#FFF5EE',
    padding: 20,
    borderRadius: 10,
  },
  detailsTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#4682B4',
    textAlign: 'center',
    marginBottom: 20,
  },
  detailsBox: {
    padding: 20,
    backgroundColor: '#FFE4E1',
    borderRadius: 10,
    marginBottom: 30,
  },
  contactDetails: {
    fontSize: 18,
    color: '#333333',
    marginBottom: 10,
  },
  backButton: {
    backgroundColor: '#4682B4',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  backButtonText: {
    fontSize: 16,
    color: '#FFFFFF',
  },
});
