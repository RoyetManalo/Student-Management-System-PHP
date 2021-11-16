<?php


class Controller extends Model
{
    public function createStudent($student_Image, $firstName, $lastName, $age, $student_Address, $grade, $section, $teachers_ID, $gender)
    {
        $this->addStudent($student_Image, $firstName, $lastName, $age, $student_Address, $grade, $section, $teachers_ID,  $gender);
    }
    public function putStudentInfoToGradesTable1($gradeID, $gradingPeriod, $studentID, $grades)
    {
        $this->addStudentInfoToGradesTable1($gradeID, $gradingPeriod, $studentID, $grades);
    }
    public function putStudentInfoToGradesTable2($gradeID, $gradingPeriod, $studentID, $grades)
    {
        $this->addStudentInfoToGradesTable2($gradeID, $gradingPeriod, $studentID, $grades);
    }
    public function putStudentInfoToGradesTable3($gradeID, $gradingPeriod, $studentID, $grades)
    {
        $this->addStudentInfoToGradesTable3($gradeID, $gradingPeriod, $studentID, $grades);
    }
    public function putStudentInfoToGradesTable4($gradeID, $gradingPeriod, $studentID, $grades)
    {
        $this->addStudentInfoToGradesTable4($gradeID, $gradingPeriod, $studentID, $grades);
    }

    public function editStudent($student_Image, $firstName, $lastName, $age, $student_Address, $grade, $section, $gender, $id)
    {
        $this->modifyStudent($student_Image, $firstName, $lastName, $age, $student_Address, $grade, $section, $gender, $id);
    }

    public function uploadImage($file)
    {
        $fileName = $file['name'];
        $fileTmpName = $file['tmp_name'];
        $fileSize = $file['size'];
        $fileError = $file['error'];

        $fileExt = explode('.', $fileName);
        $fileActualExt = strtolower(end($fileExt));

        $allowed = ['jpg', 'jpeg', 'png', 'JPG'];

        if (in_array($fileActualExt, $allowed)) {
            if ($fileError === 0) {
                if ($fileSize < 500000) {
                    $newFileName = uniqid('img-', true) . ".$fileActualExt";
                    $fileDestination = '../uploads/' . $newFileName;
                    move_uploaded_file($fileTmpName, $fileDestination);
                } else {
                    echo 'File too Big';
                }
            } else {
                echo 'Error in uploading file';
            }
        } else {
            echo 'Files not Supported';
        }
        return $fileDestination;
    }

    public function deleteStudent($id)
    {
        $this->removeStudent($id);
    }

    public function Attendance($studentID, $Present, $Time, $Date)
    {
        $this->saveAttendance($studentID, $Present, $Time, $Date);
    }

    public function createTeacher($firstName, $lastName, $email, $userName, $password)
    {
        $this->addTeacher($firstName, $lastName, $email, $userName, $password);
    }

    public function grades($gradeID, $gradingPeriod, $studentID, $grades)
    {
        $this->saveGrades($gradeID, $gradingPeriod, $studentID, $grades);
    }

    public function editGrades1($studentID, $grades)
    {
        $this->updateGrades1($studentID, $grades);
    }

    public function editGrades2($studentID, $grades)
    {
        $this->updateGrades2($studentID, $grades);
    }

    public function editGrades3($studentID, $grades)
    {
        $this->updateGrades3($studentID, $grades);
    }

    public function editGrades4($studentID, $grades)
    {
        $this->updateGrades4($studentID, $grades);
    }


    // UpdatedGradeTable

    public function addGrades($studentID, $firstGrading, $secondGrading, $thirdGrading, $fourthGrading, $average)
    {
        $this->addGrade($studentID, $firstGrading, $secondGrading, $thirdGrading, $fourthGrading, $average);
    }
}
