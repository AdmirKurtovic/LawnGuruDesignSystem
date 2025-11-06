<template>
  <DefaultTheme.Layout>
    <template #sidebar-nav-before>
      <SidebarHeader />
    </template>
    <template #sidebar-nav-after>
      <SidebarFooter />
    </template>
  </DefaultTheme.Layout>
</template>

<script setup>
import DefaultTheme from 'vitepress/theme'
import SidebarHeader from './components/SidebarHeader.vue'
import SidebarFooter from './components/SidebarFooter.vue'
</script>
