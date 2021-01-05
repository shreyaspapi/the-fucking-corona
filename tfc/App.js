import React, { useEffect, useState } from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  ActivityIndicator
} from 'react-native';

import { windowHeight, windowWidth } from './utils/dimensions';
import LinearGradient from 'react-native-linear-gradient';
import FormButton from './components/formButton';
import UnTappedButton from './components/unTappedButton';
import TextSection from './components/textSection';
import TextSection1 from './components/textSection1';
import TextSection2 from './components/textSection2';
import TextSection3 from './components/textSection3';

const App = () => {
  const [tab, setTab] = useState(0)
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  var randomNum = Math.floor(Math.random() * 121) + 1;
  var textRants = ["Corona is overrated anyway, right?", "Wow, that's gonna be the depressing time.", "Attend your online lectures you stupid fuck", "It would'nt hurt you to get off your fucking ass once in a while, lucky for you stats show that its dangerous", "Stay home and do your fucking homework you wimpy ass", "For fucks sake just stay indoors will ya?", "bye bye to all your plans, as if you had one you lonely fuck", "The situation isn't any fucking better than yesterday", "Stay the fuck away from people today", "Seems like another day of swearing through your mask.", "You better be wearing that fucking mask today"]

  var gradiants = [["#F2994A", "#F2C94C"], ['#ff4e00', '#ec9f05'],["#4AC29A", "#BDFFF3"], ["#20002c", "#cbb4d4"], ["#ee0979", "#ff6a00"]]

  useEffect(() => {
    fetch('https://coronavirus-19-api.herokuapp.com/countries')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  randomTextRant = () => {
    var randomNumber = Math.floor(Math.random() * textRants.length);
    return textRants[randomNumber];
  }

  randomGradiantSelector = () => {
    var randomNumber = Math.floor(Math.random() * gradiants.length);
    return gradiants[randomNumber];
  }

  return (
    <LinearGradient
      // ['#ef5734', '#ef5734', '#ffcc2f']
      colors={randomGradiantSelector()}
      style={styles.background}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <SafeAreaView style={{ height: '100%' }}>
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={{ paddingRight: windowWidth * 0.05 }}>
              {
                tab == 0 ? <FormButton buttonTitle="Cases"></FormButton> : <UnTappedButton buttonTitle="Cases" onPress={() => setTab(0)}></UnTappedButton>
              }
            </View>
            {
              tab == 1 ? <FormButton buttonTitle="Deaths"></FormButton> : <UnTappedButton buttonTitle="Deaths" onPress={() => setTab(1)}></UnTappedButton>
            }
          </View>
          {isLoading ? <ActivityIndicator /> : 
          <View>
            <Text style={styles.textEle}>{data[randomNum].country.toString()}</Text>
          {
            tab == 0 ?
              <View>
                <View style={styles.safeRow1}>
                  <TextSection sectionTitle='Today' sectionData={data[randomNum].todayCases.toString() + ' Cases'} sectionRant={randomTextRant()}></TextSection>
                </View>
                <View style={styles.safeRow}>
                  <TextSection1 sectionTitle='All' sectionData={data[randomNum].cases.toString() + ' Cases'} sectionRant={randomTextRant()}></TextSection1>
                </View>
              </View> :
              <View>
                <View style={styles.safeRow1}>
                  <TextSection2 sectionTitle='Today' sectionData={data[randomNum].todayDeaths.toString() + ' Deaths'} sectionRant={randomTextRant()}></TextSection2>
                </View>
                <View style={styles.safeRow}>
                  <TextSection3 sectionTitle='All' sectionData={data[randomNum].deaths.toString() + ' Deaths'} sectionRant={randomTextRant()}></TextSection3>
                </View>
              </View>
          }
          </View>
        }
        </View>
        <View style={styles.footer}>
          <Image style={{ alignSelf: "center", width: 100, height: 30, marginBottom: 30 }} source={require('./assets/who.png')} />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
  },
  container: {
    flexDirection: 'column'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: windowHeight * 0.02
  },
  safeRow: {
    paddingHorizontal: windowWidth * 0.05,
    paddingTop: windowHeight * 0.05
  },
  safeRow1: {
    paddingHorizontal: windowWidth * 0.05,
    paddingTop: windowHeight * 0.02
  },
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  textEle: {
    fontSize: 18,
    color: 'white',
    fontFamily: 'Poppins-Bold',
    paddingHorizontal: windowWidth * 0.05,
    paddingTop: windowHeight * 0.06,
  }
});

export default App;
