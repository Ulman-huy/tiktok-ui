import styles from './LiveGift.module.scss';
import classNames from 'classnames/bind';
import Image from '~/components/Image';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function GiftItem({ giftImage, giftName, point }) {
    return (
        <div className={cx('wrap-item')}>
            <div className={cx('gift-item')}>
                <Image src={giftImage} alt="" className={cx('gift-image')} />
                <div className={cx('send')}>
                    <div className={cx('gift-name')}>{giftName}</div>
                    <div className={cx('gift-point')}>{point} điểm</div>
                    <Button primary className={cx('btn-send')}>
                        Gửi
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default GiftItem;
