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
                  buildHookId: '603ef47a5ea31986b46b73f8',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-3u4f7g1q',
                  apiId: '2bb1e2ee-2685-4cad-a9fc-ff4df739fa90'
                },
                {
                  buildHookId: '603ef47bb8fa02954754e8de',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-gthubrxk',
                  apiId: '25dc4770-31e2-47ba-8829-50ccf549b213'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/DoctorDerek/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-gthubrxk.netlify.app', category: 'apps'}
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
