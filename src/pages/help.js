import NavBar from '../navbar';
function Help() {
    return (
        <div>
            <NavBar />
            <div className = "mt-24 flex flex-col items-center">
            <h1 className = "text-2xl mb-10 underline underline-offset-4">Help Page</h1>
            <p>
                <strong>To create a new account</strong> go to the login tab and click on the sign up option available below.
            </p>
            <p className = "mb-3">
                <strong>If you have an existing account,</strong> in the login tab login to your existing account entering your username and password.
            </p>
            <p className = "mb-3 font-bold">
                You can only have task and notes if you have an account.
            </p>
            <p>
                <strong>To create tasks</strong> go to the task tab enter your task and add it.
            </p>
            <p>
                <strong>To delete a task</strong> click on delete and to mark it complete, mark complete. However, you can also <strong>undo mark complete</strong> to make the task incomplete.
            </p>
            <p className = "mb-3">
                New tasks appear at the bottom.
            </p>
            <p>
                <strong>To create notes</strong> go to the notes tab, add title and your note and click on add notes. However, you can add notes without title also. 
            </p>
            <p>
                You can delete your notes anytime but <strong>cannot get it back once you delete</strong>. 
            </p>
            <p className = "mt-3">
                <strong>To LogOut</strong> click logout and <strong>to delete your account permanently </strong> click delete account.
            </p>
            </div>
        </div>
    );
}
export default Help;