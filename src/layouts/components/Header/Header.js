import config from '~/config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faUser,
    faCoins,
    faGear,
    faSignOut,
    faPlus,
} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';

import Button from '~/components/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Menu from '~/components/Popper/Menu';
import { CoinsIcon, Letters, Message } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';
import './Header.module.scss';
import { useContext } from 'react';
import { GlobalContext } from '~/App';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'Ngôn ngữ',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Phản hồi và trợ giúp',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Phím tắt trên bàn phím',
    },
];

function Header({ className, coins = false }) {
    const { fullscreen, setFullscreen } = useContext(GlobalContext);

    const currentUser = true;

    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // Handle Change language
                break;
            default:
        }
    };
    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'Xem hồ sơ',
            to: '/@huyy',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Nhận xu',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Cài đặt',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Đăng xuất',
            to: '/logout',
            separate: true,
        },
    ];
    return (
        <header className={cx('wrapper', { [className]: className })}>
            <div className={cx('inner', { [className]: className, fullscreen: fullscreen })}>
                <Link to={config.routes.home} className={cx('logo-link')} onClick={() => setFullscreen(false)}>
                    <img src={images.logo} alt="Tiktok" />
                </Link>

                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <div className={cx('current-user')}>
                            <Button
                                rounded
                                leftIcon={<FontAwesomeIcon icon={faPlus} />}
                                className={cx('upload', 'action-btn')}
                            >
                                Tải lên
                            </Button>
                            <Tippy delay={[0, 200]} placement="bottom" content="Tin nhắn">
                                <button className={cx('action-btn')}>
                                    <Message className={cx('message')} />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 200]} placement="bottom" content="Hộp thư">
                                <button className={cx('action-btn')}>
                                    <Letters className={cx('letters')} />
                                    <span className={cx('notify')}>12</span>
                                </button>
                            </Tippy>
                            {coins && (
                                <Button
                                    rounded
                                    leftIcon={<CoinsIcon />}
                                    className={cx('upload', 'action-btn', 'coins')}
                                >
                                    Nhận xu
                                </Button>
                            )}
                        </div>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                alt=""
                                src="https://i.pinimg.com/originals/49/27/aa/4927aa285cd5c1de43e34da92d520b57.jpg"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
