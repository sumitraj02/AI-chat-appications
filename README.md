# AI-chat-appications

# 🤖 AI Chat Assistant (Spring Boot + OpenAI/Copilot Integration)

This is a full-stack AI-powered chat assistant application built using **Spring Boot** for the backend and **HTML/CSS/JavaScript** for the frontend. It integrates with AI models such as **OpenAI (GPT-3.5 / Copilot)** to respond intelligently to user queries through a simple web-based chat interface.

---

## 🧠 Features

- 🧾 User Authentication with Spring Security (JWT-based)
- 💬 Chat Interface for AI Conversations
- 🌐 REST API Backend (Java + Spring Boot)
- 📦 Uses external AI APIs like **OpenAI** or **GitHub Copilot**
- 🖥️ Modern responsive UI with prompt suggestions
- 🔐 Secure handling of API keys via `.env`
- 💡 Easily switch to GPT-4.5 Turbo or Gemini AI if desired

---

## 📁 Project Structure

ai-chat/
├── src/
│ ├── main/
│ │ ├── java/com/example/ai/
│ │ │ ├── controller/ → REST Controllers (e.g. Chat, Auth)
│ │ │ ├── service/ → Business logic & UserDetailsService
│ │ │ ├── entity/ → JPA Entities (e.g. User)
│ │ │ ├── repository/ → JPA Repositories
│ │ │ └── config/ → JWT and Security Config
│ │ └── resources/
│ │ ├── static/ → HTML/CSS/JS (Frontend)
│ │ ├── application.properties
│ │ └── templates/
├── .env → Stores your API key (DO NOT COMMIT)
├── pom.xml → Maven config
└── README.md → Project documentation



---

## 🚀 How to Run This Project

### 🔧 Prerequisites

- Java 17+
- Maven
- OpenAI or Copilot API Key

---

### 🛠 Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/sumitraj02/AI-chat-appications
   cd ai-chat

Add your .env file
OPENAI_API_KEY=your_openai_or_copilot_api_key
JWT_SECRET=your_jwt_secret


mvn clean install
mvn spring-boot:run

Open the application in your browser
http://localhost:8080

🛠 Technologies Used
Backend: Java 17, Spring Boot, Spring Security, Spring Data JPA

Frontend: HTML, CSS, JavaScript

Database: H2 (in-memory) / MySQL (for production)

Security: JWT Authentication

HTTP Client: OkHttp (for calling external APIs)

AI Models: OpenAI GPT-3.5 / GitHub Copilot


MIT License

Copyright (c) 2025 

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the “Software”), to deal
in the Software without restriction, including without limitation the rights 
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell 
copies of the Software, and to permit persons to whom the Software is 
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in 
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE 
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, 
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN 
THE SOFTWARE.

🙌 Contributions Welcome
Feel free to fork this repo and raise a pull request if you'd like to add features or fix bugs.
