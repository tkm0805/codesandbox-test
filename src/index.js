// var vall = "var変数";
// console.log(vall);

// //var変数は上書き可能
// vall = "var変数を上書き";
// console.log(vall);

// // var変数は再宣言可能
// var vall = "var変数を再宣言";
// console.log(vall);

// let val2 = "let変数";
// console.log(val2);

// //letは上書きが可能
// val2 = "let変数を上書き";
// console.log(val2);

// constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name:"じゃけぇ",
//   age:28,
// };
// val4.name = "jak";
// val4.address = "hokkaidou";
// console.log(val4);

// constで定義した配列はプロパティの変更が可能
// const val5 = ["dog","cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */

// const name = "tkm";
// const age = 28;
//「私の名前はtkmです。年齢は28歳です。」

//従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "歳です。";
// console.log(message1);

//テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

//アロー関数

//従来の関数
// function func1(str) {
//   return str;
// };
// const func1 = function(str) {
//   return str;
// };
// console.log(func1("func1です。"))

//アロー関数
// const func2 = (str) => str;
// console.log(func2("func2です。"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func3(10, 20));

//分割代入

// const myprofile = {
//   name:"tkm",
//   age:28,
// };

// const message1 = `名前は${myprofile.name}です。年齢は${myprofile.age}歳です。`;
// console.log(message1);

// const { name, age } = myprofile;
// const message2 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

// const myprofile = ["tkm",28];

// const message3 = `名前は${myprofile[0]}です。年齢は${myprofile[1]}歳です。`;
// console.log(message3);

// const [name, age] = myprofile;
// const message4 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message4);

/**
 * デフォルト値、引数など
 */

// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん！`);
// sayHello();

/**
 * スプレッド構文 ...
 */
//配列の展開
// const arr1 = [1,2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1,num2) => console.log(num1+num2);
// sumFunc(arr1[0],arr1[1]);
// sumFunc(...arr1);

/**
 * 三項演算子
 */
//ある条件? 条件がtrueの時:条件がfalseの時
// const vall = 1 > 0 ? `trueです` : `falseです`;
// console.log(vall);

// const num = '1300';
// // console.log(num.toLocaleString());

// const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください'
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています" : "許容範囲内です";
// };
// console.log(checkSum(50, 40));

/**
 * 論理演算子の本当の意味を知ろう
 */
// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2) {
//   console.log("1か2はtrueになります");
// }

// if (flag1 && flag2) {
//   console.log("1も2もtrueになります");
// }

// ||は左側がfalseなら右側を返す、左側がtrueなら左側を返す
// const num = null;
// const fee = num || "金額未設定です";
// console.log(fee);

// &&は左側がtrueなら右側を返す、左側がfalseなら左側を返す
const num2 = null;
const fee2 = num2 && "何か設定されました";
console.log(fee2);
