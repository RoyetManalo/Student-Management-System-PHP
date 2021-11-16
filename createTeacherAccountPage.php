<?php include 'inc/header.php'; ?>


<div class="createAccountPage">
    <div class="left">
        <h1>Create Account</h1>
        <form id="createTeacherAccountForm">
            <input type="text" placeholder="First Name" class="inputData input" name="firstName" id="firstName">
            <input type="text" placeholder="Last Name" class="inputData input" name="lastName" id="lastName">
            <input type="emai" placeholder="Email" class="inputData input" name="email" id="email">
            <input type="text" placeholder="User Name" class="inputData input" name="userName" id="userName">
            <input type="password" placeholder="Password" class="inputData input" name="password" id="password">
            <input type="password" placeholder="Confirm Password" class="inputData input" name="password" id="confirmPassword">
            <button type="submit" class="btn createBtn" id="createTeacherAccountBtn">Sign In</button>
        </form>
    </div>

    <div id=right>
        <header>
            <span>Student Management System</span>
        </header>
        <div class="logo">
            <img src="img/systemLogo.png" width="500px" height="500px" alt="">
        </div>
        <footer>
            <p>Copyright &copy; 2021</p>
        </footer>
    </div>
</div>
<script src="js/createTeacherAccount.js"></script>
<?php include 'inc/footer.php'; ?>