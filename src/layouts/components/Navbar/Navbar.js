import Menu from '../../components/Navbar/Menu';
import { MenuItem } from '../../components/Navbar/Menu';
import config from '~/config';
import {
    HomeIcon,
    UserGroupIcon,
    LiveIcon,
    HomeActiveIcon,
    UserGroupActiveIcon,
    LiveActiveIcon,
} from '~/components/Icons';

function Navbar() {
    return (
        <Menu>
            <MenuItem
                title="Dành cho bạn"
                to={config.routes.home}
                icon={<HomeIcon />}
                activeIcon={<HomeActiveIcon />}
            />
            <MenuItem
                title="Đang Follow"
                to={config.routes.following}
                icon={<UserGroupIcon />}
                activeIcon={<UserGroupActiveIcon />}
            />
            <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
        </Menu>
    );
}

export default Navbar;
