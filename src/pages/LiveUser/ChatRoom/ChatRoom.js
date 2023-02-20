import styles from './ChatRoom.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faCoins, faFaceDizzy, faHeart, faPaperPlane, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons';
import Image from '~/components/Image';
import { RightArrowIcon } from '~/components/Icons';
import NotificationChat from './NotificationChat';
import UserChat from './UserChat';
import { useContext, useState } from 'react';
import { Style } from '../LiveUser';
import Button from '~/components/Button';
import Tippy from '@tippyjs/react/headless';
import EmojiPicker from 'emoji-picker-react';

const cx = classNames.bind(styles);

function ChatRoom() {
    const { hideChat, setHideChat } = useContext(Style);
    const [showListTopLive, setListTopLive] = useState(false);
    const [showEmoji, setShowEmoji] = useState(false);

    const handleHideChatRoom = () => {
        setHideChat(true);
    };
    const handleShowListTopLive = () => {
        setListTopLive(true);
    };
    const handleHideListTopLive = () => {
        setListTopLive(false);
    };
    const handleEmoji = () => {
        setShowEmoji(true);
    };
    return (
        <div className={cx('chat-room', { 'hide-chat': hideChat })}>
            <div className={cx('chat-container')}>
                <div className={cx('chat-header')}>
                    <div className={cx('mask')}>
                        {!hideChat && (
                            <div className={cx('close-chat')} onClick={handleHideChatRoom}>
                                <RightArrowIcon />
                            </div>
                        )}
                    </div>
                    <div className={cx('title')}>
                        <p>Trò chuyện LIVE</p>
                    </div>
                </div>
                {!showListTopLive && (
                    <div className={cx('top-live')}>
                        <div className={cx('title')} onClick={handleShowListTopLive}>
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
                                    <p className={cx('three')}>3</p>
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
                )}
                {!showListTopLive && (
                    <div className={cx('chat-live')}>
                        <div className={cx('chat-container')}>
                            <div className={cx('chat-content')}>
                                <UserChat src={''} name="bon ^^" txt={'Halooo!'} title="bon ^^" />
                                <NotificationChat name={'user129132'} txt="đã tham gia" title="user129132" />
                            </div>
                            <div className={cx('chat-input')}>
                                <div className={cx('div-chat')}>
                                    <input className={cx('input')} placeholder="Thêm bình luận..." />
                                    <Tippy
                                        interactive={showEmoji}
                                        render={() => (
                                            <div>
                                                {!showEmoji && (
                                                    <div className={cx('sub-text')}>Nhấn để thêm emoji </div>
                                                )}
                                                {showEmoji && (
                                                    <div className={cx('emoji-picker')}>
                                                        <EmojiPicker />
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    >
                                        <div className={cx('chat-emoji')} onClick={handleEmoji}>
                                            <FontAwesomeIcon icon={faFaceDizzy} />
                                        </div>
                                    </Tippy>
                                </div>
                                <div className={cx('send')}>
                                    <FontAwesomeIcon icon={faPaperPlane} />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {showListTopLive && (
                    <div className={cx('list-top')}>
                        <div className={cx('title')}>
                            <span className={cx('close-list')} onClick={handleHideListTopLive}>
                                <FontAwesomeIcon icon={faTimes} />
                            </span>
                            <p className={cx('text')}>Nguời xem hàng đầu</p>
                            <Tippy placement="bottom" render={() => <div className={cx('help-tippy')}>Trợ giúp</div>}>
                                <span className={cx('help')}>
                                    <FontAwesomeIcon icon={faCircleQuestion} />
                                </span>
                            </Tippy>
                        </div>
                        <div className={cx('container-list')}>
                            <div className={cx('div-list')}>
                                <ul className={cx('list-user')}>
                                    <li className={cx('header')}>
                                        <span>Tên</span>
                                        <span className={cx('point-top')}>
                                            <FontAwesomeIcon icon={faCoins} />
                                            <span>Điểm</span>
                                        </span>
                                    </li>
                                    <li className={cx('user')}>
                                        <div className={cx('index')}>-</div>
                                        <Image src="" className={cx('user-image')} />
                                        <span className={cx('nickname')}>diunhi27</span>
                                    </li>
                                    <li className={cx('user')}>
                                        <div className={cx('index')}>-</div>
                                        <Image src="" className={cx('user-image')} />
                                        <span className={cx('nickname')}>diunhi27</span>
                                    </li>
                                    <li className={cx('user')}>
                                        <div className={cx('index')}>-</div>
                                        <Image src="" className={cx('user-image')} />
                                        <span className={cx('nickname')}>diunhi27</span>
                                    </li>
                                    <li className={cx('user')}>
                                        <div className={cx('index')}>-</div>
                                        <Image src="" className={cx('user-image')} />
                                        <span className={cx('nickname')}>diunhi27</span>
                                    </li>
                                    <li className={cx('user')}>
                                        <div className={cx('index')}>-</div>
                                        <Image src="" className={cx('user-image')} />
                                        <span className={cx('nickname')}>diunhi27</span>
                                    </li>
                                    <li className={cx('user')}>
                                        <div className={cx('index')}>-</div>
                                        <Image src="" className={cx('user-image')} />
                                        <span className={cx('nickname')}>diunhi27</span>
                                    </li>
                                    <li className={cx('user')}>
                                        <div className={cx('index')}>-</div>
                                        <Image src="" className={cx('user-image')} />
                                        <span className={cx('nickname')}>diunhi27</span>
                                    </li>
                                    <li className={cx('user')}>
                                        <div className={cx('index')}>-</div>
                                        <Image src="" className={cx('user-image')} />
                                        <span className={cx('nickname')}>diunhi27</span>
                                    </li>
                                    <li className={cx('user')}>
                                        <div className={cx('index')}>-</div>
                                        <Image src="" className={cx('user-image')} />
                                        <span className={cx('nickname')}>diunhi27</span>
                                    </li>
                                    <li className={cx('user')}>
                                        <div className={cx('index')}>-</div>
                                        <Image src="" className={cx('user-image')} />
                                        <span className={cx('nickname')}>diunhi27</span>
                                    </li>
                                    <li className={cx('user')}>
                                        <div className={cx('index')}>-</div>
                                        <Image src="" className={cx('user-image')} />
                                        <span className={cx('nickname')}>diunhi27</span>
                                    </li>
                                    <li className={cx('user')}>
                                        <div className={cx('index')}>-</div>
                                        <Image src="" className={cx('user-image')} />
                                        <span className={cx('nickname')}>diunhi27</span>
                                    </li>
                                    <li className={cx('user')}>
                                        <div className={cx('index')}>-</div>
                                        <Image src="" className={cx('user-image')} />
                                        <span className={cx('nickname')}>diunhi27</span>
                                    </li>
                                    <li className={cx('user')}>
                                        <div className={cx('index')}>-</div>
                                        <Image src="" className={cx('user-image')} />
                                        <span className={cx('nickname')}>diunhi27</span>
                                    </li>
                                    <li className={cx('user')}>
                                        <div className={cx('index')}>-</div>
                                        <Image src="" className={cx('user-image')} />
                                        <span className={cx('nickname')}>diunhi27</span>
                                    </li>
                                    <li className={cx('user')}>
                                        <div className={cx('index')}>-</div>
                                        <Image src="" className={cx('user-image')} />
                                        <span className={cx('nickname')}>diunhi27</span>
                                    </li>
                                    <li className={cx('user')}>
                                        <div className={cx('index')}>-</div>
                                        <Image src="" className={cx('user-image')} />
                                        <span className={cx('nickname')}>diunhi27</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={cx('viewer')}>
                            <div className={cx('user')}>
                                <div className={cx('index')}>-</div>
                                <Image src="" className={cx('user-image')} />
                                <span className={cx('nickname')}>huyy</span>
                            </div>
                            <Button outline className={cx('viewer-btn')}>
                                Gửi quà tặng
                            </Button>
                            <div className={cx('viewer-text')}>
                                <FontAwesomeIcon icon={faHeart} />
                                <span>Gửi quà tặng để ủng hộ và giúp đỡ Thu Thảo</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ChatRoom;
