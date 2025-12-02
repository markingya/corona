const MemberForm = () => {
  return (
    <form action="" method="post">
        <input type="text" name="FirstName" placeholder="First Name" required/>
        <input type="text" name="LastName"  placeholder="Last Name" required/>
        <input type="text" name="OtherName" placeholder="Other Name"/>
        <input type="date" name="Birthday" placeholder="Date of Birth" required />
        <input type="date" name="GradYear" placeholder="Year of Graduation" required />

    </form>
  )
}

export default MemberForm