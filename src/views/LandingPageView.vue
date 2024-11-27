<script setup>
import NavbarView from '@/components/shared/NavbarView.vue';
import MainView from '@/components/shared/MainView.vue';
import CircleDectHome from '@/components/shared/CircleDectHome.vue';
import FooterView from '@/components/shared/FooterView.vue';
</script>
<template class="flex flex-row">
  <NavbarView class="sticky top-0 z-30" />
  <CircleDectHome />
  <MainView class="bg-fourground" />
  <FooterView />
</template>
