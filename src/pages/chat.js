import { useState } from "react"

const Chat = () => {
  const [messages, setMessages] = useState(["message", "papa", "malo"])
  const username = "_spiie"
  const pfp = "https://i.imgur.com/HdGodp5.jpg"

  setMessages(["message", "papa", "malo"])

  return (
    <>
      <div className="box">
        <div className="top flex flex-row bg-zinc-50 h-1/6">
          <img src={pfp} alt="" className="targetUserIcon h-auto" />
          <p className="targetUserUsername">{username}</p>
        </div>
        <div className="middle"></div>
        {messages.map(message => {
          return (
            <div className="targetUserMessage">
              <div className="left">
                <img src={pfp} alt="" className="targetUserIcon" />
              </div>
              <div className="right">
                <p className="targetUserUsername">{username}</p>
                <p className="targetUserMessage">{message}</p>
              </div>
            </div>
          )
        })}
        <div className="bottom"></div>
      </div>
    </>
  )
}


export default Chat