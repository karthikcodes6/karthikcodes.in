module.exports = {
  docs: [
    'Home',
    {
      type: 'category',
      label: 'Tech Notes',
      link: {
        type: 'generated-index',
        title: 'My Tech Notes',
        description:
          "All coding notes I've written, organized by topic.",
      },
      items: [
        'tech-notes/js-ts-monorepo',
        'tech-notes/design-system-storybook',
        'tech-notes/tailwind-react-config',
        'tech-notes/postgraphile',
        'tech-notes/problem-solving',
        'tech-notes/frontend-masters-full-stack-notes',
        'tech-notes/objected-oriented-design',
        'tech-notes/simple-promise-notes',
      ],
    },
    {
      type: 'category',
      label: 'Bookmarks',
      link: {
        type: 'generated-index',
        title: 'My Bookmarks',
        description:
          "All links I've bookmarked, organized by topic.",
      },
      items: [
        'bookmarks/all-bookmarks'
      ],
    },
    {
      type: 'category',
      label: 'Coding Patterns',
      link: {
        type: 'generated-index',
        title: 'Coding Patterns',
        description:
          "Coding patterns and how to use them to solve problems.",
      },
      items: [
        {
          type: 'category',
          label: 'Solid Principles',
          items: [
            'coding-patterns/solid-principles/interface-segregation-principle',
            'coding-patterns/solid-principles/liskov-principle',
            'coding-patterns/solid-principles/open-closed-principle',
            'coding-patterns/solid-principles/single-responsibility-principle',
            'coding-patterns/solid-principles/dependency-inversion-principle',
          ],
        },
        {
          type: 'category',
          label: 'Structural Principles',
          items: [
            'coding-patterns/structural/command-pattern',
            'coding-patterns/structural/constructor-pattern',
            'coding-patterns/structural/facade-pattern',
            'coding-patterns/structural/mediator-pattern',
            'coding-patterns/structural/module-pattern',
            'coding-patterns/structural/observer-pattern',
            'coding-patterns/structural/prototype-pattern',
            'coding-patterns/structural/revealing-module-pattern',
            'coding-patterns/structural/singleton-pattern',
          ],
        },
        'coding-patterns/oops'
      ],
    },
    {
      type: 'category',
      label: "Web",
      items: [
        'web-interview/web-interview-algorithms',
      ]
    },
    {
      type: 'category',
      label: "Algorithms",
      items: [
        {
          type: 'category',
          label: "Searching",
          items: [
            'algorithms/searching/binary-searching',
          ]
        },
        {
          type: 'category',
          label: "Sorting",
          items: [
            'algorithms/sorting/bubble-sort',
            'algorithms/sorting/insertion-sort',
            'algorithms/sorting/merge-sort',
            'algorithms/sorting/quick-sort',
            'algorithms/sorting/radix-sort',
            'algorithms/sorting/selection-sort',
          ]
        },
        {
          type: 'category',
          label: "Graphs",
          items: [
            'algorithms/graphs/graphs-overview',
          ]
        },
        {
          type: 'category',
          label: "Trees",
          items: [
            'algorithms/trees/trees-overview',
          ]
        },
        'algorithms/two-pointer-technique'
      ]
    },
    {
      type: 'category',
      label: "System Design",
      items: [
        'system-design/system-design-overview',
        'system-design/system-design-client-server-model',
        'system-design/system-design-network-protocols',
        'system-design/system-design-storage',
        'system-design/system-design-latency-throughput',
        'system-design/system-design-availability',
        'system-design/system-design-caching',
        'system-design/system-design-proxies',
        'system-design/system-design-load-balancers',
      ]
    },
    {
      type: 'category',
      label: "Personal Development",
      items: ['personal-development/audience-identification']
    }
  ],
};
