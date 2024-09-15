function showResults() {
    let totalScore = 0;
    const questionIds = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8', 'q9', 'q10', 'q11', 'q12'];
    const failedQuestions = document.getElementById('failedQuestions');
    failedQuestions.innerHTML = '';
    questionIds.forEach(id => {
        totalScore += parseInt(document.getElementById(id).value, 10);
    });

    document.getElementById('totalScore').textContent = `คะแนนรวม: ${totalScore}`;
    document.getElementById('results').classList.add('show');

    let failedQuestionsText = '';
    questionIds.forEach(id => {
        const score = parseInt(document.getElementById(id).value, 10);
        if (score < 65 || (score >= 65 && score <= 80)) {
            failedQuestionsText += `คำถาม ${id}: คะแนน ${score} ไม่ผ่านเกณฑ์\n`;
        }
    });

    sendResultsToLineBot(totalScore, failedQuestionsText);
}

function sendResultsToLineBot(totalScore, failedQuestions) {
    const accessToken = 'YOUR_LINE_ACCESS_TOKEN'; // ใส่ Access Token ของ LINE bot
    const endpoint = 'https://api.line.me/v2/bot/message/push'; // LINE Messaging API endpoint

    const message = {
        type: 'text',
        text: `สรุปคะแนนรวม: ${totalScore}\n${failedQuestions}`
    };

    fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify({
            to: 'USER_ID', // ใส่ User ID ของ LINE user ที่ต้องการส่งข้อความไป
            messages: [message]
        })
    }).then(response => response.json())
      .then(data => console.log('Success:', data))
      .catch(error => console.error('Error:', error));
}
