import styles from './AccountLoading.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function AccountLoading() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('avatar')}></div>
            <div className={cx('info')}>
                <div className={cx('nickname')}></div>
                <div className={cx('name')}></div>
            </div>
        </div>
    );
}

export default AccountLoading;
