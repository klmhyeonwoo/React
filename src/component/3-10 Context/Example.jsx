import React, { Component } from 'react'
import ThemedButton from './ThemedButton';
import { ThemeContext, themes } from './ThmemContext';

export default class Example extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: themes.light,
        }
        this.toggleTheme = () => {
            this.setState((prev) => ({
                theme: prev.theme === themes.dark ? themes.light : themes.dark,
            }))
        };
    }
    render() {
        return (
            <div>
                <ThemeContext.Provider value={this.state.theme}>
                    <ThemedButton changeThemes={this.toggleTheme} />
                    <ThemeContext.Consumer>
                        {(theme) => (
                            <div style={{ height: 300, width: 300, backgroundColor: theme.background }}></div>)
                        }
                    </ThemeContext.Consumer>
                </ThemeContext.Provider>
                <ThemedButton />
            </div>
        )
    }
}
