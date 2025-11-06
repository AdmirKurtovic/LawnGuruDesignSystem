<template>
  <div class="sidebar-footer">
    <a
      href="https://github.com/lawnguru/design-system"
      target="_blank"
      rel="noopener noreferrer"
      class="sidebar-github"
      aria-label="GitHub Repository"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
      </svg>
      <span>GitHub</span>
    </a>
  </div>
</template>

<script setup>
</script>

<style scoped>
.sidebar-footer {
  padding-top: 16px;
  margin-top: auto;
  border-top: 1px solid #E5E5E5;
}

.sidebar-github {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding: 10px 16px;
  border-radius: 6px;
  color: #2A2A2A;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.15s ease;
  text-decoration: none;
}

.sidebar-github:hover {
  background: #E5E5E5;
  color: #0B0B0B;
}

.sidebar-github svg {
  width: 20px;
  height: 20px;
}
</style>
