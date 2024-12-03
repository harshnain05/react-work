import React, { useState } from "react";

const HeroTest = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        option: "",
        agree: false,
    });

    const [errors, setErrors] = useState({});
    const [showPopup, setShowPopup] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const validate = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = "Name is required.";
        if (!formData.email) newErrors.email = "Email is required.";
        else if (!/\S+@\S+\.\S+/.test(formData.email))
            newErrors.email = "Email is invalid.";
        if (!formData.password)
            newErrors.password = "Password is required.";
        else if (formData.password.length < 6)
            newErrors.password = "Password must be at least 6 characters.";
      
        if (!formData.option) newErrors.option = "Please select an option.";
        if (!formData.agree) newErrors.agree = "You must agree to the terms.";

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            setShowPopup(true);
            console.log("Form submitted:", formData);
        } else {
            setErrors(validationErrors);
        }
    };
    
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });

        if (name === "password") {
            console.log("Password:", value);
        }
    };


    const closePopup = () => {
        setShowPopup(false);
        setFormData({
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            option: "",
            agree: false,
        });
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200">
            <div className="bg-white shadow-lg rounded-xl p-8 max-w-md w-full">
          
                <form onSubmit={handleSubmit}>
                    <div className="mb-5">
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 rounded-lg border ${errors.name ? "border-red-500" : "border-gray-300"
                                } focus:ring-2 focus:ring-blue-400 focus:outline-none transition`}
                        />
                        {errors.name && (
                            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                        )}
                    </div>

                    <div className="mb-5">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 rounded-lg border ${errors.email ? "border-red-500" : "border-gray-300"
                                } focus:ring-2 focus:ring-blue-400 focus:outline-none transition`}
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                        )}
                    </div>

                    <div className="mb-5 relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 rounded-lg border ${errors.password ? "border-red-500" : "border-gray-300"
                                } focus:ring-2 focus:ring-blue-400 focus:outline-none transition`}
                        />
                        <span
                            onClick={togglePasswordVisibility}
                            className="absolute inset-y-0 right-4 flex items-center text-gray-500 cursor-pointer"
                        >
                            {showPassword ? "Hide" : "Show"}
                        </span>
                        {errors.password && (
                            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                        )}
                    </div>

                    <div className="mb-5">
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 rounded-lg border ${errors.confirmPassword ? "border-red-500" : "border-gray-300"
                                } focus:ring-2 focus:ring-blue-400 focus:outline-none transition`}
                        />
                        {errors.confirmPassword && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.confirmPassword}
                            </p>
                        )}
                    </div>

                    <div className="mb-5">
                        <select
                            name="option"
                            value={formData.option}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 rounded-lg border ${errors.option ? "border-red-500" : "border-gray-300"
                                } focus:ring-2 focus:ring-blue-400 focus:outline-none transition`}>
                            <option value="featured">Featured</option>
                            <option value="new">New</option>
                            <option value="rating">Rating</option>
                        </select>
                        {errors.option && (
                            <p className="text-red-500 text-sm mt-1">{errors.option}</p>
                        )}
                    </div>

                    <div className="mb-5 flex items-center">
                        <input
                            type="checkbox"
                            name="agree"
                            checked={formData.agree}
                            onChange={handleChange}
                            className={`h-5 w-5 rounded border-gray-300 text-blue-500 focus:ring-blue-400 ${errors.agree ? "border-red-500" : ""
                                }`}
                        />
                        <label
                            htmlFor="agree"
                            className="ml-2 text-sm text-gray-700"
                        >
                           
                        </label>
                    </div>
                    {errors.agree && (
                        <p className="text-red-500 text-sm mb-4">{errors.agree}</p>
                    )}

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium transition"
                    >
                     SUBMIT
                    </button>
                </form>
            </div>

            {showPopup && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white rounded-lg p-6 shadow-lg w-11/12 max-w-sm text-center">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Success!</h3>
                        <p className="text-gray-600 mb-6">
                            Your account has been created successfully.
                        </p>
                        <button
                            onClick={closePopup}
                            className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default HeroTest;
