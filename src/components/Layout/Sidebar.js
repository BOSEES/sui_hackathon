import logo200Image from 'assets/img/logo/logo_200.png';
import sidebarBgImage from 'assets/img/sidebar/sidebar-4.jpg';
import SourceLink from 'components/SourceLink';
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import Games from "../../assets/game-data/games.json"
import {
  MdAccountCircle,
  MdArrowDropDownCircle,
  MdBorderAll,
  MdBrush,
  MdChromeReaderMode,
  MdDashboard,
  MdExtension,
  MdGroupWork,
  MdInsertChart,
  MdKeyboardArrowDown,
  MdNotificationsActive,
  MdPages,
  MdRadioButtonChecked,
  MdSend,
  MdStar,
  MdTextFields,
  MdViewCarousel,
  MdViewDay,
  MdViewList,
  MdWeb,
  MdWidgets,
} from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import {
  // UncontrolledTooltip,
  Collapse,
  Nav,
  Navbar,
  NavItem,
  NavLink as BSNavLink,
} from 'reactstrap';
import bn from 'utils/bemnames';



const sidebarBackground = {
  backgroundImage: `url("${sidebarBgImage}")`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};

// const navComponents = [
//   { to: '/buttons', name: 'buttons', exact: false, Icon: MdRadioButtonChecked },
//   {
//     to: '/button-groups',
//     name: 'button groups',
//     exact: false,
//     Icon: MdGroupWork,
//   },
//   { to: '/forms', name: 'forms', exact: false, Icon: MdChromeReaderMode },
//   { to: '/input-groups', name: 'input groups', exact: false, Icon: MdViewList },
//   {
//     to: '/dropdowns',
//     name: 'dropdowns',
//     exact: false,
//     Icon: MdArrowDropDownCircle,
//   },
//   { to: '/badges', name: 'badges', exact: false, Icon: MdStar },
//   { to: '/alerts', name: 'alerts', exact: false, Icon: MdNotificationsActive },
//   { to: '/progress', name: 'progress', exact: false, Icon: MdBrush },
//   { to: '/modals', name: 'modals', exact: false, Icon: MdViewDay },
// ];
// [
//   { to: '/game/1', name: '2048', exact: false, Icon: MdRadioButtonChecked },
//   { to: '/game/2', name: '2048', exact: false, Icon: MdRadioButtonChecked },
//   { to: '/game/3', name: '2048', exact: false, Icon: MdRadioButtonChecked },
//   { to: '/game/4', name: '2048', exact: false, Icon: MdRadioButtonChecked },
//   { to: '/game/5', name: '2048', exact: false, Icon: MdRadioButtonChecked },
// ]
// const navContents = [
//   { to: '/typography', name: 'typography', exact: false, Icon: MdTextFields },
//   { to: '/tables', name: 'tables', exact: false, Icon: MdBorderAll },
// ];

// const pageContents = [
//   { to: '/login', name: 'login / signup', exact: false, Icon: MdAccountCircle },
//   {
//     to: '/login-modal',
//     name: 'login modal',
//     exact: false,
//     Icon: MdViewCarousel,
//   },
// ];

const navItems = [
  { to: '/', name: 'Dashboard', exact: true, Icon: MdDashboard },
  // { to: '/CardPage', name: 'Audit', exact: false, Icon: MdWeb },
  // { to: '/charts', name: 'charts', exact: false, Icon: MdInsertChart },
  // { to: '/widgets', name: 'widgets', exact: false, Icon: MdWidgets },
];

var navComponents = []
for (let i = 0; i < Games.games.length; i++) {
  const {game_id, title, description, icon, url, status} = Games.games[i];
  if (status == true) {
    navComponents.push({
      id: `game_id`,
      to: `/game/${game_id}`,
      name: `${title}`,
      exact:false,
      Icon: MdRadioButtonChecked
    })
  }
}

const bem = bn.create('sidebar');

