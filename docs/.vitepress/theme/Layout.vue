<template>
  <DefaultTheme.Layout>
    <template #sidebar-nav-before>
      <SidebarHeader />
    </template>
  </DefaultTheme.Layout>
</template>

<script setup>
import DefaultTheme from 'vitepress/theme'
import SidebarHeader from './components/SidebarHeader.vue'
</script>
