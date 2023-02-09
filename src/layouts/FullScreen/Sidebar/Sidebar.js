import Footer from '~/layouts/components/Footer';
import Navbar from '~/layouts/components/Navbar';
import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Navbar />
            <Footer />
        </aside>
    );
}

export default Sidebar;
