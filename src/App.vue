<template>
  <router-view></router-view>
</template>

<script>
export default {
  watch: {
    $route(to) {
      const routeName = to.name || "Not Found 404";
      document.title = `Pip Trade | ${routeName}`;
    },
  },
  mounted() {
    const routeName = this.$route.name || "Not Found 404";
    document.title = `Pip Trade | ${routeName}`;
  },
};
</script>
