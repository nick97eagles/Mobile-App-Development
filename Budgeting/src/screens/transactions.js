import React from 'react';
import { Alert, StyleSheet } from 'react-native';
import {
  Body,
  Container,
  Content,
  Right,
  Text,
  CheckBox,
  List,
  ListItem,
  Fab,
  Icon
} from 'native-base';

export default class transactions extends React.Component {
  static navigationOptions = {
    title: 'Budgeting App'
  };

  constructor(props) {
    super(props);
    this.state = {
      transaction: [{id:1 , label: 'walmart', amount: "$12.00"}, {id: 2, label: 'Gamestop', amount: "$36.00"}]
    };
  }

  /*** User Actions Handlers ***/
  _handleTransactionPress(transaction) {
    this.state.transaction.forEach(p => {
      if (transaction.id === p.id) {
        p.gotten = !p.gotten;
        // this.setState({ active: true });
      }
      return p;
    });
    this.setState({ transactions: this.state.transactions });
  }

  _handleAddTransactionPress() {
    this.props.navigation.navigate('NewTransaction', {
      newTransaction: transaction => {
        this.setState({
          transactions: this.state.transactions.concat(transaction)
        });
      },
      deleteTransaction: transaction => {
        this.setState({
          transactions: this.state.transactions.filter(p => p.id !== transaction.id)
        }); 
      },
      transactionsList: this.state.transactions
    });
  }    

  _handleClearPress() {
    Alert.alert('Clear all transactions?', null, [
      { text: 'No' },
      { text: 'Yes', onPress: () => this.setState({ transaction: [] }) }
    ]);
  }

  render() {
    return (
      <Container>
        <Content>
          <List>
            {this.state.transaction.map(p => {
              return (
                <ListItem
                  key={p.id}
                  onPress={this._handleTransactionPress.bind(this, p)}
                >
                  <Body>
                    <Text  style={{ 
                      color: p.gotten ? '#bbb' : '#000', 
                      textDecorationLine: p.gotten ? 'line-through' : 'none'
                      }}>
                      {p.label} 
                      {" "}
                        {p.amount}  
                    </Text>
                  </Body>
                  <Right>
                    <CheckBox
                    checked={p.gotten}
                    onPress={this._handleTransactionPress.bind(this, p)}
                    />
                  </Right>
                </ListItem>
              );
            })}
          </List>
        </Content>
        <Fab style={{ backgroundColor: '#5067FF' }} position="bottomRight"
        onPress={this._handleAddTransactionPress.bind(this)}
        >
          <Icon name="add" />
        </Fab>
        <Fab style={{ backgroundColor: 'red' }} position="bottomLeft"
        onPress={this._handleClearPress.bind(this)}
        >
          <Icon ios="ios-remove" android="md-remove" />
        </Fab>
      </Container>
    );
  }
}

// const styles = StyleSheet.create({
//   yes: {
//   },
//   no: {
//     textDecorationLine: 'line-through',
//   }
// });