import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, 
          Button, StyleSheet, 
          Text, View, SafeAreaView, 
          Image, ImageBackground,
          TextInput,
} from 'react-native';
import { TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { useFonts } from 'expo-font'

export default function Home({ navigation }) {
  let [fontsLoaded] = useFonts({
    'BeVietnam-Regular': require('../assets/fonts/BeVietnam-Regular.ttf'),
    'BeVietnam-Bold': require('../assets/fonts/BeVietnam-Bold.ttf')
  });
  return (
    <SafeAreaView style = {styles.container}>
      <View
        style = {{
          width: '90%',
        }}
      >
        <Text
          style = {{
            fontSize: 26,
            fontWeight: 'bold',
          }}
        >
          Chào Minh Trí
        </Text>
      </View>

      
      <View
        style = {styles.standardView}        
      > 
        <TouchableOpacity
          style = {{
              width: '35%',
              height: '100%',
              backgroundColor: 'white',
              elevation: 10,
              borderRadius: 10,
          }}
        >
          <View
            style = {styles.boxInsideView}
          >
            <Image
              style = {styles.boxLogo}
              source = {require('../assets/wet.png')}
            />
            <Text
              style = {styles.boxText}
            >
              Độ ẩm
            </Text>
            <Text
              style = {styles.boxControlText}
              // return wet sensor here
            >
              WET_SENSOR
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style = {{
              width: '60%',
              height: '100%',
              backgroundColor: 'white',
              elevation: 10,
              borderRadius: 10,
          }}
        >
          <View
            style = {styles.boxInsideView}
          >
            <Image
              style = {styles.boxLogo}
              source = {require('../assets/temp.png')}
            />
            <Text
              style = {styles.boxText}
            >
              Nhiệt độ
            </Text>
            <Text
              style = {styles.boxControlText}
              // return wet sensor here
            >
              TEMP_SENSOR
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View
        style = {styles.standardView}
      >
        <TouchableOpacity
          style = {{
              width: '100%',
              height: '100%',
              backgroundColor: 'white',
              elevation: 10,
              borderRadius: 10,
          }}
        >
          <View
            style = {styles.boxInsideView}
          >
            <Image
              style = {styles.boxLogo}
              source = {require('../assets/water.png')}
            />
            <Text
              style = {styles.boxText}
            >
              Mức nước
            </Text>
            <Text
              style = {styles.boxControlText}
              // return wet sensor here
            >
              WATER_SENSOR
            </Text>
          </View>
        </TouchableOpacity>        
      </View>

      <View
        style = {styles.standardView}
      >
        <TouchableOpacity
          style = {{
              width: '100%',
              height: '100%',
              backgroundColor: 'white',
              elevation: 10,
              borderRadius: 10,
          }}
        >
          <View
            style = {styles.boxInsideView}
          >
            <Image
              style = {styles.boxLogo}
              source = {require('../assets/light.png')}
            />
            <Text
              style = {styles.boxText}
            >
              Cường độ sáng
            </Text>
            <Text
              style = {styles.boxControlText}
              // return wet sensor here
            >
              LIGHT_SENSOR
            </Text>
          </View>
        </TouchableOpacity>        
      </View>

      <View
        style = {styles.standardView}
      >
        <TouchableOpacity
          style = {{
              width: '100%',
              height: '100%',
              backgroundColor: 'white',
              elevation: 10,
              borderRadius: 10,
          }}
        >
          <View style = {styles.boxFeatures}>
            <Image
              style = {styles.boxFeaturesLogo}
              source = {require('../assets/statistic.png')}
            />
            <Text style = {styles.boxFeaturesText}>
              THỐNG KÊ CHI TIẾT
            </Text>
          </View>
        </TouchableOpacity>        
      </View>

      <View
        style = {styles.standardView}
      >
        <TouchableOpacity
          style = {{
              width: '100%',
              height: '100%',
              backgroundColor: 'white',
              elevation: 10,
              borderRadius: 10,
          }}
        >
          <View style = {styles.boxFeatures}>
            <Image
              style = {styles.boxFeaturesLogo}
              source = {require('../assets/control.png')}
            />
            <Text style = {styles.boxFeaturesText}>
              ĐIỀU KHIỂN THIẾT BỊ
            </Text>
          </View>
        </TouchableOpacity>        
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'nowrap',
    backgroundColor: '#F5FDFB',
  },
  standardView : {
    width: '90%',
    height: 120,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  boxInsideView: {
    flex: 1,
    justifyContent: 'space-evenly',
    flexDirection: 'column',
    margin: 10,
  },
  boxLogo: {
    resizeMode: 'contain',
    width: 35,
    height: 35,
  },
  boxText: {
    fontWeight: 'normal',
    fontSize: 14,
    fontFamily: 'BeVietnam-Regular',
    marginTop: 5,
    marginBottom: 5,
    color: '#06492C',
  },
  boxControlText: {
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: 'BeVietnam-Bold',
    color: '#06492C',
  },
  boxFeatures: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },  
  boxFeaturesText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'BeVietnam-Bold',
    fontSize: 18,
    color: '#06492C',
  },
  boxFeaturesLogo: {
    resizeMode: 'contain',
    width: 35,
    height: 35,
    marginRight: 10,
  }
});
