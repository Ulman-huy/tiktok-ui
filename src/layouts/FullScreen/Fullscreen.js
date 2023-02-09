import styles from './Fullscreen.module.scss';
import classNames from 'classnames/bind';
import Header from '../components/Header';
import Sidebar from './Sidebar';

const cx = classNames.bind(styles);

function Fullscreen({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header className={cx('header')} coins />
            <div className={cx('container')}>
                <div className={cx('left-container')}>
                    <div className={cx('mask')}></div>
                    <div className={cx('sidebar')}>
                        <Sidebar />
                    </div>
                </div>
                <div className={cx('right-container')}>{children}</div>
            </div>
        </div>
    );
}

export default Fullscreen;
