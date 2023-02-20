import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import Footer from '~/layouts/components/Footer';
import Navbar from '~/layouts/components/Navbar';
import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import SuggestedAccounts from '~/components/SuggestedAccounts';
import { Data } from '../Fullscreen';

const cx = classNames.bind(styles);

function Sidebar() {
    const [accountsData, setAccountsData] = useState({ suggestedAccounts: [], followerAccounts: [] });
    const { data } = useContext(Data);
    const suggestedAccountsURL = 'http://localhost:3000/suggested_accounts';
    const followerAccountsURL = 'http://localhost:3000/follower_accounts';
    useEffect(() => {
        const fetchApi = async () => {
            const suggestedAccounts = await axios(suggestedAccountsURL);
            const followerAccounts = await axios(followerAccountsURL);

            setAccountsData({
                suggestedAccounts: suggestedAccounts.data,
                followerAccounts: followerAccounts.data,
            });
        };

        fetchApi();
    }, []);
    return (
        <aside className={cx('wrapper')}>
            <Navbar />
            <SuggestedAccounts label="Đang Follow" bottomBtn="Xem tất cả" data={accountsData.suggestedAccounts} live />
            <SuggestedAccounts
                label="Các chủ phòng được đề xuất"
                bottomBtn="Xem tất cả"
                data={data}
                live
            />
            <Footer />
        </aside>
    );
}

export default Sidebar;
