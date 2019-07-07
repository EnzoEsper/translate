import React from 'react';
import UserCreate from './UserCreate';
import LangugageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';
import LanguageSelector from './LanguageSelector';

class App extends React.Component {
  
  state = { language: 'english'};

  onLanguageChange = (language) => {
    this.setState({ language });
  }

  render() {
    return(
      <div className="ui container">
        <LanguageSelector onLanguageChange={this.onLanguageChange}/>

        <ColorContext.Provider value="primary">
          <LangugageContext.Provider value={this.state.language}>
            <UserCreate />
          </LangugageContext.Provider>
        </ColorContext.Provider>
      </div>
    );
  }

};

export default App; 