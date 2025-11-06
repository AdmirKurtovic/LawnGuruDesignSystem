<template>
  <div class="sidebar-header">
    <!-- Logo and Title -->
    <a href="/" class="sidebar-logo-link">
      <img src="/logo.svg" alt="LawnGuru" class="sidebar-logo" />
      <div class="sidebar-title">
        <span class="sidebar-title-main">LawnGuru</span>
        <span class="sidebar-title-sub">Design System</span>
      </div>
    </a>

    <!-- Search Bar -->
    <div class="sidebar-search">
      <input
        type="text"
        placeholder="Search..."
        class="sidebar-search-input"
        @click="openSearch"
        readonly
      />
      <svg class="sidebar-search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="11" cy="11" r="8"></circle>
        <path d="m21 21-4.35-4.35"></path>
      </svg>
    </div>
  </div>
</template>

<script setup>
const openSearch = () => {
  // Trigger VitePress built-in search (Cmd/Ctrl + K)
  const event = new KeyboardEvent('keydown', {
    key: 'k',
    code: 'KeyK',
    ctrlKey: true,
    metaKey: true,
    bubbles: true
  });
  document.dispatchEvent(event);
}
</script>

<style scoped>
.sidebar-header {
  padding-bottom: 24px;
  margin-bottom: 24px;
  border-bottom: 1px solid #E5E5E5;
}

.sidebar-logo-link {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  margin-bottom: 16px;
}

.sidebar-logo {
  width: 40px;
  height: 40px;
}

.sidebar-title {
  display: flex;
  flex-direction: column;
  line-height: 1.2;
}

.sidebar-title-main {
  font-size: 18px;
  font-weight: 600;
  color: #0B0B0B;
}

.sidebar-title-sub {
  font-size: 12px;
  font-weight: 500;
  color: rgba(11, 11, 11, 0.6);
}

.sidebar-search {
  position: relative;
  margin-bottom: 0;
}

.sidebar-search-input {
  width: 100%;
  padding: 8px 12px 8px 36px;
  border: 1px solid #E5E5E5;
  border-radius: 6px;
  font-size: 14px;
  color: #2A2A2A;
  background: #FFFFFF;
  transition: all 0.15s ease;
  cursor: pointer;
}

.sidebar-search-input:hover {
  border-color: #008934;
}

.sidebar-search-input:focus {
  outline: none;
  border-color: #008934;
  box-shadow: 0 0 0 3px rgba(0, 137, 52, 0.1);
}

.sidebar-search-icon {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #2A2A2A;
  pointer-events: none;
}
</style>
