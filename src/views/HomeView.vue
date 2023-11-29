<template>
  <div class="home w-full">
    <div class="bg-yellow-300 p-3 mb-5 rounded-lg border bolder-black shadow-lg">
      <div class="home-title text-2xl font-medium text-neutral-900 text-center mb-5">
        Select your name
      </div>
      <!-- eslint-disable-next-line vuejs-accessibility/form-control-has-label -->
      <input
        v-model="username"
        class="block w-80 mx-auto border border-black text-gray-500 font-semibold text-sm bg-white
          rounded-full py-2 px-4 placeholder:text-gray-500 placeholder:font-normal"
        type="text"
        placeholder="Enter your name"
        @change="onChangeName"
      />
    </div>
    <div v-if="jobs?.length" class="lg:grid grid-cols-2 gap-5 py-10">
      <Card
        v-for="item in jobs"
        :key="item.id"
        class="lg:mb-0 mb-4"
        :headline="item.headline"
        :classification="item.classification"
        :added="item.date_added"
        :description="item.description"
        :location="item.location"
      />
    </div>
    <p v-if="jobs?.length < 1" class="text-4xl text-center py-10 px-5">Oops! No jobs found</p>
  </div>
</template>

<script>
const Card = () => import('@/components/Card.vue');

export default {
  name: 'HomeView',
  components: {
    Card,
  },
  data() {
    return {
      username: '',
    };
  },
  created() {
    this.$store.dispatch('getJobs');
  },
  computed: {
    jobs() {
      return this.$store.getters.getJobsByName(this.username);
    },
  },
  methods: {
    onChangeName(e) {
      this.$store.commit('setUsername', e.target.value);
    },
  },
};
</script>
