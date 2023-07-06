const express = require('express')
const app = express()
const port = 3000
// import { getUser } from './src/Db_controller/getAlluser'
const {CreateUser} = require('./src/Db_controller/createUser')

app.use(express.json())

app.get('/user', (req, res) => {
    // const user = 
  res.send('Hello World!')
})

app.post('/user/register',async (req,res)=>{
  const {username, password, email} = req.body
  console.log(username, password, email)
  const a = await CreateUser(username, password, email)
  return res.send(a[0])

})


app.post('/user/login', async(req, res)=>{
  const {username, password} = req.body
  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})