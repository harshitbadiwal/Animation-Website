import react, { useState } from 'react'

const Contect =()=>{
  const [data,setdata] = useState({
   Name:"",
    Phone:"",
    Email:"",
    Message:""

  })

  const InputEvent=(event)=>{
    const {name,value}=event.target
    setdata((preval)=>{
      return{
        ...preval,
        [name]:value,
      
      }
    })
  }
  
  const formSubmit =(e)=>{
    e.preventDefault()
    alert (
      `My name is ${data.Name} . My moblie number is ${data.Phone}. My email is ${data.Email}. And your message is ${data.Message} `
    )

  }
  return<>
    <div className='my-5'>
      <h1 className='text-center'>
        Contact us
      </h1>
      <div className='container contact_div'>
        <div className='row'>
          <div className='col-md-6 col-10 mx-auto'>
            <form onSubmit={formSubmit}>
            <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Full Name</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" name='Name'
  value={data.Name}
  onChange={InputEvent} placeholder="Enter Your Full Name"/>

</div>

<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Phone</label>
  <input type="Number" class="form-control" id="exampleFormControlInput1" name='Phone'
  value={data.Phone}
  onChange={InputEvent} placeholder="Moblie Number"/>

</div>

<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" name='Email'
  value={data.Email}
  onChange={InputEvent} placeholder="name@example.com"/>

</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Message</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" name='Message'
  value={data.Message}
  onChange={InputEvent} rows="3"></textarea>

</div>
<div class="col-12">
    <button class="btn btn-outline-primary" type="submit">Submit form</button>
  </div>
            </form>
          </div>
        </div>
      </div>
    </div>

  </>
}

export default Contect