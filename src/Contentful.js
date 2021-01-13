const contentful = require("contentful");

const defaultConfig = {
    CTF_SPACE_ID: process.env.REACT_APP_API_SPACE,
    CTF_CDA_TOKEN: process.env.REACT_APP_ACCESS_TOKEN,
    CTF_CPA_TOKEN: process.env.REACT_APP_PREVIEW_ACCESS_TOKEN,
};

// export default contentful.createClient({
//     host: 'preview.contentful.com',
//     space: defaultConfig.CTF_SPACE_ID,
//     accessToken: defaultConfig.CTF_CPA_TOKEN
// });

export default contentful.createClient({
    host: 'cdn.contentful.com',
    space: defaultConfig.CTF_SPACE_ID,
    accessToken: defaultConfig.CTF_CDA_TOKEN
});

// module.exports = {
//     createClient (config = defaultConfig) {
//         const options = {
//             space: config.CTF_SPACE_ID,
//             accessToken: config.CTF_CPA_TOKEN
//         };
//         if (process.env.NODE_ENV === 'production') {
//             options.accessToken = config.CTF_CDA_TOKEN
//         };
//         return contentful.createClient(options);
//     };
// };

// const getConnected = () => {


//     const options = {
//         space: config.CTF_SPACE_ID,
//         accessToken: config.CTF_CPA_TOKEN
//     };
//     if (process.env.NODE_ENV === 'production') {
//         options.accessToken = config.CTF_CDA_TOKEN
//     };
//     return contentful.createClient(options);
// };

// export default getConnected;
