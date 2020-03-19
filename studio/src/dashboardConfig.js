export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5e73274729cacef843402d1e',
                  title: 'Sanity Studio',
                  name: 'charge-fast-studio',
                  apiId: 'd3e98c59-93d9-4c16-b1ab-76296530244c'
                },
                {
                  buildHookId: '5e732747857086f5ccbff5b4',
                  title: 'Blog Website',
                  name: 'charge-fast',
                  apiId: '595c629f-4144-494b-817c-6e6f18aec8fb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tunoon/charge-fast',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://charge-fast.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
