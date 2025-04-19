import { Link } from "react-router-dom";

export default function NotFoundPage() {
    return (
        <section className="flex items-center justify-center min-h-screen  font-serif px-4">
            <div className="max-w-4xl bg-white w-full flex flex-col items-center text-center space-y-6">
                <div className="flex justify-center">
                    <img
                        src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
                        alt="404 Animation"
                        className="w-full max-w-lg "
                    />
                </div>

                <h1 className="text-7xl sm:text-8xl font-extrabold text-black drop-shadow-lg">
                    404
                </h1>

                <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800">
                    Oops! Page Not Found
                </h3>

                <p className="text-gray-600 text-base sm:text-lg px-2">
                    The page you are looking for doesn’t exist or has been moved.
                </p>

                <Link
                    to="/homepage"
                    className="inline-block bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-all duration-200 shadow-sm"
                >
                    ⬅ Go Back Home
                </Link>
            </div>
        </section>
    );
}
