<template>
  <div class="dashboard-container" style="background-color: #fefadc;">
    <aside
      class="sidebar"
      :class="{ 'sidebar-open': isSidebarOpen }"
    >
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

    <main class="main-content" :style="{ marginLeft: isSidebarOpen ? '250px' : '0' }">
      <header class="dashboard-header">
        <!-- New Sidebar Toggle Icon -->
        <div class="top-icons">
          <img
            src="@/assets/images/Sidebar.png"
            alt="Toggle Sidebar"
            class="top-profile-icon"
            @click="toggleSidebar"
          />
        </div>

        <!-- Red Logo and Title (no longer clickable) -->
        <div class="dashboard-title">
          <img src="/src/assets/images/apple-touch-icon.png" alt="Logo" class="logo" />
          <h1>U FIND DASHBOARD</h1>
        </div>

        <div class="icons">
          <span></span>
          <span></span>
        </div>
      </header>

      <div class="cards-container">
        <div class="card" @click="goToAddMissingItem">
          <div class="card-icon">
            <span class="icon-text">+</span>
          </div>
          <div class="card-title">ADD MISSING ITEM</div>
        </div>

        <div class="card" @click="goToLostItemList">
          <div class="card-icon">
            <img src="@/assets/images/comment.png" alt="lostitems" />
          </div>
          <div class="card-title">LOST ITEM LIST</div>
        </div>

        <div class="card">
          <div class="card-icon">
            <img src="@/assets/images/megaphone.png" alt="Megaphone" />
          </div>
          <div class="card-title">CLAIMED ITEMS</div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const goToLostItemList = () => {
  router.push('/lost-items');
};

const isSidebarOpen = ref(false);

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};

const router = useRouter();

const goToAddMissingItem = () => {
  router.push('/add-missing-item');
};
</script>

<style>
/* Basic Reset */
body {
  margin: 0;
  font-family: Arial, sans-serif;
  height: 100vh;
}

/* Main container for the app */
.dashboard-container {
  display: flex;
  height: 100vh;
}

/* Sidebar Styling */
.sidebar {
  background-color: #f9f9f9;
  width: 0;
  overflow: hidden;
  transition: width 0.3s ease-in-out;
  padding: 0;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  height: 100%;
  z-index: 10;
}

.sidebar-open {
  width: 250px;
  padding: 20px;
}

.profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 1px solid #eee;
  margin-bottom: 20px;
}

.profile-icon {
  background-color: #ddd;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-bottom: 10px;
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
  background-color: #ccc;
  mask-size: cover;
  mask-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav-icon img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

/* Specific icons - replace with your actual icon classes or images */
.nav-icon.megaphone {
  background-image: url('@/assets/images/megaphone-sidebar.png');
  background-color: transparent;
}

.nav-icon.settings {
  background-image: url('@/assets/images/settings-icon.png');
  background-color: transparent;
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

/* Main content area */
.main-content {
  flex-grow: 1;
  padding: 30px;
  transition: margin-left 0.3s ease-in-out;
  display: flex;
  flex-direction: column; /* Stack header and cards */
  align-items: center; /* Center items horizontally */
  justify-content: flex-start; /* Align items to the top initially */
}

/* Header styling */
.dashboard-header {
  display: flex;
  align-items: center; /* Align logo and title vertically */
  justify-content: flex-start; /* Align logo and title to the left */
  margin-bottom: 40px;
  padding-bottom: 20px;
  border-bottom: 1px solid #eee;
  width: 100%;
  max-width: 1200px;
}

/* Left side of header: logo and title */
.dashboard-title {
  display: flex;
  align-items: center; /* Align logo and text in the div */
  gap: 10px; /* Space between logo and text */
  cursor: pointer;
}

/* Logo image styling */
.logo {
  width: 40px;
  height: 40px;
}

/* Title text */
.dashboard-header h1 {
  font-size: 28px;
  font-weight: bold;
  color: #000;
  margin: 0;
}

/* Right side icons */
.icons {
  display: none; /* Hide the icons */
}

/* Layout for cards */
.cards-container {
  display: flex;
  justify-content: center;
  align-items: center; /* Center cards vertically in the remaining space */
  flex-grow: 1; /* Allow cards container to take remaining vertical space */
  gap: 20px;
  flex-wrap: wrap;
}

/* Card design */
.card {
  background-color: #f00;
  color: white;
  width: 400px;
  height: 200px;
  border-radius: 12px;
  text-align: center;
  padding: 20px;
  cursor: pointer;
  transition: background 0.3s;
}

.card:hover {
  background-color: #f00;
}

/* Icon inside the card */
.card-icon {
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
}

.card-icon .icon-text {
  color: black;
  font-size: 24px;
}

.card-icon img {
  width: 30px;
  height: 30px;
  object-fit: contain;
}

/* Card title text */
.card-title {
  font-weight: bold;
  font-size: 16px;
}

/* Style for the profile image icon */
.profile-image-icon {
  background-color: transparent;
}

.profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 1px solid #eee;
  margin-bottom: 20px;
}

.profile-icon {
  background-color: #ddd;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-bottom: 10px;
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
.clickable-icon {
  cursor: pointer;
  transition: transform 0.2s;
}

.clickable-icon:hover {
  transform: scale(1.1);
}
 
.top-icons {
  margin-right: 20px;
}

.top-profile-icon {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.2s;
}

.top-profile-icon:hover {
  transform: scale(1.1);
}

</style>