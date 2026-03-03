const resetPassOtpTemplate = (name, otp) => {
  return `
  <div style="margin:0;padding:0;background:#0b1120;font-family:Arial,Helvetica,sans-serif;">
    
    <div style="max-width:600px;margin:50px auto;background:#111827;border-radius:18px;overflow:hidden;box-shadow:0 30px 60px rgba(0,0,0,0.6);border:1px solid #1f2937;">
      
      <!-- Header -->
      <div style="background:linear-gradient(135deg,#7c3aed,#2563eb);padding:35px;text-align:center;">
        <h1 style="color:#ffffff;margin:0;font-size:24px;letter-spacing:1px;">🔒 Password Reset Request</h1>
      </div>

      <!-- Body -->
      <div style="padding:45px 35px;text-align:center;">
        
        <h2 style="color:#ffffff;margin:0 0 15px 0;font-size:20px;">
          Hi ${name},
        </h2>

        <p style="color:#cbd5e1;font-size:16px;line-height:1.7;margin:0 0 30px 0;">
          We received a request to reset your password.
          Use the secure OTP below to proceed.
        </p>

        <!-- OTP Box -->
        <div style="margin:35px 0;">
          <span style="display:inline-block;padding:20px 45px;font-size:30px;font-weight:bold;letter-spacing:10px;background:#0f172a;border-radius:12px;color:#38bdf8;border:1px solid #1e293b;box-shadow:inset 0 4px 10px rgba(0,0,0,0.5);">
            ${otp}
          </span>
        </div>

        <p style="color:#94a3b8;font-size:14px;margin:0 0 10px 0;">
          This OTP will expire in <strong style="color:#ffffff;">10 minutes</strong>.
        </p>

        <p style="color:#64748b;font-size:13px;margin:20px 0 0 0;">
          If you did not request a password reset, please ignore this email.
          Your account remains secure.
        </p>

      </div>

      <!-- Footer -->
      <div style="background:#0f172a;padding:25px;text-align:center;font-size:12px;color:#64748b;border-top:1px solid #1e293b;">
        Chat App Security Team  
        <br/><br/>
        © 2026 Chat App. All rights reserved.
      </div>

    </div>

  </div>
  `;
};

export default resetPassOtpTemplate;