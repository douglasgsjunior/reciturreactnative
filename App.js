import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image, Dimensions } from 'react-native';

const App = () => {
  const [activeButton, setActiveButton] = useState('page1');

  const handleButtonPress = (page) => {
    setActiveButton(page);
  };

  const renderPage = () => {
    switch (activeButton) {
      case 'page1':
        return (
          <View style={styles.page}>
            <Text style={styles.pageText}>Página 1</Text>
          </View>
        );
      case 'page2':
        return (
          <View style={styles.page}>
            <Text style={styles.pageText}>Página 2</Text>
          </View>
        );
      case 'page3':
        return (
          <View style={styles.page}>
            <Text style={styles.pageText}>Página 3</Text>
          </View>
        );
      case 'page4':
        return (
          <View style={styles.page}>
            <View style={styles.header}>
              <View style={styles.logo}>
                <Image source={require('./recitur.png')} alt="ReciTur Logo" />
              </View>
              <View style={styles.headerText}>
                <Text>Opções</Text>
              </View>
              <View style={styles.null}></View>
            </View>
            <View style={styles.empty}></View>
            <TouchableOpacity
              style={styles.emailsupport}
              onPress={() => openEmail()}
            >
              <Text>Precisa falar conosco? Clique aqui!</Text>
            </TouchableOpacity>
            <View style={styles.empty2}></View>
            <View style={styles.vazio}>
              <View style={styles.pedidos}>
                <TouchableOpacity
                  style={styles.emailsupport2}
                  onPress={() => openEmail2()}
                >
                  <Text>É guia e quer se cadastrar? Clique aqui!</Text>
                </TouchableOpacity>
                <Text>Mande para nosso email:</Text>
                <Text>Nome</Text>
                <Text>E-mail</Text>
                <Text>Foto (máx. 2 mega)</Text>
                <Text>PDF do seu CPF</Text>
                <Text>PDF do seu certificado Cadastur</Text>
                <Text>Local aonde atua (ex.: Derby, Recife - PE)</Text>
                <Text>Uma breve descrição sobre você</Text>
              </View>
            </View>
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      {renderPage()}
      <View style={styles.navbar}>
        <TouchableOpacity
          style={[
            styles.navbarButton,
            activeButton === 'page1' && styles.activeButton,
          ]}
          onPress={() => handleButtonPress('page1')}
        >
          <Image
            source={require('./home.png')}
            style={[styles.icon, activeButton === 'page1' && styles.activeIcon]}
          />
          <Text>Início</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.navbarButton,
            activeButton === 'page2' && styles.activeButton,
          ]}
          onPress={() => handleButtonPress('page2')}
        >
          <Image
            source={require('./list.png')}
            style={[styles.icon, activeButton === 'page2' && styles.activeIcon]}
          />
          <Text>Lista</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.navbarButton,
            activeButton === 'page3' && styles.activeButton,
          ]}
          onPress={() => handleButtonPress('page3')}
        >
          <Image
            source={require('./tour-guide.png')}
            style={[styles.icon, activeButton === 'page3' && styles.activeIcon]}
          />
          <Text>Guia</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.navbarButton,
            activeButton === 'page4' && styles.activeButton,
          ]}
          onPress={() => handleButtonPress('page4')}
        >
          <Image
            source={require('./gear.png')}
            style={[styles.icon, activeButton === 'page4' && styles.activeIcon]}
          />
          <Text>Opções</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    height: '5.5%',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    zIndex: 1,
  },
  navbarButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeButton: {
    backgroundColor: '#DFDFDF',
    borderRadius: 24,
  },
  icon: {
    width: '20%',
    height: '40%',
    tintColor: '#5F5F5F',
  },
  activeIcon: {
    tintColor: '#000000',
  },
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: windowWidth,
    height: windowHeight,
  },
  pageText: {
    fontSize: 24,
  },
  header: {
    // Add your styles here
  },
  logo: {
    // Add your styles here
  },
  headerText: {
    // Add your styles here
  },
  null: {
    // Add your styles here
  },
  empty: {
    // Add your styles here
  },
  empty2: {
    // Add your styles here
  },
  vazio: {
    // Add your styles here
  },
  pedidos: {
    // Add your styles here
  },
});

export default App;
