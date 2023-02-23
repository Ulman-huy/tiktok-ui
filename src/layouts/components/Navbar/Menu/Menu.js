import PropTypes from 'prop-types';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import { useContext } from 'react';
import { GlobalContext } from '~/App';

const cx = classNames.bind(styles);

function Menu({ children }) {
    const { fullscreen } = useContext(GlobalContext);

    return <nav className={cx('menu', { fullscreen: fullscreen })}>{children}</nav>;
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Menu;
