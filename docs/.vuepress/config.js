module.exports = {
    title: 'WHQ Handbook',
    description: 'The WHQ knowledge base.',
    head: [
        ['link', {rel: 'icon', href: `/logo.png`}]
    ],
    serviceWorker: true,
    themeConfig: {
        repo: 'worldhqinc/whq-handbook',
        editLinks: true,
        docsDir: 'docs',
        nav: [
            {
                text: 'Dev Guide',
                link: '/dev-guide/',
            }
        ],
        sidebar: {
            '/dev-guide/': [
                {
                    title: 'Dev Guide',
                    collapsable: false,
                    children: [
                        '',
                        'process-tooling',
                        'html',
                        'css',
                        'javascript',
                        'fonts-media',
                        'performance',
                        'accessibility',
                        'seo',
                        'docker',
                        'node-js',
                        'php',
                        'wordpress',
                        'launch-deployment',
                        'emails',
                        'resources'
                    ]
                }
            ]
        }
    }
}
