import { Link } from "react-router-dom";


function NotFoundPage() {
    return (
        <div className="justify-center items-center flex h-screen w-screen">
            <div className="border-2 bg-neutral-950 rounded-3xl p-6 text-center m-auto">
            <h1 className='text-5xl pb-10'>404 Page not found</h1>
            <Link to="/" className="text-4xl border-2 bg-blue-800 rounded-3xl pr-2 pl-2 ">Go back</Link>
            </div>
        </div>
     );
}

export default NotFoundPage;