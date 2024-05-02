// tạo đối tượng Question chứa
//  nội dung , mảng chứa 4 cu trả lơi , câu trả lời đúng , số tiền nhận được sau khi tra lơ đúng cau đấy
class Question{
    constructor(content,options,trueAnswer,money) {
        this.content = content;
        this.options = options;
        this.trueAnswer = trueAnswer;
        this.money = money;
    }
    checkAnswer(options){
        return options === this.trueAnswer;
    }
}

// xây 10 câu hỏi và gộp vào 1 mảng chứa all các quention


let question1 = new Question(
    "Câu 1: Ai là cầu thủ đầu tiên giành Quả Bóng Vàng FIFA?",
    ["A. Lionel Messi", "B. Cristiano Ronaldo", "C. Pelé", "D. Diego Maradona"],
    "C. Pelé",
    "1,000$");
let question2 = new Question(
    "Câu 2: Ai là người đã ghi bàn thắng đầu tiên trong lịch sử World Cup?",
    ["A. Pelé", "B. Geoff Hurst", "C. Bert Patenaude", "D. Lucien Laurent"],
    "D. Lucien Laurent",
    "2,000$");
let question3 = new Question(
    "Câu 3: Ai là tác giả của loạt sách Harry Potter?",
    ["A. Stephenie Meyer", "B. J.R.R. Tolkien", "C. George R.R. Martin", "D. J.K. Rowling"],
    "D. J.K. Rowling",
    "4,000$");
let question4 = new Question(
    "Câu 4: Quốc gia nào đã giành chiến thắng trong World Cup nhiều nhất?",
    ["A. Brazil", "B. Italy", "C. Germany", "D. Argentina"],
    "A. Brazil",
    "6,000$");
let question5 = new Question(
    "Câu 5: Người đã phát minh ra World Wide Web (WWW) là ai?",
    ["A. Tim Berners-Lee", "B. Steve Jobs", "C. Bill Gates", "D. Mark Zuckerberg"],
    "A. Tim Berners-Lee",
    "10,000$");
let question6 = new Question(
    "Câu 6: Thành phố nào được gọi là 'Thủ đô văn hóa của thế giới'?",
    ["A. London", "B. Rome", "C. Paris", "D. New York City"],
    "C. Paris",
    "14,000$");
let question7 = new Question(
    "Câu 7: Quốc gia nào là quốc gia đầu tiên phát triển và sử dụng bom nguyên tử?",
    ["A. Japan", "B. USSR (Nga)", "C. Germany", "D. USA"],
    "D. USA",
    "20,000$");
let question8 = new Question(
    "Câu 8: Tổ chức nào là tổ chức ngày Quốc tế Phụ nữ?",
    ["A. UNESCO", "B. WHO", "C. UNICEF", "D. UN"],
    "D. UN",
    "25,000$");
let question9 = new Question(
    "Câu 9: Ngày nào được coi là Ngày Độc lập của Hoa Kỳ?",
    ["A. 4th July", "B. 14th August", "C. 15th August", "D. 26th January"],
    "A. 4th July",
    "32,000$");
let question10 = new Question(
    "Câu 10: Đại dương nào lớn nhất trên trái đất?",
    ["A. Đại Tây Dương", "B. Thái Bình Dương", "C. Ấn Độ Dương", "D. Nam Cực"],
    "B. Thái Bình Dương",
    "40,000$");
let question11 = new Question(
    "Câu 11: Quốc gia nào là quốc gia nhỏ nhất trên thế giới?",
    ["A. Monaco", "B. San Marino", "C. Nauru", "D. Vatican City"],
    "D. Vatican City",
    "50,000$");
let question12 = new Question(
    "Câu 12: Trong hệ mặt trời, hành tinh nào là hành tinh thứ ba từ Mặt Trời?",
    ["A. Venus", "B. Earth", "C. Mars", "D. Jupiter"],
    "B. Earth",
    "65,000$");
let question13 = new Question(
    "Câu 13: Địa danh nào được gọi là 'Cổng vào địa ngục'?",
    ["A. Hỏa Lò", "B. Hạ Long Bay", "C. Grand Canyon", "D. Death Valley"],
    "C. Grand Canyon",
    "80,000$");
let question14 = new Question(
    "Câu 14: Ai là người đã phát minh ra máy tính cá nhân đầu tiên?",
    ["A. Alan Turing", "B. Steve Jobs", "C. Tim Berners-Lee", "D. Charles Babbage"],
    "D. Charles Babbage",
    "90,000$");
let question15 = new Question(
    "Câu 15: Quốc gia nào đã chiến thắng trong cuộc chiến tranh thế giới thứ hai?",
    ["A. USA", "B. Germany", "C. Japan", "D. Italy"],
    "B. Germany",
    "100,000$");

let arrayQuestion = [question1,question2,question3,question4,question5,question6,question7,question8,question9,question10,question11,question12,question13,question14,question15];


// show câu hỏi câu trar loi , trước tiên display câu hỏi 1 

let time;
let timenow = setInterval(function(){
    document.getElementById("timeout").innerHTML = "TimeEnd : " + time + " s";
    time--;
    eventTimeout();
},1000);

function eventTimeout() {
    if (time < 0){
        clearInterval(timenow);
        alert("hết thời gian, gameover");
        start();
    }
    if (time < 5){
        document.getElementById("timeout").style.color = "red";
    }
}
// function music() {
//     musicBackground = new Audio("audio5.wav");
// }
    let musicBackground = new Audio("media/audio5.wav");
    let musicBackground1 = new Audio("media/audio1.wav");
    let musicLose = new Audio("media/Lose.mp3")


function showQuention(question) {
    time = 30;
    musicBackground.play();
    let getQuestion = document.getElementById('question');
    getQuestion.innerHTML = question.content;
    getQuestion.setAttribute("questionDisplay", arrayQuestion.indexOf(question));
    for (let i = 0; i < 4; i++) {
        let getAnswer = document.getElementById("answer"+(i+1));
        getAnswer.innerHTML = question.options[i];
    }
}
showQuention(question1);

let num = 0;

function nextQuestion(n) {
    if (n%5 === 0 && n !==0){
        document.getElementById("question" + n).style.background = "chocolate";
    } else {
        document.getElementById("question" + n).style.background = "orange";
    }
    showQuention(arrayQuestion[n]);
}

function checkOption(valueId) {  // valueId là giá trị id của 4 câu hỏi sau khi bấm vào button
    let answer = document.getElementById(valueId).innerHTML;
    if (arrayQuestion[num].checkAnswer(answer)){
        musicBackground.pause();
        musicBackground1.play();
        alert("đúng rồi . câu tiếp theo !!!");
        if (num === arrayQuestion.length-1){
            alert("bạn đã chiến thắng trò chơi !!!");
            start();
        }
        document.getElementById("bonus").innerHTML = "Tiền đang nhận được : " + arrayQuestion[num].money;
        num++;
        nextQuestion(num);
    } else {
        musicBackground.pause();
        musicLose.play();
        alert("Gameover!!!");
        end();
    }
}

function start() {
    location.replace("Who_is_a_millionaire.html");
}

function end() {
    location.replace("Who_is_a_millionaire_end.html");
}







