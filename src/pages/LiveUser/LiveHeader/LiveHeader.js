import styles from './LiveHeader.module.scss';
import classNames from 'classnames/bind';
import Image from '~/components/Image';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShare, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { faFlag, faMessage } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from '~/components/SuggestedAccounts/AccountPreview';
import Button from '~/components/Button';
import {
    EmailIcon,
    FacebookIcon,
    LeftArrowIcon,
    LineIcon,
    LinkedInIcon,
    LinkIcon,
    PinterestIcon,
    RedditIcon,
    TelegramIcon,
    TwitterIcon,
    WhatsAppIcon,
} from '~/components/Icons';
import { useContext } from 'react';
import { Style } from '../LiveUser';
import { Data } from '~/layouts/FullScreen/Fullscreen';

const listShare = [
    {
        title: 'Chia sẻ với Facebook',
        icon: <FacebookIcon />,
    },
    {
        title: 'Chia sẻ với WhatsApp',
        icon: <WhatsAppIcon />,
    },
    {
        title: 'Sao chép liên kết',
        icon: <LinkIcon />,
    },
    {
        title: 'Chia sẻ với Twitter',
        icon: <TwitterIcon />,
    },
    {
        title: 'Chia sẻ với LinkedIn',
        icon: <LinkedInIcon />,
    },
    {
        title: 'Chia sẻ với Reddit',
        icon: <RedditIcon />,
    },
    {
        title: 'Chia sẻ với Telegram',
        icon: <TelegramIcon />,
    },
    {
        title: 'Chia sẻ với Email',
        icon: <EmailIcon />,
    },
    {
        title: 'Chia sẻ với Line',
        icon: <LineIcon />,
    },
    {
        title: 'Chia sẻ với Pinterest',
        icon: <PinterestIcon />,
    },
];
const cx = classNames.bind(styles);

function LiveHeader() {
    const { liveUser } = useContext(Data);

    const { hideChat, setHideChat } = useContext(Style);
    const handleHideChat = () => {
        setHideChat(false);
    };
    const renderUserPreview = (props) => {
        return (
            <div className={cx('preview')} tabIndex="-1" {...props}>
                <PopperWrapper>
                    <div className={cx('preview')}>
                        <AccountPreview info={liveUser} />
                    </div>
                </PopperWrapper>
            </div>
        );
    };
    const renderSharePreview = (props) => {
        return (
            <div className={cx('preview')} tabIndex="-1" {...props}>
                <PopperWrapper className={cx('wrapper-list')}>
                    {listShare.map((item, index) => (
                        <div key={index} className={cx('item')}>
                            <span className={cx('icon')}>{item.icon}</span>
                            <span className={cx('title')}>{item.title}</span>
                        </div>
                    ))}
                </PopperWrapper>
            </div>
        );
    };
    const renderReportPreview = (props) => {
        return (
            <div className={cx('preview')} tabIndex="-1" {...props}>
                <PopperWrapper className={cx('more-wrapper')}>
                    <div className={cx('flag')}>
                        <span className={cx('icon')}>
                            <FontAwesomeIcon icon={faFlag} />
                        </span>
                        <span className={cx('text')}>Báo cáo</span>
                    </div>
                    <div className={cx('ratings')}>
                        <span className={cx('icon')}>
                            <FontAwesomeIcon icon={faMessage} />
                        </span>
                        <span className={cx('text')}>Cài đặt xếp hạng</span>
                    </div>
                </PopperWrapper>
            </div>
        );
    };
    return (
        <div className={cx('live-header')}>
            <div className={cx('live-info')}>
                <div>
                    <Tippy
                        interactive
                        delay={[0, 300]}
                        offset={[-12, 10]}
                        placement="bottom-start"
                        render={renderUserPreview}
                    >
                        <Link to={`/@${liveUser.nickname}`} className={cx('div-tippy')} target="_blank">
                            <Image src={liveUser.avatar} alt="" className={cx('avatar')} />
                            <div className={cx('info')}>
                                <span className={cx('nickname')}>{liveUser.nickname}</span>
                                <span className={cx('name')}>{liveUser.full_name}</span>
                            </div>
                        </Link>
                    </Tippy>
                </div>
                <div className={cx('text')}>
                    <p>{liveUser.bio}</p>
                    <span className={cx('watch-user')}>
                        <FontAwesomeIcon icon={faUser} />
                        <span className={cx('count-user')}>{liveUser.user_watch_live_count}</span>
                    </span>
                </div>
            </div>
            <div className={cx('live-tools')}>
                <div>
                    <Tippy
                        interactive
                        offset={[0, 22]}
                        delay={[300, 300]}
                        placement="bottom-end"
                        render={renderSharePreview}
                    >
                        <div className={cx('share')}>
                            <FontAwesomeIcon icon={faShare} />
                        </div>
                    </Tippy>
                </div>
                <div>
                    <Tippy
                        interactive
                        offset={[0, 22]}
                        delay={[300, 300]}
                        placement="bottom-end"
                        render={renderReportPreview}
                    >
                        <div className={cx('more-btn')}>
                            <FontAwesomeIcon icon={faEllipsis} />
                        </div>
                    </Tippy>
                </div>
                <Button primary className={cx('btn-follow')}>
                    Follow
                </Button>
                {hideChat && (
                    <div className={cx('open-chat')} onClick={handleHideChat}>
                        <LeftArrowIcon />
                    </div>
                )}
            </div>
        </div>
    );
}

export default LiveHeader;
