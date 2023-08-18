import React, { useState, useRef } from 'react';
import { ImageBackground, SafeAreaView, StyleSheet, View, ScrollView, Dimensions, Text } from 'react-native';
import Navbar from '../components/Navbar';
import background from '../assets/images/background.png';

const screen_width = Dimensions.get('window').width;

const Home: React.FC = () => {
  const [activeSection, setActiveSection] = useState('section2'); // Initialize with the first section
  const scrollViewRef = useRef<ScrollView | null>(null);

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    if (scrollViewRef.current) {
      const index = section === 'section1' ? 0 : section === 'section2' ? 1 : 2;
      scrollViewRef.current.scrollTo({ x: index * screen_width, animated: true });
    }
  };

  return (
    <ImageBackground source={background} style={styles.backgroundImage}>
      <SafeAreaView style={styles.container}>
        <ScrollView
          ref={scrollViewRef}
          horizontal={true}
          pagingEnabled={true}
          contentContainerStyle={{ width: screen_width * 3 }} // Total width of all sections
        >
          {/* First Section */}
          <View style={[styles.section, { backgroundColor: 'red', width: screen_width }]}>
            <Text style={styles.sectionText}>Section 1</Text>
          </View>

          {/* Second Section */}
          <View style={[styles.section, { backgroundColor: 'blue', width: screen_width }]}>
            <Text style={styles.sectionText}>Section 2</Text>
          </View>

          {/* Third Section */}
          <View style={[styles.section, { backgroundColor: 'green', width: screen_width }]}>
            <Text style={styles.sectionText}>Section 3</Text>
          </View>
        </ScrollView>

        <View style={styles.bottom}>
          <Navbar setActiveSection={scrollToSection} activeSection={activeSection} />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  section: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionText: {
    fontSize: 30,
    color: 'white',
  },
  bottom: {
    justifyContent: 'flex-end',
    marginBottom: 12,
  },
});

export default Home;
