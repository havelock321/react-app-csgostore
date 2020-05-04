import React from "react";
import MenuItem from "./../menu-item/menu-item.component";
import "./dirextory.styles.scss";
import ct from './../../assets/cs images/ct_menu_00.jpg';
import tr from './../../assets/cs images/terror_menu_00.jpg';
import rifles from './../../assets/cs images/gun_menu_01.jpg';
import knifes from './../../assets/cs images/knife_menu.jpg';
import pistol from './../../assets/cs images/pistol_menu.jpg';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "rifles",
          imageUrl: rifles,
          id: 1,
          linkUrl: "shop/rifles",
          size: "large"
        },
        {
          title: "facas",
          imageUrl: knifes,
          id: 2,
          linkUrl: "shop/facas",
          size: "large"
        },
        {
          title: "pistolas",
          imageUrl: pistol,
          id: 3,
          linkUrl: "shop/pistolas",
          size: "large"
        },
        {
          title: "terrorista",
          imageUrl:tr,
          size: "large",
          id: 4,
          linkUrl: "shop/terror"
        },
        {
          title: "contra terrorista",
          imageUrl:ct,
          size: "large",
          id: 5,
          linkUrl: "shop/ct"
        }
      ]
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
