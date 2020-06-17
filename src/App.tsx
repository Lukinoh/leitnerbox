import React from 'react';
import './App.css';
import { PrimaryButton } from '@fluentui/react';

interface AppProps {}

function App({}: AppProps) {

  return (
    <div className="App">
        <PrimaryButton>I am a button.</PrimaryButton>
    </div>
  );
}

export default App;
