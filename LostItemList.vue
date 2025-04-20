<template>
    <div class="lost-item-list-page">
      <header class="header">
        <button class="icon-button">
          <img src="@/assets/images/Sidebar.png" alt="Toggle Sidebar" class="header-icon" @click="toggleSidebar" />
        </button>
        <h1>LOST ITEM LIST</h1>
        <div class="header-icons">
          <button class="icon-button" @click="$router.push('/Dashboard')">
            <img src="@/assets/images/home.png" alt="Home" class="header-icon" />
          </button>
          <button class="icon-button">
            <img src="@/assets/images/bell.png" alt="Notifications" class="header-icon" />
          </button>
          <div class="search-bar">
            
            <button class="search-button">
              <img src="@/assets/images/search.png" alt="Search" class="header-icon" />
            </button>
          </div>
        </div>
      </header>
  
      <div
        v-if="isSidebarOpen"
        class="sidebar-overlay"
        @click="toggleSidebar"
      ></div>
  
      <aside class="sidebar" :class="{ 'sidebar-open': isSidebarOpen }">
        <div class="profile">
          <div class="username-container">
            <img
              src="@/assets/images/user.png"
              alt="User"
              class="username-image clickable-icon"
            />
            <span class="username">USERNAME</span>
          </div>
        </div>
        <nav class="sidebar-nav">
          <ul>
            <li class="nav-item">
              <span class="nav-icon profile-image-icon">
                <img src="@/assets/images/account.png" alt="My Profile" />
              </span>
              <span>MY PROFILE</span>
            </li>
            <li class="nav-item">
              <span class="nav-icon megaphone">
                <img src="@/assets/images/megaphone - Copy.png" alt="Report Lost Item" />
              </span>
              <span>REPORT ITEM LIST</span>
            </li>
            <li class="nav-item">
              <span class="nav-icon settings">
                <img src="@/assets/images/settings.png" alt="Settings" />
              </span>
              <span>SETTINGS</span>
            </li>
          </ul>
        </nav>
        <div class="bottom-action">
          <span class="bottom-action-icon">
            <img src="@/assets/images/logout.png" alt="Logout button" />
          </span>
        </div>
      </aside>
  
      <div class="items-grid">
        <div
          class="item-card"
          v-for="item in lostItems"
          :key="item.id"
          @click="goToItemDetail(item.id)"
        >
          <img :src="item.image" alt="Lost Item" class="item-image" />
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  const isSidebarOpen = ref(false);
  
  const lostItems = [
    { id: 1, image: '/src/assets/images/item1.jpg' },
    { id: 2, image: '/src/assets/images/item2.jpg' },
    { id: 3, image: '/src/assets/images/item3.jpg' },
    { id: 4, image: '/src/assets/images/item4.jpg' },
    { id: 5, image: '/src/assets/images/item5.jpg' },
    { id: 6, image: '/src/assets/images/item6.jpg' }
  ];
  
  function goToItemDetail(id) {
    router.push(`/item/${id}`);
  }
  
  const toggleSidebar = () => {
    isSidebarOpen.value = !isSidebarOpen.value;
  };
  </script>
  
  <style scoped>
  .lost-item-list-page {
    background-color: #fefadc;
    min-height: 100vh;
    display: flex;
    flex-direction: column; /* Stack header and content */
    align-items: stretch; /* Make header full width */
  }
  
  .header {
    display: flex;
    align-items: center;
    padding: 1rem 2rem;
    background-color: #f9f9f9;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
    z-index: 10;
  }
  
  .header .icon-button:first-child {
    margin-right: 15px;
  }
  
  .header h1 {
    margin: 0 auto;
    text-align: center;
    flex-grow: 1;
  }
  
  .header-icons {
    display: flex;
    align-items: center; /* Align icons and search bar vertically */
    gap: 10px;
  }
  
  .icon-button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
  }
  
  .header-icon {
    width: 30px;
    height: 30px;
  }
  
  .search-bar {
  display: flex;
  align-items: center;
  border-radius: 5px; /* Keep the border-radius for the container if desired */
  overflow: hidden;
}

.search-bar input {
  padding: 8px;
  border: none;
  outline: none;
}

.search-bar .search-button {
  padding: 8px;
  border: none; /* Removed the default border */
  background: none; /* Optional: remove background */
  cursor: pointer;
}

  .sidebar-overlay {
    position: fixed;
    top: 0; 
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
    transition: opacity 0.3s ease-in-out;
    opacity: 0;
    pointer-events: none;
  }
  
  .sidebar-overlay {
    opacity: 0;
    pointer-events: none;
  }
  
  .sidebar-open + .sidebar-overlay {
    opacity: 1;
    pointer-events: auto;
  }
  
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 250px;
    background-color: #f9f9f9;
    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out;
    z-index: 1000;
    padding: 20px;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
  }
  
  .sidebar-open {
    transform: translateX(0);
  }
  
  .profile {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 1px solid #eee;
    margin-bottom: 20px;
  }
  
  .username-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .username-image {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-bottom: 5px;
  }
  
  .username {
    font-weight: bold;
    white-space: nowrap;
  }
  
  .sidebar-nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .sidebar-nav li {
    padding: 10px 0;
  }
  
  .nav-item {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #333;
    padding: 8px 15px;
    border-radius: 8px;
    transition: background-color 0.3s;
  }
  
  .nav-item:hover {
    background-color: #eee;
  }
  
  .nav-icon {
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .nav-icon img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
  
  .bottom-action {
    margin-top: auto;
    padding-top: 20px;
    border-top: 1px solid #eee;
    text-align: center;
  }
  
  .bottom-action-icon {
    background-color: transparent;
    color: white;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    cursor: pointer;
  }
  
  .bottom-action-icon img {
    width: 20px;
    height: 20px;
    object-fit: contain;
  }
  
  .items-grid {
    padding: 2rem;
    transition: margin-left 0.3s ease-in-out;
  }
  
  .items-grid {
    margin-left: 0; /* Default margin */
  }
  
  .sidebar-open + .items-grid {
    margin-left: 250px; /* Adjust based on sidebar width */
  }
  
  /* Ensure the header stays at the top */
  .header {
    position: sticky;
    top: 0;
    background-color: #f9f9f9; /* Ensure background if transparent */
    z-index: 11; /* Higher than sidebar and overlay */
  }
  </style>