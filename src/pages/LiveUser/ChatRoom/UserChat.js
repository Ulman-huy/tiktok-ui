import styles from './ChatRoom.module.scss';
import classNames from 'classnames/bind';
import Image from '~/components/Image';
const cx = classNames.bind(styles);

function UserChat({ src, name, txt, title }) {
    return (
        <div className={cx('chat-user')}>
            <Image src={src} alt="" className={cx('image')} />
            <div className={cx('name')} title={title}>
                {name}
            </div>
            <div className={cx('chat-txt')}>{txt}</div>
        </div>
    );
}

export default UserChat;
