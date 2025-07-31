<template>
  <div class="dashboard">
    <!-- Left Navigation Bar -->
    <nav class="sidebar">
      <div class="sidebar-header">
        <h2>PSX Tracker</h2>
      </div>
      <ul class="nav-menu">
        <li>
          <router-link to="/dashboard/indexes" class="nav-link" active-class="active">
            <span class="nav-icon">📊</span>
            Indexes
          </router-link>
        </li>
        <li>
          <router-link to="/dashboard/market-snapshots" class="nav-link" active-class="active">
            <span class="nav-icon">📈</span>
            Market Snapshots
          </router-link>
        </li>
        <li>
          <router-link to="/dashboard/orders" class="nav-link" active-class="active">
            <span class="nav-icon">📋</span>
            Orders
          </router-link>
        </li>
      </ul>
      <div class="sidebar-footer">
        <button @click="handleLogout" class="logout-btn">
          <span class="nav-icon">🚪</span>
          Logout
        </button>
      </div>
    </nav>

    <!-- Main Content Area -->
    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const handleLogout = () => {
  localStorage.removeItem('auth_token')
  router.push('/')
}
</script>

<style scoped>
/* Reset any default margins and padding */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.dashboard {
  display: flex;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}

.sidebar {
  width: 250px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
  flex-shrink: 0;
}

.sidebar-header {
  padding: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.sidebar-header h2 {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
}

.nav-menu {
  list-style: none;
  padding: 0;
  margin: 0;
  flex: 1;
}

.nav-menu li {
  margin: 0;
}

.nav-link {
  display: flex;
  align-items: center;
  padding: 15px 20px;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
  border-left: 3px solid transparent;
}

.nav-link:hover {
  background: rgba(255, 255, 255, 0.1);
  border-left-color: rgba(255, 255, 255, 0.5);
}

.nav-link.active {
  background: rgba(255, 255, 255, 0.2);
  border-left-color: white;
}

.nav-icon {
  margin-right: 12px;
  font-size: 1.2rem;
}

.sidebar-footer {
  padding: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.logout-btn {
  width: 100%;
  padding: 12px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.logout-btn:hover {
  background: rgba(255, 255, 255, 0.2);
}

.main-content {
  flex: 1;
  padding: 20px;
  background: #f8f9fa;
  overflow-y: auto;
  min-width: 0;
}
</style> 