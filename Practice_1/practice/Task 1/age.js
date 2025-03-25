const students = [
    {
        name: "ram",
        age: 20
    },
    {name: "shiva",
        age: 18
    },
    {name: "hari",
        age: 22
    },
    {name: "crist",
        age: 25
    },
    {name: "OM",
        age: 16
    },
    {name: "krishna",
      age: 17
    }
]
const filterStudents = students.filter(student => {
    const yearofBirth = 2025 - student?.age
    const thresholdYear = 2005;
    if(yearofBirth > thresholdYear){
        return student.year = yearofBirth
    }
})
console.log("filteredStudents", filterStudents)