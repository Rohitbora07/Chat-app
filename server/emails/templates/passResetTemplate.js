const passResetTemplate = (name) => {
  return `
  <div style="margin:0;padding:0;background:#0b1120;font-family:Arial,Helvetica,sans-serif;">
    
    <div style="max-width:600px;margin:50px auto;background:#111827;border-radius:18px;overflow:hidden;box-shadow:0 30px 60px rgba(0,0,0,0.6);border:1px solid #1f2937;">
      
      <!-- Header -->
      <div style="background:linear-gradient(135deg,#16a34a,#22c55e);padding:35px;text-align:center;">
        <h1 style="color:#ffffff;margin:0;font-size:24px;letter-spacing:1px;"> Password Successfully Reset</h1>
      </div>

      <!-- Body -->
      <div style="padding:45px 35px;text-align:center;">
        
        <h2 style="color:#ffffff;margin:0 0 15px 0;font-size:20px;">
          Hi ${name},
        </h2>

        <p style="color:#cbd5e1;font-size:16px;line-height:1.7;margin:0 0 25px 0;">
          Your password has been successfully updated.
          You can now log in using your new credentials.
        </p>

        <div style="margin:30px 0;">
          <span style="display:inline-block;padding:16px 40px;font-size:16px;font-weight:bold;background:#0f172a;border-radius:30px;color:#22c55e;border:1px solid #1e293b;box-shadow:inset 0 4px 10px rgba(0,0,0,0.5);">
            🔐 Security Update Completed
          </span>
        </div>

        <p style="color:#94a3b8;font-size:14px;margin:0 0 10px 0;">
          If you did not perform this action, please contact our support team immediately.
        </p>

        <p style="color:#64748b;font-size:13px;margin:20px 0 0 0;">
          Your account security is our top priority.
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

export default passResetTemplate;