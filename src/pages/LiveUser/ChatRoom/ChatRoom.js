import styles from './ChatRoom.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faCoins, faFaceDizzy, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import Image from '~/components/Image';
import { RightArrowIcon } from '~/components/Icons';
import NotificationChat from './NotificationChat';
import UserChat from './UserChat';

const cx = classNames.bind(styles);

function ChatRoom() {
    return (
        <div className={cx('chat-room')}>
            <div className={cx('chat-container')}>
                <div className={cx('chat-header')}>
                    <div className={cx('close-chat')}>
                        <RightArrowIcon />
                    </div>
                    <div className={cx('title')}>
                        <p>Trò chuyện LIVE</p>
                    </div>
                </div>
                <div className={cx('top-live')}>
                    <div className={cx('title')}>
                        <p>Người xem hàng đầu</p>
                        <span>
                            <FontAwesomeIcon icon={faAngleRight} />
                        </span>
                    </div>
                    <div className={cx('top-user')}>
                        <div className={cx('top-1')}>
                            <p className={cx('one')}>1</p>
                            <div className={cx('user')}>
                                <Image className={cx('user-image-t1')} src="" />
                                <div className={cx('name')}>Thế giới LeGo</div>
                                <div className={cx('coins')}>
                                    <FontAwesomeIcon icon={faCoins} />
                                    <p>0</p>
                                </div>
                            </div>
                        </div>
                        <div className={cx('top-2-3')}>
                            <div className={cx('user-2')}>
                                <p className={cx('two')}>2</p>
                                <div className={cx('user')}>
                                    <Image className={cx('user-image-t1')} src="" />
                                    <div className={cx('info')}>
                                        <div className={cx('name')}>Thế giới LeGo</div>
                                        <div className={cx('coins')}>
                                            <FontAwesomeIcon icon={faCoins} />
                                            <p>0</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('user-3')}>
                                <p className={cx('two')}>3</p>
                                <div className={cx('user')}>
                                    <Image className={cx('user-image-t1')} src="" />
                                    <div className={cx('info')}>
                                        <div className={cx('name')}>Thế giới LeGo</div>
                                        <div className={cx('coins')}>
                                            <FontAwesomeIcon icon={faCoins} />
                                            <p>0</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('chat-live')}>
                    <div className={cx('chat-container')}>
                        <div className={cx('chat-content')}>
                            <UserChat src={''} name="bon ^^" txt={'Halooo!'} />
                            <NotificationChat name={'user129132'} txt="đã tham gia" />
                        </div>
                        <div className={cx('chat-input')}>
                            <div className={cx('div-chat')}>
                                <input className={cx('input')} placeholder="Thêm bình luận..." />
                                <div className={cx('chat-emoji')}>
                                    <FontAwesomeIcon icon={faFaceDizzy} />
                                </div>
                            </div>
                            <div className={cx('send')}>
                                <FontAwesomeIcon icon={faPaperPlane} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChatRoom;
