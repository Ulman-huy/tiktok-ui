import styles from './LiveUser.module.scss';
import classNames from 'classnames/bind';
import LiveHeader from './LiveHeader';
import LiveContent from './LiveContent';
import LiveGift from './LiveGift';
import ChatRoom from './ChatRoom';
import LiveSuggest from './LiveSuggest';
import { createContext, useEffect, useRef, useState } from 'react';

const cx = classNames.bind(styles);

export const Style = createContext();

function LiveUser() {
    const [hideChat, setHideChat] = useState(false);

    return (
        <Style.Provider value={{ hideChat, setHideChat }}>
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
        </Style.Provider>
    );
}

export default LiveUser;
