<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ahhhahhh</title>
    <style>
        @keyframes rotate {
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(360deg);
            }
        }
        body {
            background-size: 100px 100px;
            animation: backgroundFade 20s infinite;
        }
        
        @keyframes backgroundFade {
            0% {
            background-color: rgba(255, 0, 0, 1);
            }
            8.33% {
            background-color: rgba(255, 127, 0, 1);
            }
            16.67% {
            background-color: rgba(255, 255, 0, 1);
            }
            25% {
            background-color: rgba(0, 255, 0, 1);
            }
            33.33% {
            background-color: rgba(0, 0, 255, 1);
            }
            41.67% {
            background-color: rgba(75, 0, 130, 1);
            }
            50% {
            background-color: rgba(148, 0, 211, 1);
            }
            58.33% {
            background-color: rgba(255, 0, 0, 1);
            }
            66.67% {
            background-color: rgba(255, 127, 0, 1);
            }
            75% {
            background-color: rgba(255, 255, 0, 1);
            }
            83.33% {
            background-color: rgba(0, 255, 0, 1);
            }
            91.67% {
            background-color: rgba(0, 0, 255, 1);
            }
            100% {
            background-color: rgba(75, 0, 130, 1);
            }
        }
        .reset-button {
            position: absolute;
            top: 10px;
            left: 10px;
            padding: 10px 20px;
            background-color: #4CAF50;
            color: white;
            border: none;
            cursor: pointer;
        }
        .rotate {
            animation: rotate 96s linear infinite;
        }
        #counter2 {
            font-size: 2em;
            position: absolute;
            top: 10px;
            left: 50%;
            transform: translateX(-50%);
        }
    </style>
</head>
<body>
    <div style="display: flex; justify-content: center; align-items: center; height: 100vh;">
        <h1><p style="color: rgba(141, 89, 41, 0.918);" class="rotate">oga buga</p></h1>
        <div style="margin-left: 20px;"></div>
            <h1><p style="color: rgba(141, 89, 41, 0.918);" id="counter2">0</p></h1>
        </div>
    </div>
    <script>
        let counter2 = 0;
        setInterval(() => {
            counter2++;
            document.getElementById('counter2').innerText = counter2;
        }, 1000);
    </script>
</html>
