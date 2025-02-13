import { View, Text, StyleSheet } from "react-native"; 
import CityScreen from "../components/cityScreen";
const CalgaryScreen = () => (
    <CityScreen 
      imageSource={require('../assets/calgary.jpg')} 
      cityUrl="https://www.calgary.ca/home.html" 
      cityName="Calgary"
      description="Calgary is the largest city in Alberta with a population of 1,506,479 as of 2024. The Calgary tower is one of the city's famous landmark. Every year the city hosts one of the biggest rodeo, and festival in Canada which is called the Calgary Stampede, where people around the world come to attend "
    />
  );

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333'
    }
});
export default CalgaryScreen;