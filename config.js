const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "2348057321297" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_09_07_09_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMyxcbiAgICAgICAgMjU1LFxuICAgICAgICA0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDkyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjUxLFxuICAgICAgICAyMixcbiAgICAgICAgMjUwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTM1LFxuICAgICAgICAzMCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMixcbiAgICAgICAgMTQyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTU5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDc2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDU2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE4LFxuICAgICAgICA2OCxcbiAgICAgICAgOTEsXG4gICAgICAgIDk3LFxuICAgICAgICA4OSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDUwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMzYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjA4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgODYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDMyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICA0MyxcbiAgICAgICAgMTIwLFxuICAgICAgICA1NixcbiAgICAgICAgMjMsXG4gICAgICAgIDk0LFxuICAgICAgICAzNyxcbiAgICAgICAgMTAxLFxuICAgICAgICA2MSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTEzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDkyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTc4LFxuICAgICAgICA5MyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDg4LFxuICAgICAgICAyOCxcbiAgICAgICAgMjcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTEwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDU0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDcyLFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY0LFxuICAgICAgICAxMSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNzksXG4gICAgICAgIDY0LFxuICAgICAgICA4NSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjksXG4gICAgICAgIDk1LFxuICAgICAgICAxNyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE5NixcbiAgICAgICAgNDUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTIyLFxuICAgICAgICA3NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE2LFxuICAgICAgICAyMTksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTY5LFxuICAgICAgICA1OSxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICA1NixcbiAgICAgICAgOTIsXG4gICAgICAgIDY1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDIsXG4gICAgICAgIDIwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIxNixcbiAgICAgICAgNTEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTM1LFxuICAgICAgICA2NCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTE2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNzAsXG4gICAgICAgIDQyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTMsXG4gICAgICAgIDU2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDExNixcbiAgICAgICAgMjMwLFxuICAgICAgICAxMDksXG4gICAgICAgIDEyMyxcbiAgICAgICAgNjAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNDIsXG4gICAgICAgIDM1LFxuICAgICAgICA5MixcbiAgICAgICAgOTAsXG4gICAgICAgIDQzLFxuICAgICAgICA1OCxcbiAgICAgICAgMjksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTI3LFxuICAgICAgICA4MixcbiAgICAgICAgMTA3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTgwLFxuICAgICAgICAzNSxcbiAgICAgICAgMjUsXG4gICAgICAgIDI4LFxuICAgICAgICAxNSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDc3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA2NixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDEzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA4MixcbiAgICAgICAgNjksXG4gICAgICAgIDExLFxuICAgICAgICAxMzcsXG4gICAgICAgIDMzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTgsXG4gICAgICAgIDEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxOCxcbiAgICAgICAgNDgsXG4gICAgICAgIDU1LFxuICAgICAgICAyMixcbiAgICAgICAgMjUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE1LFxuICAgICAgICA5OCxcbiAgICAgICAgMjI1LFxuICAgICAgICA4MCxcbiAgICAgICAgMixcbiAgICAgICAgMTAyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxODMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTAzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIwMixcbiAgICAgICAgNSxcbiAgICAgICAgMjA4LFxuICAgICAgICA5NCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDcxLFxuICAgICAgICAxODEsXG4gICAgICAgIDMzLFxuICAgICAgICAzOCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxODgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTE1LFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA5NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJFNHFzNTJ5Y2VUeVZudGg5UGYzeWZWckVyUTNPN3hlVHRJWEtTREdXRnVVPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJsYktRRU5YVlJXYXhmaG9GbjR4VDJRXCIsXG4gIFwicGhvbmVJZFwiOiBcImM3Y2RjOTFjLWI1MjMtNDg1OC1hNjNkLWRlM2RlZTJjM2M4OVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3MCxcbiAgICAgIDMwLFxuICAgICAgMjQwLFxuICAgICAgMjMxLFxuICAgICAgMjksXG4gICAgICAyNDcsXG4gICAgICAxOTksXG4gICAgICAxNTIsXG4gICAgICA1OSxcbiAgICAgIDIxOSxcbiAgICAgIDI1LFxuICAgICAgMTU5LFxuICAgICAgMjUxLFxuICAgICAgMTI1LFxuICAgICAgMTUzLFxuICAgICAgNSxcbiAgICAgIDE5NCxcbiAgICAgIDQyLFxuICAgICAgMTMyLFxuICAgICAgMjUyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwOCxcbiAgICAgIDkyLFxuICAgICAgMTYyLFxuICAgICAgMTI0LFxuICAgICAgMjAxLFxuICAgICAgOTIsXG4gICAgICAxNDUsXG4gICAgICAyMCxcbiAgICAgIDE5NSxcbiAgICAgIDIyMSxcbiAgICAgIDExOCxcbiAgICAgIDgxLFxuICAgICAgNTAsXG4gICAgICA2NCxcbiAgICAgIDgyLFxuICAgICAgMTY5LFxuICAgICAgMjQ4LFxuICAgICAgNTEsXG4gICAgICA0NSxcbiAgICAgIDIxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkpXOExaRkNBXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MDU3MzIxMjk3OjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJDaHJpc3RpYW4gQy4gRXplIDJcIixcbiAgICBcImxpZFwiOiBcIjc2OTk2MjgxNDAxMzcwOjVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUE9vMjlBQkVPRGQwTFlHR0FVZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJLY2JvWU1EZ2lvbVkvM2VPcHNuSVlVakVaM3FaMlZORi8rL2ZDKzdHUURRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImMwNjVZaXFHRWNPUW1wRHNCRkFMRW5ZQ0FhNmFaN1IzTVRsdVRUaEtlK3pYMzFEcUs0elg2aG1WM3ExYzA1QmkvWjl4NHFnMGhQU3ZMT3RFb0l6Y0J3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjlBaTJ3RFVCd2hXYWVsOXhyeWxyNkJmeTkrckNmZU94Y0FNZHFsaHVqRUFHYnlLNEI5NUVzdmcxS3dPMGQ5Z3Z3TWYwL3Z5K2NGb2xRUVQrcm1TRUFRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgwNTczMjEyOTc6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNTE4MTY3MCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUZEcVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRkRxLmpzb24iOiAie1wia2V5RGF0YVwiOlwiVFlUdnF5YVdPL3NjdG84Y1ljMEhFa2ZtcjRtZkREb3J2bURRTUtyK0pzND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo0Mzc3MDM3OTUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxNzI5MjgxOTI5NVwifSIKfQ==",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
