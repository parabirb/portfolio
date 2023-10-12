module.exports = {
    content: ["./src/**/*.{html,svelte}"],
    theme: {
        extend: {},
        fontFamily: {
            mono: ["DotGothic16", "Fira Mono", "monospace"],
            sans: ["Zen Kaku Gothic Antique", "sans-serif"]
        }
    },
    plugins: [
        require("tailwind-scrollbar")
    ]
};
