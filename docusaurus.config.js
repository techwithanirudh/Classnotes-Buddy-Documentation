// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'Classnotes Buddy Docs',
	tagline: 'Learn how to use Classnotes Buddy',
	url: 'https://Classnotes-Buddy-Services.techwithanirudh.repl.co',
	baseUrl: '/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/favicon.ico',

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: 'techwithanirudh', // Usually your GitHub org/user name.
	projectName: 'Classnotes-Buddy-Documentation', // Usually your repo name.

	// Even if you don't use internalization, you can use this field to set useful
	// metadata like html lang. For example, if your site is Chinese, you may want
	// to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: 'en',
		locales: ['en'],
	},

	presets: [
		[
			'classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl:
						'https://github.com/techwithanirudh/Classnotes-Buddy-Documentation/tree/main/docs/',
					breadcrumbs: true,
					showLastUpdateTime: false,
				},
				blog: {
					showReadingTime: true,
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl:
						'https://github.com/techwithanirudh/Classnotes-Buddy-Documentation/tree/main/blog/',
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
			}),
		],
	],

	themes: [
		[
			require.resolve("@easyops-cn/docusaurus-search-local"),
			{
				// indexBlog: false,
				docsRouteBasePath: "/",
				searchResultLimits: 12,
			},
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			colorMode: {
				respectPrefersColorScheme: true,
			},
			navbar: {
      			hideOnScroll: true,
				title: 'Classnotes Buddy',
				logo: {
					alt: 'Classnotes Buddy Logo',
					src: 'img/logo.svg',
					href: 'https://notes-buddy.techwithanirudh.repl.co/',
        			target: '_blank'
				},
				items: [
					{
						type: 'doc',
						docId: 'intro',
						position: 'left',
						label: 'Tutorial',
					},
					{ to: '/blog', label: 'Blog', position: 'left' },
					// {
					// 	href: 'https://github.com/techwithanirudh/Classnotes-Buddy-Documentation',
					// 	label: 'GitHub',
					// 	position: 'right',
					// },
					{
						type: 'localeDropdown',
						position: 'right'
					},
					{
						type: 'search',
						position: 'right'
					},
					{
						type: 'html',
						position: 'right',
						value: `<a href="https://notes-buddy.techwithanirudh.repl.co/signup" target="_blank" class="sign-up-button">Sign up</a>`
					}
				],
			},
			footer: {
				style: 'dark',
				links: [
					{
						title: 'Docs',
						items: [
							{
								label: 'Tutorial',
								to: '/docs/intro',
							},
						],
					},
					{
						title: 'Community',
						items: [
							{
								label: 'Stack Overflow',
								href: 'https://stackoverflow.com/questions/tagged/docusaurus',
							},
							{
								label: 'Discord',
								href: 'https://discordapp.com/invite/docusaurus',
							},
							{
								label: 'Twitter',
								href: 'https://twitter.com/AnirudhWith',
							},
						],
					},
					{
						title: 'More',
						items: [
							{
								label: 'Blog',
								to: '/blog',
							},
							{
								label: 'GitHub',
								href: 'https://github.com/techwithanirudh/Classnotes-Buddy-Documentation',
							},
						],
					},
				],
				copyright: `Copyright ?? ${new Date().getFullYear()} Tech With Anirudh, Inc. Built with Docusaurus.`,
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
		}),
};

module.exports = config;
