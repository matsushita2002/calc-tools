'use strict';

const name = window.prompt("姓名を漢字で入力してください");

if (name === '和田渚') {
    window.alert('なぎこんにちは！！');
}else if (name === null) {
    window.alert('くーちゃんこんにちは！！');
}else {
    window.alert(name+'さんこんにちは！！');
}
