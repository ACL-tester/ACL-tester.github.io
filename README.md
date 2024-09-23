<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ผลการประเมิน</title>
    <script src="https://static.line-scdn.net/liff/edge/2/sdk.js"></script> <!-- LIFF SDK -->
</head>
<body>
    <div>
        <h1>ผลการประเมิน</h1>
        <!-- สรุปคะแนน -->
        <p id="total-score"></p>

        <!-- แสดงคำถามที่ไม่ผ่านเกณฑ์ -->
        <div id="failed-questions"></div>

        <!-- ปุ่มกลับไปที่แชทบอท -->
        <button onclick="backToChat()">กลับไปที่แชทบอท</button>
    </div>

    <script>
        // ฟังก์ชันเพื่อแสดงผลคะแนนและคำถามที่ไม่ผ่าน
        const score = 70;  // ตัวอย่างคะแนนรวม
        const failedQuestions = ["Q1", "Q3", "Q5"];  // ตัวอย่างคำถามที่ไม่ผ่าน
        const failedExercises = {
            "Q1": "Imagery + Progressive relaxation",
            "Q3": "Squat, shuffle",
            "Q5": "Bridge, Single leg bridge"
        };

        document.getElementById("total-score").innerText = `คะแนนรวม: ${score}`;
        const failedDiv = document.getElementById("failed-questions");
        failedQuestions.forEach(question => {
            const p = document.createElement("p");
            p.innerText = `คำถาม: ${question}, แนะนำการฝึก: ${failedExercises[question]}`;
            failedDiv.appendChild(p);
        });

        // ฟังก์ชันสำหรับกลับไปยังแชทบอท
        function backToChat() {
            liff.init({ liffId: "YOUR_LIFF_ID" }) // แทนที่ "YOUR_LIFF_ID" ด้วย LIFF ID ของคุณ
                .then(() => {
                    liff.openWindow({
                        url: 'https://line.me/R/ti/p/%40acl-rsi', // แทนที่ด้วย URL ของแชทบอทของคุณ
                        external: false // เปิดในแอป LINE
                    });
                })
                .catch(err => {
                    console.log('LIFF initialization failed', err);
                });
        }

        // เริ่มต้น LIFF เมื่อโหลดหน้าเว็บ
        window.onload = function() {
            liff.init({ liffId: "2006299840-P4mbmKML" }) // แทนที่ "YOUR_LIFF_ID" ด้วย LIFF ID ของคุณ
                .then(() => {
                    console.log('LIFF initialized');
                })
                .catch(err => {
                    console.log('LIFF initialization failed', err);
                });
        };
    </script>
</body>
</html>

