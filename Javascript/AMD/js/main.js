require.config({
    paths: {
        "jquery": "https://cdn.bootcss.com/jquery/3.4.1/jquery",
        "a-mod1": "./mod1",
        "a-mod2": "./mod2"
    }
});

require(['a-mod1', 'a-mod2'], function (mod1, mod2) {
    console.log('require module: main');// some code here
    mod1.hello();
    mod2.hello();
});

// require(['jquery'], function (jq) {

// });