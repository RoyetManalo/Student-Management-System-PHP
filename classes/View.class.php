<?php

class View extends Model
{

    public function showStudents($teachers_ID)
    {
        return $this->getStudents($teachers_ID);
    }

    public function showStudent($id)
    {
        return $this->getSingleStudents($id);
    }

    public function showStudentNumber($teachers_ID) //it should be showNumberOfStudent
    {
        return $this->countStudent($teachers_ID);
    }

    public function showMaleStudentNumber($teachers_ID)
    {
        return $this->countMaleStudent($teachers_ID);
    }

    public function showFemaleStudentNumber($teachers_ID)
    {
        return $this->countFemaleStudent($teachers_ID);
    }

    public function showRecentlyAddedStudent()
    {
        return $this->getRecentlyAddedStudent();
    }

    public function showSearchedStudent($keyword, $TID)
    {
        return $this->searchStudent($keyword, $TID);
    }

    public function showStudentAttendanceLog($id)
    {
        return $this->getStudentAttendanceLog($id);
    }

    public function showGrades($gradingPeriod)
    {
        return $this->loadGrades($gradingPeriod);
    }

    public function getLastStudentID($teacherID)
    {
        return $this->queryLastStudentID($teacherID);
    }

    public function getAverageGrades($studentID)
    {
        return $this->queryAverageGrade($studentID);
    }

    public function showStudentWithAverage($studentID)
    {
        return $this->getStudentWithAverage($studentID);
    }


    // UPDATEDGRADETABLE
    public function studentWithGrades1($teacher_ID)
    {
        return $this->studentWithGrade1($teacher_ID);
    }

    public function studentWithGrades2($teacher_ID)
    {
        return $this->studentWithGrade2($teacher_ID);
    }

    public function studentWithGrades3($teacher_ID)
    {
        return $this->studentWithGrade3($teacher_ID);
    }

    public function studentWithGrades4($teacher_ID)
    {
        return $this->studentWithGrade4($teacher_ID);
    }

    public function studentWithGrades5($teacher_ID)
    {
        return $this->studentWithGrade5($teacher_ID);
    }
}
