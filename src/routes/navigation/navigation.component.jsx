import { Outlet, Link } from 'react-router-dom';
import { Fragment, useContext } from 'react';
import { UserContext } from '../../components/context/context.components';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import { signOutUser } from '../../utils/firebase/firebase.utils';
import './navigation.styles.scss';

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    
    const signOutHandler = async () => {
      await signOutUser();
    }
    
    return (
      <Fragment>
        <div className="navigation">
          <Link className="logo-container" to='/'>
            <CrwnLogo className='logo' />
          </Link>
          <div className="nav-links-container">
            <Link className="nav-link" to='/shop'>
                Shop
            </Link>
            {
              currentUser ? 
              (
                <span className="nav-link" onClick={signOutHandler}>Sign Out</span>
              ) :
              (
                <Link className="nav-link" to='/auth'>
                  Sign In
                </Link>
              )
            }
            
          </div>
        </div>
        <Outlet/>
      </Fragment>
    )
}

export default Navigation;