import { registerRootComponent } from 'expo';
import React from 'react';
import App from './App';

const Index = () => {
  return <App />;
};

registerRootComponent(Index);
