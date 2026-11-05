import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'World Forge',
  description: 'A living encyclopedia of a world shaped by Aether, Mana, and Potential',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'World Structure', link: '/world-structure/' },
      { text: 'Continents', link: '/continents/' },
      { text: 'Magic Systems', link: '/magic/' },
      { text: 'Races & Factions', link: '/races/' },
      { text: 'Dungeons', link: '/dungeons/' },
      { text: 'Suggest Changes', link: 'https://github.com/anythingcreature/world-forge/issues/new/choose' }
    ],

    sidebar: {
      '/world-structure/': [
        {
          text: 'World Structure',
          items: [
            { text: 'Overview', link: '/world-structure/' },
            { text: 'The Surface', link: '/world-structure/surface' },
            { text: 'The Caverns', link: '/world-structure/caverns' },
            { text: 'The Dungeon Layer', link: '/world-structure/dungeon-layer' },
            { text: 'The Skylands', link: '/world-structure/skylands' },
            { text: 'The Core', link: '/world-structure/core' },
          ]
        }
      ],
      '/continents/': [
        {
          text: 'Continents',
          items: [
            { text: 'Overview', link: '/continents/' },
            { text: 'Nullands', link: '/continents/nullands' },
            { text: 'Quantifier', link: '/continents/quantifier' },
            { text: 'Demon-lands', link: '/continents/demon-lands' },
            { text: 'Frosted Lands', link: '/continents/frosted-lands' },
            { text: 'Eretzara', link: '/continents/eretzara' },
            { text: "Nature's Continent", link: '/continents/natures-continent' },
            { text: 'Elemental Lands', link: '/continents/elemental-lands' },
            { text: 'The Dream', link: '/continents/the-dream' },
            { text: 'The Mindscape', link: '/continents/mindscape' },
            { text: 'Undersea Alliance', link: '/continents/undersea' },
            { text: 'Uncharted Lands', link: '/continents/uncharted-lands' },
          ]
        }
      ],
      '/magic/': [
        {
          text: 'Magic Systems',
          items: [
            { text: 'Overview', link: '/magic/' },
            { text: 'Aether, Mana & Potential', link: '/magic/aether-mana-potential' },
            { text: 'Cultivators', link: '/magic/cultivators' },
            { text: 'Mages', link: '/magic/mages' },
            { text: 'Alchemists', link: '/magic/alchemists' },
            { text: 'Spiritualists', link: '/magic/spiritualists' },
            { text: 'Attunements', link: '/magic/attunements' },
          ]
        }
      ],
      '/races/': [
        {
          text: 'Races & Factions',
          items: [
            { text: 'Overview', link: '/races/' },
            { text: 'Sentient Races', link: '/races/sentient-races' },
            { text: 'Major Factions', link: '/races/major-factions' },
          ]
        }
      ],
      '/dungeons/': [
        {
          text: 'Dungeons',
          items: [
            { text: 'Overview', link: '/dungeons/' },
            { text: 'Dungeon Mechanics', link: '/dungeons/mechanics' },
            { text: 'Notable Dungeons', link: '/dungeons/notable' },
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/anythingcreature/world-forge' }
    ],

    search: {
      provider: 'local'
    },

    footer: {
      message: 'A living record of a world in flux.',
      copyright: 'Maintained by the Archivist'
    }
  }
})