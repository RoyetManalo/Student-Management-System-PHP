<?php

class Model extends Dbh
{

    public function userLogin($username, $acctpassword)
    {
        $sql = 'SELECT * FROM teachers_account WHERE userName = :username AND acctPassword = :acctpassword LIMIT 1';
        $stmt = $this->dbconnect()->prepare($sql);
        $stmt->execute(['username' => $username, 'acctpassword' => $acctpassword]);


        // Fetch all Data
        $results = $stmt->fetch();
        return $results;
    }

    public function getStudents($teachers_ID)
    {
        $sql = 'SELECT * FROM student_info WHERE teachers_ID = :teachers_ID';
        $stmt = $this->dbconnect()->prepare($sql);
        $stmt->execute(['teachers_ID' => $teachers_ID]);


        // Fetch all Data
        $results = $stmt->fetchAll();
        return $results;
    }

    public function getSingleStudents($id)
    {
        $sql = 'SELECT * FROM student_info WHERE id = :id LIMIT 1';
        $stmt = $this->dbconnect()->prepare($sql);
        $stmt->execute(['id' => $id]);


        // Fetch all Data
        $results = $stmt->fetch();
        return $results;
    }


    public function addStudent($student_Image, $firstName, $lastName, $age, $student_Address, $grade, $section, $teachers_ID, $gender)
    {
        $sql = 'INSERT INTO student_info(student_Image, firstName, lastName, age, student_Address, grade, section, teachers_ID, gender) VALUES(:student_Image, :firstName, :lastName, :age, :student_Address, :grade, :section, :teachers_ID, :gender)';
        $stmt = $this->dbconnect()->prepare($sql);
        $stmt->execute(['student_Image' => $student_Image, 'firstName' => $firstName, 'lastName' => $lastName, 'age' => $age, 'student_Address' => $student_Address, 'grade' => $grade, 'section' => $section, 'teachers_ID' => $teachers_ID, 'gender' => $gender]);
    }

    public function modifyStudent($student_Image, $firstName, $lastName, $age, $student_Address, $grade, $section, $gender, $id)
    {
        $sql = "UPDATE student_info SET student_Image = :student_Image, firstName = :firstName, lastName = :lastName, age = :age, student_Address = :student_Address, grade = :grade, section = :section, gender = :gender WHERE id = :id";
        $stmt = $this->dbconnect()->prepare($sql);
        $stmt->execute(['student_Image' => $student_Image, 'firstName' => $firstName, 'lastName' => $lastName, 'age' => $age, 'student_Address' => $student_Address, 'grade' => $grade, 'section' => $section, 'gender' => $gender, 'id' => $id]);
    }

    public function removeStudent($id)
    {
        $sql = 'DELETE FROM student_info WHERE id = :id';
        $stmt = $this->dbconnect()->prepare($sql);
        $stmt->execute(['id' => $id]);
    }


    public function addStudentInfoToGradesTable1($gradeID, $gradingPeriod, $studentID, $grades)
    {
        $sql = 'INSERT INTO grades(gradeID, gradingPeriod, studentID, grades) VALUES(:gradeID, :gradingPeriod, :studentID, :grades)';
        $stmt = $this->dbconnect()->prepare($sql);
        $stmt->execute(['gradeID' => $gradeID, 'gradingPeriod' => $gradingPeriod, 'studentID' => $studentID, 'grades' => $grades]);
    }

    public function addStudentInfoToGradesTable2($gradeID, $gradingPeriod, $studentID, $grades)
    {
        $sql = 'INSERT INTO grades(gradeID, gradingPeriod, studentID, grades) VALUES(:gradeID, :gradingPeriod, :studentID, :grades)';
        $stmt = $this->dbconnect()->prepare($sql);
        $stmt->execute(['gradeID' => $gradeID, 'gradingPeriod' => $gradingPeriod, 'studentID' => $studentID, 'grades' => $grades]);
    }

    public function addStudentInfoToGradesTable3($gradeID, $gradingPeriod, $studentID, $grades)
    {
        $sql = 'INSERT INTO grades(gradeID, gradingPeriod, studentID, grades) VALUES(:gradeID, :gradingPeriod, :studentID, :grades)';
        $stmt = $this->dbconnect()->prepare($sql);
        $stmt->execute(['gradeID' => $gradeID, 'gradingPeriod' => $gradingPeriod, 'studentID' => $studentID, 'grades' => $grades]);
    }

    public function addStudentInfoToGradesTable4($gradeID, $gradingPeriod, $studentID, $grades)
    {
        $sql = 'INSERT INTO grades(gradeID, gradingPeriod, studentID, grades) VALUES(:gradeID, :gradingPeriod, :studentID, :grades)';
        $stmt = $this->dbconnect()->prepare($sql);
        $stmt->execute(['gradeID' => $gradeID, 'gradingPeriod' => $gradingPeriod, 'studentID' => $studentID, 'grades' => $grades]);
    }

