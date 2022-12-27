const middleware1 = (req, res, next)=>{
    console.log('I am middleware 1')
    next()
}
app.use(middleware1)
app.use(express.json())

app.get("/sum",middleware1, (req, res)=>{
let a = 10
let b = 20
let sum =a+b 
  res.send("Sum of two number is "+sum)
})

app.post("/mul", (req, res)=>{
 let {n1,n2} = req.query
  let mul =n1*n2 
    res.send("mul of two number is:"+mul)
})

app.post("/div",(req, res)=>{
console.log(req.body)
let {n1,n2} = req.body
  let div =n1/n2 
  res.send("Div of two number is:"+div)
})
