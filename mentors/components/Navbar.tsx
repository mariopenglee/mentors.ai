import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

type Props = {
  setActiveSection: (section: string) => void;
  activeSection: string;
};

const Navbar: React.FC<Props> = ({ setActiveSection, activeSection }) => {
    console.log('Rendering Navbar with active section:', activeSection);

  return (
    <View style={styles.navbar}>
      <TouchableOpacity
        style={[styles.tabButton, activeSection === 'section1' && styles.activeTab]}
        onPress={() => setActiveSection('section1')}
      >
        <Text style={[styles.tabButtonText, activeSection === 'section1' && styles.activeTabText]}>Section 1</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tabButton, activeSection === 'section2' && styles.activeTab]}
        onPress={() => setActiveSection('section2')}
      >
        <Text style={[styles.tabButtonText, activeSection === 'section2' && styles.activeTabText]}>Section 2</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tabButton, activeSection === 'section3' && styles.activeTab]}
        onPress={() => setActiveSection('section3')}
      >
        <Text style={[styles.tabButtonText, activeSection === 'section3' && styles.activeTabText]}>Section 3</Text>
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
  },
  tabButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
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
