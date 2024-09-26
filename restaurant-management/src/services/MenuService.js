// src/services/menuService.js
import { MenuItem } from '../models/MenuItem';

let menuItems = [
  new MenuItem(1, 'Pasta', 12.99, 'Delicious homemade pasta'),
  new MenuItem(2, 'Pizza', 9.99, 'Wood-fired pizza with fresh ingredients')
];

export const menuService = {
  getAllMenuItems() {
    return menuItems;
  },
  getMenuItemById(id) {
    return menuItems.find(item => item.id === parseInt(id));
  },
  addMenuItem(item) {
    item.id = Date.now(); // Mock ID generation
    menuItems.push(item);
  },
  updateMenuItem(updatedItem) {
    const index = menuItems.findIndex(item => item.id === updatedItem.id);
    if (index !== -1) {
      menuItems[index] = updatedItem;
    }
  },
  deleteMenuItem(id) {
    menuItems = menuItems.filter(item => item.id !== id);
  }
};
