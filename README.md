# Login Form Project

A simple, secure, and responsive login form template built with HTML, CSS, and JavaScript.

![Login Form Preview](https://github.com/user-attachments/assets/ffbb27f5-9778-4b99-bc41-540ef8f5072f)

## Optimizations & Changes

I have optimized the project by addressing the following issues:

### 1. Security Improvements
- **Password Masking**: Changed the password input field type from `text` to `password` to ensure characters are masked for security.

### 2. Code Quality & Performance
- **Cleaned up HTML**: Removed duplicate CSS link in `index.html`.
- **Fixed CSS Logic**: Corrected the `.input-field:valid ~ .label` selector in `style.css`. This ensures the floating label stays in position when the input field has valid content.
- **Added JavaScript**: Created `script.js` (which was previously missing but linked) to handle basic interaction and prevent 404 errors.

### 3. SEO
- **Meta Description**: Added a meta description tag to `index.html` for better search engine visibility.

## How to Use

1.  **Clone or Download** the repository.
2.  Open `index.html` in your web browser.
3.  Enter a username and password (any values will work for this demo).
4.  Click **Login** to trigger the demo alert.

## Configuration

### Changing the Background Image
The background image is located in the `include/` directory.
1.  Replace `include/img.png` with your desired image.
2.  Ensure the file name remains `img.png` or update `style.css` to match your new filename:
    ```css
    body {
        background-image: url("include/your-image.jpg");
        ...
    }
    ```

### Customizing Colors
You can change the color scheme by modifying the CSS variables in `style.css`:
```css
:root {
    --primary-color: #c6c3c3; /* Change this */
    --second-color: #ffffff;
    --black-color: #000000;
}
```
