export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
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
                  buildHookId: '6023d47e06955f2c2d05e75b',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-g9mr192e',
                  apiId: '5f011c05-0cc6-4910-abe3-b3b1ecca0b39'
                },
                {
                  buildHookId: '6023d47ec77ef42da9feca67',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-xtj71832',
                  apiId: '0e7ed602-76d9-4585-80c0-eb3fefd13f91'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/DavidFyon/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-xtj71832.netlify.app', category: 'apps'}
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
