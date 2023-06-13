/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  ImageBackground
} from 'react-native';

import { Card, SocialIcon } from '@rneui/themed';

import {
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({ children, title }: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>

        <ImageBackground source={require('./component/img/background.jpg')} resizeMode="cover" style={styles.image}>
          <View style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <Image source={require('./component/img/mimi.png')} style={styles.sectionHeaderImage} />
          </View>
        </ImageBackground>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Quem sou Eu!">
            Olá, meu nome é <Text style={styles.highlight}>Michelle</Text> (mas você já sabe disso!) e esse é meu primeiro projeto em React Native!
          </Section>
          <View style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white, marginTop: 10, paddingHorizontal: 20,
          }}>
            <Card.Image
              style={{ padding: 0, marginLeft: 5, marginRight: 5 }}
              source={require('./component/img/android.jpeg')}
            />
          </View>
          <View style={styles.sectionContainer}>
            <Text
              style={[
                styles.sectionDescription,
                {
                  color: isDarkMode ? Colors.light : Colors.dark,
                },
              ]}>
              No projeto de React eu falei bastante sobre mim, né? Agora vou ter que usar toda a minha criatividade (que não é muita) para fazer esse projeto.
            </Text>
          </View>

          <Section title="Vamos falar sobre musica?">
            Como vou em um show amanhã (feriado do dia 08/06), vou apresentar os artistas/bandas que eu mais gosto, mas oh! não vale me julgar, ok?!
            {'\n'}Vamos começar pelos nacionais:
            {'\n'}Minha banda favorita BR e o NxZero (nunca foi só uma fase!), imagina a minha felicidade quando eles anunciaram a volta com a tour Cedo ou Tarde? (pois é!)
            {'\n'}Agora os internacionais (que são vários):
            Maroon5, Justin Bieber, Post Malone, Bruno Mars, Imagine Dragons, Beyonce, Shawn Mendes...
            {'\n'}Se eu for colocar todos, preciso de umas 10 páginas.
          </Section>

          <Section title="Shows que eu ja fui">
            Como eu ja disse no projeto de React, eu gosto muito de shows, então pode imaginar que eu já fui em vários! Vou listar os que eu mais curti:
            {'\n'}Beyonce, Imagine Dragons (prometeu tudo e entregou tudo e mais), Bruno Mars, Maneva, NxZero, Maroon5, Justin Bieber, Post Malone, Alok, Jason Derulo, Demi Lovato...
            vixi, várioooos!

          </Section>
          <Section title="Shows que eu quero ir">
            Preciso viver até ver todos esses shows:
            {'\n'}Ed Sheraan, Shawn Mendes, Destiny's Child, Chris Brown, Justin Timberlake, Ne-yo, Strike, Goo Goo Dolls

          </Section>
          <Section title="Isso e tudo, pessoal">
            Quer me fazer feliz? Me chama para um show, mas um show bom!
            {'\n'}E é sobre isso, não tenho mais idéia do que escrever! Espero que tenham aproveitado, até o próximo projeto.
          </Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionHeader: {
    marginTop: 20,
    marginBottom: 10,
    fontSize: 24,
    color: 'white',
    fontWeight: '600',
  },
  sectionHeaderImage: {
    marginTop: 10,
    marginBottom: 10,
    width: 200,
    height: 200,
    resizeMode: 'contain',
    alignContent: "center"
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
});

export default App;