    public function countStudent($teachers_ID)
    {
        $sql = 'SELECT COUNT(id) FROM student_info WHERE teachers_ID = :teachers_ID';
        $stmt = $this->dbconnect()->prepare($sql);
        $stmt->execute(['teachers_ID' => $teachers_ID]);

        // Fetch all Data
        $results = $stmt->fetch(PDO::FETCH_COLUMN);
        return $results;
    }
    public function countMaleStudent($teachers_ID)
    {
        $sql = "SELECT COUNT(id) FROM student_info WHERE gender = 'male' AND teachers_ID = :teachers_ID";
        $stmt = $this->dbconnect()->prepare($sql);
        $stmt->execute(['teachers_ID' => $teachers_ID]);

        // Fetch all Data
        $results = $stmt->fetch(PDO::FETCH_COLUMN);
        return $results;
    }

    public function countFemaleStudent($teachers_ID)
    {
        $sql = "SELECT COUNT(id) FROM student_info WHERE gender = 'female' AND teachers_ID = :teachers_ID ";
        $stmt = $this->dbconnect()->prepare($sql);
        $stmt->execute(['teachers_ID' => $teachers_ID]);

        // Fetch all Data
        $results = $stmt->fetch(PDO::FETCH_COLUMN);
        return $results;
    }

    public function getRecentlyAddedStudent()
    {

        $sql = 'SELECT * FROM student_info ORDER BY id DESC LIMIT 1';
        $stmt = $this->dbconnect()->prepare($sql);
        $stmt->execute();

        // Fetch all Data
        $results = $stmt->fetch();
        return $results;
    }


    public function searchStudent($keyword, $TID)
    {
        $sql = "SELECT * FROM student_info WHERE lastName LIKE CONCAT('%', :lastName, '%') AND teachers_ID = :tid";
        $stmt = $this->dbconnect()->prepare($sql);
        $stmt->execute(['lastName' => $keyword, 'tid' => $TID]);

        // Fetch all Data
        $results = $stmt->fetchAll();
        return $results;
    }

    public function saveAttendance($studentID, $Present, $Time, $Date)
    {

        $sql = 'INSERT INTO attendance(studentID, Present, Time ,Date ) VALUES(:studentID, :Present, :Time, :Date)';
        $stmt = $this->dbconnect()->prepare($sql);
        $stmt->execute(['studentID' => $studentID, 'Present' => $Present, 'Time' => $Time, 'Date' => $Date]);
    }

    public function addTeacher($firstName, $lastName, $email, $userName, $password)
    {

        $sql = 'INSERT INTO teachers_account(firstName, lastName, email, userName, acctPassword) VALUES(:firstName, :lastName, :email, :userName, :acctPassword)';
        $stmt = $this->dbconnect()->prepare($sql);
        $stmt->execute(['firstName' => $firstName, 'lastName' => $lastName, 'email' => $email, 'userName' => $userName, 'acctPassword' => $password]);
    }

    public function getStudentAttendanceLog($id)
    {
        $sql = 'SELECT * FROM attendance WHERE studentID = :id';
        $stmt = $this->dbconnect()->prepare($sql);
        $stmt->execute(['id' => $id]);


        // Fetch all Data
        $results = $stmt->fetchAll();
        return $results;
    }

    public function queryLastStudentID($teachersID)
    {
        $sql = 'SELECT MAX(id) FROM student_info WHERE teachers_ID = :teachersID';
        $stmt = $this->dbconnect()->prepare($sql);
        $stmt->execute(['teachersID' => $teachersID]);

        // Fetch all Data
        $results = $stmt->fetch();
        return $results;
    }

    //Change to update

    public function saveGrades($gradeID, $gradingPeriod, $studentID, $grades)
    {
        $sql = 'INSERT INTO grades(gradeID, gradingPeriod, studentID, grades) VALUES(:gradeID, :gradingPeriod, :studentID, :grades)';
        $stmt = $this->dbconnect()->prepare($sql);
        $stmt->execute(['gradeID' => $gradeID, 'gradingPeriod' => $gradingPeriod, 'studentID' => $studentID, 'grades' => $grades]);
    }

    public function updateGrades1($studentID, $grades)
    {
        $sql = 'UPDATE studentgrades SET firstGrading = :grades WHERE studentID = :studentID';
        $stmt = $this->dbconnect()->prepare($sql);
        $stmt->execute(['studentID' => $studentID, 'grades' => $grades]);
    }
    public function updateGrades2($studentID, $grades)
    {
        $sql = 'UPDATE studentgrades SET secondGrading = :grades WHERE studentID = :studentID';
        $stmt = $this->dbconnect()->prepare($sql);
        $stmt->execute(['studentID' => $studentID, 'grades' => $grades]);
    }
    public function updateGrades3($studentID, $grades)
    {
        $sql = 'UPDATE studentgrades SET thirdGrading = :grades WHERE studentID = :studentID';
        $stmt = $this->dbconnect()->prepare($sql);
        $stmt->execute(['studentID' => $studentID, 'grades' => $grades]);
    }
    public function updateGrades4($studentID, $grades)
    {
        $sql = 'UPDATE studentgrades SET fourthGrading = :grades WHERE studentID = :studentID';
        $stmt = $this->dbconnect()->prepare($sql);
        $stmt->execute(['studentID' => $studentID, 'grades' => $grades]);
    }

