import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const jobs = {
  featured: [
    { title: "Software Engineer", company: "Facebook", salary: "$180.00", location: "Accra, Ghana", image: require('./images/facebook.png') },
    { title: "Data Scientist", company: "Google", salary: "$200.00", location: "New York, USA", image: require('./images/facebook.png')},
    { title: "Product Manager", company: "Apple", salary: "$150.00", location: "Cupertino, USA", image: require('./images/facebook.png') },
    { title: "UX Designer", company: "Microsoft", salary: "$130.00", location: "Seattle, USA", image: require('./images/facebook.png')},
    { title: "Backend Developer", company: "Amazon", salary: "$140.00", location: "San Francisco, USA", image: require('./images/facebook.png') },
    { title: "Fullstack Developer", company: "Netflix", salary: "$160.00", location: "Los Angeles, USA", image: require('./images/facebook.png') },
    { title: "Mobile Developer", company: "Airbnb", salary: "$170.00", location: "Boston, USA",image: require('./images/facebook.png') },
    { title: "DevOps Engineer", company: "Uber", salary: "$175.00", location: "Austin, USA", image: require('./images/facebook.png') },
  ],
  popular: [
    { title: "Jr Executive", company: "Apple", salary: "$96,000/y", location: "Los Angeles, US",image: require('./images/apple.png') },
    { title: "Product Manager", company: "Facebook", salary: "$84,000/y", location: "Florida, US", image: require('./images/facebook.png') },
    { title: "Product Manager", company: "Facebook", salary: "$86,000/y", location: "Florida, US", image: require('./images/facebook.png') },
    { title: "Software Engineer", company: "Twitter", salary: "$100,000/y", location: "San Francisco, US", image: require('./images/facebook.png') },
    { title: "Graphic Designer", company: "Adobe", salary: "$90,000/y", location: "New York, US", image: require('./images/facebook.png') },
    { title: "Marketing Manager", company: "Spotify", salary: "$110,000/y", location: "Seattle, US", image: require('./images/facebook.png') },
    { title: "Business Analyst", company: "Salesforce", salary: "$105,000/y", location: "Chicago, US", image: require('./images/facebook.png')},
    { title: "Data Analyst", company: "LinkedIn", salary: "$95,000/y", location: "Sunnyvale, US", image: require('./images/facebook.png') },
  ]
};

const JobCard = ({ title, company, salary, location, image }) => (
  <View style={styles.card}>
    <Text style={styles.cardTitle}>{title}</Text>
    <Text style={styles.cardCompany}>{company}</Text>
    <Text style={styles.cardSalary}>{salary}</Text>
    <Text style={styles.cardLocation}>{location}</Text>
    <Image source={image} style={styles.cardImage} />
  </View>
);

const LoginScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jobizz</Text>
      <Text style={styles.subtitle}>Welcome Back 👋</Text>
      <Text style={styles.subtitle1}>Let's log in. Apply to jobs!</Text>

       <View style={styles.TextInput}>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      </View>
      <View style={styles.Button}>
      <Button
        title="Log in"
        onPress={() => navigation.navigate('Home', { name, email })}
      />
      </View>
    
      <Text style={styles.subtitle2}>Or continue With</Text>

      <View style={styles.imageRow}>
      <Image
        source={require('./images/apple.png')}
        style={styles.image1}/>
        <Image
        source={require('./images/google.png')}
        style={styles.image2}/>
        <Image
        source={require('./images/facebook.png')}
        style={styles.image3}/>
        </View>
        <Text style={styles.subtitle3}>Haven't an account? Register</Text>
    </View>
    
  );
};

const HomeScreen = ({ route }) => {
  const { name, email } = route.params;

  return (
    <ScrollView style={styles.container}>
       <View style={styles.row}>
      <Text style={styles.userTitle}>{name}</Text>
      <Image
        source={require('./images/profile.png')}
        style={styles.image4}/>
        </View>
        <Text style={styles.userTitle1}>{email}</Text>
        <View style={styles.row}>
      <TextInput placeholder="Search a job or position" style={styles.searchInput} />
      <Image
        source={require('./images/filter.png')}
        style={styles.image5}/>
        </View>
        
      <Text style={styles.sectionTitle}>Featured Jobs</Text>
     
      <ScrollView horizontal>
        {jobs.featured.map((job, index) => (
          <JobCard key={index} {...job} />
        ))}
        </ScrollView>
        
        <Text style={styles.sectionTitle}>Popular Jobs</Text>
    {jobs.popular.map((job, index) => (
      <JobCard key={index} {...job} />
    ))}

    </ScrollView>
    

  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    marginTop: 50,
  },

  subtitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 8,
    
  },

  subtitle1: {
    fontSize: 14,
    marginBottom: 50,
    
  },

  subtitle2: {
    fontSize: 14,
    marginTop: 80,
    marginBottom: 80,
    marginLeft: 170,
  },

  subtitle3: {
    fontSize: 14,
    marginTop: 50,
    marginLeft: 130,
  },

  
  

  Button: {
    marginTop: 40,
  },


  imageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  image1: {
    width: 30,
    height: 30,
    marginLeft: 100,
    marginHorizontal: 1,
  },

  

  image2: {
    width: 30,
    height: 30,
    marginHorizontal: 3,
  },
  
  image3: {
    width: 30,
    height: 30,
    marginHorizontal: 1,
    marginRight: 100,
  },

  row: {
    flexDirection: 'row',
   
  },

  userTitle: {
    fontSize: 40,
    fontWeight: 'bold',
    marginVertical: 30,
    marginBottom: -5,

    
  },

  userTitle1: {
    fontSize: 20,
    marginBottom: 40,

  },

  image4: {
    width: 50,
    height: 40,
    marginLeft: 290,
    margintop: 100,
    position: 'absolute',
    top: 50,
    right: 10,
  },
  input: {
    height: 60,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    padding: 8,
    marginVertical: 8,
    marginBottom: 10,
  },

  row: {
    flexDirection: 'row',
  },

  searchInput: {
    height: 55,
    width: 340,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 8,
    marginBottom: 30,
  },

  image5: {
    width: 50,
    height: 40,
    marginLeft: 20,
    
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  card: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 16,
    margin: 8,
    backgroundColor: '#ADD8E6',
    width: 270,
    height: 200,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 0,
    marginLeft: 30,
  },

  cardCompany: {
    fontSize: 16,
    marginBottom: 4,
    marginLeft: 30,
  },

  cardSalary: {
    fontSize: 16,
    marginBottom: 2,
    position: 'absolute',
    top: -100,
    left: 5,
  },

  cardLocation: {
    fontSize: 16,
    marginBottom: 2,
    position: 'absolute',
    top: -100,
    right: 5,
  },

  cardImage: {
    width: 50,
    height: 50,
    alignSelf: 'left',
    position: 'absolute',
    top: 10,
    left: 0,
},
});
