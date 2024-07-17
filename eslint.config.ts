// eslint.config.ts
module.exports = [
    {
        rules: {
            semi: "error",
            "prefer-const": "error",
            "no-unused-vars":["warning", {
                "vars": "all",
                "args": "after-used",
                "caughtErrors": "all",
                "ignoreRestSiblings": true,
                "reportUsedIgnorePattern": true
            }]
        }
    }
];