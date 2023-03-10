var projectData = {

    name: 'miaov',
    fileData: [
        {
            name : 'css',
            type : 'dir'
        },
        {
            name : 'js',
            type : 'dir'
        },
        {
            name : 'images',
            type : 'dir'
        },
        {
            name : 'index.html',
            type : 'file',
            content: '<html>\n\t<head>\n\t</head>\n\t<body>\n\t\t<h1>Hello</h1>\n\t</body>\n</html>'
        }
    ]
}

var fs = require('fs');

if(projectData.name){
    fs.mkdir(projectData.name);

    var fileData = projectData.fileData;
    if(fileData && fileData.forEach){
        fileData.forEach(function(f) {
            f.path = projectData.name + '/' + f.name;
            f.content = f.content || '';

            switch (f.type) {
                case 'dir':
                    fs.mkdir(f.path)
                    break;
                case 'file':
                    fs.writeFileSync(f.path, f.content)
                    break;
                default:
                    break;
            }
        })
    }
}