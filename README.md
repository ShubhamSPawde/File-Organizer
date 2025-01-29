# File Organizer CLI

## 📂 Overview
File Organizer is a CLI tool built using Node.js that automatically sorts files into categorized directories based on their file types. It helps keep your system organized efficiently.

## 🚀 Features
- Automatically categorizes files (e.g., images, documents, videos, etc.).
- Supports custom file type categories.
- Simple command-line interface for ease of use.

## 🛠️ Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/file-organiser.git
   cd file-organiser
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

## ▶️ Usage
Run the following command to organize files in a specific directory:
```bash
node organize.js /path/to/directory
```
Example:
```bash
node organize.js ~/Downloads
```

## 🏗️ How It Works
1. Scans the specified directory.
2. Identifies file types (e.g., images, videos, documents).
3. Moves files into corresponding categorized folders (e.g., `Images/`, `Documents/`, `Videos/`).

## 📌 Supported File Categories
- **Images**: `.jpg`, `.png`, `.gif`, `.bmp`, `.svg`
- **Videos**: `.mp4`, `.mkv`, `.avi`, `.mov`
- **Documents**: `.pdf`, `.docx`, `.xlsx`, `.pptx`
- **Music**: `.mp3`, `.wav`, `.flac`
- **Archives**: `.zip`, `.tar`, `.rar`

## 🛡️ Customization
You can modify the `organize.js` file to add new categories or change sorting rules.

## 🤝 Contributing
Feel free to fork the repository and submit pull requests to enhance functionality.

## 📜 License
This project is licensed under the MIT License.

---
Developed by **Shubham Pawade**
