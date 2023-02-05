import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './AccountPreview.module.scss';

const cx = classNames.bind(styles);

function AccountPreview({ info, bio = false }) {
    const convertCount = (count) => {
        if (count >= 1000000) {
            return (count / 100000).toFixed(1) + 'M ';
        } else if (count < 1000000) {
            return (count / 1000).toFixed(1) + 'K ';
        }
    };

    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <img className={cx('avatar')} src={info.avatar} alt={info.full_name} />
                <Button className={cx('follow-btn')} primary>
                    Follow
                </Button>
            </header>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>{info.nickname}</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />
                </p>
                <p className={cx('name')}>{info.full_name}</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>{convertCount(info.followers_count)}</strong>
                    <span className={cx('label')}>Follower</span>
                    <strong className={cx('value')}>{convertCount(info.likes_count)}</strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
            {bio && <footer className={cx('bio')}>day la bio</footer>}
        </div>
    );
}

AccountPreview.propTypes = {
    info: PropTypes.object,
    bio: PropTypes.bool,
};

export default AccountPreview;
