PROBLEM 1 - EXPRESS JS ASS

const express = require('express')
const app = express()

app.post('/student/add', (req, res) => {
  const studentFirstName = req.body.studentFirstName
  const collegeName = req.body.collegeName
  const location = req.body.location

  // Add student details to database...

  res.json({
    result: 'Success'
  })
})

app.get('/student/:id', (req, res) => {
  const studentId = req.params.id

  // Retrieve student details from database...

  res.json({
    studentFirstName: 'John',
    collegeName: 'IIT',
    location: 'Mumbai'
  })
})

app.listen(3000, () => console.log('Server listening on port 3000!'))



PROBLEM 2 - 


const express = require('express');
const app = express();

// get list of students
app.get('/student/studentsList', (req, res) => {
  res.json({
    results: [
      'Rajesh',
      'Ramesh',
      'Sayali',
      'Sanjana'
    ]
  });
});

app.listen(3000, () => console.log('Listening on port 3000!'));
```