class Sidebar extends React.Component {
  state = {
    isOpenComponents: true,
    isOpenContents: true,
    isOpenPages: true,
  };

  handleClick = name => () => {
    this.setState(prevState => {
      const isOpen = prevState[`isOpen${name}`];

      return {
        [`isOpen${name}`]: !isOpen,
      };
    });
  };

  render() {
    return (
      <aside className={bem.b()} data-image={sidebarBgImage}>
        <div className={bem.e('background')} style={sidebarBackground} />
        <div style={{display:"flex", flexDirection:"column", justifyContent:"space-between"}} className={bem.e('content')}>
          <div>
          <Navbar>
            <SourceLink className="navbar-brand d-flex">
              {/* <img
                src={logo200Image}
                width="40"
                height="30"
                className="pr-2"
                alt=""
              /> */}
              <div>
                <div style={{fontSize: "40px"}} className="text-white">
                  Gamestation
                </div>
                <div className="text-white">
                  Developer Center
                </div>
              </div>
            </SourceLink>
          </Navbar>
          <Nav vertical>
            {navItems.map(({ to, name, exact, Icon }, index) => (
              <NavItem key={index} className={bem.e('nav-item')}>
                <BSNavLink
                  id={`navItem-${name}-${index}`}
                  // className="text-uppercase"
                  tag={NavLink}
                  to={to}
                  activeClassName="active"
                  exact={exact}
                >
                  <Icon className={bem.e('nav-item-icon')} />
                  <span className="">{name}</span>
                </BSNavLink>
              </NavItem>
            ))}
          </Nav>
          <NavItem
              className={bem.e('nav-item')}
              onClick={this.handleClick('Components')}
            >
              <BSNavLink className={bem.e('nav-item-collapse')}>
                <div className="d-flex">
                  <MdExtension className={bem.e('nav-item-icon')} />
                  <span style={{fontSize:"25px"}} className="align-self-start">Games</span>
                </div>
                <MdKeyboardArrowDown
                  className={bem.e('nav-item-icon')}
                  style={{
                    padding: 0,
                    transform: this.state.isOpenComponents
                      ? 'rotate(0deg)'
                      : 'rotate(-90deg)',
                    transitionDuration: '0.3s',
                    transitionProperty: 'transform',
                  }}
                />
              </BSNavLink>
            </NavItem>
            <Collapse isOpen={this.state.isOpenComponents}>
              {navComponents.map(({id, to, name, exact, Icon }, index) => (
                <NavItem key={index} className={bem.e('nav-item')}>
                  <BSNavLink
                    id={`navItem-${name}-${index}`}
                    className="text-uppercase"
                    tag={NavLink}
                    to={to}
                    activeClassName="active"
                    exact={exact}
                  >
                    <div style={{marginLeft:"20px"}}>
                      <Icon className={bem.e('nav-item-icon')} />
                      <span style={{fontSize:"20px", fontColor:"#ffffff"}} className="">{name}</span>
                    </div>
                  </BSNavLink>
                </NavItem>
              ))}
            </Collapse>
          </div>
          <div style={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
          }}> 
            <div style={{
              display:"flex",
              justifyContent:"center",
              alignItems:"center",
              border:"solid 2px",
              borderRadius:"20px",
              width:"90%",
            }}>
              <div style={{
                  width:"10px",
                  height:"10px",
                  backgroundColor:"#C69749",
                  borderRadius:"50%",
                }}>
              </div>
              <div style={{
                display:"flex",
                padding:"5px",
                width:"70%",
                textAlign:"center",
                textOverflow:"ellipsis",
                overflow:"hidden",
                whiteSpace:"nowrap",
                fontFamily:"Poppins",
                fontWeight:400,
                margin:"5px",
                marginLeft:"5px"
                }}>
                0x58b5e58c4d149442b1920f75c2451c596c241bd3441cda3e5b05f12409054063
              </div>
            </div>
          </div>
        </div>
      </aside>
    );
  }
}

export default Sidebar;
