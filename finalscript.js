// please do not use my source code without my permission, I put a lot of effort into it and please do let me know if you want to clone it, use it for your project, I begggg

const questions = [
    {
        question: "第1题/共12题：你正在回家的公交车上。这是漫长的一天，你在想什么？",
        image: "images/Q1.gif",
        answers: {
            F: {
                text: "我太累了，迫不及待想回家。为什么每天都感觉一样...",
                scores: { T: 0, F: +1 },
            },
            T: {
                text: "回家后应该先休息还是先工作？最重要的是，晚餐吃什么？",
                scores: { T: +1, F: 0 },
            },
        },
    },
    {
        question: "第2题/共12题：你望向窗外，看起来快要下雨了。突然，一切陷入黑暗！！",
        image: "images/Q2.gif",
        answers: {
            J: {
                text: "我不记得有这个隧道。*掏出手机查看地图*",
                scores: { P: 0, J: +1 },
            },
            P: {
                text: "*转身看看其他人的反应* 我应该问问司机发生了什么吗？",
                scores: { P: +1, J: 0 },
            },
        },
    },
    {
        question: "第3题/共12题：你还没来得及做任何事，公交车停了下来，周围的一切都漂浮起来！",
        image: "images/Q3.gif",
        answers: {
            S: {
                text: "好吧，这很奇怪，我是在做梦吗？*掐一下自己的手臂*",
                scores: { S: +1, N: 0 },
            },
            N: {
                text: "这是恶作剧吗？我被外星人绑架了吗？！",
                scores: { S: 0, N: +1 },
            },
        },
    },
    {
        question: "第4题/共12题：在惊讶中，你的眼睛捕捉到窗外飘过的东西。",
        image: "images/Q4.gif",
        answers: {
            F: {
                text: "哇...好多猫咪！好可爱啊！！我想抱抱它们！",
                scores: { T: 0, F: +1 },
            },
            T: {
                text: "猫？在太空？这有点奇怪...它们怎么在那里生存的？！",
                scores: { T: +1, F: 0 },
            },
        },
    },
    {
        question: "第5题/共12题：'欢迎登船！'一个小机器人出现并宣布，'我们将在5个月6天零2小时后到达目的地！'",
        image: "images/Q5.gif",
        answers: {
            P: {
                text: "酷！太空邮轮？！我们要去哪里？我能得到宇航服吗？这太令人兴奋了！",
                scores: { P: +1, J: 0 },
            },
            J: {
                text: "嘿，呃...我在太空吗？我怎么到这里的？我什么时候能回家？！为什么...",
                scores: { P: 0, J: +1 },
            },
        },
    },
    {
        question: "第6题/共12题：机器人指向公交车的后方，现在看起来更像是宇宙飞船的内部！你想先看什么？",
        image: "images/Q6.gif",
        answers: {
            I: {
                text: "中间的太阳系主题喷泉。我想和它拍照。",
                scores: { I: 0, E: +1 },
            },
            E: {
                text: "有按摩椅的舒适角落。我需要坐下来好好想想。",
                scores: { I: +1, E: 0 },
            },
        },
    },
    {
        question: "第7题/共12题：在回座位的路上，你被猫咪们包围了！'检测到未授权乘客，抓住抓住！'",
        image: "images/Q7.gif",
        answers: {
            S: {
                text: "哇！什么叫未授权？我就是这艘邮轮的乘客！",
                scores: { S: +1, N: 0 }
            },
            N: {
                text: "好吧，我完全不知道发生了什么。我们冷静下来聊聊怎么样？",
                scores: { S: 0, N: +1 },
            },
        },
    },
    {
        question: "第8题/共12题：突然，机器人滑了进来，它对猫咪们低语了些什么，让它们停了下来。",
        image: "images/Q8.gif",
        answers: {
            E: {
                text: "Bob！谢谢你！你是来救我的，对吧？",
                scores: { E: +1, I: 0 },
            },
            I: {
                text: "哈！没错！退后，猫咪们！我现在可以安全离开了吗？！",
                scores: { E: 0, I: +1 },
            },
        },
    },
    {
        question: "第9题/共12题：机器人变成了一个巨大的吸尘器，猫咪们用它指向你！",
        image: "images/Q9.gif",
        answers: {
            J: {
                text: "把外套扔给它们作为干扰，跑向那个绿色的大\"出口\"标志！",
                scores: { J: +1, P: 0 },
            },
            P: {
                text: "随机方向奔跑，迷惑它们，混入人群中！",
                scores: { J: 0, P: +1 },
            },
        },
    },
    {   
        question: "第10题/共12题：你跑过礼品店。看起来你甩掉它们了。买点纪念品应该没问题吧？",
        image: "images/Q10.gif",
        answers: {
            F: {
                text: "拿木星耳机，戴上它可以听到别人的想法！",
                scores: { F: +1, T: 0 },
            },
            T: {
                text: "拿火星手表，转动它就可以时光旅行！",
                scores: { F: 0, T: +1 },
            },
        },

    },
    {
        question: "第11题/共12题：巨型吸尘器突然出现在你面前！你被吸入它的漩涡中！！！",
        image: "images/Q11.gif",
        answers: {
            S: {
                text: "没关系，这只是一场梦！我很快就会醒来的！*闭上眼睛放弃挣扎*",
                scores: { S: +1, N: 0 },
            },
            N: {
                text: "我会找到出路的！也许有一些秘密门！*四处寻找出路*",
                scores: { S: 0, N: +1 },
            },
        },
    },
    {
        question: "第12题/共12题：经过短暂的黑暗后，你发现自己回到了公交车上。'你还好吗？'检票员问道",
        image: "images/Q12.gif",
        answers: {
            I: {
                text: "哇！我以为我被抓住了...算了！我现在还好，我想？*默默恐慌*",
                scores: { E: 0, I: +1 },
            },
            E: {
                text: "你不会相信的...我想我刚做了有史以来最疯狂的梦！*告诉他你的太空冒险*",
                scores: { E: +1, I: 0 },
            },
        },
    },
    {
        question: "当你再次抬头时，检票员已经离开了。你瞥向窗外，随着公交车驶入另一个隧道，黑暗再次蔓延...",
        image: "images/Q13.gif",
        answers: {
            K: {
                text: "等等...那是Bob吗？",
            },
            U: {
                text: "哦不...我还要再经历一次吗？",
            },
        },
    },
];

