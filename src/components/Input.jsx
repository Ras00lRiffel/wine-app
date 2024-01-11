export default function Input({ name, type, placeholder }) {
    return (
        <>
            <input
                type={type}
                name={name}
                id={name}
                autoComplete={name}
                className="
                block
                border-1
                rounded-md
                bg-transparent
                border-gray-400
                py-1.5
                pl-1
                text-gray-900
                placeholder:text-gray-400
                focus:ring-0
                sm:text-sm
                sm:leading-6
                "
                placeholder={placeholder}
            />
        </>
    )
}