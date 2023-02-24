import SuggestedAccounts from '~/components/SuggestedAccounts';
import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import Discover from './Discover';
import Footer from '../../components/Footer';
import { useContext } from 'react';
import Navbar from '~/layouts/components/Navbar';
import { DataDefault } from '../DefaultLayout';
import { GlobalContext } from '~/App';

const cx = classNames.bind(styles);

function Sidebar() {
    const { fullscreen } = useContext(GlobalContext);
    const { accountsData } = useContext(DataDefault);

    return (
        <aside className={cx('wrapper', { fullscreen: fullscreen })}>
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
