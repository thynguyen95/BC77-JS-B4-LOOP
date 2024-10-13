// console.log("Hello User 1");
// console.log("Hello User 2");
// console.log("Hello User 3");
// console.log("Hello User 5");
// console.log("Hello User 1");
// console.log("Hello User 1");
// console.log("Hello User 1");

const sayHello = (name) => {
  console.log("hello", name);
};

sayHello("user1");

/*
    cú pháp vòng lặp while
    
    while(điều kiện) {
        // điều kiện đúng, xử lý code ở đây 
        tăng hoặc giảm biến đếm(nếu không có bước vòng lặp sẽ chạy vô hạn)
    }
*/
// Ví dụ: có 5 user. in ra dòng chữ "say hello" từ 1 tới 5

let count = 0;
while (count < 5) {
  let number = ++count;
  sayHello(`hello user ${number++}`);
  //   count++;
}

/*
    Bài tập đếm số lượng số lẻ
    Input: cần 1 số nguyên 
    Progress 
        1. đi qua từng số 
        2. kiểm tra xem số đó có phải là số lẻ không 
        
    Output: in số lẻ ra màn hình 
*/

const demSoLe = () => {
  // input
  let number = document.querySelector("#number").value * 1;

  //   progress:
  //   đi qua từng số từ 0 => number
  let soChan = "";
  let soLe = "";

  let i = 0;
  while (i <= number) {
    if (i % 2 === 0) {
      console.log("số chẵn", i);
      soChan = soChan + i + "-";
    } else {
      console.log("số lẻ", i);
      soLe = soLe + i + "-";
    }

    i++;
  }

  soChan = soChan.substring(0, soChan.length - 1);
  soLe = soLe.substring(0, soLe.length - 1);
  console.log("soChan", soChan);
  console.log("soLe", soLe);

  document.querySelector(
    "#result"
  ).innerHTML = `<span>${soChan}</span> - <span>${soLe}</span>`;
  // innerText: chỉ in ra text, không hiểu thẻ html
  document.querySelector(
    "#result2"
  ).innerText = `<span>${soChan}</span> - <span>${soLe}</span>`;
};

/*
    Vòng lặp do...while 
    ít nhất sẽ chạy được 1 lần

    do { 
        code xử lý trong này
        tăng hoặc giảm biến đếm(nếu không có bước này sẽ bị lặp vô tận)
    } while(điều kiện);
*/
// Bài tập đoán số:
// input: số người nhập vào
// progress: kiểm tra số người dùng nhập vào = số cho sẵn không
// output ;

// prompt
const doanSo = () => {
  let number = document.querySelector("#number2").value * 1;
  let result = document.querySelector("#result3");

  let answer = 8;
  // let flag = false;
  // let count = 0;

  do {
    if (number === answer) {
      result.innerHTML = "Bạn đã đoán đúng";
      break; // thoát khỏi vòng lặp
    } else {
      result.innerHTML = "Vui lòng nhập 1 số dự đoán";
    }
    console.log("number-answer", number, answer);
  } while (number === answer);
};

/*
    cú pháp for
    
    for (khởi tạo biến đếm; điều kiện; bước nhảy(tăng/giảm biến đếm )) {
        khi điều kiện đúng, thì thực hiện code trong này
    }
*/

const inSoChanLe = () => {
  let soChan = "";
  let soLe = "";

  for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
      soChan += i + " ";
    } else {
      soLe += i + " ";
    }
  }

  document.querySelector("#result4").innerHTML = `
    <p>Số chẵn: ${soChan}</p>
    <p>Số lẽ: ${soLe}</p>
  `;
};

let tamGiac = "";
for (let i = 0; i < 8; i++) {
  for (let j = 0; j < i; j++) {
    tamGiac += "* ";
  }
  tamGiac += "<br>";
}
document.querySelector("#tamGiac").innerHTML = tamGiac;

// lần 1:
//     i = 0 => i< 8
//         vào vòng for 2: j = 0; j = 0, i = 0=> false
//         tamGiac = <br>

// lần 2:
//     i = 1 => i < 8
//         vào vòng for 2: j = 0; j = 0, i = 1 => true
//         tamGiac = <br> *  <br>

let tamGiacNguoc = "";
for (let i = 8; i >= 1; i--) {
  for (let j = 0; j < i; j++) {
    tamGiacNguoc += "* ";
  }
  tamGiacNguoc += "<br>";
}
document.querySelector("#tamGiacNguoc").innerHTML = tamGiacNguoc;

// break => kết thúc vòng lặp
// continue => kết thúc lần lặp hiện tại
// return => dừng những dòng code phía sau nó trong phạm vi function
