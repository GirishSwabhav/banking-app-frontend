import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const CustomTextInput = ({ label, type, placeholder, formControl, errors }) => {
    return (
        <div>
            <label className="block mb-2 text-neutral-950">{label}</label>
            <input
                type={type}
                className={`w-full px-3 py-2 border ${errors ? 'border-red-500' : 'border-neutral-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500`}
                placeholder={placeholder}
                {...formControl}
                required
            />
            {errors && (
                <p className="text-red-500 text-sm mt-1 ml-1">{errors.message}</p>
            )}
        </div>
    )
}

const CustomPasswordInput = ({ label, placeholder, formControl, errors, showPassword, toggleShowPassword }) => {
    return (
        <div className="relative">
            <label className="block mb-2 text-neutral-950">{label}</label>
            <input
                type={showPassword ? "text" : "password"}
                className={`w-full px-3 py-2 border ${errors ? 'border-red-500' : 'border-neutral-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500`}
                placeholder={placeholder}
                {...formControl}
                required
            />
            {errors && (
                <p className="text-red-500 text-sm mt-1 ml-1">{errors.message}</p>
            )}
            <button
                type="button"
                onClick={toggleShowPassword}
                className="absolute right-3 top-10"
            >{showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </button>
        </div>
    )
}

export { CustomTextInput, CustomPasswordInput };