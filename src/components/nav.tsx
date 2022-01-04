import '../styles/nav.css';

import React from 'react';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { InfoDialog } from './infodialog';

type Props = {
    cookieType: string;
};

export const Nav: React.FC<Props> = ({ cookieType }) => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="nav-container">
            <header className="nav-wrapper">
                <nav className="nav">
                    <a className="logo" href="/">
                        Fortune
                    </a>
                    <div className="nav-button-container">
                        <div className="nav-cookie-type">{cookieType}</div>
                        <InfoOutlinedIcon
                            className="nav-info-button"
                            onClick={handleClickOpen}
                        ></InfoOutlinedIcon>
                        <InfoDialog
                            open={open}
                            onClose={handleClose}
                        ></InfoDialog>
                    </div>
                </nav>
            </header>
        </div>
    );
};
