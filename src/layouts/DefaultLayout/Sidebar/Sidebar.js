import Menu from './Menu';
import { MenuItem } from './Menu';
import config from '~/config';
import {
    HomeIcon,
    UserGroupIcon,
    LiveIcon,
    HomeActiveIcon,
    UserGroupActiveIcon,
    LiveActiveIcon,
} from '~/components/Icons';
import SuggestedAccounts from '~/components/SuggestedAccounts';
import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import Discover from './Discover';
import Footer from './Footer';
import { useEffect, useState } from 'react';
import axios from 'axios';

const cx = classNames.bind(styles);

function Sidebar() {
    const [accountsData, setAccountsData] = useState({ suggestedAccounts: [], followerAccounts: [], tags: [] });

    const suggestedAccountsURL = 'http://localhost:3000/suggested_accounts';
    const followerAccountsURL = 'http://localhost:3000/follower_accounts';
    const tagsURL = 'http://localhost:3000/tags';

    useEffect(() => {
        const fetchApi = async () => {
            const suggestedAccounts = await axios(suggestedAccountsURL);
            const followerAccounts = await axios(followerAccountsURL);
            const tags = await axios(tagsURL);

            setAccountsData({
                suggestedAccounts: suggestedAccounts.data,
                followerAccounts: followerAccounts.data,
                tags: tags.data,
            });
        };

        fetchApi();
    }, []);

    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    title="Dành cho bạn"
                    to={config.routes.home}
                    icon={<HomeIcon />}
                    activeIcon={<HomeActiveIcon />}
                />
                <MenuItem
                    title="Đang Follow"
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                />
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
            </Menu>

            <SuggestedAccounts
                label="Tài khoản được đề xuất"
                bottomBtn="Xem tất cả"
                tippy={true}
                data={accountsData.suggestedAccounts}
                item={5}
            />
            <SuggestedAccounts
                label="Các tài khoản đang follow"
                bottomBtn="Xem thêm"
                tippy={false}
                data={accountsData.followerAccounts}
                item={11}
            />
            <Discover tags={accountsData.tags} />
            <Footer />
        </aside>
    );
}

export default Sidebar;
