const fs = require('fs')

const globby = require('globby')
const prettier = require('prettier')

;(async () => {
    const prettierConfig = await prettier.resolveConfig('./.prettierrc.js')

    // Generate pages sitemap urls
    //

    const pages = await globby([
        'pages/*.js',
        '!data/posts/*.mdx',
        '!data/*.mdx',
        '!pages/_*.js',
        '!pages/api',
        '!pages/404.js',
    ])
    pages.push('/posts')

    const pagesPaths = pages.map((page) => {
        const path = page.replace('pages', '').replace('.js', '')
        return path
    })

    const pagesTranslated = {
        '/index': false,
        '/posts': false,
    }

    const pagesUrlStructure = pagesPaths.map((path) => {
        let route = path === '/index' ? '' : path
        // Pages with translation have to point to each other bidirectionally

        // Pointing from page in 'en' to 'es' and from 'es' to 'en' respectively
        if (pagesTranslated[path]) {
            return `
            <url>
                <loc>${`https://www.jpmti2016.com${route}`}</loc>
                <xhtml:link rel="alternate" hreflang="es" href="https://www.jpmti2016.com/es${route}"/>
                <xhtml:link rel="alternate" hreflang="en" href="https://www.jpmti2016.com${route}"/>
            </url>
            <url>
                <loc>${`https://www.jpmti2016.com/es${route}`}</loc>
                <xhtml:link rel="alternate" hreflang="es" href="https://www.jpmti2016.com/es${route}"/>
                <xhtml:link rel="alternate" hreflang="en" href="https://www.jpmti2016.com${route}"/>
            </url>`
        }
        // The page doesn't has translation to 'es', only default in 'en'
        else {
            return `
            <url>
                <loc>${`https://www.jpmti2016.com${route}`}</loc>
            </url>`
        }
    })

    // Generate posts sitemap urls
    //

    const mdxPosts = await globby([
        '!pages/*.js',
        'data/posts/*.mdx',
        '!data/*.mdx',
        '!pages/_*.js',
        '!pages/api',
        '!pages/404.js',
    ])

    const mdxPostsPaths = mdxPosts.map((page) => {
        const path = page
            .replace('pages', '')
            .replace('data', '')
            .replace('.es.mdx', '')
            .replace('.en.mdx', '')
            .replace('.mdx', '')

        return path
    })

    const mdxPostsFreq = {}

    for (let p of mdxPostsPaths) {
        if (mdxPostsFreq[p]) {
            mdxPostsFreq[p] = mdxPostsFreq[p] + 1
        } else {
            mdxPostsFreq[p] = 1
        }
    }

    const mdxPostsPathsUrlStructure = mdxPosts.map((path) => {
        const cleanPath = path
            .replace('pages', '')
            .replace('data', '')
            .replace('.es.mdx', '')
            .replace('.en.mdx', '')
            .replace('.mdx', '')

        // Posts with translation have to point to each other bidirectionally

        // Pointing from 'en' to 'es'
        if (mdxPostsFreq[cleanPath] > 1 && path.match(/\.en.mdx?$/)) {
            return `
            <url>
                <loc>${`https://www.jpmti2016.com${cleanPath}`}</loc>
                <xhtml:link rel="alternate" hreflang="es" href="https://www.jpmti2016.com/es${cleanPath}"/>
                <xhtml:link rel="alternate" hreflang="en" href="https://www.jpmti2016.com${cleanPath}"/>
            </url>`
        }
        // Pointing from 'en' to 'en'
        else if (mdxPostsFreq[cleanPath] > 1 && path.match(/\.es.mdx?$/)) {
            return `
            <url>
                <loc>${`https://www.jpmti2016.com/es${cleanPath}`}</loc>
                <xhtml:link rel="alternate" hreflang="es" href="https://www.jpmti2016.com/es${cleanPath}"/>
                <xhtml:link rel="alternate" hreflang="en" href="https://www.jpmti2016.com${cleanPath}"/>
            </url>`
        }
        //The post is a translation to 'es' of an external url, doesn't has local 'en' original to point to
        else if (path.match(/\.es.mdx?$/)) {
            return `
            <url>
                <loc>${`https://www.jpmti2016.com/es${cleanPath}`}</loc>
            </url>`
        }
        // The post doesn't has translation to 'es', only default in 'en'
        else {
            return `
            <url>
                <loc>${`https://www.jpmti2016.com${cleanPath}`}</loc>
            </url>`
        }
    })

    const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${pagesUrlStructure.join(
            ''
        )}${mdxPostsPathsUrlStructure.join('')}
        </urlset>
    `

    const formatted = prettier.format(sitemap, {
        ...prettierConfig,
        parser: 'html',
    })

    // eslint-disable-next-line no-sync
    fs.writeFileSync('public/sitemap.xml', formatted)
})()
