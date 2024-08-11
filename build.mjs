import { build } from 'esbuild'

await build({
    entryPoints: ["app.jsx"],
    bundle: true,
    outfile: "dist/out.js"
})
