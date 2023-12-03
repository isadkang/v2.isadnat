import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'
import rehypePrettyCode from "rehype-pretty-code"

const options = {
    // See Options section below.
    theme: 'one-dark-pro', // more themes: https://unpkg.com/browse/shiki@0.14.2/themes/
};

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        {
            resolve: 'gatsby-plugin-mdx',
            options: {
                extensions: ['.mdx', '.md'],
            },
        },
        {
            enforce: 'pre', ...mdx(
                /* jsxImportSource: …, otherOptions… */
                {
                    rehypePlugins: [
                        [rehypePrettyCode, options]
                    ]
                }
            )
        },
        react(),

    ],
})