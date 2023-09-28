import {useState} from "react";
import { lightTheme, darkTheme } from './themes/theme';
import css from './App.module.css';
import {Navigate, Route, Routes} from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';

import { ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from '@material-ui/core';
import {LanguageProvider} from "./language/language-context";
import { MainLayout } from './layouts';
import {Header, ThemeSelection, LanguageSwitcher} from './components';
import { ThemeContext } from './themes/theme-context';


const App = () => {

    const [theme, setTheme] = useState(darkTheme);

    const toggleTheme = () => {
        setTheme(theme === lightTheme ? darkTheme : lightTheme);
    };

    return (
        <Provider store={store}>
            <LanguageProvider>
                <ThemeContext.Provider value={{ theme, setTheme: toggleTheme }}>
                    <ThemeProvider theme={theme}>
                        <CssBaseline />

                        <div className={css.setting}>
                            <div className={css.settingItem}>
                                <ThemeSelection />
                            </div>
                            <div className={css.settingItem}>
                                <LanguageSwitcher />
                            </div>

                        </div>
                        <Header />
                        <Routes>
                            <Route index element={ <Navigate to={'home'} /> } />
                            <Route path={'home'} element={<MainLayout/>}/>

                        </Routes>
                    </ThemeProvider>
                </ThemeContext.Provider>
            </LanguageProvider>
        </Provider>
    );
}

export {App};