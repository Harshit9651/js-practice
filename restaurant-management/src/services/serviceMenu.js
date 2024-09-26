export const menuService = {
    menuItems: [
      { id: 1, name: 'Pasta', price: 10, description: 'Delicious pasta' },
      { id: 2, name: 'Pizza', price: 12, description: 'Cheesy pizza' },
      // Add more menu items here
    ],
  
    getAllMenuItems() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(this.menuItems);
        }, 500); // Simulate async call
      });
    },
  
    getMenuItemById(id) {
      return new Promise((resolve) => {
        const menuItem = this.menuItems.find(item => item.id === parseInt(id));
        setTimeout(() => {
          resolve(menuItem);
        }, 500); // Simulate async call
      });
    },
  
    addMenuItem(item) {
      this.menuItems.push({ ...item, id: this.menuItems.length + 1 });
    },
  
    updateMenuItem(updatedItem) {
      const index = this.menuItems.findIndex(item => item.id === updatedItem.id);
      if (index !== -1) {
        this.menuItems[index] = updatedItem;
      }
    },
  
    deleteMenuItem(id) {
      this.menuItems = this.menuItems.filter(item => item.id !== id);
    }
  };
  