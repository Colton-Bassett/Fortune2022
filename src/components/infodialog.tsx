import '../styles/nav.css';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

import CookiesBanner from '../images/cookiesbanner.png';

type Props = {
    open: boolean;
    onClose: () => void;
};

export const InfoDialog: React.FC<Props> = ({ open, onClose }) => {
    return (
        <Dialog
            onClose={onClose}
            open={open}
            scroll="paper"
            PaperProps={{
                style: {
                    width: '90vw',
                    maxWidth: '500px',
                    height: '95vh',
                    margin: '0 28px'
                }
            }}
        >
            <DialogContent className="nav-dialog-body-container">
                <h1 className="nav-dialog-title">Fortune</h1>
                <h3 className="nav-dialog-subtitle">
                    Fortune cookies are a crisp and sugary cookie with a piece
                    of paper inside, a "fortune"
                </h3>
                <img
                    src={CookiesBanner}
                    alt="cookies banner"
                    className="nav-dialog-banner"
                ></img>

                <div className="nav-dialog-body">
                    <h2 className="nav-dialog-body-title">
                        Cookies come in three flavors
                    </h2>
                    <div className="nav-dialog-section">
                        <h3 className="nav-dialog-section-title">Fortune</h3>
                        <h4 className="nav-dialog-section-text">
                            Provides insight or a minor prophecy
                        </h4>
                    </div>
                    <div className="nav-dialog-section">
                        <h3 className="nav-dialog-section-title">Answer</h3>
                        <h4 className="nav-dialog-section-text">
                            Gives a response to a "yes" or "no" question
                        </h4>
                    </div>
                    <div className="nav-dialog-section">
                        <h3 className="nav-dialog-section-title">
                            Lucky Numbers
                        </h3>
                        <h4 className="nav-dialog-section-text">
                            Displays a series of lucky numbers
                        </h4>
                    </div>
                </div>
            </DialogContent>
            <DialogActions
                style={{
                    height: '40px',
                    borderTop: '1px solid transparent',
                    borderColor: 'rgba(0, 0, 0, 0.12)'
                }}
            ></DialogActions>
        </Dialog>
    );
};
