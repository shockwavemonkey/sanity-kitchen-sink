export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f335e2f7efe450af0617791',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-4i6xnsbz',
                  apiId: '6df574e5-4af8-4f38-9972-a8b3e546aa0c'
                },
                {
                  buildHookId: '5f335e2f7efe45260f617882',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-cgtrsus1',
                  apiId: '86b5c688-2394-4e84-bc6c-e7308af4bfb9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/shockwavemonkey/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-cgtrsus1.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
