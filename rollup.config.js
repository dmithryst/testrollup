import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from "@rollup/plugin-commonjs";
import {uglify} from "rollup-plugin-uglify";
import replace from "rollup-plugin-replace";
import typescript from 'rollup-plugin-typescript2';
import globals from 'rollup-plugin-node-globals';


export default {
    input: './src/index.tsx',
    output: {
        file: './build/bundle.min.js',
        format: 'cjs',
        name: 'bundle',
        globals: {
            'lodash': '_',
        },
    },
    plugins: [
        babel({
            exclude: 'node_modules/**',
            extensions: ['.js', '.jsx', '.ts', '.tsx']
        }),
        typescript({
            typescript: require('typescript'),
        }),
        replace({
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
        resolve(),
        globals(),
        commonjs(),
        uglify()
    ]
}