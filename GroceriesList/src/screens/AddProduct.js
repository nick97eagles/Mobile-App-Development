/*
 * GroceriesList/src/screens/AddProduct.js
 *
 */
 
import React from 'react';
import CustomPrompt from '../components/CustomPrompt';
import {AsyncStorage} from 'react-native';
import {
  Body,
  Container,
  Content,
  List,
  ListItem,
  Right,
  Text,
  Fab,
  Icon
} from 'native-base';

export default class AddProduct extends React.Component {
  static navigationOptions = {
    title: 'Add a product'
  };

  constructor(props) {
    super(props);
    this.state = {
        allProducts: [
            {id: 1, name: 'bread'},
            {id: 2, name: 'eggs'},
            {id: 3, name: 'cereal'},
            {id: 4, name: 'hot pockets'},
            {id: 5, name: 'cookies'}
        ],
        productsInList: [],
        openPrompt: false,
        newProduct: ''
    };
  }

  async componentWillMount() {
    const savedProducts = await AsyncStorage.getItem('@allProducts');
    if(savedProducts){
      this.setState({
        allProducts: JSON.parse(savedProducts)
      });
    }
    this.setState({
      productsInList: this.props.navigation.state.params.productsInList
    });
  }

  async addNewProduct() {
    const newProductsList = this.state.allProducts.concat({
      name: this.state.newProduct,
      id: Math.floor(Math.random() * 100000)
    });

    await AsyncStorage.setItem(
      '@allProducts',
      JSON.stringify(newProductsList)
    )

    this.setState({
      allProducts: newProductsList,
      newProduct: '',
      openPrompt: false
    });
  }

  /*** User Actions Handlers ***/

  _handleProductPress(product) {
    const productIndex = this.state.productsInList.findIndex(
      p => p.id === product.id
    );
    if (productIndex > -1) {
      this.setState({
        productsInList: this.state.productsInList.filter(
          p => p.id !== product.id
        )
      });
      this.props.navigation.state.params.deleteProduct(product);
    } else {
      this.setState({
        productsInList: this.state.productsInList.concat(product)
      });
      this.props.navigation.state.params.addProduct(product);
    }
  }

  _handleAddProductPress() {
    this.setState({ openPrompt: true });
  }

  async _handleRemovePress(product) {
    this.setState({
      allProducts: this.state.allProducts.filter(p => p.id !== product.id)
    });

    await AsyncStorage.setItem(
      '@allProducts',
      JSON.stringify(
        this.state.allProducts.filter(p => p.id !== product.id)
      )
    );
  }


  /*** Render ***/
  render() {
    return (
      <Container>
        <Content>
          <List>
          {this.state.allProducts.map(product => {
              const productsInList = this.state.productsInList.find(
                  p => p.id === product.id
              )
              return (
                <ListItem
                  key={product.id}
                    onPress={this._handleProductPress.bind(this, product)}
                >
                  <Body>
                    <Text
                        style={{
                            color: productsInList
                            ? '#bbb'
                            : '#000'
                        }}
                    >
                        {product.name}
                    </Text>
                    {productsInList &&
                      <Text note>
                        {'Already in shopping list'}
                      </Text>}
                  </Body>
                  <Right>
                    <Icon
                      ios="ios-remove-circle"
                      android="md-remove-circle"
                      style={{ color: 'red' }}
                        onPress={this._handleRemovePress.bind(this,product)}
                    />
                  </Right>
                </ListItem>
              );
            })}
          </List>
        </Content>
        <Fab
          style={{ backgroundColor: '#5067FF' }}
          position="bottomRight"
            onPress={this._handleAddProductPress.bind(this)}
        >
          <Icon name="add" />
        </Fab>
          <CustomPrompt
            openPrompt={this.state.openPrompt}
            closePrompt={() => this.setState({ openPrompt: false })}
            text={this.state.newProduct}
            setText={(text) => this.setState({ newProduct: text })}
            addProduct={() => this.addNewProduct()}
          />
      </Container>
    );
  }
}