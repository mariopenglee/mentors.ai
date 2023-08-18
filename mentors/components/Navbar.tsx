import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const Navbar: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState('section1'); // Set the initial selected tab

  const handleTabPress = (tabName: string) => {
    setSelectedTab(tabName);
  };

  return (
    <View style={styles.navbar}>
      <TouchableOpacity
        style={[styles.tabButton, selectedTab === 'section1' && styles.activeTab]}
        onPress={() => handleTabPress('section1')}
      >
        <Text style={[styles.tabButtonText, selectedTab === 'section1' && styles.activeTabText]}>Program</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tabButton, selectedTab === 'section2' && styles.activeTab]}
        onPress={() => handleTabPress('section2')}
      >
        <Text style={[styles.tabButtonText, selectedTab === 'section2' && styles.activeTabText]}>Discover</Text>
      </TouchableOpacity>

        <TouchableOpacity
        style={[styles.tabButton, selectedTab === 'section3' && styles.activeTab]}
        onPress={() => handleTabPress('section3')}
        >
        <Text style={[styles.tabButtonText, selectedTab === 'section3' && styles.activeTabText]}>Profile</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#343434',
    height: 60,
  },
  tabButton: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    width: '30%',
  },
  tabButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: 'white',
  },
  activeTabText: {
    color: 'white',
  },
});

export default Navbar;
