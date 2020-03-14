import React from 'react';
import {View, Text, Button} from 'react-native';
import {connect} from 'react-redux';
import { incrementCounter, decrementCounter } from "./actions/counter.actions";

const ReduxApp = props => {
  console.log(props);
  return (
    <View>
      <Text>Welcome to redux tutorial</Text>
      <View style={{paddingTop: 50}}>
        <Button onPress={() => props.incrementCounter()} title="Increment" />
        <View style={{paddingTop: 20}}>
          <Button onPress={() => props.decrementCounter()} title="Decrement" />
        </View>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: 50,
        }}>
        <Text style={{fontSize: 32}}>{props.count}</Text>
      </View>
    </View>
  );
};

const mapStateToProps = state => ({
  count: state.Counter.count,
});

const mapDispatchToProps = dispatch => ({
    incrementCounter: () => dispatch(incrementCounter()),
    decrementCounter: () => dispatch(decrementCounter())
});

export default connect(mapStateToProps, mapDispatchToProps)(ReduxApp);
