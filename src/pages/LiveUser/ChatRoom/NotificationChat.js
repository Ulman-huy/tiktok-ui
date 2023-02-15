import styles from './ChatRoom.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function NotificationChat({ name, txt }) {
    return (
        <div className={cx('notification')}>
            <div className={cx('icon')}>
                <FontAwesomeIcon icon={faRightToBracket} />
            </div>
            <div className={cx('name')}>{name}</div>
            <div className={cx('title')}>{txt}</div>
        </div>
    );
}

export default NotificationChat;
