const welcomeTemplate = (name) => {
    return `
  <div style="margin:0;padding:0;background:linear-gradient(135deg,#667eea,#764ba2);font-family:Arial,Helvetica,sans-serif;">
    <div style="max-width:600px;margin:40px auto;background:#ffffff;border-radius:14px;overflow:hidden;box-shadow:0 15px 35px rgba(0,0,0,0.2);">
      
      <div style="background:#111827;padding:30px;text-align:center;">
        <h1 style="color:#ffffff;margin:0;font-size:28px;letter-spacing:1px;">🚀 Welcome to Chat App</h1>
      </div>

      <div style="padding:40px 30px;text-align:center;">
        <h2 style="color:#333;margin:0 0 15px 0;">Hi ${name},</h2>
        <p style="color:#555;font-size:16px;line-height:1.6;margin:0 0 25px 0;">
          We're excited to have you on board! Your account has been successfully created.
          Start chatting, connect with friends, and enjoy a seamless messaging experience.
        </p>

        <a href="#" style="display:inline-block;padding:14px 28px;background:linear-gradient(135deg,#667eea,#764ba2);color:#ffffff;text-decoration:none;border-radius:30px;font-weight:bold;font-size:15px;box-shadow:0 5px 15px rgba(102,126,234,0.4);">
          Start Chatting
        </a>
      </div>

      <div style="background:#f3f4f6;padding:20px;text-align:center;font-size:13px;color:#888;">
        © 2026 Chat App. All rights reserved.
      </div>

    </div>
  </div>
  `;
};

export default welcomeTemplate;