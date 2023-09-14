import Avatar from './Avatar.vue'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction

/** @type { import('@storybook/vue3').Meta<Avatar> } */
const config = {
  title: 'Base/Avatar',
  component: Avatar,
  argTypes: {
    src: {
      type: 'string',
      description: 'Source for the Avatar Image',
    },
    size: {
      control: 'select',
      type: 'string',
      description: 'Size of the Avatar',
      options: ['xs', 'sm', 'md', 'lg', 'none'],
    },
    alt: {
      type: 'string',
      description: 'Alt text for the Image, necessary for accessibility',
    },
    circle: {
      description: 'Whether the Avatar should be cut into a circle',
    },
    loading: {
      description:
        'The [loading attribute](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/loading) for the contained image',
      options: ['lazy', 'eager'],
      control: 'select',
    },
  },
}
export default config

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Primary = {
  args: {
    size: 'sm',
    src: 'https://cdn.modrinth.com/user/MpxzqsyW/eb0038489a55e7e7a188a5b50462f0b10dfc1613.jpeg',
    alt: 'Geometrically',
  },
}

export const Large = {
  args: {
    ...Primary.args,
    size: 'lg',
  },
}

export const Circular = {
  args: {
    size: 'md',
    src: 'https://cdn.modrinth.com/data/AANobbMI/icon.png',
    circle: true,
  },
}

export const NoSource = {
  name: 'Small without source',
  args: {
    size: 'sm',
  },
}
