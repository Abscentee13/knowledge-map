import {Typography} from '@mui/material';

import css from './Header.module.css';


import {useContext} from 'react';
import {ThemeContext} from '../../themes/theme-context';


const Header = () =>{
    const {theme} = useContext(ThemeContext);

return(
        <div className={css.header}>
            <div className={css.headerLogo}>
            <Typography variant="h5" component="h2" color={theme.palette.primary.contrastText}>
                Co module work
                for Okten Web School
            </Typography>
            </div>
            <div className={css.headerMenu}>
                GenreList
            </div>

            <div className={css.headerProfile}>
                avatarUrl ={'images/Abscentee.jpg'} name ={'Abscentee'} email ={'Abscentee@sss.com'}
            </div>
    </div>
);
}

export {Header};