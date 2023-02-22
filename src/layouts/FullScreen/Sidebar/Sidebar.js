import axios from 'axios';
import { useState, useEffect, useContext, useCallback, useLayoutEffect } from 'react';
import Footer from '~/layouts/components/Footer';
import Navbar from '~/layouts/components/Navbar';
import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import SuggestedAccounts from '~/components/SuggestedAccounts';
import { Data } from '../Fullscreen';

const cx = classNames.bind(styles);

function Sidebar() {
    const [accountsData, setAccountsData] = useState({ suggestedAccounts: [] });
    const { data, setLiveUser } = useContext(Data);
    const suggestedAccountsURL = 'https://ulman-huy.github.io/api/suggested_accounts.json';
    useEffect(() => {
        const fetchApi = async () => {
            const suggestedAccounts = await axios(suggestedAccountsURL);

            setAccountsData({
                suggestedAccounts: suggestedAccounts.data,
            });
        };

        fetchApi();
    }, []);
    const handleClick = useCallback(() => {
        setLiveUser(data.find((live) => live.nickname === window.location.pathname.slice(2, -5)));
    });
    
    return (
        <aside className={cx('wrapper')}>
            <Navbar />
            <SuggestedAccounts label="Đang Follow" bottomBtn="Xem tất cả" data={accountsData.suggestedAccounts} live />
            <SuggestedAccounts
                label="Các chủ phòng được đề xuất"
                bottomBtn="Xem tất cả"
                data={data}
                live
                onHandle={handleClick}
            />
            <Footer />
        </aside>
    );
}

export default Sidebar;
