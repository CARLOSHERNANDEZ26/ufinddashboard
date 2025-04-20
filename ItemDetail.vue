<template>
    <div class="item-detail-page">
      <header class="header">
        <h1>ITEM DETAILS</h1>
        <button class="back-button" @click="$router.back()">🔙</button>
      </header>
      <div class="detail-container">
        <img :src="item.image" alt="Item" class="item-image" />
        <p><strong>Room/Facility:</strong> {{ item.room }}</p>
        <p><strong>Date/Time:</strong> {{ item.datetime }}</p>
        <p><strong>Description:</strong> {{ item.description }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router';
  const route = useRoute();
  
  const item = {
    id: route.params.id,
    image: `/src/assets/images/item${route.params.id}.jpg`,
    room: 'Room 301',
    datetime: '2025-04-15T14:30',
    description: 'Lost item description for item #' + route.params.id
  };
  </script>
  
  <style scoped>
  .item-detail-page {
    padding: 2rem;
    background-color: #fefadc;
  }
  
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .item-image {
    width: 300px;
    height: auto;
    border-radius: 12px;
    margin: 1rem 0;
  }
  
  .detail-container {
    text-align: left;
    max-width: 500px;
    margin: auto;
  }
  </style>
  