import assert from 'assert';
import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducer';
import ReduxThunk from 'redux-thunk';
import * as actions from '../actions';
import chromeMock from './chrome-mock';

const store = createStore(reducer,
  applyMiddleware(
    ReduxThunk
  )
);

it('should change DC secondLanguage on changeDCLanguage', (done) => {
  console.log('TEST: should change DC secondLanguage on changeDCLanguage');
  store.dispatch(actions.changeDCLanguage('fr'))
    .then(() => {
      const state = store.getState();
      assert(state.secondLanguage === 'fr');
      done();
    });
});

it('should turn DC on on turnDCOn', (done) => {
  console.log('TEST: should turn DC on on turnDCOn');
  store.dispatch(actions.turnDCOn())
    .then(() => {
      const state = store.getState();
      assert(state.isOn === true);
      done();
    });
});

it('should turn DC off on turnDCOff', (done) => {
  console.log('TEST: should turn DC off on turnDCOff');
  store.dispatch(actions.turnDCOff())
    .then(() => {
      const state = store.getState();
      assert(state.isOn === false);
      done();
    });
});
