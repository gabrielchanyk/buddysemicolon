import{useState, useEffect} from 'react';

const useForm=validate =>{
    const [values, setValues] = useState({
        username: '',
        password:'',
        password2:''
    });

    const [errors, setErrors] = useState({})

    const handleChange = e =>{
        const {name, value} = e.target
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
    };

    return {handleChange, values, handleSubmit};
};

export default useForm;