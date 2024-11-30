<template>
  <div class="flex flex-col h-screen">
    <nav class="bg-gray-800 text-white p-4">
      <h1 class="text-lg font-bold">My Dashboard</h1>
    </nav>
    <div class="flex flex-1">
      <aside :class="['bg-gray-700 text-white transition-all duration-300', isCollapsed ? 'w-20' : 'w-64']">
        <ul class="list-none p-0">
          <li @click="toggleCollapse" class="flex items-center p-4 cursor-pointer hover:bg-gray-600">
            <i :class="isCollapsed ? 'expand-icon' : 'collapse-icon'"></i>
            <span v-if="!isCollapsed" class="ml-2">Toggle Sidebar</span>
          </li>
          <li class="flex items-center p-4 cursor-pointer hover:bg-gray-600">
            <i class="home-icon"></i>
            <span v-if="!isCollapsed" class="ml-2">Home</span>
          </li>
          <li class="p-4 cursor-pointer hover:bg-gray-600">
            <div class="flex items-center">
              <i class="settings-icon"></i>
              <span v-if="!isCollapsed" class="ml-2">Settings</span>
            </div>
            <ul v-if="!isCollapsed" class="list-none pl-4">
              <li class="flex items-center p-2 cursor-pointer hover:bg-gray-600">
                <i class="user-icon"></i>
                <span class="ml-2">User Settings</span>
              </li>
              <li class="flex items-center p-2 cursor-pointer hover:bg-gray-600">
                <i class="security-icon"></i>
                <span class="ml-2">Security Settings</span>
              </li>
            </ul>
          </li>
        </ul>
      </aside>
      <section class="flex-1 p-4">
        <router-view></router-view>
      </section>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      isCollapsed: false,
    };
  },
  methods: {
    toggleCollapse() {
      this.isCollapsed = !this.isCollapsed;
    },
  },
};
</script>

<style scoped>
.expand-icon::before {
  content: '▶';
}

.collapse-icon::before {
  content: '◀';
}

.home-icon::before {
  content: '🏠';
}

.settings-icon::before {
  content: '⚙️';
}

.user-icon::before {
  content: '👤';
}

.security-icon::before {
  content: '🔒';
}
</style>
