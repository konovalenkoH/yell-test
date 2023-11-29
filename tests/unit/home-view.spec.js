import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';
import HomeView from '@/views/HomeView.vue';
import Card from '@/components/Card.vue';

const localVue = createLocalVue();

localVue.use(Card);
localVue.use(Vuex);

const store = new Vuex.Store();

describe('HomeView.vue', () => {
  it('renders when the view is created', () => {
    const title = 'Select your name';
    const wrapper = shallowMount(HomeView, { store, localVue });

    expect(wrapper.find('.home-title').text()).toMatch(title);
  });

  it('renders when using Card component', () => {
    shallowMount(HomeView, {
      store,
      localVue,
      stubs: {
        Card,
      },
    });
  });
});
