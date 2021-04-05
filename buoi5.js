bài 1
let p = prompt('Nhập bán kính đường tròn')
console.log('Vậy chu vi hình tròn là' + Math.round(Math.PI*2*p*100)/100)

bài 2
let ten = prompt('Xin cái tên')
console.log('Name: ' + ten)

bài 3
let mot = parseInt(prompt('Nhập số thứ 1'))
let hai = parseInt(prompt('Sau 2 thì là gì ?'))
let ba = parseInt(prompt('Còn phải hỏi à ?'))
let bon = parseInt(prompt('Nhanh lên còn chạy deadline'))
let nam = parseInt(prompt('Nốt đi không ăn đấm'))
console.log('Tổng đây, có vài số cũng phải dùng máy tính ' + Math.round(mot+hai+ba+bon+nam))
console.log('Tích đây bạn hiền ' +Math.round(mot*hai*ba*bon*nam))
console.log('Tự nhập tự biết max là ' + Math.max(mot, hai, ba, bon, nam))
console.log('Min tương tự, tự thay là ra ' + Math.min(mot, hai, ba, bon, nam))