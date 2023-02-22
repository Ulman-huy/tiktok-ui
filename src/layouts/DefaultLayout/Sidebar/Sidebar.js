import SuggestedAccounts from '~/components/SuggestedAccounts';
import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import Discover from './Discover';
import Footer from '../../components/Footer';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '~/layouts/components/Navbar';

const cx = classNames.bind(styles);

function Sidebar() {
    const [accountsData, setAccountsData] = useState({ suggestedAccounts: [], followerAccounts: [], tags: [] });

    const suggestedAccountsURL = 'https://ulman-huy.github.io/api/suggested_accounts.json';
    const followerAccountsURL = 'https://ulman-huy.github.io/api/follower_accounts.json';
    const tagsURL = 'https://ulman-huy.github.io/api/tags.json';

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
            <Navbar />

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
