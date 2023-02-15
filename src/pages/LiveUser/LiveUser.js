import styles from './LiveUser.module.scss';
import classNames from 'classnames/bind';
import LiveHeader from './LiveHeader';
import LiveContent from './LiveContent';
import LiveGift from './LiveGift';
import ChatRoom from './ChatRoom';
import LiveSuggest from './LiveSuggest';

const cx = classNames.bind(styles);

function LiveUser() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('live-container')}>
                    <LiveHeader />
                    <LiveContent />
                    <LiveGift />
                    <LiveSuggest />
                </div>
                <ChatRoom />
            </div>
        </div>
    );
}

export default LiveUser;
