import { shallowMount } from '@vue/test-utils';
import Card from '@/components/Card.vue';

describe('Card.vue', () => {
  it('renders when the component is created', () => {
    const headline = 'Test';
    const description = 'Lorem ipsum';
    const location = 'Valhalla';
    const classification = 'Hard-worker';
    const added = '01.01.1900';
    const wrapper = shallowMount(Card, {
      propsData: {
        headline,
        description,
        location,
        classification,
        added,
      },
    });

    expect(wrapper.vm.headline).toMatch(headline);
    expect(wrapper.vm.description).toMatch(description);
    expect(wrapper.vm.location).toMatch(location);
    expect(wrapper.vm.classification).toMatch(classification);
    expect(wrapper.vm.added).toMatch(added);
  });
});
