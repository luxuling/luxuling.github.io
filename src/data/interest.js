/* eslint-disable no-template-curly-in-string */
const PORT = '${PORT}';
const codeReact = `import React from 'react';

  const Contacts = () => {
    return (
      <div>Contacts</div>
    );
  };
  
  export default Contacts;`;
const codeNodejs = `app.get("/", (req, res) => {
  res.send("API is running")
})
app.use("/api/user",userRouter)
app.use("/api/chat", chatRouter)
app.use("/api/message",messageRouter)

app.listen(PORT, function () {
  console.log(Server running on PORT ${PORT}...".yellow.bold)
})`;
export { codeReact, codeNodejs };
