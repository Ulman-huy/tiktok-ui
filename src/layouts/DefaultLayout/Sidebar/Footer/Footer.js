import styles from './Footer.module.scss';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('about')}>
                <Button href="https://www.tiktok.com/about?lang=vi-VN" text className={cx('footer')} target="_blank">
                    Giới thiệu
                </Button>
                <Button href="https://newsroom.tiktok.com/vi-vn/" text className={cx('footer')} target="_blank">
                    Bảng tin
                </Button>
                <Button
                    href="https://www.tiktok.com/about/contact?lang=vi-VN"
                    text
                    className={cx('footer')}
                    target="_blank"
                >
                    Liên hệ
                </Button>
                <Button href="https://careers.tiktok.com/" text className={cx('footer')} target="_blank">
                    Sự nghiệp
                </Button>
                <Button href="https://www.bytedance.com/" text className={cx('footer')} target="_blank">
                    ByteDance
                </Button>
            </div>
            <div className={cx('tiktok')}>
                <Button to="/forgood" text className={cx('footer')} target="_blank">
                    TikTok for Good
                </Button>
                <Button
                    href="https://www.tiktok.com/business/vi?attr_medium=tt_official_site_guidance&attr_source=tt_official_site&refer=tiktok_web&tt4b_lang_redirect=1"
                    text
                    className={cx('footer')}
                    target="_blank"
                >
                    Quảng cáo
                </Button>
                <Button
                    href="https://developers.tiktok.com/?refer=tiktok_web"
                    text
                    className={cx('footer')}
                    target="_blank"
                >
                    Developers
                </Button>
                <Button to="/transparency/vi-vn" text className={cx('footer')} target="_blank">
                    Minh bạch
                </Button>
                <Button to="/tiktok-rewards/eligibility" text className={cx('footer')} target="_blank">
                    TikTok Rewards
                </Button>
                <Button to="/browse" text className={cx('footer')} target="_blank">
                    TikTok Browse
                </Button>
                <Button to="/embed" text className={cx('footer')} target="_blank">
                    TikTok Embeds
                </Button>
            </div>
            <div className={cx('help')}>
                <Button href="https://support.tiktok.com/vi" text className={cx('footer')} target="_blank">
                    Trợ giúp
                </Button>
                <Button to="/safety/vi-vn/" text className={cx('footer')} target="_blank">
                    An toàn
                </Button>
                <Button to="/legal/page/row/terms-of-service/vi-VN" text className={cx('footer')} target="_blank">
                    Điều khoản
                </Button>
                <Button to="/legal/page/row/privacy-policy/vi-VN" text className={cx('footer')} target="_blank">
                    Quyền riêng tư
                </Button>
                <Button to="/creators/creator-portal/en-us/" text className={cx('footer')} target="_blank">
                    Cổng thông tin Tác giả
                </Button>
                <Button to="/community-guidelines" text className={cx('footer')} target="_blank">
                    Hướng dẫn Cộng đồng
                </Button>
            </div>
            <div>
                <Tippy
                    interactive
                    placement="top-start"
                    offset={[0, 8]}
                    render={() => (
                        <div className={cx('preview')}>
                            <a className={cx('link')} href="">
                                NGUYÊN TẮC THỰC THI PHÁP LUẬT CỦA TIKTOK
                            </a>
                        </div>
                    )}
                >
                    <p className={cx('more')}>Thêm</p>
                </Tippy>
            </div>
            <p className={cx('copy-right')}>© 2023 TikTok</p>
        </div>
    );
}

export default Footer;
