import axios from 'axios';
import { useState, useEffect, useContext, useCallback } from 'react';
import Footer from '~/layouts/components/Footer';
import Navbar from '~/layouts/components/Navbar';
import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import { DataLive } from '../Fullscreen';
import AccountsLive from '~/components/AccountsLive';

const cx = classNames.bind(styles);

function Sidebar() {
    const { data, setLiveUser } = useContext(DataLive);

    const [accountsData, setAccountsData] = useState([]);

    const suggestedAccountsURL = 'https://ulman-huy.github.io/api/suggested_accounts.json';

    useEffect(() => {
        const fetchApi = async () => {
            const suggestedAccounts = await axios(suggestedAccountsURL);

            setAccountsData(suggestedAccounts.data);
        };

        fetchApi();
    }, []);
    
    return (
        <aside className={cx('wrapper')}>
            <Navbar />
            <AccountsLive label="Đang Follow" bottomBtn="Xem tất cả" data={accountsData} live />
            <AccountsLive
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