const resultOptions = {
    "ISTJ": {
        image: "1DE.png",
    },
    "ISFJ": {
        image: "2light.png"
    },
    "INFJ": {
        image: "3UFO.png"
    },
    "INTJ": {
        image: "4nebula.png"
    },
    "ISTP": {
        image: "5comet.png"
    },
    "ISFP": {
        image: "6ST.png"
    },
    "INFP": {
        image: "7DM.png"
    },
    "INTP": {
        image: "8met.png"
    },
    "ESTP": {
        image: "9BH.png"
    },
    "ESFP": {
        image: "10Sn.png"
    },
    "ENFP": {
        image: "11Grav.png"
    },
    "ENTP": {
        image: "12hand.png"
    },
    "ESTJ": {
        image: "13sat.png"
    },
    "ESFJ": {
        image: "14sun.png"
    },
    "ENFJ": {
        image: "15gal.png"
    },
    "ENTJ": {
        image: "16rocket.png"
    },

};

let currentQuestion = 0;
// let userAnswers = {};


function displayQuestion() {
    const quizElement = document.getElementById('quiz');
    const question = questions[currentQuestion];
    if (question) {
        let html = `<p>${question.question}</p>`;
        if (question.image) {
            // 添加 loading="lazy" 实现图片懒加载
            html += `<img src="${question.image}" alt="Question ${currentQuestion + 1}" loading="lazy">`;
        }
        for (const option in question.answers) {
            html += `<button class="large-rectangular" value="${option}" id="${option}">${question.answers[option].text}</button>`;
        }
        quizElement.innerHTML = html;
        attachButtonClickHandlers();
    } else {
    
    }
}


document.getElementById('start-button').addEventListener('click', function() {
    document.getElementById('start-page').style.display = 'none';
    document.getElementById('quiz-page').style.display = 'block';
    currentQuestion = 0;
    userAnswers = {};
    displayQuestion(); 
    // userAnswers.userName = userName;
});


//click
function attachButtonClickHandlers() {
    const choiceButtons = document.querySelectorAll('.large-rectangular');
    choiceButtons.forEach((button) => {
        button.addEventListener('click', handleAnswer);
    });
}



//answers
function handleAnswer(event) {
    const selectedOption = event.target;
    const answerKey = selectedOption.value;
    const question = questions[currentQuestion];
    const answer = question.answers[answerKey];

    for (const dimension in answer.scores) {
        userAnswers[dimension] = (userAnswers[dimension] || 0) + answer.scores[dimension];
    }

    // remove this when done debugging
    // Display the scores for each letter
    
    //const scoresContainer = document.querySelector('.scores-container');
    //scoresContainer.innerHTML = `
    //    <p>E Score: ${userAnswers['E'] || 0}, S Score: ${userAnswers['S'] || 0}, T Score: ${userAnswers['T'] || 0}, P Score: ${userAnswers['P'] || 0}</p>
    //    <p>I Score: ${userAnswers['I'] || 0}, N Score: ${userAnswers['N'] || 0}, F Score: ${userAnswers['F'] || 0}, J Score: ${userAnswers['J'] || 0}</p>
    //
    //`;
    // to here

    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        displayQuestion();
    } else {
        showResult();
    }
}

// ...


function showResult() {
    const resultElement = document.getElementById('result');
    const resultTextContainer = document.querySelector('.result-text');
    const resultImage = document.getElementById('result-image');
    const topLetters = {};

    const pairs = ["IE", "NS", "TF", "PJ"];
    pairs.forEach(pair => {
        const options = pair.split('');
        const scores = options.map(option => userAnswers[option] || 0);
        const topOptionIndex = scores.indexOf(Math.max(...scores));
        const topOption = options[topOptionIndex];
        topLetters[pair] = topOption;
    });

    //each pair
    const result = pairs.map(pair => topLetters[pair]).join('');

    //show result
    const personalityData = resultOptions[result];
    if (personalityData) {
        resultTextContainer.innerHTML = `
        `;

        resultImage.src = "images/"+personalityData.image;
        resultImage.alt = `${personalityData.image} Image`;
    } else {

    }

    document.getElementById('quiz').style.display = 'none'; // Hide the quiz
    document.getElementById('result').style.display = 'block'; // Show the result
    document.getElementById('restart-button').style.display = 'block'; // Show the restart button
}



//Function to restart the quiz
function restartQuiz() {
    currentQuestion = 0;
    userAnswers = {};
    document.getElementById('result').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
    displayQuestion(); // Start the quiz from the beginning
}

document.getElementById('restart-button').addEventListener('click', restartQuiz);

displayQuestion();


