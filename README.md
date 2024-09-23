<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>แบบประเมิน</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">
    <style>
        /* สไตล์ต่าง ๆ ยังคงเหมือนเดิม */
    </style>
</head>

<body>
    <!-- หน้าแรก คำชี้แจง -->
    <div id="introPage" class="container active">
        <h1>คำชี้แจงการใช้งาน</h1>
        <p>ก่อนทำแบบประเมินนี้ท่านจะต้องผ่านเงื่อนไขดังต่อไปนี้คือ:</p>
        <ul style="text-align: left;">
            <li> ไม่มีปัญหาการจำกัดการเคลื่อนไหว</li>
            <li> กำลังกล้ามเนื้อไม่น้อยกว่า 80% ของขาข้างปกติ</li>
            <li> ไม่มีอาการปวดและบวมหลังทำกิจกรรมการเคลื่อนไหว</li>
        </ul>
        <button class="submit-btn" onclick="nextPage()">ยอมรับ</button>
    </div>

    <!-- แบบประเมิน -->
    <div id="assessmentPage" class="container">
        <h1>แบบประเมิน</h1>
        <!-- 12 คำถาม (ยังคงเหมือนเดิม) -->
        <button class="submit-btn" onclick="showResults()">ส่งผลประเมิน</button>
    </div>

    <!-- หน้าผลลัพธ์ -->
    <div id="resultPage" class="container result-container">
        <h1>ผลการประเมิน</h1>
        <div id="result"></div>
        <div id="totalScore"></div>
    </div>

    <script>
        function nextPage() {
            document.getElementById("introPage").classList.remove("active");
            document.getElementById("assessmentPage").classList.add("active");
        }

        function updateOutput(id, value) {
            document.getElementById(id).innerHTML = value;
        }

        function showResults() {
            const scores = [];

            for (let i = 1; i <= 12; i++) {
                const score = parseInt(document.getElementById('q' + i).value);
                scores.push(score);
            }

            const totalScore = scores.reduce((acc, score) => acc + score, 0);
            document.getElementById("totalScore").innerText = `คะแนนรวมของคุณคือ: ${totalScore} คะแนน`;

            const passingScore = 1200 * 0.8; // 80% ของ 1200 คะแนน
            let message = "";

            if (totalScore < passingScore) {
                message = "ท่านไม่ผ่านการประเมินผล ACL-RSI ท่านยังมีความวิตกกังวลอยู่";
            } else {
                message = "ท่านผ่านการประเมินผล ACL-RSI ท่านไม่มีความวิตกกังวล ท่านสามารถเตรียมพร้อมเพื่อกลับไปแข่งขันทางกีฬาได้";
            }

            document.getElementById("totalScore").innerText += `\n${message}`;

            const resultText = generateResultText(scores);
            document.getElementById("result").innerHTML = resultText;

            document.getElementById("assessmentPage").classList.remove("active");
            document.getElementById("resultPage").classList.add("show");
        }

        function generateResultText(scores) {
            let text = "";
            
            for (let i = 0; i < scores.length; i++) {
                const score = parseInt(scores[i]);
                const questionNumber = i + 1;

                if (score < 65) {
                    text += `<p>คำถามที่ ${questionNumber}: คะแนน ${score} - <strong>แนะนำการฝึกซ้อมเบื้องต้น</strong></p>`;
                } else if (score >= 65 && score <= 80) {
                    text += `<p>คำถามที่ ${questionNumber}: คะแนน ${score} - <strong>แนะนำการฝึกซ้อมขั้นกลาง</strong></p>`;
                } else {
                    text += `<p>คำถามที่ ${questionNumber}: คะแนน ${score} - <strong>สามารถกลับไปเล่นกีฬาได้</strong></p>`;
                }
            }

            return text;
        }
    </script>
</body>
</html>

