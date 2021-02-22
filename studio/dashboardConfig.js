export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nuxt-events'
      }
    },
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
                  buildHookId: '',
                  title: 'Sanity Studio',
                  name: 'senyumharapan-studio',
                  apiId: 'acb4bcd3-2d2f-4f7d-a430-ee8faf5fd296'
                },
                {
                  buildHookId: '6033c10f963d4c3c0e48cf71',
                  title: 'Events Website',
                  name: 'senyumharapan',
                  apiId: '26aab43d-44d4-4db4-868b-c0d5339ca99e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/satrialb/senyumharapan',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://senyumharapan.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently created sessions', order: '_createdAt desc', types: ['session']},
      layout: {width: 'medium'}
    }
  ]
}
