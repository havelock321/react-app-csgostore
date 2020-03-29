import React from "react";
import MenuItem from "./../menu-item/menu-item.component";
import "./dirextory.styles.scss";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "rifles",
          imageUrl:
            "https://lh3.googleusercontent.com/proxy/6_pWyzi-UC6_pnQMXKiO2MAhpVSXsA-IofV041f_gwZS4CNKBf_TuQnWm_eBdkDo1d7q6KBfhxUDKzEBIVk5zj3v-r1TxvFK065L8l70rvg",
          id: 1,
          linkUrl: "shop/rifles",
          size: "large"
        },
        {
          title: "facas",
          imageUrl:
            "https://cutewallpaper.org/21/cs-go-knife-wallpaper/50-CS-GO-Knives-Wallpaper-on-WallpaperSafari.jpg",
          id: 2,
          linkUrl: "shop/facas",
          size: "large"
        },
        {
          title: "pistolas",
          imageUrl:
            "https://p4.wallpaperbetter.com/wallpaper/409/446/331/game-weapon-art-glock-18-wallpaper-preview.jpg",
          id: 3,
          linkUrl: "shop/pistolas",
          size: "large"
        },
        {
          title: "terrorista",
          imageUrl:
            "https://www.csgo.com.cn/data/images/weapons_collection.jpg",
          size: "large",
          id: 4,
          linkUrl: "shop/terror"
        },
        {
          title: "contra terrorista",
          imageUrl:
            "https://dmarket.com/blog/best-csgo-wallpapers/Nice-CS-GO-wallpaper-HD_hu9daf9fbbe6aa6f61f011d2b89d3e158b_1307082_1920x1080_resize_q90_box.jpg",
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
