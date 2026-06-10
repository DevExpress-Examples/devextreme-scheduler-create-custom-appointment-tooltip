import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import Content from '../HomeContent.vue';

describe('Content', () => {
  it('renders properly', () => {
    const wrapper = mount(Content);
    expect(wrapper.find('.dx-scheduler').exists()).toBe(true);
    expect(wrapper.find('.dx-list').exists()).toBe(true);
  });
});
