import styles from './VideoItem.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCommentDots, faShare, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button';
import {
    CodeIcon,
    EmailIcon,
    FacebookIcon,
    LineIcon,
    LinkedInIcon,
    LinkIcon,
    PinterestIcon,
    RedditIcon,
    ShareFlyIcon,
    TelegramIcon,
    TwitterIcon,
    WhatsAppIcon,
} from '../Icons';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { useState } from 'react';

const items = [
    {
        title: 'Nhúng',
        icon: <CodeIcon />,
    },
    {
        title: 'Gửi đến bạn bè',
        icon: <ShareFlyIcon />,
    },
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
function Action() {
    const [listItems, setListItems] = useState(items.slice(0, 5));
    const [isMore, setIsMore] = useState(true);

    const handleShareMore = () => {
        setListItems(items);
        setIsMore(false);
    };

    const handleShareMoreHide = () => {
        setListItems(items.slice(0, 5));
        setIsMore(true);
    };
    const renderPreview = (props) => {
        return (
            <div className={cx('share-list')} tabIndex="-1" {...props}>
                <PopperWrapper className={cx('wrapper-list')}>
                    {listItems.map((item, index) => (
                        <div key={index} className={cx('item')}>
                            <span className={cx('icon')}>{item.icon}</span>
                            <span className={cx('title')}>{item.title}</span>
                        </div>
                    ))}
                    {isMore && (
                        <div className={cx('share-more')} onClick={handleShareMore}>
                            <FontAwesomeIcon icon={faAngleDown} />
                        </div>
                    )}
                </PopperWrapper>
            </div>
        );
    };

    return (
        <div className={cx('action')}>
            <div className={cx('like-action')}>
                <Button className={cx('like-icon')}>
                    <FontAwesomeIcon icon={faHeart} />
                </Button>
                <div className={cx('count')}>123</div>
            </div>
            <div className={cx('comment-action')}>
                <Button className={cx('comment-icon')}>
                    <FontAwesomeIcon icon={faCommentDots} />
                </Button>
                <div className={cx('count')}>123k</div>
            </div>
            <Tippy
                interactive
                delay={[0, 300]}
                offset={[-24, 11]}
                placement="top-start"
                render={renderPreview}
                onHide={handleShareMoreHide}
            >
                <div className={cx('share-action')}>
                    <Button className={cx('share-icon')}>
                        <FontAwesomeIcon icon={faShare} />
                    </Button>
                    <div className={cx('count')}>123</div>
                </div>
            </Tippy>
        </div>
    );
}

export default Action;
