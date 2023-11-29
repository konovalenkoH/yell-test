<template>
  <div class="p-5 border border-gray-300 rounded-lg shadow-lg">
    <h2 class="text-neutral-500 mb-3 text-3xl font-semibold">{{ headline }}</h2>
    <div class="text-neutral-900 text-sm mb-1">{{ classification }}</div>
    <div class="text-cyan-500 mb-1">{{ location }}</div>
    <div class="mt-3 mb-5">{{ description }}</div>
    <div class="flex text-sm">
      <span class="ml-auto text-neutral-900 text-sm">Added: {{ added }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  props: {
    headline: { type: String, default: '', requured: true },
    description: { type: String, default: '', requured: true },
    location: { type: String, default: '', requured: true },
    classification: { type: String, default: '', requured: true },
    added: { type: String, default: '', requured: true },
  },
};
</script>
