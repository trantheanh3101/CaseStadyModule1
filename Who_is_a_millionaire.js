// tạo đối tượng Quention chứa
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


let question1 = new Question("Câu 1: Ai là cầu thủ đầu tiên giành Quả Bóng Vàng FIFA?", ["A.Lionel Messi", "B.Cristiano Ronaldo", "C.Pelé", "D.Diego Maradona"], "C.Pelé", "1000$");
let question2 = new Question("Câu 2: Ai là người đã ghi bàn thắng đầu tiên trong lịch sử World Cup?", ["A.Pelé", "B.Geoff Hurst", "C.Bert Patenaude", "D.Lucien Laurent"], "D.Lucien Laurent", "2000$");
let question3 = new Question("Câu 3: Câu lạc bộ nào đã giành nhiều chức vô địch Champions League nhất?", ["A.Real Madrid", "B.Barcelona", "C.AC Milan", "D.Liverpool"], "A.Real Madrid", "3000$");
let question4 = new Question("Câu 4: Thành phố nào đã đăng cai World Cup nhiều nhất?", ["A.Paris, Pháp", "B.London, Anh", "C.Madrid, Tây Ban Nha", "D.Rio de Janeiro, Brazil"], "B.London, Anh", "4000$");
let question5 = new Question("Câu 5: Khi nào World Cup lần đầu tiên được tổ chức?", ["A.1926", "B.1930", "C.1940", "D.1950"], "B.1930", "5000$");
let question6 = new Question("Câu 6: Cầu thủ nào đã giành giải thưởng Quả Bóng Vàng FIFA nhiều nhất?", ["A.Lionel Messi", "B.Cristiano Ronaldo", "C.Michel Platini", "D.Pelé"], "A.Lionel Messi", "6000$");
let question7 = new Question("Câu 7: Giải đấu nào được coi là 'giải vô địch quốc gia' cao nhất tại châu Âu?", ["A.UEFA Champions League", "B.La Liga (Tây Ban Nha)", "C.Premier League (Anh)", "D.Serie A (Ý)"], "A.UEFA Champions League", "7000$");
let question8 = new Question("Câu 8: Tên đầy đủ của World Cup là gì?", ["A.FIFA World Championship", "B.FIFA World Cup", "C.FIFA International Cup", "D.FIFA Cup of Nations"], "B.FIFA World Cup", "8000$");
let question9 = new Question("Câu 9: Đội bóng nào đã giành danh hiệu World Cup nhiều nhất?", ["A.Brazil", "B.Germany", "C.Argentina", "D.Italy"], "A.Brazil", "9000$");
let question10= new Question("Câu 10: Đội bóng nào được biết đến với biệt danh 'The Red Devils'?", ["A.Manchester United", "B.AC Milan", "C.Bayern Munich", "D.Chelsea"], "A.Manchester United", "10000$");

let arrayQuestion = [question1,question2,question3,question4,question5,question6,question7,question8,question9,question10];


// show câu hỏi câu trar loi , trước tiên display câu hỏi 1 

function showQuention(question) {
    let getQuestion = document.getElementById('question');
    getQuestion.innerHTML = question.content;
    getQuestion.setAttribute("questionDisplay",arrayQuestion.indexOf(question));
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
        alert("đúng rồi . câu tiếp theo !!!");
        if (num === arrayQuestion.length-1){
            alert("bạn đã chiến thắng trò chơi !!!");
        }
        document.getElementById("bonus").innerHTML = "Tiền đang nhận được : " + arrayQuestion[num].money;
        num++;
        nextQuestion(num)
    } else {
        alert("sai. gameover")
    }
}







