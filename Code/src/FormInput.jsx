import { Controller } from "react-hook-form";

const FormInput = ({ name, control, label, rules, type = "text", placeholder }) => {
    return (
        <div style={{ marginBottom: "1rem" }}>
            <label>{label}</label>

            <Controller
                name={name}
                control={control}
                rules={rules}
                render={({ field, fieldState: { error } }) => (
                    <>
                        <input
                            {...field}
                            type={type}
                            placeholder={placeholder}
                            style={{
                                border: error ? "1px solid red" : "1px solid #ccc",
                                padding: "8px",
                                width: "100%",
                                borderRadius: "4px",
                            }}
                        />

                        {error && (
                            <span style={{ color: "red", fontSize: "12px" }}>
                                {error.message}
                            </span>
                        )}
                    </>
                )}
            />
        </div>
    );
};

export default FormInput;
