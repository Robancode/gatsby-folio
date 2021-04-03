import React, { createContext, Component } from 'react';

export const ThemeContext = createContext()

class ThemeContextProvider extends Component {
    state = { 
        isLightTheme: true,
        light: {syntax: '#7f449d', ui: '#ddd', bg: '#f0f4f7'},
        dark: {syntax: '#ddd', ui: '#333', bg:"#555"}
     }
     toggleTheme= () =>{
        this.setState({isLightTheme: !this.state.isLightTheme})
     }
    render() { 
        return ( 
            <ThemeContext.Provider value={{...this.state, toggleTheme: this.toggleTheme}}>
                {this.props.children}
            </ThemeContext.Provider>
         );
    }
}
 
export default ThemeContextProvider;