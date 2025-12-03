import MemberForm from "../Components/MemberForm"

const Join = () => {
  return (
    <div className="bg-[url('/Images/page.jpg')] min-h-screen bg-cover bg-center bg-no-repeat">
      <div className="flex flex-col items-center gap-5 font-corona py-10 px-5 text-indigo-800 m-auto max-w-4xl">
        <h2 className="font-medium text-3xl">Create Profile</h2>
        <p className="text-xl leading-10">Kindly fill the form below if you're 18+ and you completed at least a term at Corona Private School Makurdi Nursery & Primary.</p>
        <MemberForm />
      </div>
    </div>
  )
}

export default Join