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
        this.options === this.trueAnswer;
    }
}

// xây 10 câu hỏi và gộp vào 1 mảng chứa all các quention


let question1 =new Question("Câu 1: Ai là cầu thủ đầu tiên giành Quả Bóng Vàng FIFA?", ["Lionel Messi", "Cristiano Ronaldo", "Pelé", "Diego Maradona"], "Pelé", "1000$");
let question2 = new Question("Câu 2: Ai là người đã ghi bàn thắng đầu tiên trong lịch sử World Cup?", ["Pelé", "Geoff Hurst", "Bert Patenaude", "Lucien Laurent"], "Lucien Laurent", "2000$");
let question3 = new Question("Cu 3: Câu lạc bộ nào đã giành nhiều chức vô địch Champions League nhất?", ["Real Madrid", "Barcelona", "AC Milan", "Liverpool"], "Real Madrid", "3000$");
let question4 = new Question("Câu 4: Thành phố nào đã đăng cai World Cup nhiều nhất?", ["Paris, Pháp", "London, Anh", "Madrid, Tây Ban Nha", "Rio de Janeiro, Brazil"], "London, Anh", "4000$");
let question5 = new Question("Câu 5: Khi nào World Cup lần đầu tiên được tổ chức?", ["1926", "1930", "1940", "1950"], "1930", "5000$");
let question6 = new Question("Câu 6: Cầu thủ nào đã giành giải thưởng Quả Bóng Vàng FIFA nhiều nhất?", ["Lionel Messi", "Cristiano Ronaldo", "Michel Platini", "Pelé"], "Lionel Messi", "6000$");
let question7 = new Question("Câu 7: Giải đấu nào được coi là 'giải vô địch quốc gia' cao nhất tại châu Âu?", ["UEFA Champions League", "La Liga (Tây Ban Nha)", "Premier League (Anh)", "Serie A (Ý)"], "UEFA Champions League", "7000$");
let question8 = new Question("Câu 8: Tên đầy đủ của World Cup là gì?", ["FIFA World Championship", "FIFA World Cup", "FIFA International Cup", "FIFA Cup of Nations"], "FIFA World Cup", "8000$");
let question9 = new Question("Câu 9: Đội bóng nào đã giành danh hiệu World Cup nhiều nhất?", ["Brazil", "Germany", "Argentina", "Italy"], "Brazil", "9000$");
let question10 = new Question("Câu 10: Đội bóng nào được biết đến với biệt danh 'The Red Devils'?", ["Manchester United", "AC Milan", "Bayern Munich", "Chelsea"], "Manchester United", "10000$");

let arrayQuestion = [question1,question2,question3,question4,question5,question6,question7,question8,question9,question10];


// show câu hỏi câu trar loi , trước tiên display câu hỏi 1 

function showQuention(question) {
    let getQuestion = document.getElementById('question');
    getQuestion.innerHTML = question.content;
    getQuestion.setAttribute("questionDisplay",arrayQuestion.indexOf(question));
    for (let i = 0; i < 4; i++) {
        let getAnswer = document.getElementById("answer"+(i+1));
        getAnswer.innerHTML = question.answer[i];
    }
}
showQuention(question1);
function nextQuestion(numQuestion) {
    numQuestion++;
    showQuention("queston" + numQuestion)
}





