import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const data = [
  { id: "01", title: "Trade finance" },
  { id: "02", title: "Import / Export", subtitle: "Trade Automation" },
  { id: "03", title: "Supply Chain", subtitle: "Procurement & Logistics" },
  { id: "04", title: "Banking" },
  { id: "05", title: "Healthcare" },
];

const solutions = [
  { id: '01', title: 'DOCUMENT DIGITIZATION & EXAMINATION' },
  { id: '02', title: 'OPERATIONS AUTOMATION' },
  { id: '03', title: 'TBML COMPLIANCE' },
  { id: '04', title: 'FRAUD MANAGEMENT' },
  { id: '05', title: 'SANCTIONS SCREENING' },
  { id: '06', title: 'LETTERS OF CREDIT' },
];

const Card = ({ title, subtitle, id }) => (
  <View style={styles.card}>
    <View style={styles.textContainer}>
      <Text style={styles.title}>{title}</Text>
      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
    </View>
    <Text style={styles.id}>{id}</Text>
  </View>
);

const Home = () => {
  return (
    
      <View>
        <Text style={styles.tagline}>
          Transact With Precision. Streamline Costs.{"\n"}
          Reduce Risk. Seize Opportunity.
        </Text>
      <Text style={styles.boxtitle}>SimplyFI</Text>
      
        <Text style={styles.text}>
          WHO{"\n"}
          WE{"\n"}
          SERVE{"\n"}
        </Text>
      
        <Text style={styles.textline}>
          Our smart process automation solutions supports
      </Text>
      
      <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card title={item.title} subtitle={item.subtitle} id={item.id} />
        )}
      />
    </View>
     
    <Text style={styles.text}>
          OUR{"\n"}
          SOLUTIONS
    </Text>
      
    <Text style={styles.textline}>
          Our solutions across industries we serve include
    </Text>
      

      


<View style={styles.solutioncontainer}>
      <Text style={styles.header}>OUR{"\n"}SOLUTIONS</Text>
      <FlatList
        data={solutions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.number}>{item.id}</Text>
            <Text style={styles.title}>{item.title}</Text>
          </View>
        )}
      />
    </View>


    

      






        <Text style={styles.services}>
          Streamline Operations{"\n"}
          With Intelligent Process{"\n"}
          <Text style={styles.highlight}>Automation</Text>
        </Text>
        <Text style={styles.description}>
        For enterprise organizations seeking to optimize their global
        trade and supply chain operations, SimplyFI is an AI-
        powered smart process automation platform that delivers
        precision, efficiency, and regulatory compliance.
        </Text>


        <Text style={styles.services}>
          Effortless Integration Of AI{"\n"}
          And Blockchain To Simplify{"\n"}
          <Text style={styles.highlight}>Complex Processes</Text>
        </Text>
        <Text style={styles.description}>
          SimplyFI integrates artificial intelligence and blockchain 
          seamlessly into existing workflows to digitize and streamline 
          complex trade finance, import/export, and supply chain processes.
      </Text>
      
      <Text style={styles.services}>
          Minimize Errors, Speed Up{"\n"}
          Transactions, And Stay{"\n"}
          <Text style={styles.highlight}>Globally Compliant</Text>
        </Text>
        <Text style={styles.description}>
        We enable businesses to reduce human error, accelerate high-
        volume transactions, and ensure compliance with global regulations.
      </Text>
      
      <Text style={styles.services}>
      Empowering Growth{"\n"}
      And Innovation At The{"\n"}
          <Text style={styles.highlight}>Speed Of Business</Text>
        </Text>
        <Text style={styles.description}>
        With SimplyFI, enterprises can focus on growth and
        innovation, confident their operational processes
        run with maximum efficiency and reliability.
        </Text>
      

      </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },

  tagline: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
    fontWeight: '600',
  },

  textline: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
    
  },

  text: {
    color: '#fff',
    fontSize: 50,
    textAlign: 'center',
    marginTop: 100,
    fontWeight: 'bold',
    textAlign: 'center',

  },
  title: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  boxtitle: {
    color: "#fff",
    fontSize: 70,
    fontWeight: "bold",
    textAlign: 'center',

  },
  
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#1c1c2e",
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
    width: "80%",
    alignSelf: "center",
  },
  
  textContainer: {
    flex: 1,
  },

  subtitle: {
    color: "#ccc",
    fontSize: 14,
    marginTop: 5,
    textAlign: 'center',
  },
  id: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },


//our solutions
  solutioncontainer: {
    flex: 1, 
    padding: 20,
  },
  header: {
    color: '#A0A0A0', // Light gray color
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textTransform: 'uppercase',
    marginTop: 100,
    textAlign: 'center',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  number: {
    color: '#A0A0A0', // Light gray number
    fontSize: 16,
    marginRight: 10,
  },


  //services
  
  services: {
    color: '#FFFFFF', // White text
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 100,
    marginLeft: 20,
  },
  highlight: {
    color: '#3498db', // Blue accent color
  },
  description: {
    color: '#A0A0A0', // Light gray text
    fontSize: 14,
    lineHeight: 22,
    marginLeft: 20,
  },
});

export default Home;
