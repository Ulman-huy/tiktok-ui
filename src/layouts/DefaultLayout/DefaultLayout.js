import PropTypes from 'prop-types';
import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';
import Header from '~/layouts/components/Header';
import Sidebar from './Sidebar';
import Download from '../components/Download';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <div className={cx('wrapper')}>
                    <div className={cx('mask')}></div>
                    <Sidebar />
                </div>
                <div className={cx('wrapper')}>
                    <div className={cx('content')}>{children}</div>
                </div>
            </div>
            <Download />
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
