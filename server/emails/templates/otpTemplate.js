const otpTemplate = (name, otp) => {
    return `
  <div style="margin:0;padding:0;background:#0f172a;font-family:Arial,Helvetica,sans-serif;">
    <div style="max-width:600px;margin:40px auto;background:#ffffff;border-radius:14px;overflow:hidden;box-shadow:0 20px 40px rgba(0,0,0,0.3);">
      
      <div style="background:linear-gradient(135deg,#2563eb,#1e3a8a);padding:30px;text-align:center;">
        <h1 style="color:#ffffff;margin:0;font-size:24px;">🔐 Email Verification</h1>
      </div>

      <div style="padding:40px 30px;text-align:center;">
        <h2 style="color:#111;margin:0 0 15px 0;">Hi ${name},</h2>
        <p style="color:#555;font-size:16px;margin:0 0 25px 0;">
          Use the OTP below to verify your email address.
        </p>

        <div style="margin:30px 0;">
          <span style="display:inline-block;padding:18px 40px;font-size:28px;font-weight:bold;letter-spacing:8px;background:#f1f5f9;border-radius:10px;color:#0f172a;box-shadow:inset 0 3px 6px rgba(0,0,0,0.1);">
            ${otp}
          </span>
        </div>

        <p style="color:#888;font-size:14px;margin:0;">
          This code is valid for <strong>10 minutes</strong>.
        </p>
      </div>

      <div style="background:#f8fafc;padding:20px;text-align:center;font-size:12px;color:#999;">
        If you didn’t request this, please ignore this email.
        <br/><br/>
        © 2026 Chat App
      </div>

    </div>
  </div>
  `;
};

export default otpTemplate;