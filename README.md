

## 📁 Project Structure

```
digital-clock/
│── index.html
│── style.css
│── script.js
└── README.md
```

---

## 📄 `index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Digital Clock</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="clock-container">
        <h1>Digital Clock</h1>
        <div id="clock">00:00:00</div>
    </div>

    <script src="script.js"></script>
</body>
</html>
```

---

## 🎨 `style.css`

```css
body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    background: #0f172a;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.clock-container {
    text-align: center;
    background: #1e293b;
    padding: 40px;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
}

h1 {
    margin-bottom: 20px;
    font-size: 24px;
}

#clock {
    font-size: 48px;
    letter-spacing: 2px;
}
```

---

## ⚙️ `script.js`

```javascript
function updateClock() {
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Add leading zeros
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById("clock").textContent = timeString;
}

// Update every second
setInterval(updateClock, 1000);

// Initial call
updateClock();
```

---

## 📘 `README.md`

```markdown
# ⏰ Digital Clock

A simple digital clock built using HTML, CSS, and JavaScript.

## 🚀 Features
- Real-time clock update
- Clean and minimal UI
- Responsive design

## 📂 Project Structure
```

digital-clock/
│── index.html
│── style.css
│── script.js
└── README.md

````


2. Open `index.html` in your browser.

## 🛠️ Technologies Used

* HTML
* CSS
* JavaScript

