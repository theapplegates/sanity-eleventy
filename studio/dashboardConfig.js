export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '61e055fa78d1d60068a5877a',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-studio-yqynyvdb',
                  apiId: '8764c89e-c0a2-4ff1-8f93-fee4e5a6dd83'
                },
                {
                  buildHookId: '61e055fbd812d4006db93b73',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-web-2kornme1',
                  apiId: 'ac8508ab-6bfe-4f67-a536-5e1f281cce49'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/theapplegates/sanity-eleventy',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-web-2kornme1.netlify.app', category: 'apps'}
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
