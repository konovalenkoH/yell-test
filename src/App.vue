<template>
  <div id="app">
    <header class="header w-full p-4 shadow-md bg-neutral-900">
      <a
        class="w-auto text-2xl text-cyan-500 font-bold"
        href="/"
        :title="`Go to ${projectName} homepage`"
      >
        {{ projectName }}
      </a>
    </header>
    <router-view class="main container-xl md:container mx-auto py-8 px-4 text-neutral-400" />
    <footer class="footer w-full p-4 bg-neutral-900 text-white text-xs text-center">
      © Copyright {{ currentYear }} {{ projectName }}. All rights reserved
    </footer>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      projectName: 'Finder',
    };
  },
  computed: {
    currentYear() {
      const today = new Date();

      return today.getFullYear();
    },
  },
};
</script>

<style lang="scss">
#app {
  @apply grid h-screen;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    'header'
    'main'
    'footer';
}

.header {
  grid-area: header;
}

.main {
  grid-area: main;
}

.footer {
  grid-area: footer;
}
</style>
