import styles from './LiveGift.module.scss';
import classNames from 'classnames/bind';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function GiftItem() {
    return (
        <div className={cx('wrap-item')}>
            <div className={cx('gift-item')}>
                <Image src="" alt="" className={cx('gift-image')} />
                <div className={cx('send')}>
                    <div className={cx('gift-name')}>Gift 1</div>
                    <div className={cx('gift-point')}>1 Điểm</div>
                </div>
            </div>
        </div>
    );
}

export default GiftItem;
