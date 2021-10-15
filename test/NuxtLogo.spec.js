import { mount } from '@vue/test-utils'
import NuxtLogo from '@/components/NuxtLogo.vue'

describe('NuxtLogo', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(NuxtLogo)
    expect(wrapper.vm).toBeTruthy()
  })

  test('adds 1 + 2 to equal 3', () => {
    const wrapper = mount(NuxtLogo)
    expect(wrapper.vm.sum(1, 2)).toBe(3);
  });
})
