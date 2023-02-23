import PropTypes from 'prop-types';
import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';
import Header from '~/layouts/components/Header';
import Sidebar from './Sidebar';
import Download from '../components/Download';
import { createContext, useContext } from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { GlobalContext } from '~/App';

const cx = classNames.bind(styles);

export const DataDefault = createContext();

function DefaultLayout({ children }) {
    const { fullscreen } = useContext(GlobalContext);
    const [profile, setProfile] = useState({});
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
        <div className={cx('wrapper', { fullscreen: fullscreen })}>
            <DataDefault.Provider value={{ accountsData: accountsData, profile, setProfile }}>
                <Header />
                <div className={cx('container', { fullscreen: fullscreen })}>
                    <div className={cx('wrapper-sidebar')}>
                        <div className={cx('mask')}></div>
                        <Sidebar />
                    </div>
                    <div className={cx('wrapper-content')}>
                        <div className={cx('content', { fullscreen: fullscreen })}>{children}</div>
                    </div>
                </div>
            </DataDefault.Provider>
            <Download />
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
