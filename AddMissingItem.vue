<template>
    <div class="add-missing-item-page">
      <header class="header">
        <img src="@/assets/images/apple-touch-icon.png" alt="Logo" class="logo" />
        <h1>REPORT LOST ITEM</h1>
        <button class="back-button" @click="$router.back()"><img src="@/assets/images/back.png" alt="Back" class="back-icon" /></button>
      </header>
  
      <div class="upload-box">
        <div class="plus-icon">+</div>
      </div>
  
      <form class="form">
        <label>
          ROOM/FACILITY NUMBER:
          <input type="text" />
        </label>
  
        <label>
          DATE/TIME:
          <input type="datetime-local" />
        </label>
  
        <label>
  DESCRIPTION
          <textarea></textarea>
        </label>
  
      </form>
    </div>
  </template>
  
  <script setup>
  // no logic needed yet unless you're handling form submission or validation
  </script>
  
  <style scoped>
 
  .add-missing-item-page {
    background-color: #fefadc;
    padding: 2rem;
    font-family: Arial, sans-serif;
    text-align: center;
  }
  
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .logo {
    width: 50px;
    height: 50px;
  }
  
  .back-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}

.back-icon {
  width: 40px; /* Adjust back icon size */
  height: 30px; /* Adjust back icon size */
}

  .upload-box {
    background: linear-gradient(to bottom, #fff, #ccc);
    height: 200px;
    width: 300px;
    margin: 2rem auto;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .plus-icon {
    font-size: 32px;
    font-weight: bold;
  }
  
  .form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 80%;
    max-width: 400px;
    margin: auto;
    text-align: left;
  }
  
  label {
    font-weight: bold;
    color: #000;
  }
  
  input,
  textarea {
    width: 100%;
    padding: 0.5rem;
    font-size: 16px;
    border: none;
    border-bottom: 2px solid #000;
    background-color: transparent;
  }
  </style>
  