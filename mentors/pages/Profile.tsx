import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { NavigationProp, RouteProp } from '@react-navigation/native';

type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
  Logout: undefined;
};

type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;
type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Profile'>;
type LogoutScreenRouteProp = RouteProp<RootStackParamList, 'Logout'>;

type Props = {
  navigation: NavigationProp<RootStackParamList>;
  route: HomeScreenRouteProp | ProfileScreenRouteProp | LogoutScreenRouteProp;
};

const Navbar: React.FC<Props> = ({ navigation }) => {
  const navigateToHome = () => {
    navigation.navigate('Home');
  };

  const navigateToProfile = () => {
    navigation.navigate('Profile');
  };

  const navigateToLogout = () => {
    navigation.navigate('Logout');
    };

  return (
    <View style={styles.navbar}>
      <TouchableOpacity style={styles.tabButton} onPress={navigateToHome}>
        <Text style={styles.tabButtonText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tabButton} onPress={navigateToProfile}>
        <Text style={styles.tabButtonText}>Profile</Text>
      </TouchableOpacity>
    <TouchableOpacity style={styles.tabButton} onPress={navigateToLogout}>
    <Text style={styles.tabButtonText}>Logout</Text>
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
});

export default Navbar;