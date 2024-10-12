'use strict';

// window.alert('こんにちは');

const name = window.prompt("姓名を漢字で入力してください");

if (name === '和田渚') {
    window.alert('なぎとくーちゃんこんにちは！！');
}else {
    window.alert(name+'さんこんにちは！！');
}