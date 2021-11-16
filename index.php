<?php
include('inc/autoloader.php');
include('config/config.php');


if (isset($_POST['logIn'])) {

    $username = $_POST['username'];
    $password = $_POST['password'];
    // Form Validation
    if (!empty($username) && !empty($password)) {
        $model = new Model();
        $account = $model->userLogin($username, $password);

        if ($account->userName == $username && $account->acctPassword == $password) {
            session_start();
            $_SESSION['username'] = $account->userName;
            $_SESSION['teacherID'] = $account->id;
            header('Location:' . ROOT_URL . 'dashboard.php');
        } else {
            echo 'Wrong credentials';
        }
    } else {
        echo 'Please put in Fields';
    }
}
?>


<?php include 'inc/header.php'; ?>

<div class="login-page">
    <div class="left">
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
    <div class="right">
        <div class="loginDiv card">
            <div class="messageDiv"></div>
            <form id="loginForm">
                <input type="text" placeholder="Username or email" class="dataInput" id="username" name="username" value="<?php echo isset($_POST['username']) ? $username : ''; ?>">
                <input type="password" placeholder="Password" class="dataInput" id="password" name="password" value="<?php echo isset($_POST['password']) ? $password : ''; ?>">
                <button type="submit" class="btn loginBtn" name="logIn">Log In</button>
                <div class="remember">
                    <input type="checkbox" name="" id="">
                    <label for="">Remember Me?</label>
                </div>
                <a href="#" class="link">Forgot Password?</a>
                <hr>
                <a href="<?php echo ROOT_URL . 'createTeacherAccountPage.php'; ?>" class="btn createAcctBtn">Create An Account</a>
            </form>
        </div>
    </div>
</div>


<script src="js/login.js"></script>


<?php include 'inc/footer.php'; ?>