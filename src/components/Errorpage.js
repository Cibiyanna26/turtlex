import { Link } from "react-router-dom";

const ErrorPage = () => {
    return(
        <>
            <div className="flex  flex-col h-[100vh] items-center justify-center">
                <div className="text-[22px]">404 Page Not Found</div>
                <div>Un Matched Navigation</div>
                <Link to={'/home'} className="text-[#2752E7]">Go to <span className="underline">Home</span></Link>
            </div>
        </>
    )
}

export default ErrorPage;