import { urlify } from "./index";

class NavManager {

  constructor() {
    this.menuItems = [];
    this.navPaths = {};
    this.current = 0;
  }

  initialize = (drupalMenu) => {
    const order = this.__getOrder(drupalMenu);
    const reordered = this.__reOrder(order, drupalMenu);
    //this.__setVisitedProp(reordered);
    this.__setExtraProps(reordered);
    this.menuItems = reordered;
    this.navPaths = {
      current: this.menuItems[this.current],
      previous: this.menuItems[this.current -1 ] || false,
      next: this.menuItems[this.current + 1] || false
    };
    switch (this.menuItems[0]['title']) {
      case "how to use":
        this.menuItems.push(this.__setEnd());
        break;
      case 'Kijan pou itilize':
        this.menuItems.push(this._ht_setEnd());
        break;
      case 'Como usar':
          this.menuItems.push(this._pt_setEnd());
          break;
      default:
        //spanish
        this.menuItems.push(this._es_setEnd());
    }
  }

  getCurrentMarker = () => {
    return this.current;
  }

  getMenuItems = () => {
    return this.menuItems;
  }

  setMenuItems = (menuItems) => {
    this.menuItems = menuItems;
  }

  getNavPaths = () => {
    return this.navPaths;
  }

  setNewCurrent = (path) => {
    const itemIndex = this.menuItems.findIndex( (item) => item.path === path );
    const visited = this.current;
    this.__setCurrent(itemIndex);  
    this.__reloadMenu(visited);
  }

  __setCurrent = (num) => {
    this.current = num;
  }

  getCurrent = () => {
    return this.menuItems[this.current];
  }

  getNext = () => {
    const next = this.current + 1;
    return this.menuItems[next];
  }

  getPrev = () => {
    const prev = this.current - 1;
    return this.menuItems[prev] && false;
  }

  advance = () => {
    const visited = this.current;
    this.current++
    this.__reloadMenu(visited);
    return this;
  }

  retreat = () => {
    const visited = this.current;
    this.current--
    this.__reloadMenu(visited);
    return this;
  }

  reset = () => {
    this.current = 0;
  }

  getNext = () => {
    if (this.current >= this.menuItems.length) {
      return false;
    }
    return this.menuItems[++this.current];
  }

  __reloadMenu = (visited) => {
    this.__setClasses(visited);
    this.__resetNavPaths();
  }

  __setClasses = (visited) => {
    this.menuItems[visited]["visited"] = true;
  }

  __resetNavPaths = () => {
    this.navPaths = {
      current: this.menuItems[this.current],
      previous: this.menuItems[this.current - 1] || false,
      next: this.menuItems[this.current + 1] || false
    }
  }


  __getOrder = (items) => {
    const order = []
    items.forEach( (item) => {
      order.push(item.node.weight);
    });
    return order.sort();
  }

  __reOrder = (order, items) => {
    const reordered = [];
    order.forEach( (num) => {
      items.forEach( (item) => {
        let values = Object.values(item);
        if(item.node.weight === num) {
          reordered.push(values[0]);
        }
      });
    });
    return reordered;
  }

  __setExtraProps = (items) => {
    items.forEach( (item) => {
      item.path = "/" + urlify(item.title);
      item.visited = false;
    });
  }

/*
  __setStart = () => {
    return {
      title: "Entrance",
      weight: -999,
      link: { uri: ""},
      visited: true
    }
  }
*/

  __setEnd = () => {
    return {
      title: "End",
      weight: 999,
      path: "/end",
      visited: false
    }
  }
  _es_setEnd = () => {
    return {
      title: "End",
      weight: 999,
      path: "/es-end",
      visited: false
    }
  }
  _ht_setEnd = () => {
    return {
      title: "End",
      weight: 999,
      path: "/ht-end",
      visited: false
    }
    
  }
  _pt_setEnd=()=>{
    return {
      title: "End",
      weight: 999,
      path: "/pt-end",
      visited: false
    }
  }
}

export default NavManager;
