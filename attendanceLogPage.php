<?php include 'inc/header.php'; ?>


<header id="attendanceLogHeader">
    Attendance Log
</header>
<span id="backToDashboardBtn">
    <span class="las la-arrow-left arrow"></span>
    Back</span>
<div id="attendanceLogContent">
    <div class="searchName">
        <div class="search-wrapper">
            <span class="las la-search"></span>
            <input type="text" placeholder="Search By Date">
        </div>
        <span id="studentName"></span>
    </div>
    <div class="attendanceLogDiv">
        <table class="attendanceLogTable">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Remarks</th>
                </tr>
            </thead>
            <tbody id="attendanceLogTableBody">

            </tbody>
        </table>
    </div>
</div>



<script src="js/attendanceLog.js"></script>

<?php include 'inc/footer.php'; ?>