    public function loadGrades($gradingPeriod)
    {
        $sql = 'SELECT * FROM grades WHERE gradingPeriod = :gradingPeriod';
        $stmt = $this->dbconnect()->prepare($sql);
        $stmt->execute(['gradingPeriod' => $gradingPeriod]);


        // Fetch all Data
        $results = $stmt->fetchAll();
        return $results;
    }


    public function queryAverageGrade($studentID)
    {
        $sql = 'SELECT AVG(grades) FROM grades WHERE studentID = :studentID';
        $stmt = $this->dbconnect()->prepare($sql);
        $stmt->execute(['studentID' => $studentID]);

        // Fetch all Data
        $results = $stmt->fetch();
        return $results;
    }

    public function getStudentWithAverage($teachers_ID)
    {
        $sql = 'SELECT studentID, firstName, lastName, AVG(grades) FROM grades INNER JOIN student_info WHERE teachers_ID = :teachers_ID';
        $stmt = $this->dbconnect()->prepare($sql);
        $stmt->execute(['teachers_ID' => $teachers_ID]);

        // Fetch all Data
        $results = $stmt->fetchAll();
        return $results;
    }



    // UpdatedGradesTable
    public function addGrade($studentID, $firstGrading, $secondGrading, $thirdGrading, $fourthGrading, $average)
    {
        $sql = 'INSERT INTO studentgrades(studentID, firstGrading, secondGrading, thirdGrading, fourthGrading, average) VALUES(:studentID, :firstGrading, :secondGrading, :thirdGrading, :fourthGrading, :average)';
        $stmt = $this->dbconnect()->prepare($sql);
        $stmt->execute(['studentID' => $studentID, 'firstGrading' => $firstGrading, 'secondGrading' => $secondGrading, 'thirdGrading' => $thirdGrading, 'fourthGrading' => $fourthGrading, 'average' => $average]);
    }


    public function studentWithGrade1($teachers_ID)
    {
        $sql = 'SELECT id, firstName, lastName, firstGrading FROM student_info INNER JOIN studentgrades ON student_info.id = studentgrades.studentID  WHERE teachers_ID = :teachers_ID';
        $stmt = $this->dbconnect()->prepare($sql);
        $stmt->execute(['teachers_ID' => $teachers_ID]);

        // Fetch all Data
        $results = $stmt->fetchAll();
        return $results;
    }
    public function studentWithGrade2($teachers_ID)
    {
        $sql = 'SELECT id, firstName, lastName, secondGrading FROM student_info INNER JOIN studentgrades ON student_info.id = studentgrades.studentID  WHERE teachers_ID = :teachers_ID';
        $stmt = $this->dbconnect()->prepare($sql);
        $stmt->execute(['teachers_ID' => $teachers_ID]);

        // Fetch all Data
        $results = $stmt->fetchAll();
        return $results;
    }
    public function studentWithGrade3($teachers_ID)
    {
        $sql = 'SELECT id, firstName, lastName, thirdGrading FROM student_info INNER JOIN studentgrades ON student_info.id = studentgrades.studentID  WHERE teachers_ID = :teachers_ID';
        $stmt = $this->dbconnect()->prepare($sql);
        $stmt->execute(['teachers_ID' => $teachers_ID]);

        // Fetch all Data
        $results = $stmt->fetchAll();
        return $results;
    }
    public function studentWithGrade4($teachers_ID)
    {
        $sql = 'SELECT id, firstName, lastName, fourthGrading FROM student_info INNER JOIN studentgrades ON student_info.id = studentgrades.studentID  WHERE teachers_ID = :teachers_ID';
        $stmt = $this->dbconnect()->prepare($sql);
        $stmt->execute(['teachers_ID' => $teachers_ID]);

        // Fetch all Data
        $results = $stmt->fetchAll();
        return $results;
    }
    public function studentWithGrade5($teachers_ID)
    {
        $sql = 'SELECT firstName, lastName, ((firstGrading * 0.2) + (secondGrading * 0.2) + (thirdGrading * 0.2) + (fourthGrading * 0.4)) as average FROM student_info INNER JOIN studentgrades ON student_info.id = studentgrades.studentID WHERE teachers_ID = :teachers_ID';
        $stmt = $this->dbconnect()->prepare($sql);
        $stmt->execute(['teachers_ID' => $teachers_ID]);

        // Fetch all Data
        $results = $stmt->fetchAll();
        return $results;
    }
}
