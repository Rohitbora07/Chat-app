const accVerifiedTemplate = (name) => {
  return `
  <div style="margin:0;padding:0;background:linear-gradient(135deg,#0ea5e9,#6366f1);font-family:Arial,Helvetica,sans-serif;">
    
    <div style="max-width:600px;margin:50px auto;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 25px 50px rgba(0,0,0,0.25);">
      
      <!-- Header -->
      <div style="background:#111827;padding:35px;text-align:center;">
        <h1 style="color:#ffffff;margin:0;font-size:26px;letter-spacing:1px;">🎉 Account Verified</h1>
      </div>

      <!-- Body -->
      <div style="padding:45px 35px;text-align:center;">
        
        <h2 style="color:#111;margin:0 0 15px 0;font-size:22px;">
          Welcome aboard, ${name}! 🚀
        </h2>

        <p style="color:#555;font-size:16px;line-height:1.7;margin:0 0 25px 0;">
          Your email has been successfully verified and your account is now fully activated.
          You're officially part of <strong>Chat App</strong>!
        </p>

        <div style="margin:30px 0;">
          <span style="display:inline-block;padding:15px 35px;background:linear-gradient(135deg,#0ea5e9,#6366f1);color:#ffffff;font-weight:bold;border-radius:30px;font-size:15px;box-shadow:0 8px 20px rgba(99,102,241,0.4);">
            ✅ Verified Successfully
          </span>
        </div>

        <p style="color:#666;font-size:15px;margin:25px 0 0 0;">
          You can now start chatting, exploring, and connecting without limits.
        </p>

      </div>

      <!-- Footer -->
      <div style="background:#f3f4f6;padding:25px;text-align:center;font-size:13px;color:#888;">
        Need help? We're always here for you.
        <br/><br/>
        © 2026 Chat App. All rights reserved.
      </div>

    </div>

  </div>
  `;
};

export default accVerifiedTemplate