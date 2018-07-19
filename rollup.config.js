// let commonjs = require('rollup-plugin-commonjs');
// let nodeResolve = require('rollup-plugin-node-resolve');

export default {
    input: 'main.js',
    output: {
        file: './rolled-up-bundle.js',
        format: 'umd',
        name: 'app',
        sourcemap: true
    },
    // plugins: [
    //     nodeResolve({jsnext: true, module: true}),
    //     commonjs(
    //         // {
    //         //     // include: [
    //         //     //     'node_modules/rxjs/**',
    //         //     //     'node_modules/ag-grid/**',
    //         //     //     'node_modules/ag-grid-angular/**'
    //         //     // ],
    //         //     namedExports: {
    //         //         'node_modules/ag-grid-angular/main.js': ['AgGridModule']
    //         //     }
    //         // }
    //     )
    // ]
};