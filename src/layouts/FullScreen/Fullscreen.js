import styles from './Fullscreen.module.scss';
import classNames from 'classnames/bind';
import Header from '../components/Header';
import Sidebar from './Sidebar';
import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

const cx = classNames.bind(styles);

export const DataLive = createContext();

function Fullscreen({ children }) {
    const [liveList, setLiveList] = useState([]);
    const [liveUser, setLiveUser] = useState({});
    
    useEffect(() => {
        axios.get('https://ulman-huy.github.io/api/live.json').then((res) => {
            setLiveList(res.data);
        });
    }, []);

    return (
        <div className={cx('wrapper')}>
            <Header className={cx('header')} coins />
            <DataLive.Provider value={{ data: liveList, liveUser, setLiveUser }}>
                <div className={cx('container')}>
                    <div className={cx('left-container')}>
                        <div className={cx('mask')}></div>
                        <div className={cx('sidebar')}>
                            <Sidebar />
                        </div>
                    </div>
                    <div className={cx('right-container')}>{children}</div>
                </div>
            </DataLive.Provider>
        </div>
    );
}

export default Fullscreen;
