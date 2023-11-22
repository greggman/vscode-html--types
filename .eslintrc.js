module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "plugins": [
        '@typescript-eslint',
        'eslint-plugin-html',
    ],
    "extends": "eslint:recommended",
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        tsconfigRootDir: __dirname,
        project: ['./jsconfig.json'],
        extraFileExtensions: ['.html'],
    },
    "rules": {
    }
}
