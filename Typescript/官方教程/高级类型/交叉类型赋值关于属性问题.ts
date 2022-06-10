interface Name {
  name: string
}

interface Title {
  title: string
}

type Union = Name & Title
// type Union = Name | Title
let target: Union
let source = {
  name: 'n',
  title: 't',
  extra: 'ex'
}

target = source // 这样写ok
/* 
这样写报错
target = {
  name: 'n',
  title: 't',
  extra: 'ex'
} */
console.log(target);
